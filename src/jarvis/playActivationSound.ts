/**
 * Synthesizes a short sci-fi "power-up" chirp via the Web Audio API — no
 * audio file needed. Fails silently if audio is unavailable/blocked
 * (autoplay policy, unsupported browser) since sound is a nice-to-have and
 * should never break the panel.
 */
export function playActivationSound() {
  try {
    const ctor =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!ctor) return

    const ctx = new ctor()
    const now = ctx.currentTime
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = "sine"
    osc.frequency.setValueAtTime(220, now)
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.25)

    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.03)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4)

    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(now)
    osc.stop(now + 0.42)
    osc.onended = () => ctx.close()
  } catch {
    // Sound is a nice-to-have — never let it break the panel.
  }
}
