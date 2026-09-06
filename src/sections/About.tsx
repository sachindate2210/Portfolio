import { Cpu, Repeat, Rocket, TrendingUp } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { SectionBackground } from "../components/SectionBackground"
import { SectionDivider } from "../components/SectionDivider"
import { Reveal } from "../components/Reveal"
import { aboutSummary, coreStrengths, engineeringPhilosophy } from "../data/profile"

const ICONS = [Rocket, Repeat, TrendingUp, Cpu]

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <SectionDivider />
      <SectionBackground variant="cyan" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// About"
          title="From full-stack engineering to AI systems"
          description="A career built on a simple pattern: learn the fundamentals deeply, then apply them to whatever problem is in front of you."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-5">
            {aboutSummary.map((para, i) => (
              <Reveal key={i} delay={i * 100}>
                <p className="text-base sm:text-lg leading-relaxed text-[var(--color-text-dim)]">{para}</p>
              </Reveal>
            ))}

            <Reveal delay={220}>
              <ul className="mt-6 space-y-3">
                {coreStrengths.map((s) => (
                  <li key={s} className="flex gap-3 text-sm sm:text-base text-[var(--color-text)]">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={150}>
              <div className="glass rounded-xl p-6">
                <p className="font-mono text-xs text-violet-300 tracking-wider">ENGINEERING PHILOSOPHY</p>
                <div className="mt-5 space-y-5">
                  {engineeringPhilosophy.map((p, i) => {
                    const Icon = ICONS[i % ICONS.length]
                    return (
                      <div key={p.title} className="flex gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] text-cyan-300">
                          <Icon size={15} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{p.title}</p>
                          <p className="text-sm text-[var(--color-text-dim)] mt-0.5">{p.detail}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
