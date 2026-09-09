import { useEffect, useState } from "react"

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+-/<>"

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
}

type DecodeTextProps = {
  text: string
  delay?: number
  duration?: number
  className?: string
}

/**
 * Renders text that "decodes" from scrambled characters into its final
 * value over a short duration — a small sci-fi HUD flourish used in the
 * JARVIS panel's readout boxes. Skips the scramble (renders instantly)
 * under prefers-reduced-motion.
 */
export function DecodeText({ text, delay = 0, duration = 450, className }: DecodeTextProps) {
  const [display, setDisplay] = useState(() => (prefersReducedMotion() ? text : " "))

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(text)
      return
    }

    let raf = 0
    let cancelled = false

    function frame(startTime: number) {
      if (cancelled) return
      const progress = Math.min(1, (performance.now() - startTime) / duration)
      const revealCount = Math.floor(progress * text.length)
      let out = ""
      for (let i = 0; i < text.length; i++) {
        out += i < revealCount || text[i] === " " ? text[i] : SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0]
      }
      setDisplay(out)
      if (progress < 1) raf = requestAnimationFrame(() => frame(startTime))
    }

    const t = window.setTimeout(() => {
      raf = requestAnimationFrame(() => frame(performance.now()))
    }, delay)

    return () => {
      cancelled = true
      window.clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [text, delay, duration])

  return <span className={className}>{display}</span>
}
