type SectionBackgroundProps = {
  variant?: "cyan" | "gold" | "violet" | "mixed"
  pattern?: "grid" | "dots" | "none"
  className?: string
}

const GLOWS: Record<NonNullable<SectionBackgroundProps["variant"]>, string> = {
  cyan: "radial-gradient(ellipse 60% 50% at 15% 20%, color-mix(in srgb, var(--color-cyan) 9%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 90% 85%, color-mix(in srgb, var(--color-violet) 6%, transparent), transparent 70%)",
  gold: "radial-gradient(ellipse 55% 45% at 85% 15%, color-mix(in srgb, var(--color-gold) 9%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 10% 85%, color-mix(in srgb, var(--color-violet) 7%, transparent), transparent 70%)",
  violet: "radial-gradient(ellipse 55% 50% at 20% 80%, color-mix(in srgb, var(--color-violet) 10%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 85% 10%, color-mix(in srgb, var(--color-cyan) 6%, transparent), transparent 70%)",
  mixed: "radial-gradient(ellipse 50% 45% at 50% 0%, color-mix(in srgb, var(--color-gold) 7%, transparent), transparent 70%), radial-gradient(ellipse 55% 50% at 15% 90%, color-mix(in srgb, var(--color-cyan) 7%, transparent), transparent 70%), radial-gradient(ellipse 45% 40% at 90% 90%, color-mix(in srgb, var(--color-violet) 7%, transparent), transparent 70%)",
}

/**
 * Animated ambient backdrop (grid/dots + starfield + drifting glow) reused across sections so the
 * whole site shares one visual language — the same "alive" feel as the Hero and AI Stack sections,
 * just dialed down. Each section picks its own accent + pattern so it doesn't feel copy-pasted.
 */
export function SectionBackground({ variant = "cyan", pattern = "grid", className = "" }: SectionBackgroundProps) {
  return (
    <div className={"pointer-events-none absolute inset-0 overflow-hidden " + className}>
      {pattern === "grid" && (
        <div className="absolute inset-0 bg-grid opacity-[0.15] animate-grid-pan [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,black,transparent)]" />
      )}
      {pattern === "dots" && (
        <div className="absolute inset-0 bg-stars opacity-50 animate-twinkle [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,black,transparent)]" />
      )}
      <div className="absolute inset-0 bg-stars opacity-25 animate-twinkle [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" style={{ animationDelay: "1.5s" }} />
      <div className="absolute inset-0 animate-section-drift" style={{ background: GLOWS[variant] }} />
    </div>
  )
}
