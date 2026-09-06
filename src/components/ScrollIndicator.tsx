import { ChevronDown } from "lucide-react"

export function ScrollIndicator({ targetId }: { targetId: string }) {
  return (
    <button
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
      aria-label="Scroll to next section"
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--color-text-dim)] hover:text-cyan-300 transition-colors"
    >
      <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
      <ChevronDown size={16} className="animate-bounce" />
    </button>
  )
}
