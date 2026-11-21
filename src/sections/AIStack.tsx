import { SectionHeading } from "../components/SectionHeading"
import { SectionDivider } from "../components/SectionDivider"
import { Reveal } from "../components/Reveal"
import { NeuralNetworkBG } from "../components/NeuralNetworkBG"
import { aiStack } from "../data/profile"

function Connector({ height = 32, delay = 0 }: { height?: number; delay?: number }) {
  return (
    <div className="relative w-px shrink-0" style={{ height }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-gold)]/60 to-[var(--color-gold)]/10" />
      <div
        className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--color-gold)] shadow-[0_0_8px_2px] shadow-[var(--color-gold)]/60 opacity-0 animate-[flowDot_2s_ease-in-out_infinite]"
        style={{ animationDelay: `${delay}ms` }}
      />
    </div>
  )
}

export function AIStack() {
  return (
    <section id="ai" className="relative py-28 overflow-hidden">
      <SectionDivider />
      <NeuralNetworkBG className="inset-0 w-full h-full opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// AI Engineering"
          title="AI engineering stack"
          description="How LLM, retrieval and agent capability actually gets integrated into production systems — from language model to shipped feature."
        />

        <Reveal delay={100}>
          <div className="mt-16 glass rounded-2xl p-6 sm:p-10 overflow-x-auto thin-scrollbar">
            <div className="min-w-[640px] flex flex-col items-center">
              {/* Root */}
              <div className="pulse-gold rounded-lg border border-[var(--color-gold)]/50 bg-[var(--color-surface-2)] px-6 py-2.5 font-mono text-sm font-semibold text-gradient-gold">
                {aiStack.root}
              </div>

              <Connector height={32} />

              {/* Branch row */}
              <div className="grid w-full grid-cols-3 gap-4">
                {aiStack.branches.map((branch, bi) => (
                  <div key={branch.label} className="relative flex flex-col items-center">
                    <Connector height={32} delay={bi * 150} />
                    <div className="rounded-lg border border-[var(--color-gold)]/40 bg-[var(--color-surface-2)] px-4 py-2 font-mono text-sm font-semibold text-[var(--color-gold)]">
                      {branch.label}
                    </div>

                    <div className="mt-2 flex flex-col items-center w-full">
                      {branch.children.map((child, ci) => (
                        <div key={child} className="flex flex-col items-center w-full">
                          <Connector height={14} delay={bi * 150 + ci * 100} />
                          <div className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-center text-xs sm:text-sm text-[var(--color-text-dim)] hover:border-[var(--color-gold)]/50 hover:text-white transition-colors">
                            {child}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Connector height={32} />

              <div className="pulse-gold rounded-lg border border-[var(--color-gold)]/60 bg-gradient-to-r from-[var(--color-gold)]/10 to-[var(--color-violet)]/10 px-6 py-2.5 font-mono text-sm font-semibold text-white">
                {aiStack.output}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes flowDot {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  )
}
