import { type FormEvent, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { SectionBackground } from "../components/SectionBackground"
import { SectionDivider } from "../components/SectionDivider"
import { Reveal } from "../components/Reveal"
import { LinkedinIcon } from "../components/icons"
import { personal } from "../data/profile"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <SectionDivider />
      <SectionBackground variant="mixed" pattern="grid" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// Contact" title="Let's build something intelligent." />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-cyan-500/40 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-cyan-300">
                  <Mail size={17} />
                </span>
                <div>
                  <p className="text-xs text-[var(--color-text-dim)]">Email</p>
                  <p className="text-sm font-medium text-white">{personal.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-cyan-500/40 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-cyan-300">
                  <Phone size={17} />
                </span>
                <div>
                  <p className="text-xs text-[var(--color-text-dim)]">Phone</p>
                  <p className="text-sm font-medium text-white">{personal.phone}</p>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-cyan-500/40 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-cyan-300">
                  <LinkedinIcon size={17} />
                </span>
                <div>
                  <p className="text-xs text-[var(--color-text-dim)]">LinkedIn</p>
                  <p className="text-sm font-medium text-white">/in/sunil-date</p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface-2)] text-cyan-300">
                  <MapPin size={17} />
                </span>
                <div>
                  <p className="text-xs text-[var(--color-text-dim)]">Location</p>
                  <p className="text-sm font-medium text-white">{personal.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--color-text-dim)] mb-1.5">Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3.5 py-2.5 text-sm text-white outline-none focus:border-cyan-500/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--color-text-dim)] mb-1.5">Email</label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3.5 py-2.5 text-sm text-white outline-none focus:border-cyan-500/60"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-text-dim)] mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3.5 py-2.5 text-sm text-white outline-none focus:border-cyan-500/60"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
