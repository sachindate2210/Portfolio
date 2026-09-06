import { SectionHeading } from "../components/SectionHeading"
import { SectionBackground } from "../components/SectionBackground"
import { SectionDivider } from "../components/SectionDivider"
import { ExperienceTimeline } from "../components/ExperienceTimeline"
import { experience } from "../data/profile"

export function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <SectionDivider />
      <SectionBackground variant="gold" pattern="grid" />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="// Experience"
          title="Professional experience"
          description="A single company, two chapters — from full-stack web development into AI engineering."
        />

        <div className="mt-16">
          <ExperienceTimeline entries={experience} />
        </div>
      </div>
    </section>
  )
}
