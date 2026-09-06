import { SectionHeading } from "../components/SectionHeading"
import { SectionBackground } from "../components/SectionBackground"
import { SectionDivider } from "../components/SectionDivider"
import { Reveal } from "../components/Reveal"
import { GithubIcon } from "../components/icons"
import { personal } from "../data/profile"

export function GitHubSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <SectionDivider />
      <SectionBackground variant="violet" pattern="grid" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="// Open Source" title="GitHub" />

        <Reveal delay={100}>
          {personal.github ? (
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="mt-14 inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-white hover:border-cyan-500/50"
            >
              <GithubIcon size={16} /> View GitHub Profile
            </a>
          ) : (
            <div className="mt-14 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/50 p-10 text-center">
              <GithubIcon className="mx-auto text-[var(--color-text-dim)]" size={28} />
              <p className="mt-4 font-mono text-sm text-cyan-300">github: undefined</p>
              <p className="mt-2 text-sm text-[var(--color-text-dim)] max-w-md mx-auto">
                Add your GitHub URL to <code className="text-white">personal.github</code> in{" "}
                <code className="text-white">src/data/profile.ts</code> to show repository cards and activity here.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
