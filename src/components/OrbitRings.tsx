/** Decorative concentric pulse rings — signals "live AI system" behind the hero visual. */
export function OrbitRings() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute rounded-full border border-[var(--color-cyan)]/20"
          style={{
            width: `${60 + i * 20}%`,
            height: `${60 + i * 20}%`,
            animation: `orbitPulse 4s ease-out ${i * 1.1}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes orbitPulse {
          0% { transform: scale(0.85); opacity: 0.5; }
          80% { opacity: 0; }
          100% { transform: scale(1.05); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
