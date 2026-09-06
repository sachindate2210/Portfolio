import type { ReactNode } from "react"
import { useInView } from "../hooks/useInView"

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

/** Wraps children with a subtle fade + slide-up reveal when scrolled into view. */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  )
}
