import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getAccent, type Cert } from "../lib/certAccent"
import { personal } from "../data/profile"

const AUTO_MS = 4500

export function CertificateCarousel({ certs, onOpen }: { certs: Cert[]; onOpen: (c: Cert) => void }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || certs.length <= 1) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % certs.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, certs.length])

  if (certs.length === 0) return null

  function go(i: number) {
    setIndex(((i % certs.length) + certs.length) % certs.length)
  }

  return (
    <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-gold)]/40 bg-[var(--color-surface)] shadow-[0_0_60px_-15px] shadow-[var(--color-gold)]/20">
        <div className="relative h-72 sm:h-64">
          {certs.map((c, i) => {
            const accent = getAccent(c.name)
            const isActive = i === index
            return (
              <button
                key={c.name}
                onClick={() => onOpen(c)}
                aria-hidden={!isActive}
                tabIndex={isActive ? 0 : -1}
                className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.97)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* Certificate document look */}
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: `radial-gradient(ellipse 70% 55% at 50% 0%, color-mix(in srgb, ${accent.color} 14%, transparent), transparent 70%)` }}
                />
                <div className="relative">
                  <p className="font-mono text-[10px] tracking-[0.25em] text-[var(--color-gold)]">CERTIFICATE OF COMPLETION</p>
                  <h4 className="mt-3 font-script text-2xl sm:text-3xl text-white leading-snug max-w-lg">{c.name}</h4>

                  <p className="mt-3 text-xs text-[var(--color-text-dim)]">This certifies that</p>
                  <p className="mt-0.5 text-base font-bold text-white">{personal.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--color-text-dim)]">has successfully completed the course</p>

                  <div className="mt-4 flex items-center justify-center gap-5 border-t border-[var(--color-border)] pt-3 font-mono text-[11px] text-[var(--color-text-dim)]">
                    <span>{c.issuer}</span>
                    <span className="h-3 w-px bg-[var(--color-border)]" />
                    <span>{c.date}</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Prev/Next controls */}
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous certificate"
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/70 text-white backdrop-blur-sm hover:border-[var(--color-gold)]/50 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => go(index + 1)}
          aria-label="Next certificate"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/70 text-white backdrop-blur-sm hover:border-[var(--color-gold)]/50 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Dot pagination */}
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {certs.map((c, i) => (
          <button
            key={c.name}
            onClick={() => go(i)}
            aria-label={`Go to ${c.name}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === index ? 20 : 6,
              backgroundColor: i === index ? "var(--color-gold)" : "var(--color-border)",
            }}
          />
        ))}
      </div>
    </div>
  )
}
