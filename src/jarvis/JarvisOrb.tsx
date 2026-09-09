import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { JarvisInterface } from "./JarvisInterface"

/**
 * Small pulsing "JARVIS"-style orb button — sits next to the Contact nav link.
 * Fully self-contained (own state, own scoped styles, own overlay via portal),
 * so it plugs into the existing Navbar without touching any of its behavior.
 */
export function JarvisOrb() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Activate JARVIS system panel"
        title="Activate system panel"
        className="jarvis-trigger"
      >
        <span className="jarvis-trigger-ring" />
        <span className="jarvis-trigger-core" />
        <style>{`
          .jarvis-trigger {
            position: relative;
            width: 28px;
            height: 28px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: transparent;
            cursor: pointer;
            flex-shrink: 0;
          }
          .jarvis-trigger-core {
            width: 8px;
            height: 8px;
            border-radius: 9999px;
            background: radial-gradient(circle at 35% 30%, #d6faff, #22d3ee 55%, #0891b2 100%);
            box-shadow: 0 0 8px 2px rgba(34,211,238,0.85), 0 0 18px 5px rgba(34,211,238,0.35);
            animation: jarvis-trigger-pulse 2.4s ease-in-out infinite;
          }
          .jarvis-trigger-ring {
            position: absolute;
            inset: 3px;
            border-radius: 9999px;
            border: 1px solid rgba(34,211,238,0.5);
            animation: jarvis-trigger-ring 2.4s ease-out infinite;
          }
          @keyframes jarvis-trigger-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.85; }
          }
          @keyframes jarvis-trigger-ring {
            0% { transform: scale(0.6); opacity: 0.9; }
            100% { transform: scale(1.8); opacity: 0; }
          }
          @media (prefers-reduced-motion: reduce) {
            .jarvis-trigger-core, .jarvis-trigger-ring { animation: none; }
          }
        `}</style>
      </button>

      {open && createPortal(<JarvisInterface onClose={() => setOpen(false)} />, document.body)}
    </>
  )
}
