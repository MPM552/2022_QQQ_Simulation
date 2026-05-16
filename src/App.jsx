import { useState, useEffect, useCallback } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine
} from "recharts";
import { QQQ_2022, MACRO_EVENTS_2022, EVENT_TYPES, SEVERITY_COLORS } from "./data/marketData";
import "./App.css";

const START_CASH = 100_000;
const START_PRICE = QQQ_2022[0].price;

function formatCurrency(val) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

function formatPct(val) {
  const sign = val >= 0 ? "+" : "";
  return `${sign}${val.toFixed(2)}%`;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function getEventsForDate(date) {
  return MACRO_EVENTS_2022.filter(e => e.date === date);
}

function getNearbyEvents(date, range = 5) {
  const target = new Date(date);
  return MACRO_EVENTS_2022.filter(e => {
    const d = new Date(e.date);
    const diff = Math.abs((d - target) / (1000 * 60 * 60 * 24));
    return diff <= range;
  });
}

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  const events = getEventsForDate(data.date);
  return (
    <div className="chart-tooltip">
      <div className="tooltip-date">{formatDate(data.date)}</div>
      <div className="tooltip-price">${data.price.toFixed(2)}</div>
      {events.map((e, i) => (
        <div key={i} className="tooltip-event" style={{ color: SEVERITY_COLORS[e.severity] }}>
          {EVENT_TYPES[e.type]?.icon} {e.title}
        </div>
      ))}
    </div>
  );
};

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cash, setCash] = useState(START_CASH);
  const [shares, setShares] = useState(0);
  const [tradeQty, setTradeQty] = useState(10);
  const [trades, setTrades] = useState([]);
  const [activeEvent, setActiveEvent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);
  const [pendingEvents, setPendingEvents] = useState([]);
  const [notification, setNotification] = useState(null);
  const [tab, setTab] = useState("chart");

  const currentData = QQQ_2022[currentIndex];
  const currentPrice = currentData.price;
  const portfolioValue = cash + shares * currentPrice;
  const totalReturn = ((portfolioValue - START_CASH) / START_CASH) * 100;
  const qqqReturn = ((currentPrice - START_PRICE) / START_PRICE) * 100;
  const alpha = totalReturn - qqqReturn;

  const chartData = QQQ_2022.slice(0, currentIndex + 1).map(d => ({
    ...d,
    label: formatDate(d.date),
    hasEvent: MACRO_EVENTS_2022.some(e => e.date === d.date),
  }));

  const eventLines = MACRO_EVENTS_2022
    .filter(e => QQQ_2022.slice(0, currentIndex + 1).some(d => d.date === e.date))
    .map(e => ({ date: e.date, color: SEVERITY_COLORS[e.severity] }));

  const showNotif = (msg, type = "info") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 2500);
  };

  const advance = useCallback(() => {
    if (currentIndex >= QQQ_2022.length - 1) {
      setIsPlaying(false);
      return;
    }
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    const nextDate = QQQ_2022[nextIndex].date;
    const events = getEventsForDate(nextDate);
    if (events.length > 0) {
      setIsPlaying(false);
      setPendingEvents(events);
      setShowEventModal(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(advance, 280);
    return () => clearTimeout(timer);
  }, [isPlaying, advance]);

  const buy = () => {
    const cost = currentPrice * tradeQty;
    if (cost > cash) { showNotif("Insufficient cash!", "error"); return; }
    setCash(c => c - cost);
    setShares(s => s + tradeQty);
    setTrades(t => [...t, { date: currentData.date, type: "BUY", qty: tradeQty, price: currentPrice }]);
    showNotif(`Bought ${tradeQty} shares @ $${currentPrice.toFixed(2)}`, "success");
    setShowEventModal(false);
  };

  const sell = () => {
    if (tradeQty > shares) { showNotif("Not enough shares!", "error"); return; }
    const proceeds = currentPrice * tradeQty;
    setCash(c => c + proceeds);
    setShares(s => s - tradeQty);
    setTrades(t => [...t, { date: currentData.date, type: "SELL", qty: tradeQty, price: currentPrice }]);
    showNotif(`Sold ${tradeQty} shares @ $${currentPrice.toFixed(2)}`, "success");
    setShowEventModal(false);
  };

  const maxBuy = Math.floor(cash / currentPrice);
  const progress = (currentIndex / (QQQ_2022.length - 1)) * 100;

  const reset = () => {
    setCurrentIndex(0);
    setCash(START_CASH);
    setShares(0);
    setTrades([]);
    setIsPlaying(false);
    setShowEventModal(false);
    setPendingEvents([]);
  };

  return (
    <div className="app">
      {notification && (
        <div className={`notification notif-${notification.type}`}>{notification.msg}</div>
      )}

      {showEventModal && pendingEvents.length > 0 && (
        <div className="modal-overlay" onClick={() => setShowEventModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-tag">📰 MARKET EVENT</span>
              <span className="modal-date">{formatDate(pendingEvents[0].date)}</span>
            </div>
            {pendingEvents.map((ev, i) => (
              <div key={i} className="modal-event">
                <div className="modal-event-type" style={{ color: EVENT_TYPES[ev.type]?.color }}>
                  {EVENT_TYPES[ev.type]?.icon} {EVENT_TYPES[ev.type]?.label}
                  <span className="severity-badge" style={{ background: SEVERITY_COLORS[ev.severity] }}>
                    {ev.severity}
                  </span>
                </div>
                <div className="modal-event-title">{ev.title}</div>
                <div className="modal-event-desc">{ev.description}</div>
                <div className="modal-factors">
                  {ev.affectedFactors.map((f, j) => <span key={j} className="factor-tag">{f}</span>)}
                </div>
              </div>
            ))}
            <div className="modal-actions">
              <button className="btn btn-buy" onClick={buy} disabled={currentPrice * tradeQty > cash}>
                🟢 Buy {tradeQty} shares
              </button>
              <button className="btn btn-sell" onClick={sell} disabled={tradeQty > shares}>
                🔴 Sell {tradeQty} shares
              </button>
              <button className="btn btn-neutral" onClick={() => setShowEventModal(false)}>
                ⏸ Hold — Continue
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="header">
        <div className="header-left">
          <div className="logo">QQQ<span>SIM</span></div>
          <div className="year-badge">2022 Bear Market</div>
        </div>
        <div className="header-right">
          <div className="header-stat">
            <span className="stat-label">PORTFOLIO</span>
            <span className="stat-value">{formatCurrency(portfolioValue)}</span>
          </div>
          <div className="header-stat">
            <span className="stat-label">RETURN</span>
            <span className={`stat-value ${totalReturn >= 0 ? "pos" : "neg"}`}>{formatPct(totalReturn)}</span>
          </div>
          <div className="header-stat">
            <span className="stat-label">α ALPHA</span>
            <span className={`stat-value ${alpha >= 0 ? "pos" : "neg"}`}>{formatPct(alpha)}</span>
          </div>
        </div>
      </header>

      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
        <div className="progress-labels">
          <span>Jan 2022</span>
          <span className="progress-mid">{formatDate(currentData.date)}</span>
          <span>Dec 2022</span>
        </div>
      </div>

      <div className="layout">
        <div className="left-col">
          <div className="tabs">
            {["chart", "trades", "events"].map(t => (
              <button key={t} className={`tab ${tab === t ? "active" : ""}`} onClick={() => setTab(t)}>
                {t === "chart" ? "📈 Chart" : t === "trades" ? "📋 Trades" : "📰 Events"}
              </button>
            ))}
          </div>

          {tab === "chart" && (
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height={340}>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="label" tick={{ fill: "#64748b", fontSize: 11 }} interval="preserveStartEnd" />
                  <YAxis domain={["auto", "auto"]} tick={{ fill: "#64748b", fontSize: 11 }} tickFormatter={v => `$${v}`} width={55} />
                  <Tooltip content={<CustomTooltip />} />
                  {eventLines.map((el, i) => {
                    const idx = chartData.findIndex(d => d.date === el.date);
                    if (idx < 0) return null;
                    return (
                      <ReferenceLine key={i} x={chartData[idx]?.label} stroke={el.color} strokeDasharray="4 4" strokeOpacity={0.5} />
                    );
                  })}
                  <Area type="monotone" dataKey="price" stroke="#22d3ee" strokeWidth={2} fill="url(#grad)" dot={false} activeDot={{ r: 5, fill: "#22d3ee" }} />
                </AreaChart>
              </ResponsiveContainer>
              <div className="legend">
                {Object.entries(EVENT_TYPES).map(([key, val]) => (
                  <span key={key} className="legend-item">
                    <span className="legend-dot" style={{ background: SEVERITY_COLORS["HIGH"] }}></span>
                    {val.icon} {val.label}
                  </span>
                ))}
              </div>
              <div className="playback">
                <button className="btn btn-sm" onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0}>‹ Back</button>
                <button className={`btn ${isPlaying ? "btn-pause" : "btn-play"}`} onClick={() => setIsPlaying(p => !p)}>
                  {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>
                <button className="btn btn-sm" onClick={advance} disabled={currentIndex >= QQQ_2022.length - 1}>Next ›</button>
                <button className="btn btn-sm btn-reset" onClick={reset}>↺ Reset</button>
              </div>
            </div>
          )}

          {tab === "trades" && (
            <div className="trade-log">
              {trades.length === 0 ? (
                <div className="empty-state">No trades yet. Buy or sell to begin.</div>
              ) : (
                <table className="trade-table">
                  <thead><tr><th>Date</th><th>Type</th><th>Qty</th><th>Price</th><th>Value</th></tr></thead>
                  <tbody>
                    {[...trades].reverse().map((t, i) => (
                      <tr key={i}>
                        <td>{formatDate(t.date)}</td>
                        <td><span className={`trade-badge ${t.type === "BUY" ? "badge-buy" : "badge-sell"}`}>{t.type}</span></td>
                        <td>{t.qty}</td>
                        <td>${t.price.toFixed(2)}</td>
                        <td>{formatCurrency(t.qty * t.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {tab === "events" && (
            <div className="events-list">
              {MACRO_EVENTS_2022
                .filter(e => QQQ_2022.slice(0, currentIndex + 1).some(d => d.date === e.date))
                .reverse()
                .map((e, i) => (
                  <div key={i} className="event-item" onClick={() => setActiveEvent(e)}>
                    <span className="event-icon">{EVENT_TYPES[e.type]?.icon}</span>
                    <div className="event-item-body">
                      <div className="event-item-title">{e.title}</div>
                      <div className="event-item-meta">
                        {formatDate(e.date)} · {EVENT_TYPES[e.type]?.label}
                      </div>
                    </div>
                    <span className="sev-dot" style={{ background: SEVERITY_COLORS[e.severity] }} />
                  </div>
                ))}
              {MACRO_EVENTS_2022.filter(e => QQQ_2022.slice(0, currentIndex + 1).some(d => d.date === e.date)).length === 0 && (
                <div className="empty-state">No events yet. Advance time to see events.</div>
              )}
            </div>
          )}
        </div>

        <div className="right-col">
          <div className="price-card">
            <div className="ticker">QQQ</div>
            <div className="price-big">${currentPrice.toFixed(2)}</div>
            <div className={`price-ytd ${qqqReturn >= 0 ? "pos" : "neg"}`}>{formatPct(qqqReturn)} YTD</div>
            <div className="price-date-label">{formatDate(currentData.date)}</div>
          </div>

          <div className="card">
            <div className="card-title">Portfolio</div>
            <div className="port-row"><span>Cash</span><span>{formatCurrency(cash)}</span></div>
            <div className="port-row"><span>Shares</span><span>{shares} shares</span></div>
            <div className="port-row"><span>Equity</span><span>{formatCurrency(shares * currentPrice)}</span></div>
            <div className="divider" />
            <div className="port-row port-total">
              <span>Total Value</span>
              <span className={totalReturn >= 0 ? "pos" : "neg"}>{formatCurrency(portfolioValue)}</span>
            </div>
            <div className="port-row">
              <span>P&amp;L</span>
              <span className={totalReturn >= 0 ? "pos" : "neg"}>{formatCurrency(portfolioValue - START_CASH)}</span>
            </div>
            <div className="port-row">
              <span>vs QQQ (Alpha)</span>
              <span className={alpha >= 0 ? "pos" : "neg"}>{formatPct(alpha)}</span>
            </div>
          </div>

          <div className="card">
            <div className="card-title">Trade</div>
            <div className="qty-row">
              <button className="qty-btn" onClick={() => setTradeQty(q => Math.max(1, q - 5))}>−</button>
              <input
                className="qty-input"
                type="number"
                min={1}
                value={tradeQty}
                onChange={e => setTradeQty(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button className="qty-btn" onClick={() => setTradeQty(q => q + 5)}>+</button>
            </div>
            <div className="trade-cost">≈ {formatCurrency(currentPrice * tradeQty)}</div>
            <div className="trade-btns">
              <button className="btn btn-buy" onClick={buy} disabled={currentPrice * tradeQty > cash}>
                Buy {tradeQty}
              </button>
              <button className="btn btn-sell" onClick={sell} disabled={tradeQty > shares}>
                Sell {tradeQty}
              </button>
            </div>
            <div className="quick-row">
              <button className="btn btn-xs" onClick={() => setTradeQty(Math.max(1, Math.floor(maxBuy * 0.25)))}>25%</button>
              <button className="btn btn-xs" onClick={() => setTradeQty(Math.max(1, Math.floor(maxBuy * 0.5)))}>50%</button>
              <button className="btn btn-xs" onClick={() => setTradeQty(Math.max(1, maxBuy))}>Max</button>
            </div>
          </div>

          <div className="card">
            <div className="card-title">🔍 Nearby Events</div>
            {getNearbyEvents(currentData.date, 6).slice(0, 4).map((e, i) => (
              <div key={i} className="nearby-event" onClick={() => setActiveEvent(e)}>
                <span>{EVENT_TYPES[e.type]?.icon}</span>
                <div>
                  <div className="nearby-title">{e.title}</div>
                  <div className="nearby-date">{formatDate(e.date)}</div>
                </div>
              </div>
            ))}
            {getNearbyEvents(currentData.date, 6).length === 0 && (
              <div className="empty-sm">No nearby events</div>
            )}
          </div>
        </div>
      </div>

      {activeEvent && (
        <div className="modal-overlay" onClick={() => setActiveEvent(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-event-type" style={{ color: EVENT_TYPES[activeEvent.type]?.color }}>
              {EVENT_TYPES[activeEvent.type]?.icon} {EVENT_TYPES[activeEvent.type]?.label}
              <span className="severity-badge" style={{ background: SEVERITY_COLORS[activeEvent.severity] }}>{activeEvent.severity}</span>
            </div>
            <div className="modal-event-title">{activeEvent.title}</div>
            <div className="modal-event-date">{formatDate(activeEvent.date)}</div>
            <div className="modal-event-desc">{activeEvent.description}</div>
            <div className="modal-factors">
              {activeEvent.affectedFactors.map((f, i) => <span key={i} className="factor-tag">{f}</span>)}
            </div>
            <button className="btn btn-neutral" style={{ marginTop: "1rem" }} onClick={() => setActiveEvent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
