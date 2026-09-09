import { type CSSProperties, useEffect, useState } from "react"
import { Check, X } from "lucide-react"
import { DecodeText } from "./DecodeText"
import { engineeringPhilosophy } from "../data/profile"
import { jarvisStats } from "./jarvisStats"
import { playActivationSound } from "./playActivationSound"
import { useClock } from "./useClock"

const GAUGE_INNER_PCT = 25
const GAUGE_OUTER_PCT = 50
// Purely decorative fill amounts for the gauge rings (sci-fi HUD flourish,
// not literal percentages of the underlying stat).
const GAUGE_FILL = [74, 58, 88, 66, 82, 60, 94, 70]

const STATUS_LINES = [
  { label: "PWR", value: "ONLINE" },
  { label: "SYNC", value: "LOCKED" },
  { label: "NET", value: "STABLE" },
]

const TAGLINE_ROTATE_MS = 4500

function getGreeting(hour: number) {
  if (hour < 5) return "Good night"
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  if (hour < 21) return "Good evening"
  return "Good night"
}

/**
 * JARVIS-style HUD: opening it reveals a ring of circular gauge dials
 * around a central reactor core, each with a leader line running out to
 * its own readout box — every stat visible at once, all layered directly
 * over the live page (translucent backdrop, page stays visible behind).
 * Fully self-contained (own state + scoped inline styles) — mounted only via
 * a portal from JarvisOrb, so it can never affect existing page layout/CSS.
 */
export function JarvisInterface({ onClose }: { onClose: () => void }) {
  const now = useClock()
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [taglineIndex, setTaglineIndex] = useState(0)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  // Fire the activation chirp exactly once, on mount.
  useEffect(() => {
    playActivationSound()
  }, [])

  // Rotate the engineering-philosophy tagline.
  useEffect(() => {
    const id = window.setInterval(() => {
      setTaglineIndex((i) => (i + 1) % engineeringPhilosophy.length)
    }, TAGLINE_ROTATE_MS)
    return () => window.clearInterval(id)
  }, [])

  function handleCopy(i: number, value: string) {
    navigator.clipboard?.writeText(value).catch(() => {})
    setCopiedIndex(i)
    window.setTimeout(() => setCopiedIndex((current) => (current === i ? null : current)), 1200)
  }

  const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
  const dateStr = now.toLocaleDateString([], { weekday: "short", day: "2-digit", month: "short" })
  const greeting = getGreeting(now.getHours())
  const tickerLines = jarvisStats.map((s) => `${s.label}: ${s.value}`)
  const tagline = engineeringPhilosophy[taglineIndex % engineeringPhilosophy.length]

  const n = jarvisStats.length
  const points = jarvisStats.map((s, i) => {
    const angle = (360 / n) * i - 90
    const rad = (angle * Math.PI) / 180
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)
    return {
      stat: s,
      gx: 50 + GAUGE_INNER_PCT * cos,
      gy: 50 + GAUGE_INNER_PCT * sin,
      bx: 50 + GAUGE_OUTER_PCT * cos,
      by: 50 + GAUGE_OUTER_PCT * sin,
      fill: GAUGE_FILL[i % GAUGE_FILL.length],
    }
  })

  return (
    <div className="jarvis-overlay" role="dialog" aria-modal="true" aria-label="JARVIS system panel">
      <div className="jarvis-backdrop" onClick={onClose} />
      <div className="jarvis-scanlines" aria-hidden="true" />

      <button className="jarvis-close" onClick={onClose} aria-label="Close system panel">
        <X size={18} />
      </button>

      <>
          <div className="jarvis-clock" aria-hidden="true">
            <p className="jarvis-clock-greeting">$ {greeting}, visitor</p>
            <p className="jarvis-clock-time">{timeStr}</p>
            <p className="jarvis-clock-date">{dateStr}</p>
          </div>

          <div className="jarvis-status" aria-hidden="true">
            {STATUS_LINES.map((s) => (
              <p key={s.label} className="jarvis-status-row">
                <span className="jarvis-status-blip" />
                <span className="jarvis-status-label">{s.label}</span>
                <span className="jarvis-status-value">{s.value}</span>
              </p>
            ))}
          </div>

          <div className="jarvis-activity" aria-hidden="true">
            <div className="jarvis-activity-bars">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="jarvis-activity-bar"
                  style={{ animationDelay: `${i * 0.12}s` } as CSSProperties}
                />
              ))}
            </div>
            <p className="jarvis-activity-label">ACTIVITY</p>
          </div>

          <div className="jarvis-signal" aria-hidden="true">
            <div className="jarvis-signal-bars">
              {[1, 2, 3, 4].map((bar) => (
                <span key={bar} className="jarvis-signal-bar" style={{ height: `${bar * 5 + 5}px` } as CSSProperties} />
              ))}
            </div>
            <p className="jarvis-signal-label">OPEN TO WORK</p>
          </div>

          <div className="jarvis-ticker" aria-hidden="true">
            <p className="jarvis-ticker-title">$ profile.stream</p>
            <div className="jarvis-ticker-window">
              <div className="jarvis-ticker-track">
                {[...tickerLines, ...tickerLines].map((line, i) => (
                  <p key={i} className="jarvis-ticker-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="jarvis-panels">
            <p className="jarvis-panels-title">
              <span className="jarvis-dot" /> $ initialization complete
            </p>
            <p className="jarvis-tagline">
              <DecodeText key={taglineIndex} text={`"${tagline.title}"`} duration={500} />
            </p>

            <div className="jarvis-hud-stage">
          <div className="jarvis-hud-backing" aria-hidden="true" />

          <svg className="jarvis-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {points.map((p, i) => (
              <line
                key={p.stat.label}
                x1={p.gx}
                y1={p.gy}
                x2={p.bx}
                y2={p.by}
                className="jarvis-connector-line"
                style={{ animationDelay: `${i * 90}ms` } as CSSProperties}
              />
            ))}
          </svg>

          <div className="jarvis-eye">
            <span className="jarvis-eye-pulse" />
            <span className="jarvis-eye-core" />
            <span className="jarvis-eye-ring r1" />
            <span className="jarvis-eye-ring r2" />
          </div>

          {points.map((p, i) => {
            const Icon = p.stat.icon
            const circumference = 2 * Math.PI * 42
            return (
              <div
                key={p.stat.label}
                className="jarvis-gauge"
                style={{ left: `${p.gx}%`, top: `${p.gy}%`, animationDelay: `${i * 90}ms` } as CSSProperties}
              >
                <svg viewBox="0 0 100 100" className="jarvis-gauge-ring">
                  <circle cx="50" cy="50" r="42" className="jarvis-gauge-track" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="jarvis-gauge-arc"
                    strokeDasharray={`${(p.fill / 100) * circumference} ${circumference}`}
                  />
                </svg>
                <Icon size={16} className="jarvis-gauge-icon" />
              </div>
            )
          })}

          {points.map((p, i) => (
            <button
              key={p.stat.label}
              type="button"
              className={"jarvis-callout" + (copiedIndex === i ? " is-copied" : "")}
              style={{ left: `${p.bx}%`, top: `${p.by}%`, animationDelay: `${i * 90 + 150}ms` } as CSSProperties}
              onClick={() => handleCopy(i, p.stat.value)}
              aria-label={`Copy ${p.stat.label}: ${p.stat.value}`}
            >
              {copiedIndex === i ? (
                <span className="jarvis-callout-copied">
                  <Check size={12} /> Copied
                </span>
              ) : (
                <>
                  <p className="jarvis-callout-label">{p.stat.label}</p>
                  <p className="jarvis-callout-value">
                    <DecodeText text={p.stat.value} delay={i * 90 + 250} duration={420} />
                  </p>
                  {p.stat.detail && (
                    <p className="jarvis-callout-detail">
                      <DecodeText text={p.stat.detail} delay={i * 90 + 250 + 420 + 80} duration={520} />
                    </p>
                  )}
                </>
              )}
            </button>
          ))}
            </div>
          </div>
        </>

      <style>{`
        .jarvis-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          overflow-y: auto;
          font-family: "JetBrains Mono", ui-monospace, monospace;
        }
        .jarvis-backdrop {
          position: absolute;
          inset: 0;
          /* Translucent but dark enough to keep the HUD legible over the live page. */
          background: rgba(2, 7, 12, 0.72);
          animation: jarvis-fade-in 0.15s ease;
        }
        .jarvis-scanlines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            0deg,
            rgba(34, 211, 238, 0.045) 0px,
            rgba(34, 211, 238, 0.045) 1px,
            transparent 1px,
            transparent 3px
          );
        }
        .jarvis-close {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 2;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 1px solid rgba(34,211,238,0.4);
          background: rgba(11,15,22,0.5);
          color: #a5f3ff;
          cursor: pointer;
        }
        .jarvis-close:hover { border-color: rgba(34,211,238,0.8); }

        .jarvis-clock {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          text-align: left;
          padding: 6px 14px;
          border-radius: 10px;
          border: 1px solid rgba(34,211,238,0.3);
          background: rgba(4,10,16,0.7);
        }
        .jarvis-clock-time {
          font-size: 0.95rem;
          font-weight: 700;
          color: #a5f3ff;
          letter-spacing: 0.04em;
        }
        .jarvis-clock-greeting {
          font-size: 0.6rem;
          color: #67e8f9;
          margin-bottom: 3px;
        }
        .jarvis-clock-date {
          margin-top: 1px;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #64748b;
        }

        .jarvis-status {
          position: absolute;
          top: 66px;
          right: 20px;
          z-index: 2;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid rgba(34,211,238,0.3);
          background: rgba(4,10,16,0.7);
        }
        .jarvis-status-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.62rem;
          letter-spacing: 0.04em;
        }
        .jarvis-status-row + .jarvis-status-row { margin-top: 4px; }
        .jarvis-status-blip {
          width: 5px;
          height: 5px;
          border-radius: 9999px;
          background: #34d399;
          box-shadow: 0 0 5px 1px rgba(52,211,153,0.8);
          animation: jarvis-blip 1.6s ease-in-out infinite;
        }
        .jarvis-status-label { color: #64748b; width: 30px; }
        .jarvis-status-value { color: #a5f3ff; font-weight: 700; }

        .jarvis-activity {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 2;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(34,211,238,0.3);
          background: rgba(4,10,16,0.7);
          text-align: center;
        }
        .jarvis-activity-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 26px;
        }
        .jarvis-activity-bar {
          width: 3px;
          height: 30%;
          border-radius: 2px;
          background: #22d3ee;
          box-shadow: 0 0 4px rgba(34,211,238,0.7);
          animation: jarvis-bar-bounce 1.1s ease-in-out infinite;
        }
        .jarvis-activity-label {
          margin-top: 6px;
          font-size: 0.55rem;
          letter-spacing: 0.08em;
          color: #64748b;
        }

        .jarvis-signal {
          position: absolute;
          bottom: 20px;
          right: 20px;
          z-index: 2;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid rgba(34,211,238,0.3);
          background: rgba(4,10,16,0.7);
          text-align: center;
        }
        .jarvis-signal-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 26px;
        }
        .jarvis-signal-bar {
          width: 5px;
          border-radius: 2px;
          background: #34d399;
          box-shadow: 0 0 4px rgba(52,211,153,0.7);
        }
        .jarvis-signal-label {
          margin-top: 6px;
          font-size: 0.55rem;
          letter-spacing: 0.06em;
          color: #64748b;
        }

        .jarvis-ticker {
          position: absolute;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          z-index: 1;
          width: 190px;
          padding: 10px 14px;
          border-radius: 10px;
          border: 1px solid rgba(34,211,238,0.25);
          background: rgba(4,10,16,0.65);
        }
        .jarvis-ticker-title {
          font-size: 0.58rem;
          color: #67e8f9;
          margin-bottom: 6px;
          letter-spacing: 0.04em;
        }
        .jarvis-ticker-window {
          height: 120px;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
        .jarvis-ticker-track {
          animation: jarvis-ticker-scroll 12s linear infinite;
        }
        .jarvis-ticker-line {
          font-size: 0.62rem;
          color: #cbd5e1;
          padding: 5px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 1024px) {
          .jarvis-status, .jarvis-activity, .jarvis-signal, .jarvis-ticker {
            display: none;
          }
        }

        .jarvis-panels {
          width: 100%;
          text-align: center;
          animation: jarvis-fade-in 0.4s ease;
        }
        .jarvis-panels-title {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #67e8f9;
          font-size: 0.8rem;
          letter-spacing: 0.04em;
          margin-bottom: 8px;
          background: rgba(4,10,16,0.85);
          border: 1px solid rgba(34,211,238,0.2);
          border-radius: 999px;
          padding: 5px 14px;
        }
        .jarvis-dot {
          width: 6px;
          height: 6px;
          border-radius: 9999px;
          background: #34d399;
          box-shadow: 0 0 6px 2px rgba(52,211,153,0.8);
        }

        .jarvis-tagline {
          max-width: 420px;
          margin: 0 auto 4px;
          font-size: 0.72rem;
          font-style: italic;
          color: #8b95a5;
        }

        .jarvis-hud-stage {
          position: relative;
          width: min(92vw, 70vh, 700px);
          height: min(92vw, 70vh, 700px);
          margin: 40px auto;
        }

        .jarvis-hud-backing {
          position: absolute;
          inset: 16%;
          border-radius: 9999px;
          background: radial-gradient(
            circle,
            rgba(5, 12, 18, 0.75) 0%,
            rgba(5, 12, 18, 0.45) 55%,
            rgba(5, 12, 18, 0.12) 78%,
            transparent 100%
          );
          border: 1px solid rgba(34, 211, 238, 0.12);
        }

        .jarvis-connectors {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        .jarvis-connector-line {
          stroke: rgba(103, 232, 249, 0.8);
          stroke-width: 0.7;
          stroke-dasharray: 3;
          filter: drop-shadow(0 0 2px rgba(34,211,238,0.7));
          opacity: 0;
          animation: jarvis-line-in 0.4s ease forwards;
        }

        .jarvis-eye {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(90px, 14vw, 130px);
          height: clamp(90px, 14vw, 130px);
          transform: translate(-50%, -50%);
        }
        .jarvis-eye-pulse {
          position: absolute;
          inset: -20%;
          border-radius: 9999px;
          border: 2px solid rgba(165,243,255,0.8);
          animation: jarvis-eye-pulse-once 0.9s ease-out forwards;
        }
        .jarvis-eye-core {
          position: absolute;
          inset: 26%;
          border-radius: 9999px;
          background: radial-gradient(circle at 35% 30%, #d6faff, #22d3ee 45%, #0e7490 85%);
          box-shadow: 0 0 30px 8px rgba(34,211,238,0.5), 0 0 70px 24px rgba(34,211,238,0.2);
          animation: jarvis-core-pulse 2.6s ease-in-out infinite;
        }
        .jarvis-eye-ring {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 1px solid rgba(34,211,238,0.4);
        }
        .jarvis-eye-ring.r1 { animation: jarvis-ring-spin 9s linear infinite; }
        .jarvis-eye-ring.r2 { inset: 10%; border-style: dashed; border-color: rgba(139,92,246,0.4); opacity: 0.7; animation: jarvis-ring-spin 13s linear infinite reverse; }

        .jarvis-gauge {
          position: absolute;
          width: clamp(40px, 6vw, 56px);
          height: clamp(40px, 6vw, 56px);
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: jarvis-gauge-in 0.4s ease forwards;
          transition: filter 0.15s ease, transform 0.15s ease;
          cursor: default;
        }
        .jarvis-gauge:hover {
          filter: drop-shadow(0 0 10px rgba(34,211,238,0.8));
          /* !important needed: the entrance keyframe's forwards fill otherwise outranks this. */
          transform: translate(-50%, -50%) scale(1.12) !important;
        }
        .jarvis-gauge:hover .jarvis-gauge-track { stroke: rgba(103,232,249,0.6); }
        .jarvis-gauge-ring {
          position: absolute;
          inset: 0;
          transform: rotate(-90deg);
          animation: jarvis-ring-spin 22s linear infinite;
        }
        .jarvis-gauge-track {
          fill: rgba(4,10,16,0.92);
          stroke: rgba(34,211,238,0.2);
          stroke-width: 6;
        }
        .jarvis-gauge-arc {
          fill: none;
          stroke: #22d3ee;
          stroke-width: 6;
          stroke-linecap: round;
          filter: drop-shadow(0 0 4px rgba(34,211,238,0.8));
        }
        .jarvis-gauge-icon { position: relative; color: #67e8f9; }

        .jarvis-callout {
          position: absolute;
          transform: translate(-50%, -50%);
          width: max-content;
          max-width: 150px;
          min-height: 40px;
          padding: 7px 11px;
          border-radius: 8px;
          border: 1px solid rgba(34,211,238,0.3);
          background: rgba(4,10,16,0.88);
          text-align: left;
          font: inherit;
          color: inherit;
          cursor: pointer;
          opacity: 0;
          animation: jarvis-callout-in 0.4s ease forwards;
          transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .jarvis-callout:hover,
        .jarvis-callout:focus-visible {
          border-color: rgba(103,232,249,0.8);
          box-shadow: 0 0 22px -4px rgba(34,211,238,0.6);
          /* !important needed: the entrance keyframe's forwards fill otherwise outranks this. */
          transform: translate(-50%, -50%) scale(1.06) !important;
        }
        .jarvis-callout-copied {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 700;
          color: #34d399;
        }
        .jarvis-callout-label {
          font-size: 0.56rem;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          color: #67e8f9;
        }
        .jarvis-callout-value {
          margin-top: 2px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #f1f5f9;
          line-height: 1.25;
        }
        .jarvis-callout-detail {
          margin-top: 2px;
          font-size: 0.62rem;
          line-height: 1.3;
          color: #64748b;
        }

        @keyframes jarvis-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes jarvis-core-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        @keyframes jarvis-ring-spin { to { transform: rotate(360deg); } }
        @keyframes jarvis-blip { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes jarvis-bar-bounce {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
        @keyframes jarvis-ticker-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes jarvis-eye-pulse-once {
          from { transform: scale(0.4); opacity: 0.9; }
          to { transform: scale(2.2); opacity: 0; }
        }
        @keyframes jarvis-line-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes jarvis-gauge-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes jarvis-callout-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.85); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @media (max-width: 640px) {
          .jarvis-callout { max-width: 108px; padding: 5px 8px; }
          .jarvis-callout-value { font-size: 0.62rem; }
          .jarvis-callout-detail { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .jarvis-backdrop, .jarvis-panels, .jarvis-eye-pulse,
          .jarvis-eye-core, .jarvis-eye-ring, .jarvis-gauge, .jarvis-gauge-ring,
          .jarvis-connector-line, .jarvis-callout, .jarvis-status-blip,
          .jarvis-activity-bar, .jarvis-ticker-track {
            animation: none !important;
          }
          .jarvis-gauge, .jarvis-callout, .jarvis-connector-line { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
