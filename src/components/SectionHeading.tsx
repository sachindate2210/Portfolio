import { Reveal } from "./Reveal"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-sm text-cyan-400 tracking-wider">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {description && <p className="mt-4 text-base sm:text-lg text-[var(--color-text-dim)]">{description}</p>}
    </Reveal>
  )
}
