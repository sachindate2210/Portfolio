/**
 * Central content file for the portfolio.
 * All data here is kept in sync with Sunil's resume (Nov 2026) and LinkedIn profile.
 * Nothing is fabricated — sections with no verified source content are left as
 * clearly-marked placeholders (see PLACEHOLDER_* flags) so they're easy to fill in later
 * without touching any component code.
 */

export const personal = {
  name: "Sunil Date",
  headline: "AI Engineer | Generative AI & Agentic AI | Full Stack Developer | Software Developer",
  shortTitle: "AI Engineer & Full Stack Developer",
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
  "AI Engineer building production-grade LLM applications with Python — multi-agent systems with LangGraph, RAG pipelines, text-to-SQL chatbots and LLM automation workflows, backed by a full-stack engineering foundation."

export const aboutSummary = [
  "Generative AI Engineer and Python Developer with 4+ years of software development experience at Valethi Technologies, including 3+ years (since Aug 2023) designing, building and deploying production-grade LLM applications for client businesses.",
  "I build multi-agent systems with LangGraph and LangChain, Retrieval-Augmented Generation (RAG) pipelines on ChromaDB, text-to-SQL chatbots over business databases and LLM automation workflows — served through FastAPI, Django and Flask REST APIs with React frontends, and traced with LangSmith.",
]

export const coreStrengths = [
  "Multi-agent and agentic AI systems with LangGraph, LangChain and tool calling",
  "Retrieval-Augmented Generation (RAG) and text-to-SQL applications over client data",
  "Python REST APIs with FastAPI, Django and Flask, backed by PostgreSQL, MySQL and MongoDB",
  "Full-stack delivery with React and Streamlit frontends, plus third-party API integration",
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

// Kept in sync with the Technical Skills section of the resume.
export const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI & LLMs",
    description: "LLM applications, agents and retrieval",
    skills: [
      "Large Language Models (LLMs)",
      "Agentic AI",
      "Multi-Agent Systems",
      "Tool Calling",
      "Retrieval-Augmented Generation (RAG)",
      "Text-to-SQL",
      "Prompt Engineering",
      "Structured Outputs",
    ],
  },
  {
    title: "AI Frameworks & Platforms",
    description: "Frameworks, model APIs and observability",
    skills: ["LangChain", "LangGraph", "LangSmith", "OpenAI API", "Anthropic Claude API", "Hugging Face", "Ollama", "ChromaDB"],
  },
  {
    title: "Backend & Databases",
    description: "Python APIs and data storage",
    skills: ["Python", "FastAPI", "Django", "Flask", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Frontend & Tools",
    description: "Interfaces and engineering workflow",
    skills: ["React", "Streamlit", "JavaScript", "HTML5", "CSS3", "Git", "Claude Code"],
  },
  {
    title: "Web Development (2022 – 2023)",
    description: "PHP web applications and e-commerce from the Software Developer role",
    skills: ["PHP", "Laravel", "OpenCart"],
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
        title: "AI Engineer / Python Developer",
        period: "August 2023 — Present",
        bullets: [
          "Design, build and deploy production-grade Generative AI applications for client businesses using Python, LangChain, LangGraph and the OpenAI and Anthropic Claude APIs.",
          "Build agentic and multi-agent workflows that plan multi-step tasks and connect LLMs to external tools, APIs and databases through tool calling.",
          "Built RAG pipelines on ChromaDB and text-to-SQL chatbots that let business users query company data in plain English.",
          "Expose AI features through FastAPI, Django and Flask REST APIs with React and Streamlit interfaces; trace and debug agent runs with LangSmith.",
        ],
        tech: ["Python", "LangGraph", "LangChain", "LangSmith", "OpenAI API", "Claude API", "ChromaDB", "FastAPI", "React"],
      },
      {
        title: "Software Developer",
        period: "August 2022 — July 2023",
        bullets: [
          "Developed and maintained client web applications with PHP and Laravel, turning business requirements into production features.",
          "Built and customized OpenCart e-commerce stores, integrating third-party APIs such as payment gateways and shipping providers to automate order and transaction workflows.",
          "Designed database schemas and queries for MySQL- and MongoDB-backed applications, and built responsive JavaScript, HTML and CSS interfaces.",
        ],
        tech: ["PHP", "Laravel", "OpenCart", "JavaScript", "HTML5", "CSS3", "MySQL", "MongoDB", "REST APIs"],
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
    school: "Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)",
    degree: "B.Tech, Mechanical Engineering (Lateral Entry)",
    period: "2021 — 2024",
  },
  {
    school: "Government Polytechnic, Brahmapuri (MSBTE)",
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

// Kept in sync with the projects listed under Valethi Technologies on the resume.
export const projects: Project[] = [
  {
    name: "Multi-Agent AI Chatbot with LangGraph",
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
  {
    name: "RAG-Based Document Question Answering Assistant",
    description: "A Retrieval-Augmented Generation (RAG) assistant that answers questions from an organization's own documents.",
    problem:
      "Finding answers inside a large set of internal documents means reading through them manually, and a plain LLM can't answer from private client data.",
    solution:
      "Built an end-to-end RAG pipeline — document loading, chunking, embedding generation and indexing in ChromaDB — with semantic vector search and grounding prompts that keep answers tied to the retrieved content.",
    tech: ["Python", "LangChain", "OpenAI", "ChromaDB", "Embeddings"],
    features: [
      "Document ingestion pipeline: loading, chunking, embedding generation and ChromaDB indexing",
      "Semantic vector search to retrieve the most relevant context",
      "Grounding prompts that keep answers tied to retrieved content",
      "Tuned chunking and retrieval parameters for answer relevance",
    ],
  },
  {
    name: "Text-to-SQL Chatbot for Natural-Language Database Queries",
    description: "A conversational assistant that lets business users query company data in plain English instead of writing SQL.",
    problem: "Non-technical business users depend on developers to write SQL every time they need data from the company database.",
    solution:
      "Built a text-to-SQL assistant that supplies database schema context to the LLM, generates and executes the query, and summarizes the results in plain language — served through a FastAPI backend and a React chat interface.",
    tech: ["Python", "FastAPI", "React", "LangChain", "OpenAI", "MySQL", "PostgreSQL"],
    features: [
      "Natural-language questions translated into SQL queries",
      "Database schema context in prompts to improve SQL generation accuracy",
      "Query results summarized in plain language",
      "FastAPI REST backend with a React chat frontend",
    ],
  },
  {
    name: "LLM-Powered Business Automation Workflows",
    description: "Automation pipelines that apply LLMs to repetitive business tasks and connect the results to existing systems.",
    problem: "Repetitive business tasks were handled manually across existing client applications.",
    solution:
      "Built LLM-powered Python pipelines connected to existing applications through REST APIs, with prompts engineered to return structured, machine-readable JSON for reliable downstream processing.",
    tech: ["Python", "LangChain", "OpenAI", "REST APIs", "JSON"],
    features: [
      "LLM-powered Python automation pipelines",
      "Integration with existing client applications through REST APIs",
      "Structured, machine-readable JSON outputs for downstream processing",
    ],
  },
]

// AI engineering stack — mirrors the AI work described on the resume.
export const aiStack = {
  root: "AI SYSTEMS",
  branches: [
    { label: "LLMs", children: ["OpenAI & Claude APIs", "Prompt Engineering", "Structured Outputs"] },
    { label: "Retrieval", children: ["RAG Pipelines", "ChromaDB Vector Search", "Text-to-SQL"] },
    { label: "Agents", children: ["LangGraph Multi-Agent", "Tool Calling", "LangSmith Tracing"] },
  ],
  output: "Production Systems",
}

export const developerJourney = [
  { label: "Since", value: "2022", detail: "Professional software development experience" },
  { label: "AI focus since", value: "2023", detail: "AI Engineer / Python Developer since Aug 2023" },
  { label: "Background", value: "Full-Stack → AI", detail: "Web development → Python, LLMs & agents" },
]
