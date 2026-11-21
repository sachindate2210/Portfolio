import { ArrowRight, Briefcase, Mail } from "lucide-react"
import { GridBackground } from "../components/GridBackground"
import { TerminalStack } from "../components/TerminalStack"
import { OrbitRings } from "../components/OrbitRings"
import { FloatingChips } from "../components/FloatingChips"
import { ScrollIndicator } from "../components/ScrollIndicator"
import { Typewriter } from "../components/Typewriter"
import { Reveal } from "../components/Reveal"
import { GithubIcon, LinkedinIcon } from "../components/icons"
import { heroIntro, personal } from "../data/profile"

const ROLES = ["AI Engineer", "Python Developer", "LLM Integrator", "Automation Builder"]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16 overflow-hidden">
      <GridBackground />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1 font-mono text-xs text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {personal.openTo}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 font-script text-2xl sm:text-3xl text-gradient-gold -mb-1">The Portfolio</p>
            <h1 className="mt-1 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              {personal.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-lg sm:text-xl font-medium text-gradient">{personal.shortTitle}</p>
            <div className="glass mt-3 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-sm sm:text-base shadow-[0_0_30px_-14px_var(--color-cyan)]">
              <span className="text-[var(--color-gold)]">$</span>
              <span className="text-[var(--color-text-dim)]">role --current</span>
              <Typewriter words={ROLES} className="font-semibold text-cyan-300" />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-[var(--color-text-dim)]">{heroIntro}</p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("experience")}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-500/50"
              >
                <Briefcase size={16} /> View Experience
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-500/50"
              >
                <Mail size={16} /> Contact Me
              </button>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-500/50"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-cyan-500/50"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative">
            <OrbitRings />
            <FloatingChips />
            <TerminalStack />
          </div>
        </Reveal>
      </div>

      <ScrollIndicator targetId="about" />
    </section>
  )
}
