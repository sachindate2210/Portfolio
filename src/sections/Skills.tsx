import { BrainCircuit, Database, ServerCog, Layout } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { SectionBackground } from "../components/SectionBackground"
import { SectionDivider } from "../components/SectionDivider"
import { Reveal } from "../components/Reveal"
import { TechBadge } from "../components/TechBadge"
import { skillCategories } from "../data/profile"

const ICONS = [BrainCircuit, ServerCog, Layout, Database]

export function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <SectionDivider />
      <SectionBackground variant="violet" pattern="dots" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// Skills"
          title="Technical skill set"
          description="Organized by area — reflecting the technologies I actually work with day to day."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={cat.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 tilt-hover hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] text-cyan-300 transition-colors group-hover:border-cyan-500/50 group-hover:text-cyan-200">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-text-dim)]">{cat.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <TechBadge key={s} label={s} />
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
