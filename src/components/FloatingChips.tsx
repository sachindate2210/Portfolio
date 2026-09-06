const CHIPS = [
  { label: "Python", top: "6%", left: "-8%", delay: 0 },
  { label: "LLMs", top: "72%", left: "-12%", delay: 0.6 },
  { label: "NLP", top: "88%", left: "58%", delay: 1.2 },
  { label: "React.js", top: "-6%", left: "62%", delay: 1.8 },
]

/** Small tech chips floating around the hero visual — reinforces the AI/engineering identity at a glance. */
export function FloatingChips() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden sm:block">
      {CHIPS.map((chip) => (
        <span
          key={chip.label}
          className="absolute rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-1 font-mono text-xs text-cyan-300 shadow-lg shadow-black/30 backdrop-blur-sm"
          style={{
            top: chip.top,
            left: chip.left,
            animation: `chipFloat 5s ease-in-out ${chip.delay}s infinite`,
          }}
        >
          {chip.label}
        </span>
      ))}
      <style>{`
        @keyframes chipFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}
