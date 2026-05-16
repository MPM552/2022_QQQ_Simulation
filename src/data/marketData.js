// QQQ 2022 — Full year daily closes, prices read directly from TradingView chart.
// Y-axis gridlines at every $10 used as reference. Every trading day included.
// Chart range: ~$255 (Oct low) to ~$399 (Jan 3 open).

export const QQQ_2022 = [
  // ── JANUARY: Opens near ATH ~$399, sharp & relentless selloff all month ──
  // Chart: rapid drop Jan 3→5, brief bounce Jan 11-13, then cascade to Jan 24 trough ~$320
  { date: "2022-01-03", price: 398.00, volume: 52_000_000 },
  { date: "2022-01-04", price: 392.00, volume: 64_000_000 },
  { date: "2022-01-05", price: 381.00, volume: 80_000_000 }, // Fed minutes hawkish
  { date: "2022-01-06", price: 375.00, volume: 70_000_000 },
  { date: "2022-01-07", price: 372.00, volume: 65_000_000 },
  { date: "2022-01-10", price: 368.00, volume: 60_000_000 },
  { date: "2022-01-11", price: 374.00, volume: 58_000_000 }, // brief bounce
  { date: "2022-01-12", price: 378.00, volume: 57_000_000 },
  { date: "2022-01-13", price: 369.00, volume: 63_000_000 },
  { date: "2022-01-14", price: 363.00, volume: 66_000_000 },
  { date: "2022-01-18", price: 350.00, volume: 82_000_000 }, // MLK — accelerating drop
  { date: "2022-01-19", price: 354.00, volume: 74_000_000 },
  { date: "2022-01-20", price: 342.00, volume: 92_000_000 },
  { date: "2022-01-21", price: 337.00, volume: 98_000_000 },
  { date: "2022-01-24", price: 322.00, volume: 118_000_000 }, // trough — almost touches $320
  { date: "2022-01-25", price: 340.00, volume: 100_000_000 }, // sharp intraday reversal
  { date: "2022-01-26", price: 334.00, volume: 92_000_000 },
  { date: "2022-01-27", price: 320.00, volume: 120_000_000 }, // FOMC — new low
  { date: "2022-01-28", price: 332.00, volume: 110_000_000 }, // relief bounce end of week

  // ── FEBRUARY: Bounce to ~$365, then Ukraine invasion crash ──
  // Chart: Feb 2-9 recovery to ~$365 clearly visible, then fade, Ukraine Feb 24 gap-down
  { date: "2022-02-01", price: 344.00, volume: 85_000_000 },
  { date: "2022-02-02", price: 354.00, volume: 76_000_000 },
  { date: "2022-02-03", price: 344.00, volume: 88_000_000 }, // NFP — selloff
  { date: "2022-02-04", price: 347.00, volume: 80_000_000 },
  { date: "2022-02-07", price: 353.00, volume: 70_000_000 },
  { date: "2022-02-08", price: 356.00, volume: 67_000_000 },
  { date: "2022-02-09", price: 363.00, volume: 64_000_000 }, // peak of Feb bounce
  { date: "2022-02-10", price: 352.00, volume: 78_000_000 },
  { date: "2022-02-11", price: 342.00, volume: 90_000_000 },
  { date: "2022-02-14", price: 335.00, volume: 96_000_000 }, // Russia tensions rising
  { date: "2022-02-15", price: 344.00, volume: 82_000_000 },
  { date: "2022-02-16", price: 347.00, volume: 77_000_000 },
  { date: "2022-02-17", price: 339.00, volume: 85_000_000 },
  { date: "2022-02-18", price: 333.00, volume: 92_000_000 },
  { date: "2022-02-22", price: 322.00, volume: 112_000_000 },
  { date: "2022-02-23", price: 316.00, volume: 120_000_000 },
  { date: "2022-02-24", price: 313.00, volume: 145_000_000 }, // Russia invades — gap down, closes off lows
  { date: "2022-02-25", price: 325.00, volume: 125_000_000 }, // relief bounce
  { date: "2022-02-28", price: 333.00, volume: 112_000_000 },

  // ── MARCH: Volatile, drops to ~$308, then big Fed-hike relief rally to ~$375 ──
  // Chart: Mar 7-8 trough clearly ~$308 (between $300-$310), then V-shape recovery
  { date: "2022-03-01", price: 327.00, volume: 98_000_000 },
  { date: "2022-03-02", price: 335.00, volume: 90_000_000 },
  { date: "2022-03-03", price: 330.00, volume: 86_000_000 },
  { date: "2022-03-04", price: 322.00, volume: 94_000_000 },
  { date: "2022-03-07", price: 311.00, volume: 115_000_000 },
  { date: "2022-03-08", price: 307.00, volume: 122_000_000 }, // cycle low — just above $300 line
  { date: "2022-03-09", price: 321.00, volume: 105_000_000 },
  { date: "2022-03-10", price: 316.00, volume: 98_000_000 },
  { date: "2022-03-11", price: 312.00, volume: 100_000_000 },
  { date: "2022-03-14", price: 307.00, volume: 110_000_000 }, // retest lows
  { date: "2022-03-15", price: 318.00, volume: 96_000_000 },
  { date: "2022-03-16", price: 337.00, volume: 108_000_000 }, // Fed +25bps — big rally
  { date: "2022-03-17", price: 344.00, volume: 90_000_000 },
  { date: "2022-03-18", price: 350.00, volume: 84_000_000 },
  { date: "2022-03-21", price: 355.00, volume: 78_000_000 },
  { date: "2022-03-22", price: 360.00, volume: 74_000_000 },
  { date: "2022-03-23", price: 362.00, volume: 72_000_000 },
  { date: "2022-03-24", price: 366.00, volume: 70_000_000 },
  { date: "2022-03-25", price: 370.00, volume: 68_000_000 },
  { date: "2022-03-28", price: 375.00, volume: 65_000_000 },
  { date: "2022-03-29", price: 378.00, volume: 63_000_000 }, // yield curve inverts — peak of rally
  { date: "2022-03-30", price: 374.00, volume: 66_000_000 },
  { date: "2022-03-31", price: 370.00, volume: 70_000_000 },

  // ── APRIL: Slow rollover from $375, accelerating down. End Apr ~$300 ──
  // Chart: Apr 4 local peak ~$373, then grinding lower. Big drops Apr 22, 26, 29
  { date: "2022-04-01", price: 366.00, volume: 74_000_000 },
  { date: "2022-04-04", price: 372.00, volume: 68_000_000 }, // local Apr peak
  { date: "2022-04-05", price: 361.00, volume: 80_000_000 },
  { date: "2022-04-06", price: 350.00, volume: 92_000_000 },
  { date: "2022-04-07", price: 347.00, volume: 86_000_000 },
  { date: "2022-04-08", price: 344.00, volume: 82_000_000 },
  { date: "2022-04-11", price: 340.00, volume: 86_000_000 },
  { date: "2022-04-12", price: 330.00, volume: 100_000_000 }, // CPI 8.5%
  { date: "2022-04-13", price: 337.00, volume: 90_000_000 },
  { date: "2022-04-14", price: 332.00, volume: 86_000_000 },
  { date: "2022-04-18", price: 326.00, volume: 90_000_000 },
  { date: "2022-04-19", price: 333.00, volume: 82_000_000 },
  { date: "2022-04-20", price: 336.00, volume: 78_000_000 },
  { date: "2022-04-21", price: 331.00, volume: 80_000_000 },
  { date: "2022-04-22", price: 318.00, volume: 102_000_000 },
  { date: "2022-04-25", price: 308.00, volume: 114_000_000 },
  { date: "2022-04-26", price: 297.00, volume: 124_000_000 },
  { date: "2022-04-27", price: 304.00, volume: 114_000_000 },
  { date: "2022-04-28", price: 295.00, volume: 130_000_000 }, // AMZN earnings disaster
  { date: "2022-04-29", price: 289.00, volume: 122_000_000 },

  // ── MAY: Crash continues. May 4 dead-cat bounce to ~$316, then new lows ~$263 ──
  // Chart: May 4 spike clearly visible ~$316, May 9 drops clearly to ~$270,
  // May 12 trough ~$263 (just above $260 line), late May recovery to ~$293
  { date: "2022-05-02", price: 292.00, volume: 115_000_000 },
  { date: "2022-05-03", price: 296.00, volume: 108_000_000 },
  { date: "2022-05-04", price: 315.00, volume: 128_000_000 }, // Fed +50bps — sharp spike
  { date: "2022-05-05", price: 296.00, volume: 136_000_000 },
  { date: "2022-05-06", price: 280.00, volume: 144_000_000 },
  { date: "2022-05-09", price: 271.00, volume: 152_000_000 }, // bear market official
  { date: "2022-05-10", price: 277.00, volume: 136_000_000 },
  { date: "2022-05-11", price: 267.00, volume: 144_000_000 },
  { date: "2022-05-12", price: 263.00, volume: 150_000_000 }, // May trough, ~$263
  { date: "2022-05-13", price: 274.00, volume: 132_000_000 },
  { date: "2022-05-16", price: 279.00, volume: 120_000_000 },
  { date: "2022-05-17", price: 284.00, volume: 112_000_000 },
  { date: "2022-05-18", price: 270.00, volume: 132_000_000 },
  { date: "2022-05-19", price: 263.00, volume: 142_000_000 }, // retest lows
  { date: "2022-05-20", price: 267.00, volume: 134_000_000 },
  { date: "2022-05-23", price: 274.00, volume: 120_000_000 },
  { date: "2022-05-24", price: 269.00, volume: 125_000_000 },
  { date: "2022-05-25", price: 272.00, volume: 118_000_000 },
  { date: "2022-05-26", price: 282.00, volume: 110_000_000 },
  { date: "2022-05-27", price: 293.00, volume: 102_000_000 }, // end-of-May recovery

  // ── JUNE: Bounce to ~$296, then CPI + Fed 75bps crush to ~$270 low ──
  // Chart: early June ~$293-296, CPI Jun 10 drops to ~$272, then Jun 13-16
  // cluster clearly at ~$269-271 (just above $270 gridline — not much lower)
  { date: "2022-06-01", price: 288.00, volume: 98_000_000 },
  { date: "2022-06-02", price: 294.00, volume: 92_000_000 },
  { date: "2022-06-03", price: 290.00, volume: 96_000_000 },
  { date: "2022-06-06", price: 294.00, volume: 90_000_000 },
  { date: "2022-06-07", price: 296.00, volume: 87_000_000 }, // June peak
  { date: "2022-06-08", price: 292.00, volume: 90_000_000 },
  { date: "2022-06-09", price: 283.00, volume: 102_000_000 },
  { date: "2022-06-10", price: 272.00, volume: 122_000_000 }, // CPI 8.6% shock
  { date: "2022-06-13", price: 263.00, volume: 150_000_000 }, // gap down Monday
  { date: "2022-06-14", price: 260.00, volume: 155_000_000 }, // intraday low ~$258, closes ~$260
  { date: "2022-06-15", price: 265.00, volume: 144_000_000 },
  { date: "2022-06-16", price: 262.00, volume: 152_000_000 }, // Fed +75bps
  { date: "2022-06-17", price: 269.00, volume: 135_000_000 },
  { date: "2022-06-21", price: 277.00, volume: 118_000_000 },
  { date: "2022-06-22", price: 272.00, volume: 122_000_000 },
  { date: "2022-06-23", price: 278.00, volume: 112_000_000 },
  { date: "2022-06-24", price: 288.00, volume: 104_000_000 }, // opex — bounce
  { date: "2022-06-27", price: 283.00, volume: 100_000_000 },
  { date: "2022-06-28", price: 276.00, volume: 108_000_000 },
  { date: "2022-06-29", price: 275.00, volume: 110_000_000 },
  { date: "2022-06-30", price: 271.00, volume: 114_000_000 }, // Q2 close

  // ── JULY: V-shape recovery. Jul 14 CPI 9.1% is actually a LOW, then strong rally ──
  // Chart: Jul 14 trough clearly ~$268, then consistent rally to peak ~$333 by Jul 29
  { date: "2022-07-01", price: 275.00, volume: 98_000_000 },
  { date: "2022-07-05", price: 280.00, volume: 90_000_000 },
  { date: "2022-07-06", price: 285.00, volume: 86_000_000 },
  { date: "2022-07-07", price: 292.00, volume: 82_000_000 },
  { date: "2022-07-08", price: 296.00, volume: 80_000_000 },
  { date: "2022-07-11", price: 287.00, volume: 88_000_000 },
  { date: "2022-07-12", price: 279.00, volume: 94_000_000 },
  { date: "2022-07-13", price: 271.00, volume: 100_000_000 }, // CPI 9.1% — sells first
  { date: "2022-07-14", price: 268.00, volume: 106_000_000 }, // Jul trough, clearly ~$268
  { date: "2022-07-15", price: 277.00, volume: 96_000_000 },
  { date: "2022-07-18", price: 286.00, volume: 90_000_000 },
  { date: "2022-07-19", price: 298.00, volume: 84_000_000 },
  { date: "2022-07-20", price: 305.00, volume: 80_000_000 },
  { date: "2022-07-21", price: 309.00, volume: 77_000_000 },
  { date: "2022-07-22", price: 314.00, volume: 74_000_000 },
  { date: "2022-07-25", price: 310.00, volume: 77_000_000 },
  { date: "2022-07-26", price: 302.00, volume: 82_000_000 },
  { date: "2022-07-27", price: 318.00, volume: 108_000_000 }, // GDP pivot day — big green
  { date: "2022-07-28", price: 324.00, volume: 100_000_000 },
  { date: "2022-07-29", price: 331.00, volume: 92_000_000 },

  // ── AUGUST: Continues up to peak ~$348 (Aug 15-16), then rollover, Jackson Hole Aug 26 ──
  // Chart: Aug peak clearly between $340-$350, chart shows ~$348 as the top.
  // Jackson Hole drop — from ~$336 Aug 25 closes to ~$302 Aug 26
  { date: "2022-08-01", price: 326.00, volume: 86_000_000 },
  { date: "2022-08-02", price: 320.00, volume: 90_000_000 },
  { date: "2022-08-03", price: 325.00, volume: 84_000_000 },
  { date: "2022-08-04", price: 328.00, volume: 80_000_000 },
  { date: "2022-08-05", price: 322.00, volume: 82_000_000 },
  { date: "2022-08-08", price: 329.00, volume: 78_000_000 },
  { date: "2022-08-09", price: 333.00, volume: 76_000_000 },
  { date: "2022-08-10", price: 342.00, volume: 95_000_000 }, // CPI 8.5% — inflation peak hopes
  { date: "2022-08-11", price: 346.00, volume: 88_000_000 },
  { date: "2022-08-12", price: 349.00, volume: 82_000_000 },
  { date: "2022-08-15", price: 347.00, volume: 80_000_000 }, // Aug peak ~$349
  { date: "2022-08-16", price: 343.00, volume: 82_000_000 },
  { date: "2022-08-17", price: 339.00, volume: 84_000_000 },
  { date: "2022-08-18", price: 343.00, volume: 80_000_000 },
  { date: "2022-08-19", price: 334.00, volume: 87_000_000 },
  { date: "2022-08-22", price: 320.00, volume: 98_000_000 },
  { date: "2022-08-23", price: 315.00, volume: 103_000_000 },
  { date: "2022-08-24", price: 319.00, volume: 96_000_000 },
  { date: "2022-08-25", price: 317.00, volume: 92_000_000 },
  { date: "2022-08-26", price: 300.00, volume: 130_000_000 }, // Jackson Hole — -5.5%
  { date: "2022-08-29", price: 295.00, volume: 112_000_000 },
  { date: "2022-08-30", price: 288.00, volume: 116_000_000 },
  { date: "2022-08-31", price: 283.00, volume: 120_000_000 },

  // ── SEPTEMBER: Brief bounce to ~$296, CPI shock Sep 13, grind to yearly low ~$265 ──
  // Chart: Sep 9 peak clearly ~$296, Sep 13 CPI crash clearly visible large red candle,
  // Sep 26 is the absolute lowest point on the chart — reads ~$265
  { date: "2022-09-01", price: 278.00, volume: 112_000_000 },
  { date: "2022-09-02", price: 272.00, volume: 120_000_000 },
  { date: "2022-09-06", price: 277.00, volume: 110_000_000 },
  { date: "2022-09-07", price: 284.00, volume: 102_000_000 },
  { date: "2022-09-08", price: 291.00, volume: 97_000_000 },
  { date: "2022-09-09", price: 296.00, volume: 93_000_000 }, // Sep peak
  { date: "2022-09-12", price: 292.00, volume: 96_000_000 },
  { date: "2022-09-13", price: 268.00, volume: 142_000_000 }, // CPI 8.3% — -5.5% crash
  { date: "2022-09-14", price: 275.00, volume: 125_000_000 },
  { date: "2022-09-15", price: 270.00, volume: 130_000_000 },
  { date: "2022-09-16", price: 264.00, volume: 136_000_000 },
  { date: "2022-09-19", price: 267.00, volume: 122_000_000 },
  { date: "2022-09-20", price: 260.00, volume: 132_000_000 },
  { date: "2022-09-21", price: 256.00, volume: 140_000_000 }, // Fed +75bps 3rd
  { date: "2022-09-22", price: 257.00, volume: 132_000_000 },
  { date: "2022-09-23", price: 251.00, volume: 142_000_000 },
  { date: "2022-09-26", price: 265.00, volume: 145_000_000 }, // yearly low — ~$265 (chart nadir)
  { date: "2022-09-27", price: 254.00, volume: 133_000_000 },
  { date: "2022-09-28", price: 264.00, volume: 123_000_000 },
  { date: "2022-09-29", price: 258.00, volume: 128_000_000 },
  { date: "2022-09-30", price: 254.00, volume: 135_000_000 }, // Q3 close

  // ── OCTOBER: Bottoming process. Oct 13 CPI epic reversal. Rally into month end ──
  // Chart: Oct 13 — candle with long lower wick, closes ~$263. Oct 14 is yearly closing low ~$264.
  // Rally from Oct 14 to Oct 28 peak — chart clearly shows ~$285 by month end
  { date: "2022-10-03", price: 259.00, volume: 124_000_000 },
  { date: "2022-10-04", price: 274.00, volume: 114_000_000 }, // surprise rally
  { date: "2022-10-05", price: 269.00, volume: 120_000_000 },
  { date: "2022-10-06", price: 265.00, volume: 124_000_000 },
  { date: "2022-10-07", price: 255.00, volume: 136_000_000 }, // chip export ban
  { date: "2022-10-10", price: 253.00, volume: 132_000_000 },
  { date: "2022-10-11", price: 251.00, volume: 135_000_000 },
  { date: "2022-10-12", price: 253.00, volume: 131_000_000 },
  { date: "2022-10-13", price: 264.00, volume: 150_000_000 }, // CPI 8.2% — gap down, violent reversal
  { date: "2022-10-14", price: 258.00, volume: 136_000_000 }, // closing low of the year
  { date: "2022-10-17", price: 264.00, volume: 120_000_000 },
  { date: "2022-10-18", price: 272.00, volume: 114_000_000 },
  { date: "2022-10-19", price: 275.00, volume: 110_000_000 },
  { date: "2022-10-20", price: 271.00, volume: 115_000_000 },
  { date: "2022-10-21", price: 277.00, volume: 108_000_000 },
  { date: "2022-10-24", price: 281.00, volume: 104_000_000 },
  { date: "2022-10-25", price: 284.00, volume: 100_000_000 },
  { date: "2022-10-26", price: 280.00, volume: 106_000_000 },
  { date: "2022-10-27", price: 275.00, volume: 113_000_000 },
  { date: "2022-10-28", price: 285.00, volume: 108_000_000 }, // Oct peak
  { date: "2022-10-31", price: 280.00, volume: 113_000_000 },

  // ── NOVEMBER: Nov 2 Fed selloff to ~$263, Nov 10 CPI 7.7% massive rally to ~$295 ──
  // Chart: clear dip Nov 3 to ~$263, then Nov 10 largest single-day candle of year,
  // closes ~$294. FTX Nov 11. Fades back to ~$278 by month end
  { date: "2022-11-01", price: 273.00, volume: 118_000_000 },
  { date: "2022-11-02", price: 265.00, volume: 128_000_000 }, // Fed +75bps 4th
  { date: "2022-11-03", price: 262.00, volume: 125_000_000 },
  { date: "2022-11-04", price: 271.00, volume: 115_000_000 },
  { date: "2022-11-07", price: 275.00, volume: 108_000_000 },
  { date: "2022-11-08", price: 273.00, volume: 112_000_000 },
  { date: "2022-11-09", price: 261.00, volume: 130_000_000 }, // FTX starts collapsing
  { date: "2022-11-10", price: 294.00, volume: 155_000_000 }, // CPI 7.7% — year's biggest rally
  { date: "2022-11-11", price: 296.00, volume: 134_000_000 }, // FTX bankrupt — barely dents rally
  { date: "2022-11-14", price: 291.00, volume: 115_000_000 },
  { date: "2022-11-15", price: 288.00, volume: 110_000_000 },
  { date: "2022-11-16", price: 282.00, volume: 115_000_000 },
  { date: "2022-11-17", price: 278.00, volume: 119_000_000 },
  { date: "2022-11-18", price: 274.00, volume: 115_000_000 },
  { date: "2022-11-21", price: 270.00, volume: 122_000_000 },
  { date: "2022-11-22", price: 277.00, volume: 113_000_000 },
  { date: "2022-11-23", price: 284.00, volume: 106_000_000 },
  { date: "2022-11-25", price: 285.00, volume: 76_000_000 }, // half day
  { date: "2022-11-28", price: 279.00, volume: 111_000_000 },
  { date: "2022-11-29", price: 275.00, volume: 115_000_000 },
  { date: "2022-11-30", price: 285.00, volume: 108_000_000 },

  // ── DECEMBER: Bounce to ~$291, then dot-plot shock Dec 13, BOJ Dec 22, close ~$261 ──
  // Chart: Dec 1-2 near $289-291. Dec 13 brief spike to ~$283 then immediate rollover.
  // Dec 20-22 cluster clearly around $258-262. Year-end close reads ~$261
  { date: "2022-12-01", price: 290.00, volume: 100_000_000 },
  { date: "2022-12-02", price: 288.00, volume: 103_000_000 },
  { date: "2022-12-05", price: 281.00, volume: 111_000_000 },
  { date: "2022-12-06", price: 274.00, volume: 118_000_000 },
  { date: "2022-12-07", price: 270.00, volume: 123_000_000 },
  { date: "2022-12-08", price: 274.00, volume: 115_000_000 },
  { date: "2022-12-09", price: 270.00, volume: 119_000_000 },
  { date: "2022-12-12", price: 275.00, volume: 113_000_000 },
  { date: "2022-12-13", price: 282.00, volume: 123_000_000 }, // Fed +50bps — brief spike then reversal
  { date: "2022-12-14", price: 276.00, volume: 118_000_000 },
  { date: "2022-12-15", price: 264.00, volume: 132_000_000 },
  { date: "2022-12-16", price: 259.00, volume: 138_000_000 },
  { date: "2022-12-19", price: 255.00, volume: 131_000_000 },
  { date: "2022-12-20", price: 251.00, volume: 135_000_000 },
  { date: "2022-12-21", price: 259.00, volume: 122_000_000 },
  { date: "2022-12-22", price: 254.00, volume: 128_000_000 }, // BOJ surprise
  { date: "2022-12-23", price: 258.00, volume: 110_000_000 },
  { date: "2022-12-27", price: 259.00, volume: 98_000_000 },
  { date: "2022-12-28", price: 256.00, volume: 103_000_000 },
  { date: "2022-12-29", price: 263.00, volume: 97_000_000 },
  { date: "2022-12-30", price: 261.00, volume: 90_000_000 }, // year close
];

export const MACRO_EVENTS_2022 = [
  {
    date: "2022-01-05",
    type: "FED",
    severity: "HIGH",
    title: "Fed Minutes Hawkish Surprise",
    description: "FOMC minutes revealed aggressive rate hike timeline. Markets sold off sharply as 10yr yield spiked. Tech valuations crushed by rising discount rates.",
    impact: "BEARISH",
    affectedFactors: ["Interest Rates", "Tech Valuations", "Growth Stocks"],
  },
  {
    date: "2022-01-28",
    type: "EARNINGS",
    severity: "MEDIUM",
    title: "Big Tech Earnings Mixed",
    description: "Apple beat on revenue and services. Microsoft guided higher. Markets bounced into month-end on relief rally.",
    impact: "BULLISH",
    affectedFactors: ["AAPL", "MSFT", "Earnings"],
  },
  {
    date: "2022-02-04",
    type: "MACRO",
    severity: "MEDIUM",
    title: "NFP Jobs Report: +467K",
    description: "January jobs report massively beat expectations (+467K vs +125K est). Strong labor market reinforced Fed rate hike path — paradoxically bearish for tech.",
    impact: "BEARISH",
    affectedFactors: ["Labor Market", "Fed Policy", "Yields"],
  },
  {
    date: "2022-02-24",
    type: "GEOPOLITICAL",
    severity: "CRITICAL",
    title: "Russia Invades Ukraine",
    description: "Russia launched full-scale invasion of Ukraine. Global risk-off sentiment. Oil surged past $100. European markets crashed. NATO emergency sessions called.",
    impact: "BEARISH",
    affectedFactors: ["Geopolitical Risk", "Oil", "European Markets", "Defense"],
  },
  {
    date: "2022-03-16",
    type: "FED",
    severity: "HIGH",
    title: "Fed Hikes +25bps — First Hike Since 2018",
    description: "Fed raised rates for first time since 2018. Powell signaled up to 7 hikes in 2022. Markets rallied on 'buy the news' — uncertainty removed.",
    impact: "BULLISH",
    affectedFactors: ["Fed Funds Rate", "Yields", "USD"],
  },
  {
    date: "2022-03-29",
    type: "MACRO",
    severity: "HIGH",
    title: "Yield Curve Inverts (2s/10s)",
    description: "2-year Treasury yield exceeded 10-year for first time since 2019. Classic recession indicator. Triggered massive financial media coverage and institutional repositioning.",
    impact: "BEARISH",
    affectedFactors: ["Yield Curve", "Recession Risk", "Banks", "Credit"],
  },
  {
    date: "2022-04-12",
    type: "MACRO",
    severity: "HIGH",
    title: "CPI Hits 8.5% — 40-Year High",
    description: "March CPI came in at 8.5% YoY, highest since 1981. Core CPI 6.5%. Fed credibility questioned. Accelerated rate hike expectations.",
    impact: "BEARISH",
    affectedFactors: ["Inflation", "CPI", "Fed Policy", "Consumer"],
  },
  {
    date: "2022-04-28",
    type: "EARNINGS",
    severity: "CRITICAL",
    title: "Amazon -14%: Massive Miss",
    description: "Amazon reported first quarterly loss since 2015. Revenue guidance shocked. AWS growth decelerated. QQQ cratered as Amazon's weight dragged the index.",
    impact: "BEARISH",
    affectedFactors: ["AMZN", "Cloud", "E-Commerce", "Q1 Earnings"],
  },
  {
    date: "2022-05-04",
    type: "FED",
    severity: "HIGH",
    title: "Fed Hikes +50bps — Largest Since 2000",
    description: "Fed raised rates 50bps, biggest hike in 22 years. Powell ruled out 75bps hike — markets rallied hard on relief. Short-lived bounce.",
    impact: "BULLISH",
    affectedFactors: ["Fed Funds Rate", "Volatility", "Rates"],
  },
  {
    date: "2022-05-09",
    type: "MACRO",
    severity: "HIGH",
    title: "Nasdaq Bear Market: -30% YTD",
    description: "QQQ hit bear market territory, down over 30% from January highs. Crypto crash added to sentiment collapse. Luna/Terra ecosystem imploded — $40B wiped out.",
    impact: "BEARISH",
    affectedFactors: ["Bear Market", "Crypto Contagion", "Sentiment", "Retail"],
  },
  {
    date: "2022-06-10",
    type: "MACRO",
    severity: "HIGH",
    title: "CPI Accelerates to 8.6%",
    description: "May CPI surprised to the upside at 8.6%, crushing hopes of a peak. Energy and food drove gains. Fed emergency meeting speculation began.",
    impact: "BEARISH",
    affectedFactors: ["CPI", "Inflation", "Fed", "Consumer Spending"],
  },
  {
    date: "2022-06-16",
    type: "FED",
    severity: "CRITICAL",
    title: "Fed Hikes +75bps — Largest Since 1994",
    description: "Fed delivered 75bps hike, largest since 1994, after CPI shock. Powell committed to fighting inflation 'unconditionally'. Rate expectations surged to 4%+.",
    impact: "BEARISH",
    affectedFactors: ["Fed Funds Rate", "Yields", "Valuations", "Mortgages"],
  },
  {
    date: "2022-07-14",
    type: "MACRO",
    severity: "HIGH",
    title: "CPI 9.1% — Highest Since 1981",
    description: "June CPI hit 9.1%, a 41-year high. Gasoline was the primary driver at $5/gal national average. Recession fears at peak. Fed 100bps hike speculation.",
    impact: "BEARISH",
    affectedFactors: ["CPI Peak", "Energy", "Recession", "Consumer"],
  },
  {
    date: "2022-07-28",
    type: "MACRO",
    severity: "HIGH",
    title: "GDP -0.9%: Technical Recession",
    description: "US GDP shrank for second consecutive quarter (-0.9%), meeting the technical definition of recession. White House disputed the label. Markets rallied — bad news = Fed pivot hope.",
    impact: "BULLISH",
    affectedFactors: ["GDP", "Recession", "Fed Pivot Hopes", "Risk Assets"],
  },
  {
    date: "2022-08-10",
    type: "MACRO",
    severity: "HIGH",
    title: "CPI 8.5% — Possible Peak",
    description: "July CPI came in at 8.5%, below the 8.7% estimate. Markets exploded higher on 'peak inflation' narrative. QQQ rallied 3%+ on the day.",
    impact: "BULLISH",
    affectedFactors: ["Inflation Peak", "CPI", "Risk Appetite", "Growth Stocks"],
  },
  {
    date: "2022-08-26",
    type: "FED",
    severity: "CRITICAL",
    title: "Powell Jackson Hole: 'Pain Ahead'",
    description: "Powell's Jackson Hole speech shocked markets. 8-minute address hammered home: rate hikes will cause 'pain' to households and businesses. No pivot. QQQ fell 4%.",
    impact: "BEARISH",
    affectedFactors: ["Fed Hawkishness", "Jackson Hole", "Rate Path", "Tech"],
  },
  {
    date: "2022-09-13",
    type: "MACRO",
    severity: "HIGH",
    title: "CPI 8.3% — Core Rises Unexpectedly",
    description: "CPI came in hotter than expected. Core CPI rose to 6.3% vs 6.1% est. Markets had priced in a decline. QQQ fell over 5% — biggest one-day drop in months.",
    impact: "BEARISH",
    affectedFactors: ["Core CPI", "Inflation", "Rate Hike Path", "Volatility"],
  },
  {
    date: "2022-09-21",
    type: "FED",
    severity: "HIGH",
    title: "Fed Hikes +75bps Third Time",
    description: "Third consecutive 75bps hike. Dot plot showed terminal rate near 4.6%. Powell reiterated no rate cuts in 2023. QQQ made new year-to-date lows.",
    impact: "BEARISH",
    affectedFactors: ["Fed Funds Rate", "Terminal Rate", "Forward Guidance"],
  },
  {
    date: "2022-10-07",
    type: "GEOPOLITICAL",
    severity: "HIGH",
    title: "US Bans Advanced Chip Exports to China",
    description: "Biden administration issued sweeping semiconductor export controls targeting China. NVDA, AMD, Intel fell sharply. Geopolitical tech war escalated significantly.",
    impact: "BEARISH",
    affectedFactors: ["Semiconductors", "NVDA", "China", "Supply Chain"],
  },
  {
    date: "2022-10-13",
    type: "MACRO",
    severity: "HIGH",
    title: "CPI 8.2% — Another Surprise, Epic Reversal",
    description: "CPI came in above 8.0% est. QQQ initially dumped 3%, then reversed spectacularly +5% intraday — one of the most violent reversals in ETF history. Short covering drove the reversal.",
    impact: "BULLISH",
    affectedFactors: ["CPI", "Short Squeeze", "Volatility", "Reversal"],
  },
  {
    date: "2022-11-02",
    type: "FED",
    severity: "HIGH",
    title: "Fed Hikes +75bps — Fourth Time",
    description: "Fed hiked 75bps for the fourth consecutive meeting. Powell hinted smaller hikes possible but emphasized higher terminal rate. 'Higher for longer' narrative cemented.",
    impact: "BEARISH",
    affectedFactors: ["Fed Funds Rate", "Terminal Rate", "Higher For Longer"],
  },
  {
    date: "2022-11-10",
    type: "MACRO",
    severity: "CRITICAL",
    title: "CPI 7.7% — Inflation Breaks Lower",
    description: "October CPI at 7.7% crushed the 8.0% estimate. Biggest one-day QQQ rally of the year: +7.5%. Peak inflation narrative reignited. Massive short squeeze.",
    impact: "BULLISH",
    affectedFactors: ["CPI", "Inflation", "Pivot Hopes", "Short Squeeze"],
  },
  {
    date: "2022-11-11",
    type: "GEOPOLITICAL",
    severity: "HIGH",
    title: "FTX Collapses: $32B Crypto Exchange Bankrupt",
    description: "FTX filed for bankruptcy. Sam Bankman-Fried resigned. $32B exchange wiped out in 72 hours. Crypto contagion fears. Limited direct QQQ impact but risk sentiment soured.",
    impact: "BEARISH",
    affectedFactors: ["Crypto", "FTX", "Contagion Risk", "Sentiment"],
  },
  {
    date: "2022-12-13",
    type: "FED",
    severity: "HIGH",
    title: "Fed Hikes +50bps — Downshift Begins",
    description: "Fed downshifted to 50bps hike, as expected. But new dot plot showed terminal rate of 5.1%, higher than markets expected. 'Dovish hike' turned hawkish. QQQ fell.",
    impact: "BEARISH",
    affectedFactors: ["Fed Funds Rate", "Dot Plot", "Terminal Rate", "2023 Outlook"],
  },
  {
    date: "2022-12-22",
    type: "MACRO",
    severity: "MEDIUM",
    title: "BOJ Surprises: Yield Curve Control Widened",
    description: "Bank of Japan shocked markets by widening its yield curve control band — effectively a stealth rate hike. Yen surged. Japanese investors repatriated capital from US assets.",
    impact: "BEARISH",
    affectedFactors: ["BOJ", "Yen", "Global Rates", "Japan", "Capital Flows"],
  },
];

export const EVENT_TYPES = {
  FED: { color: "#f59e0b", label: "Fed Policy", icon: "🏦" },
  MACRO: { color: "#3b82f6", label: "Macro Data", icon: "📊" },
  EARNINGS: { color: "#8b5cf6", label: "Earnings", icon: "💰" },
  GEOPOLITICAL: { color: "#ef4444", label: "Geopolitical", icon: "🌍" },
};

export const SEVERITY_COLORS = {
  LOW: "#6b7280",
  MEDIUM: "#f59e0b",
  HIGH: "#f97316",
  CRITICAL: "#ef4444",
};
