import { Bot, Sparkles, Workflow } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { certifications } from "../data/profile"

export type Cert = (typeof certifications)[number]

export type Accent = {
  icon: LucideIcon
  color: string
  ring: string
  glow: string
  hoverBorder: string
}

// Groups certificates visually by theme (Claude platform / agentic-AI / AI fluency) so the grid
// reads as organized credentials rather than one flat repeated card. Shared by the certifications
// grid and the featured carousel so both use the same color-coding.
export function getAccent(name: string): Accent {
  if (/model context protocol|agent skills|subagents/i.test(name)) {
    return {
      icon: Workflow,
      color: "var(--color-violet)",
      ring: "border-violet-500/40",
      glow: "shadow-violet-500/10",
      hoverBorder: "hover:border-violet-500/50",
    }
  }
  if (/claude/i.test(name)) {
    return {
      icon: Bot,
      color: "var(--color-cyan)",
      ring: "border-cyan-500/40",
      glow: "shadow-cyan-500/10",
      hoverBorder: "hover:border-cyan-500/50",
    }
  }
  return {
    icon: Sparkles,
    color: "var(--color-gold)",
    ring: "border-[var(--color-gold)]/40",
    glow: "shadow-[var(--color-gold)]/10",
    hoverBorder: "hover:border-[var(--color-gold)]/50",
  }
}
