import { ArrowUpRight } from "lucide-react"
import { TechBadge } from "./TechBadge"
import { GithubIcon } from "./icons"
import type { Project } from "../data/profile"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 tilt-hover hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
          {project.name}
        </h3>
        <div className="flex gap-2 shrink-0">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="text-[var(--color-text-dim)] hover:text-white">
              <GithubIcon size={18} />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="text-[var(--color-text-dim)] hover:text-white">
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm text-[var(--color-text-dim)]">{project.description}</p>

      <div className="mt-4 space-y-2 text-sm">
        <p><span className="font-semibold text-white">Problem: </span><span className="text-[var(--color-text-dim)]">{project.problem}</span></p>
        <p><span className="font-semibold text-white">Solution: </span><span className="text-[var(--color-text-dim)]">{project.solution}</span></p>
      </div>

      {project.features.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-[var(--color-text-dim)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </div>
  )
}
