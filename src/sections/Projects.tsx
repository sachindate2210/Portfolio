import { FolderGit2 } from "lucide-react"
import { SectionHeading } from "../components/SectionHeading"
import { SectionBackground } from "../components/SectionBackground"
import { SectionDivider } from "../components/SectionDivider"
import { ProjectCard } from "../components/ProjectCard"
import { Reveal } from "../components/Reveal"
import { projects } from "../data/profile"

export function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <SectionDivider />
      <SectionBackground variant="cyan" pattern="dots" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// Projects"
          title="Featured projects"
          description="Detailed case studies of systems I've built — added here as they're documented."
        />

        {projects.length > 0 ? (
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <div className="mt-14 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)]/50 p-10 text-center">
              <FolderGit2 className="mx-auto text-[var(--color-text-dim)]" size={28} />
              <p className="mt-4 font-mono text-sm text-cyan-300">projects.length === 0</p>
              <p className="mt-2 text-sm text-[var(--color-text-dim)] max-w-md mx-auto">
                Project case studies aren't published yet. Add entries to{" "}
                <code className="text-white">src/data/profile.ts</code> — each one renders automatically as a card
                here, with a detailed problem / solution / tech breakdown.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
