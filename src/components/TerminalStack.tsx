const STACK = ["LLMs", "RAG", "Multi-Agent", "LangGraph", "Python", "FastAPI", "React", "Databases"]

/** Technical hero visual — a terminal-style card revealing the core stack. Not a stock image. */
export function TerminalStack() {
  return (
    <div className="glass tilt-card glow-cyan rounded-xl shadow-2xl shadow-black/50 overflow-hidden w-full max-w-md mx-auto">
      <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-[var(--color-text-dim)]">sunil@engineering:~</span>
      </div>

      <div className="p-5 font-mono text-sm leading-relaxed">
        <p className="text-[var(--color-text-dim)]">
          <span className="text-cyan-400">$</span> whoami
        </p>
        <p className="text-white mt-0.5">AI Engineer · Python & LLM Systems</p>

        <p className="text-[var(--color-text-dim)] mt-4">
          <span className="text-cyan-400">$</span> stack --list
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {STACK.map((item, i) => (
            <div
              key={item}
              className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs text-[var(--color-text)] opacity-0 animate-[fadeIn_0.4s_ease_forwards]"
              style={{ animationDelay: `${i * 90 + 200}ms` }}
            >
              {item}
            </div>
          ))}
        </div>

        <p className="mt-4 text-[var(--color-text-dim)]">
          <span className="text-cyan-400">$</span> status <span className="text-green-400">open to work</span>
          <span className="inline-block w-2 h-4 bg-cyan-400/80 ml-1 align-middle animate-blink" />
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
