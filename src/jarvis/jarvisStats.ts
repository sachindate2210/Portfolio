/**
 * Data for the JARVIS system panel — derived entirely from the existing
 * `data/profile.ts` source of truth (read-only import, nothing duplicated/invented).
 */
import { Award, Calendar, Cpu, Layers, MapPin, Radio, Sparkles, User } from "lucide-react"
import type { ComponentType } from "react"
import { certifications, developerJourney, personal, skillCategories } from "../data/profile"

export type JarvisStat = {
  icon: ComponentType<{ size?: number; className?: string }>
  label: string
  value: string
  detail?: string
}

const totalSkills = new Set(skillCategories.flatMap((c) => c.skills)).size
const sinceYear = Number(developerJourney[0]?.value) || new Date().getFullYear()
const experienceYears = Math.max(1, new Date().getFullYear() - sinceYear)

export const jarvisStats: JarvisStat[] = [
  { icon: User, label: "Identity", value: personal.name },
  { icon: Cpu, label: "Role", value: "AI Engineer", detail: personal.shortTitle },
  { icon: MapPin, label: "Location", value: "Nagpur, India", detail: personal.location },
  { icon: Radio, label: "Status", value: "Open to work", detail: personal.openTo },
  {
    icon: Calendar,
    label: "Experience",
    value: `${experienceYears}+ yrs`,
    detail: `Since ${developerJourney[0]?.value ?? "—"}`,
  },
  {
    icon: Sparkles,
    label: "AI Focus",
    value: `Since ${developerJourney[1]?.value ?? "—"}`,
    detail: developerJourney[1]?.detail,
  },
  {
    icon: Layers,
    label: "Skills Tracked",
    value: String(totalSkills),
    detail: `Across ${skillCategories.length} categories`,
  },
  { icon: Award, label: "Certifications", value: String(certifications.length), detail: "Anthropic Academy" },
]
