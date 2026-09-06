import { useEffect, useRef } from "react"

type Particle = { x: number; y: number; vx: number; vy: number }

/**
 * Lightweight animated particle network — connecting dots that gently drift and react to the
 * cursor. Canvas-based (not DOM nodes) so it stays cheap even with a few dozen particles.
 */
export function ParticleNetwork({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let mouse = { x: -9999, y: -9999 }
    let raf = 0

    const COUNT = 46
    const LINK_DIST = 130
    const CYAN = "34, 211, 238"
    const GOLD = "245, 185, 66"

    function resize() {
      const parent = canvas!.parentElement
      width = parent ? parent.clientWidth : window.innerWidth
      height = parent ? parent.clientHeight : window.innerHeight
      canvas!.width = width * devicePixelRatio
      canvas!.height = height * devicePixelRatio
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
    }

    function init() {
      resize()
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function step() {
      ctx!.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            ctx!.strokeStyle = `rgba(${CYAN}, ${0.16 * (1 - dist / LINK_DIST)})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      for (const p of particles) {
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        const near = dm < 160
        ctx!.fillStyle = near ? `rgba(${GOLD}, 0.9)` : `rgba(${CYAN}, 0.55)`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, near ? 2.2 : 1.6, 0, Math.PI * 2)
        ctx!.fill()

        if (near) {
          ctx!.strokeStyle = `rgba(${GOLD}, ${0.25 * (1 - dm / 160)})`
          ctx!.beginPath()
          ctx!.moveTo(p.x, p.y)
          ctx!.lineTo(mouse.x, mouse.y)
          ctx!.stroke()
        }
      }

      raf = requestAnimationFrame(step)
    }

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    function onLeave() {
      mouse = { x: -9999, y: -9999 }
    }

    init()
    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)

    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(step)
    } else {
      step()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={"absolute inset-0 " + className} />
}
