import { useEffect, useState } from "react"

/** Ticks once a second — powers the live clock readout in the JARVIS HUD. */
export function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  return now
}
