import { ParticleNetwork } from "./ParticleNetwork"

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="absolute inset-0 bg-stars opacity-70 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_10%,black,transparent)]" />
      <div className="absolute inset-0 bg-mesh-glow" />
      <ParticleNetwork className="pointer-events-auto opacity-80 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_15%,black,transparent)]" />
      <div className="absolute inset-0 bg-radial-fade" />
    </div>
  )
}
