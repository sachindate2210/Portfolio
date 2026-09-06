type TechBadgeProps = {
  label: string
  className?: string
}

export function TechBadge({ label, className = "" }: TechBadgeProps) {
  return (
    <span
      className={
        "inline-flex items-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-dim)] transition-colors hover:border-cyan-500/50 hover:text-cyan-300 " +
        className
      }
    >
      {label}
    </span>
  )
}
