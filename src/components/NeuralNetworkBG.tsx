const NODES = [
  { x: 40, y: 60 }, { x: 40, y: 180 }, { x: 40, y: 300 },
  { x: 220, y: 30 }, { x: 220, y: 130 }, { x: 220, y: 230 }, { x: 220, y: 330 },
  { x: 400, y: 90 }, { x: 400, y: 220 },
  { x: 560, y: 160 },
]

const EDGES: [number, number][] = [
  [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 5], [2, 6],
  [3, 7], [4, 7], [4, 8], [5, 8], [6, 8],
  [7, 9], [8, 9],
]

/** Subtle animated neural-network graphic — a visual signature for the AI-focused sections. */
export function NeuralNetworkBG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 360"
      className={"pointer-events-none absolute " + className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="var(--color-gold)"
          strokeOpacity={0.18}
          strokeWidth={1}
        />
      ))}
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={3}
          fill="var(--color-gold)"
          opacity={0.5}
          style={{ animation: `nnPulse 3s ease-in-out ${(i % 5) * 0.4}s infinite` }}
        />
      ))}
      <style>{`
        @keyframes nnPulse {
          0%, 100% { opacity: 0.25; r: 2.5; }
          50% { opacity: 0.9; r: 4; }
        }
      `}</style>
    </svg>
  )
}
