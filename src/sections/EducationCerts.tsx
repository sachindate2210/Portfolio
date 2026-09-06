import { useState } from "react"
import { Award, BadgeCheck, ChevronDown, GraduationCap, Maximize2 } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { SectionBackground } from "../components/SectionBackground"
import { SectionDivider } from "../components/SectionDivider"
import { CertificateModal } from "../components/CertificateModal"
import { CertificateCarousel } from "../components/CertificateCarousel"
import { Reveal } from "../components/Reveal"
import { getAccent, type Cert } from "../lib/certAccent"
import { certifications, education } from "../data/profile"

const PREVIEW_COUNT = 3

function CertCard({ c, delay, onOpen }: { c: Cert; delay: number; onOpen: (c: Cert) => void }) {
  const accent = getAccent(c.name)
  const Icon = accent.icon

  return (
    <Reveal delay={delay}>
      <button
        onClick={() => onOpen(c)}
        className={
          "group relative flex h-full w-full flex-col gap-4 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-left tilt-hover hover:shadow-2xl " +
          accent.glow + " " + accent.hoverBorder
        }
      >
        {/* Ambient tint + shine sweep on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(220px 140px at 10% 0%, color-mix(in srgb, ${accent.color} 16%, transparent), transparent)` }}
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="shine-sweep" />
        </div>

        {/* Large faint watermark seal */}
        <Icon
          size={96}
          strokeWidth={1}
          className="pointer-events-none absolute -bottom-5 -right-5 opacity-[0.05] group-hover:opacity-[0.09] transition-opacity"
          style={{ color: accent.color }}
        />

        <div className="relative flex items-start justify-between">
          <span
            className={"relative flex h-11 w-11 items-center justify-center rounded-xl border bg-[var(--color-surface-2)] transition-transform duration-300 group-hover:scale-110 " + accent.ring}
            style={{ color: accent.color, boxShadow: `0 0 0 0 color-mix(in srgb, ${accent.color} 45%, transparent)` }}
          >
            <span
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ boxShadow: `0 0 18px 2px color-mix(in srgb, ${accent.color} 55%, transparent)` }}
            />
            <Icon size={19} className="relative" />
          </span>
          <Maximize2 size={14} className="mt-1 shrink-0 text-[var(--color-text-dim)] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <p className="relative font-semibold text-white text-[15px] leading-snug">{c.name}</p>

        <div className="relative mt-auto flex items-center justify-between gap-2">
          <span
            className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 text-[11px] text-[var(--color-text-dim)]"
          >
            <BadgeCheck size={12} style={{ color: accent.color }} />
            {c.issuer}
          </span>
          <span className="font-mono text-[11px] text-[var(--color-text-dim)] whitespace-nowrap">{c.date}</span>
        </div>
      </button>
    </Reveal>
  )
}

export function EducationCerts() {
  const [expanded, setExpanded] = useState(false)
  const [activeCert, setActiveCert] = useState<Cert | null>(null)
  const visible = expanded ? certifications : certifications.slice(0, PREVIEW_COUNT)
  const hiddenCount = certifications.length - PREVIEW_COUNT

  return (
    <section className="relative py-28 overflow-hidden">
      <SectionDivider />
      <SectionBackground variant="gold" pattern="dots" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// Background" title="Education & certifications" />

        <div className="mt-14">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
            <GraduationCap size={16} className="text-cyan-400" /> Education
          </h3>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((e, i) => (
              <Reveal key={e.school} delay={i * 80}>
                <div className="relative h-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-gradient-to-r from-[color-mix(in_srgb,var(--color-gold)_10%,var(--color-surface))] to-[var(--color-surface)] p-5 pl-6 tilt-hover hover:border-[color-mix(in_srgb,var(--color-gold)_50%,transparent)]">
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-gold)] to-[var(--color-gold-dim)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-white">{e.school}</p>
                    <span className="font-mono text-xs text-[color-mix(in_srgb,var(--color-gold)_80%,white)]">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-text-dim)]">{e.degree}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Featured carousel — a separate, auto-rotating spotlight strip (with dot pagination),
            additive to the full grid below rather than replacing it. */}
        {certifications.length > 0 && (
          <div className="mt-14">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
              <Award size={16} className="text-[var(--color-gold)]" /> Credential Spotlight
            </h3>
            <p className="mt-1.5 text-xs text-[var(--color-text-dim)]">A closer look at recently earned credentials.</p>
            <div className="mt-5">
              <CertificateCarousel certs={certifications} onOpen={setActiveCert} />
            </div>
          </div>
        )}

        <div className="relative mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                <Award size={16} className="text-[var(--color-gold)]" /> All Certifications
                {certifications.length > 0 && (
                  <span className="font-mono text-xs text-[var(--color-text-dim)]">({certifications.length})</span>
                )}
              </h3>
              <p className="mt-1.5 text-xs text-[var(--color-text-dim)]">Click any certificate to view its details.</p>
            </div>

            {certifications.length > 0 && (
              <div className="flex items-center gap-4 font-mono text-[11px] text-[var(--color-text-dim)]">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--color-cyan)]" /> Claude</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--color-violet)]" /> Agentic AI</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" /> AI Fluency</span>
              </div>
            )}
          </div>

          {certifications.length > 0 ? (
            <>
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {visible.map((c, i) => (
                  <CertCard key={c.name} c={c} delay={i * 60} onOpen={setActiveCert} />
                ))}
              </div>

              {hiddenCount > 0 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setExpanded((v) => !v)}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-white hover:border-[var(--color-gold)]/50 transition-colors"
                  >
                    {expanded ? "Show less" : `Show all ${certifications.length} certifications`}
                    <ChevronDown size={15} className={expanded ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <Reveal delay={80}>
              <div className="mt-5 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/50 p-6 text-sm text-[var(--color-text-dim)]">
                No certifications listed yet. Add entries to{" "}
                <code className="text-white">certifications</code> in{" "}
                <code className="text-white">src/data/profile.ts</code> and they'll appear here as cards.
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {activeCert && <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />}
    </section>
  )
}
