import { MapPin } from "lucide-react"
import { Reveal } from "./Reveal"
import { TechBadge } from "./TechBadge"
import type { ExperienceEntry } from "../data/profile"

export function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-[var(--color-border)] sm:left-[19px]" />

      <div className="space-y-12">
        {entries.map((entry, ei) => (
          <div key={entry.company} className="relative pl-10 sm:pl-14">
            <span className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/40 bg-[var(--color-surface-2)] shadow-[0_0_0_4px_var(--color-bg)] sm:h-10 sm:w-10">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>

            <Reveal delay={ei * 100}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold text-white">{entry.company}</h3>
                <span className="font-mono text-xs text-[var(--color-text-dim)]">{entry.period}</span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-[var(--color-text-dim)]">
                <MapPin size={13} /> {entry.location}
              </p>
            </Reveal>

            <div className="mt-6 space-y-6">
              {entry.roles.map((role, ri) => (
                <Reveal key={role.title} delay={ei * 100 + ri * 90 + 80}>
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 tilt-hover hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold text-white">{role.title}</h4>
                      <span className="font-mono text-xs text-cyan-300">{role.period}</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {role.bullets.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-[var(--color-text-dim)]">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-dim)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {role.tech.map((t) => (
                        <TechBadge key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
