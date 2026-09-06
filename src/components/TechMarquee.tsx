import { skillCategories } from "../data/profile"

const ALL_TECH = skillCategories.flatMap((c) => c.skills)
const LOOP = [...ALL_TECH, ...ALL_TECH]

/** Infinite-scrolling strip of technologies — a quick, technical "at a glance" signal. */
export function TechMarquee() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md py-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-8 animate-marquee">
        {LOOP.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-2 font-mono text-sm text-[var(--color-text-dim)] whitespace-nowrap"
          >
            <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
