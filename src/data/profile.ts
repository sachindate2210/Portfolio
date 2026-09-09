/**
 * Central content file for the portfolio.
 * All data here is sourced directly from Sunil's LinkedIn profile (exported PDF, Sep 2026).
 * Nothing is fabricated — sections with no verified source content are left as
 * clearly-marked placeholders (see PLACEHOLDER_* flags) so they're easy to fill in later
 * without touching any component code.
 */

export const personal = {
  name: "Sunil Date",
  headline: "AI Engineer | AI/ML Developer | Python, LLMs & Automation | Ex-PHP/Laravel Developer",
  shortTitle: "AI Engineer & Python Developer",
  location: "Nagpur, Maharashtra, India",
  email: "sachindate2210@gmail.com",
  phone: "+91 91587 79066",
  linkedin: "https://www.linkedin.com/in/sunil-date-1b6808275/",
  github: "https://github.com/sachindate2210",
  openTo: "Full-time opportunities · Nagpur (On-site / Hybrid / Remote)",
  // Public Skilljar profile — fallback link for any certification without its own direct URL.
  skilljarProfile: "https://anthropic.skilljar.com/accounts/profile/?next=/",
  // Web3Forms access key — public by design (client-side form delivery), tied to sachindate2210@gmail.com.
  web3formsKey: "ab54795f-4b2d-444f-ad95-c1004fa129b3",
}

export const heroIntro =
  "AI Engineer building intelligent, automation-driven systems with Python — from LLM-powered features and AI agents to production automation pipelines, backed by a full-stack engineering foundation."

export const aboutSummary = [
  "AI Engineer with a background in full-stack web development, now focused on building intelligent, automation-driven solutions using Python. Over the past two years, I've transitioned from traditional web development (PHP/Laravel) into AI/ML engineering — working with Python, machine learning frameworks, LLM integrations, and automation pipelines.",
  "I enjoy solving real-world problems by combining solid software engineering fundamentals with modern AI capabilities — moving from years of shipping production web applications to building the intelligent systems that are reshaping how software gets built.",
]

export const coreStrengths = [
  "Python development for AI/ML applications and backend systems",
  "Building and integrating LLM-powered features and AI agents",
  "Automation of workflows and data pipelines",
  "Strong full-stack foundation (PHP, Laravel, HTML5, JSON, MySQL/MongoDB) from earlier engineering work",
]

export const engineeringPhilosophy = [
  {
    title: "Build systems, not demos.",
    detail: "Production-grade code and pipelines — not one-off scripts.",
  },
  {
    title: "Automate repetitive work.",
    detail: "If a workflow can be automated, it should be.",
  },
  {
    title: "Bridge engineering and AI.",
    detail: "Solid software fundamentals first, modern AI capability on top.",
  },
  {
    title: "Keep learning by building.",
    detail: "Every transition — Mechanical → Web → AI — happened by shipping real work.",
  },
]

export type SkillCategory = {
  title: string
  description: string
  skills: string[]
}

// Strictly limited to skills/technologies stated on the LinkedIn profile
// (Top Skills list + technologies named in the Experience/Summary sections).
export const skillCategories: SkillCategory[] = [
  {
    title: "AI / Generative AI",
    description: "LLM-powered features, agents, and language understanding",
    skills: ["Large Language Models (LLM)", "Natural Language Processing (NLP)", "AI Agents", "LLM Integration", "Claude"],
  },
  {
    title: "Backend / Automation",
    description: "Python-based systems and workflow automation",
    skills: ["Python", "Workflow Automation", "Data Pipelines", "JSON"],
  },
  {
    title: "Frontend",
    description: "Interactive UI development",
    skills: ["React.js", "HTML5"],
  },
  {
    title: "Full-Stack Web (Prior Experience)",
    description: "Production web applications built earlier in my career",
    skills: ["PHP", "Laravel", "MySQL", "MongoDB", "OpenCart"],
  },
]

export type ExperienceRole = {
  title: string
  period: string
  bullets: string[]
  tech: string[]
}

export type ExperienceEntry = {
  company: string
  location: string
  period: string
  roles: ExperienceRole[]
}

export const experience: ExperienceEntry[] = [
  {
    company: "Valethi Technologies",
    location: "Nagpur, Maharashtra, India",
    period: "August 2022 — Present",
    roles: [
      {
        title: "AI Engineer | Python Developer",
        period: "2024 — Present",
        bullets: [
          "Transitioned into an AI Engineer / Python Developer role, focused on building Python-based intelligent systems.",
          "Integrating LLM-powered features into applications and workflows.",
          "Developing automation pipelines to streamline repetitive engineering and data tasks.",
        ],
        tech: ["Python", "LLMs", "NLP", "AI Agents", "Automation"],
      },
      {
        title: "PHP / Laravel Developer",
        period: "August 2022 — 2024",
        bullets: [
          "Built and maintained web applications using PHP and Laravel.",
          "Worked across the stack with HTML5, JSON, and MySQL/MongoDB for data storage.",
        ],
        tech: ["PHP", "Laravel", "HTML5", "JSON", "MySQL", "MongoDB"],
      },
    ],
  },
]

export type EducationEntry = {
  school: string
  degree: string
  period: string
}

export const education: EducationEntry[] = [
  {
    school: "Nagpur University",
    degree: "B.Tech, Mechanical Engineering",
    period: "2021 — 2024",
  },
  {
    school: "Maharashtra State Board of Technical Education (MSBTE)",
    degree: "Diploma, Mechanical Engineering",
    period: "2018 — 2021",
  },
]

// Sourced from Anthropic Academy (Skilljar) profile — completed courses with an issued certificate.
// `link` is each course's own "View certificate" URL — paste them in as they're available;
// a card without a link falls back to the public Skilljar profile.
export const certifications: { name: string; issuer: string; date: string; link?: string }[] = [
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic Academy", date: "Aug 5, 2026", link: "https://verify.skilljar.com/c/cgvrzb4zqycv" },
  { name: "Claude 101", issuer: "Anthropic Academy", date: "Aug 2, 2026", link: "https://verify.skilljar.com/c/c9p86ma8xfmu" },
  { name: "Claude Platform 101", issuer: "Anthropic Academy", date: "Aug 4, 2026", link: "https://verify.skilljar.com/c/eiv9e7epsxtu" },
  { name: "Claude Code 101", issuer: "Anthropic Academy", date: "Aug 3, 2026", link: "https://verify.skilljar.com/c/aed6ohhe725u" },
  { name: "Introduction to Claude Cowork", issuer: "Anthropic Academy", date: "Aug 4, 2026", link: "https://verify.skilljar.com/c/5mcjo66st44w" },
  { name: "Claude Code in Action", issuer: "Anthropic Academy", date: "Aug 5, 2026", link: "https://verify.skilljar.com/c/euy5k4xxzdv6" },
  { name: "Building with the Claude API", issuer: "Anthropic Academy", date: "Aug 6, 2026", link: "https://verify.skilljar.com/c/scnwwtim6coi" },
  { name: "Introduction to Model Context Protocol", issuer: "Anthropic Academy", date: "Aug 6, 2026", link: "https://verify.skilljar.com/c/iaxrief8ycbq" },
  { name: "Model Context Protocol: Advanced Topics", issuer: "Anthropic Academy", date: "Aug 6, 2026", link: "https://verify.skilljar.com/c/uwu4iovr4n2m" },
  { name: "Introduction to agent skills", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/72rqyycnednt" },
  { name: "Introduction to subagents", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/pht45qdfxwh5" },
  { name: "Claude with Amazon Bedrock", issuer: "Anthropic Academy", date: "Aug 9, 2026", link: "https://verify.skilljar.com/c/q97j4dwda3k6" },
  { name: "AI Capabilities and Limitations", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/nh9fir2pcyji" },
  { name: "AI Fluency for Builders", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/kg4eemxb87pe" },
  { name: "AI Fluency for Small Businesses", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/8uzynox29b8t" },
  { name: "AI Fluency for students", issuer: "Anthropic Academy", date: "Aug 6, 2026", link: "https://verify.skilljar.com/c/wcom9dco62tg" },
  { name: "AI Fluency for educators", issuer: "Anthropic Academy", date: "Aug 6, 2026", link: "https://verify.skilljar.com/c/xtb3g43hbjqr" },
  { name: "AI Fluency for pK-12 Educators", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/2kd9tak69fkh" },
  { name: "AI Fluency for nonprofits", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/25k9kq5cwgov" },
  { name: "Teaching AI Fluency", issuer: "Anthropic Academy", date: "Aug 7, 2026", link: "https://verify.skilljar.com/c/rbgoqkkandr7" },
]

// Add entries here and ProjectCard/Projects section will pick them up automatically.
export type Project = {
  name: string
  description: string
  problem: string
  solution: string
  tech: string[]
  features: string[]
  link?: string
  repo?: string
}

// Sourced directly from the public repo (README/notes/source files fetched and confirmed).
export const projects: Project[] = [
  {
    name: "Chatbot with LangGraph",
    description: "A multi-agent AI chatbot that orchestrates specialized agents through a LangGraph workflow.",
    problem:
      "Handling a complex, multi-part user request (e.g. \"find tourist places in Goa and email me the details\") normally means manually coordinating several separate tools yourself.",
    solution:
      "Built a LangGraph-orchestrated multi-agent system that parses user intent into an ordered task queue, routes each task to a specialized agent, and aggregates the results into one final response — with session-based memory and every step logged to PostgreSQL for auditability.",
    tech: ["LangGraph", "LangChain", "Python", "OpenAI", "FastAPI", "React", "Streamlit", "PostgreSQL"],
    features: [
      "Decomposes multi-part requests into an ordered task queue routed across specialized agents",
      "Research, calculator, weather, SQL database, file/PDF, and email agents",
      "Session-based conversation memory",
      "FastAPI backend + React frontend, with a Streamlit chat UI as an alternate interface",
    ],
    repo: "https://github.com/sachindate2210/LangGraph_with_chatboat",
  },
]

// AI engineering stack — built only from AI/LLM concepts explicitly named in the profile
// (Summary + Top Skills: LLM, NLP, AI agents, automation).
export const aiStack = {
  root: "AI SYSTEMS",
  branches: [
    { label: "LLMs", children: ["LLM Integration", "Prompting"] },
    { label: "NLP", children: ["Language Understanding", "Text Processing"] },
    { label: "Agents", children: ["AI Agents", "Automation Pipelines"] },
  ],
  output: "Production Systems",
}

export const developerJourney = [
  { label: "Since", value: "2022", detail: "Professional engineering experience" },
  { label: "AI focus since", value: "2024", detail: "Dedicated AI/ML & Python engineering" },
  { label: "Background", value: "Full-Stack → AI", detail: "PHP/Laravel → Python & LLMs" },
]
