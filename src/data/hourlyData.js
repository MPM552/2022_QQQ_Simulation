/**
 * Intraday bar generator for QQQ 2022 simulator.
 *
 * Strategy:
 * - Each trading day has 6.5 hours = 7 hourly bars (9:30, 10:30, 11:30, 12:30, 13:30, 14:30, 15:30)
 * - We interpolate between real daily close prices using realistic intraday volatility profiles
 * - On macro event days we inject a directional nudge at the appropriate hour
 * - Seeded PRNG so results are deterministic (same "historical" replay every time)
 */

import { QQQ_2022, MACRO_EVENTS_2022 } from "./marketData.js";

// Market hours as display labels
export const MARKET_HOURS = ["9:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30"];

// Intraday volatility weights — open/close slightly noisier, midday calmer
// Kept tight to prevent inter-bar runaway
const VOL_PROFILE = [1.2, 0.85, 0.70, 0.65, 0.70, 0.85, 1.05];

// Seeded pseudo-random number generator (mulberry32)
function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s += 0x6D2B79F5;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Clamped normal variate — Box-Muller, hard-clamped to ±2σ to kill fat tails
function randn(rng) {
  const u = 1 - rng();
  const v = rng();
  const n = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  return Math.max(-2, Math.min(2, n)); // clamp: no more 3σ+ spikes
}

/**
 * Given two consecutive daily closes, generate 7 hourly bars for `day`.
 * prevClose  → open of first bar
 * todayClose → close of last bar
 */
function generateDayBars(date, prevClose, todayClose, dayEvents, rng) {
  const totalMove = todayClose - prevClose;

  // Absolute daily range — used to bound per-bar noise proportionally
  const dayRange = Math.abs(totalMove);

  // Distribute the total daily move across 7 bars using vol-weighted random walk
  const rawSteps = VOL_PROFILE.map((w, i) => {
    let base = randn(rng) * w;
    // On event days inject a small directional nudge at 10:30 bar only
    if (dayEvents.length > 0 && i === 1) {
      const impact = dayEvents[0].impact === "BULLISH" ? 1 : -1;
      base += impact * w * 0.6; // was 1.8 — much gentler nudge
    }
    return base;
  });

  const rawSum = rawSteps.reduce((a, b) => a + b, 0);

  // Safe scale: if rawSum is tiny, distribute move evenly across bars
  const scale = Math.abs(rawSum) > 0.01 ? totalMove / rawSum : totalMove / VOL_PROFILE.length;
  const steps = rawSteps.map(s => s * scale);

  // Cap any single step to 40% of the total daily range to prevent runaway bars
  const maxStep = Math.max(dayRange * 0.40, 0.50);
  const clampedSteps = steps.map(s => Math.max(-maxStep, Math.min(maxStep, s)));

  // Re-normalise so the clamped path still ends at todayClose
  const clampedSum = clampedSteps.reduce((a, b) => a + b, 0);
  const drift = clampedSum !== 0 ? totalMove / clampedSum : 1;
  const finalSteps = clampedSteps.map(s => s * drift);

  // Build price path
  const bars = [];
  MARKET_HOURS.forEach((hour, i) => {
    const open = i === 0 ? prevClose : bars[i - 1].close;
    const close = i === MARKET_HOURS.length - 1
      ? todayClose
      : open + finalSteps[i];

    // Wick noise: small fraction of the daily range — no more than 0.8% of price
    const wickNoise = Math.abs(randn(rng)) * Math.max(dayRange * 0.08, 0.10);
    const high = Math.max(open, close) + wickNoise;
    const low  = Math.min(open, close) - wickNoise;

    bars.push({
      date,
      hour,
      key: `${date} ${hour}`,
      open: +open.toFixed(2),
      close: +close.toFixed(2),
      high: +high.toFixed(2),
      low: +low.toFixed(2),
      price: +close.toFixed(2),
      volume: Math.floor(3_000_000 + rng() * 8_000_000),
      hasEvent: dayEvents.length > 0 && i === 1,
      events: i === 1 ? dayEvents : [],
      isOpen: i === 0,
      isClose: i === MARKET_HOURS.length - 1,
    });
  });

  return bars;
}

/**
 * Build the full 2022 hourly dataset.
 * Returns array of ~1,540 bar objects (220 days × 7 bars).
 */
export function buildHourlyData() {
  const bars = [];
  const eventsByDate = {};
  MACRO_EVENTS_2022.forEach(e => {
    if (!eventsByDate[e.date]) eventsByDate[e.date] = [];
    eventsByDate[e.date].push(e);
  });

  for (let i = 0; i < QQQ_2022.length; i++) {
    const today = QQQ_2022[i];
    const prev  = QQQ_2022[i - 1];
    const dayEvents = eventsByDate[today.date] || [];

    // FIX: Day 0 (Jan 3) had prevClose === todayClose → all bars flat/blank.
    // Synthesise a realistic prior close slightly above today's close
    // to give the first day a natural intraday opening gap and movement.
    let prevClose;
    if (!prev) {
      // Jan 3 2022: market opened near its ATH, ~$1 above the close
      prevClose = today.price + 1.20;
    } else {
      prevClose = prev.price;
    }

    const seed = today.date.replace(/-/g, "") | 0;
    const rng  = makeRng(seed + i * 997);

    const dayBars = generateDayBars(today.date, prevClose, today.price, dayEvents, rng);
    bars.push(...dayBars);
  }

  return bars;
}

// Pre-build once and export
export const HOURLY_DATA = buildHourlyData();

// Helper: get index of first bar for a given date
export function getFirstBarIndexForDate(date) {
  return HOURLY_DATA.findIndex(b => b.date === date);
}
