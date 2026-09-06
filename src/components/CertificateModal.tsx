import { useEffect } from "react"
import { Award, ExternalLink, ShieldCheck, X } from "lucide-react"
import { personal, type certifications } from "../data/profile"

type Cert = (typeof certifications)[number]

export function CertificateModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-[fadeIn_0.25s_ease]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${cert.name}`}
      style={{ background: "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(20,18,10,0.55), rgba(0,0,0,0.92))" }}
    >
      {/* dramatic spotlight sweep behind the reveal */}
      <div
        className="pointer-events-none absolute inset-0 animate-[spotlightIn_0.6s_ease-out]"
        style={{
          background: "radial-gradient(420px 320px at 50% 42%, color-mix(in srgb, var(--color-gold) 22%, transparent), transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-xl animate-[revealIn_0.5s_cubic-bezier(0.16,1,0.3,1)]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-white hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition-colors"
        >
          <X size={16} />
        </button>

        {/* Browser-window frame — the "credential displayed on screen" reveal */}
        <div className="overflow-hidden rounded-2xl border border-[var(--color-gold)]/40 shadow-[0_0_80px_-10px] shadow-[var(--color-gold)]/30 bg-[var(--color-surface)]">
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="mx-auto flex items-center gap-1.5 rounded-md bg-[var(--color-surface)] px-3 py-1 font-mono text-[11px] text-[var(--color-text-dim)]">
              <ShieldCheck size={11} className="text-[var(--color-gold)]" /> verify.skilljar.com
            </span>
          </div>

          {/* Certificate content */}
          <div className="relative overflow-hidden p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, color-mix(in srgb, var(--color-gold) 14%, transparent), transparent 70%)",
              }}
            />
            <span className="absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-[var(--color-gold)]/50 rounded-tl-md" />
            <span className="absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-[var(--color-gold)]/50 rounded-tr-md" />
            <span className="absolute left-4 bottom-4 h-6 w-6 border-l-2 border-b-2 border-[var(--color-gold)]/50 rounded-bl-md" />
            <span className="absolute right-4 bottom-4 h-6 w-6 border-r-2 border-b-2 border-[var(--color-gold)]/50 rounded-br-md" />

            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-surface-2)] glow-gold pulse-gold">
                <Award size={28} className="text-[var(--color-gold)]" />
              </div>

              <p className="mt-5 font-mono text-xs tracking-[0.2em] text-[var(--color-gold)]">CERTIFICATE OF COMPLETION</p>

              <h3 className="mt-4 font-script text-3xl text-white leading-snug">{cert.name}</h3>

              <p className="mt-4 text-sm text-[var(--color-text-dim)]">This certifies that</p>
              <p className="mt-1 text-xl font-bold text-white">{personal.name}</p>
              <p className="mt-1 text-sm text-[var(--color-text-dim)]">has successfully completed the course</p>

              <div className="mt-6 flex items-center justify-center gap-6 border-t border-[var(--color-border)] pt-5 font-mono text-xs text-[var(--color-text-dim)]">
                <div>
                  <p className="text-[10px] uppercase tracking-wider">Issued by</p>
                  <p className="mt-1 text-white">{cert.issuer}</p>
                </div>
                <div className="h-8 w-px bg-[var(--color-border)]" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider">Date</p>
                  <p className="mt-1 text-white">{cert.date}</p>
                </div>
              </div>

              <a
                href={cert.link ?? personal.skilljarProfile}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:brightness-110"
              >
                <ShieldCheck size={16} /> Verify on Skilljar <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes spotlightIn {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes revealIn {
          0% { opacity: 0; transform: perspective(1000px) rotateX(18deg) scale(0.85) translateY(30px); }
          100% { opacity: 1; transform: perspective(1000px) rotateX(0deg) scale(1) translateY(0); }
        }
      `}</style>
    </div>
  )
}
