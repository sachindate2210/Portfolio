# Master Prompt — Sunil Date AI Engineer Portfolio

Use this as a single, self-contained prompt to (re)build this exact portfolio from scratch.

---

## 1. Role & Goal

Build a **premium, modern, highly technical personal portfolio website** for an AI/software engineer. It must immediately communicate: *"This person is technically strong, works with modern AI/software technologies, and builds real-world systems."* Feel like a Senior Software Engineer / AI-LLM Engineer portfolio + engineering case-study site — **not** a generic template.

**Design direction:** dark-mode-first, premium, futuristic, technical, clean. Subtle engineering-grid background, starfield, premium typography, glassmorphism only where appropriate, minimal but impressive animation. Avoid excessive gradients, cartoon illustrations, generic dev-icon clutter, or heavy particle effects.

**Hard content rule:** Do **not** invent experience, companies, projects, certifications, achievements, numbers, or technologies not present in the person's actual profile/source material. Where data is missing, render a clean, clearly-labeled empty/placeholder state with instructions for adding it later — never fake content.

## 2. Person / Content Source

Primary source: the person's LinkedIn profile (exported PDF) plus anything they explicitly supply (e.g. certification lists with verification links). Example seed data used here:

- **Name:** Sunil Date — **Headline:** AI Engineer | AI/ML Developer | Python, LLMs & Automation | Ex-PHP/Laravel Developer
- **Location:** Nagpur, Maharashtra, India — **Email/Phone/LinkedIn** as supplied
- **Summary:** Full-stack background (PHP/Laravel) transitioning into AI/ML engineering (Python, LLM integrations, automation pipelines) over ~2 years.
- **Experience:** One company (Valethi Technologies, Aug 2022–Present) with two internal chapters: PHP/Laravel Developer (2022–2024) → AI Engineer/Python Developer (2024–Present).
- **Education:** B.Tech Mechanical Engineering (Nagpur University, 2021–2024); Diploma Mechanical Engineering (MSBTE, 2018–2021).
- **Skills (verified only):** LLMs, NLP, AI Agents, LLM Integration, Python, Workflow Automation, Data Pipelines, JSON, React.js, HTML5, PHP, Laravel, MySQL, MongoDB.
- **Certifications:** ~20 Anthropic Academy (Skilljar) certificates, each with a real `verify.skilljar.com/c/<id>` verification link and completion date — fetched/confirmed individually, never guessed.
- **No GitHub link, no project write-ups, no formal certifications beyond the above** were available at the start — those sections must render as friendly empty states, not fabricated entries.

## 3. Tech Stack

- **Vite + React + TypeScript + Tailwind CSS v4** (`@tailwindcss/vite` plugin, CSS-first theme via `@theme` tokens in `src/index.css` — no `tailwind.config.js`).
- `lucide-react` for icons. No heavy animation library required — hand-rolled CSS keyframes + a small `useInView` hook cover all reveal/parallax needs (Framer Motion is acceptable but not necessary).
- Strict TypeScript, `npx tsc --noEmit` and `npm run build` must both pass clean after every change.

## 4. Project Structure

```
src/
 ├── components/     # Reusable UI: Navbar, Footer, TechBadge, TechMarquee, cards, backgrounds, icons, modals
 ├── sections/        # One file per page section (Hero, About, Skills, Experience, Projects, AIStack, GitHubSection, EducationCerts, Contact)
 ├── data/profile.ts  # SINGLE SOURCE OF TRUTH for all content — typed arrays/objects, richly commented
 ├── hooks/           # useInView (scroll reveal), useScrollSpy (nav active section)
 ├── lib/             # Shared helpers (e.g. certificate accent/icon color-coding, reused by 2+ components)
 └── index.css        # Tailwind import + @theme tokens + all custom keyframes/utility classes
```

Keep `data/profile.ts` fully typed and comment any placeholder/empty array explaining *why* it's empty and how to fill it in.

## 5. Global Design System (`src/index.css`)

**Color tokens** (dark theme, defined once as CSS vars in `@theme`):
```
--color-bg:        #05070a   (page background)
--color-surface:   #0b0f16   (card background)
--color-surface-2: #0f1420   (nested/inset surface)
--color-border:    #1c2331
--color-text:      #e6ebf2
--color-text-dim:  #8b95a5
--color-cyan:      #22d3ee   (primary accent)
--color-violet:    #8b5cf6   (secondary accent)
--color-gold:      #f5b942 / --color-gold-dim: #d99a2b   (tertiary/credentials accent)
```

**Fonts:** `Inter` (body/sans), `JetBrains Mono` (code/technical labels), `Playfair Display` italic aliased as `.font-script` (elegant flourish text, used sparingly — e.g. a small cursive tagline in the hero, "CERTIFICATE OF COMPLETION" styling).

**Reusable visual utilities to implement as CSS classes:**
- `.bg-grid` — subtle engineering blueprint grid (linear-gradient lines, 44px cells).
- `.bg-stars` — layered radial-gradient dot starfield, tileable.
- `.bg-mesh-glow` / `.animate-section-drift` — slow-drifting colored ambient glow blobs (cyan/violet/gold), `translate+scale` keyframe, 14–18s duration.
- `.animate-grid-pan`, `.animate-twinkle` — very slow grid pan and star-twinkle opacity pulse, for a subtle "alive" feel on every section, not just the hero.
- `.section-divider` — a thin **gradient-fade line** (transparent → cyan → violet → transparent) used as the top border between sections **instead of** a flat solid border — reads as far more premium.
- `.glass` — translucent blurred surface (backdrop-filter blur 12px) for the hero terminal card etc.
- `.tilt-card` (persistent 3D perspective tilt, hero visual) and `.tilt-hover` (lighter hover-only tilt for grid cards) — both must disable/no-op under `@media (max-width: 768–1024px)` and under `prefers-reduced-motion`.
- `.shine-sweep` — a diagonal light-bar `absolute` overlay that translates from off-screen-left to off-screen-right on `.group:hover`, for "fancy" card hovers (certifications, etc.).
- `.glow-cyan`, `.glow-gold`, `.pulse-gold` — box-shadow glow + a soft pulsing ring keyframe for badges/seals.
- `.animate-marquee` — infinite horizontal `translateX(0)→translateX(-50%)` loop for a duplicated-content ticker strip.
- `.animate-blink` — terminal cursor blink.
- A global `@media (prefers-reduced-motion: reduce)` block that collapses all animation/transition durations to ~0.

**A `SectionBackground` component** (grid or dots pattern + starfield + a colored ambient glow, `variant: cyan|gold|violet|mixed`) should be reused across every section below the hero, each picking a different variant/pattern so the page doesn't feel copy-pasted, while still sharing one visual language with the hero.

**A `SectionDivider` component** wrapping `.section-divider` should replace plain `border-t` on every section.

## 6. Navigation

Sticky, blurred-on-scroll navbar (`Home / About / Skills / Experience / Projects / AI / Contact`), smooth-scroll anchor links, active-section highlight via a `useScrollSpy` hook (tracks `offsetTop` of each section against scroll position), mobile hamburger menu. Logo/name doubles as a "scroll to top" button.

## 7. Hero Section

- Small pill badge: availability status (e.g. "Full-time opportunities · Location (On-site/Hybrid/Remote)"), pulsing dot.
- A **small cursive "The Portfolio"-style flourish tag** (`.font-script`, gold gradient text) sitting just above the name — a deliberate premium touch, not the headline itself.
- Name as a large bold heading; a gradient (cyan→violet) sub-line for the professional title.
- A **typewriter component** cycling through 3–4 short role variants (e.g. "AI Engineer" / "Python Developer" / "LLM Integrator" / "Automation Builder") styled as a fake terminal command (`$ role --current <word>|`).
- 2–3 line technical intro paragraph (from the real profile, not invented).
- CTA buttons: **View Projects**, **View Experience**, **Contact Me**, **LinkedIn** (external link) — first CTA solid/filled in the primary accent, rest outlined.
- **Hero visual (right column), NOT a stock photo:** a fake terminal/browser-chrome card (`sunil@engineering:~` prompt, macOS traffic-light dots, `$ whoami`, `$ stack --list` revealing a small grid of core technologies with staggered fade-in, `$ status open to work` with a blinking cursor). Layer around it: a subtle `.tilt-card` 3D tilt + glow shadow, faint **orbiting pulse rings** behind it (radar/"live system" feel), and 3–4 small **floating tech-name chips** gently bobbing at its corners.
- A subtle **interactive particle-network canvas** (small file, no dependency) in the hero background: ~40–50 dots drifting slowly, connecting lines when close together, and a gold highlight + connecting line to the cursor on hover — layered under the grid/starfield/mesh-glow, above the base background.
- A small animated **scroll-down indicator** pinned to the bottom of the hero, linking to the next section.
- Directly under the hero: an **infinite-scrolling marquee strip** of every technology name (deduped from the skills data, list doubled for a seamless loop) — but made **`position: fixed` to the bottom of the viewport** (not inline in the page flow) so it reads as a persistent footer ticker visible from every section, with the `Footer` given extra bottom padding so its own text doesn't sit underneath it.

## 8. About Section

- 2 short paragraphs of real summary copy.
- A bullet list of 3–5 "core strengths" (verified capabilities only).
- A distinct **"Engineering Philosophy"** card: 3–4 short principle/detail pairs, each with a small icon (e.g. "Build systems, not demos.", "Automate repetitive work.", "Bridge engineering and AI.", "Keep learning by building.") — must be statements that plausibly fit the person's real background, not generic filler.

## 9. Skills Section

3–5 categories (e.g. AI/Generative AI, Backend/Automation, Frontend, Full-Stack Web/Prior Experience), each rendered as a card with: a colored icon badge, category name + one-line description, and a wrapped row of small `TechBadge` pills — **only** technologies present in the source data. Cards get `.tilt-hover` + `.shine-sweep`-style top gradient line on hover.

## 10. Experience Section

Vertical timeline: a connecting line down the left, a circular marker per company/role. **Implementation warning to avoid a real bug:** if the marker is an absolutely-positioned element and it sits *inside* a wrapper that applies a CSS `transform` for a scroll-reveal animation, the transform creates a new containing block and the marker will mis-position (appear to overlap the heading text) — keep the timeline marker as a **sibling outside** any transform-animated reveal wrapper, not a child of it. Each role: title, date range, achievement-style bullets (not HR-speak), and a row of `TechBadge`s for the technologies actually used in that role.

## 11. Projects Section

Reusable `ProjectCard` (name, description, problem, solution, tech badges, optional GitHub/demo links, hover tilt/shine). If the data array is empty, render a clearly-labeled dashed-border empty state explaining that entries added to `data/profile.ts` will appear automatically — never invent example projects.

## 12. AI Engineering Stack Section

An **interactive diagram**, not a word cloud: a root node ("AI SYSTEMS"), 3 branch nodes (e.g. LLMs / NLP / Agents) each with 2 child leaf nodes, animated connector lines with a small glowing dot traveling along each line (data-flow feel), converging into a single "Production Systems" output node. Theme this section in the gold accent with `pulse-gold` on the root/output nodes. Add a very subtle animated wireframe **neural-network SVG** (a handful of nodes + connecting lines, gently pulsing) as a low-opacity backdrop behind the diagram — reinforces the AI-engineer identity without becoming a gimmick.

## 13. GitHub Section

If no GitHub URL is supplied, render the same friendly empty-state pattern as Projects (icon + "add your GitHub URL to `personal.github`" instructions) rather than omitting the section or faking repos.

## 14. Education & Certifications Section

- **Education:** simple cards per degree, gold left-accent bar, degree/institution/date-range.
- **"Credential Spotlight" carousel** (a professional name — avoid a generic "Featured" label): a single **certificate-styled** slide at a time (styled like an actual certificate document: "CERTIFICATE OF COMPLETION" mono label, the course name in `.font-script`, "This certifies that **{Name}** has successfully completed the course", issuer + date footer, no busy corner-bracket flourishes — keep it clean). Auto-advances every ~4.5s, pauses on hover, has both prev/next arrow buttons and dot pagination, clicking the slide opens the same modal as the grid below.
- **Certifications grid:** a modest number of cards shown by default (e.g. 3), with a "Show all N certifications" expand button. Each card should be **color-coded by theme** (derive 2–4 categories from the certificate names via a shared `getAccent(name)` helper placed in `lib/`, reused by both the grid and the carousel to avoid a circular import) with a matching icon, a large faint "watermark" icon in the card background, a badge-pill issuer footer, and the same shine-sweep hover treatment as Skills — plus a small legend showing what each accent color means.
- **Certificate modal:** clicking any card/slide opens a **cinematic, non-generic popup** — not a flat rectangle: a dramatic radial spotlight backdrop, the certificate framed inside a small **browser-chrome mockup** (traffic-light dots + a fake `verify.<provider>.com` URL bar) to tie back into the site's technical identity, a 3D-perspective "reveal" entrance animation (not just a fade), the same certificate-document styling as the carousel, and a **"Verify on \<Provider\>"** button linking to that certificate's *real, individually-confirmed* verification URL (never a shared/guessed link if unique per-certificate links are available — fetch/open each one to confirm the mapping before wiring it up).

## 15. Contact Section

Contact-info cards (email, phone, LinkedIn, location) each as a clickable tile with an icon; a simple contact form (name/email/message) that on submit opens a `mailto:` link pre-filled with the message (no backend); a short punchy CTA heading (e.g. "Let's build something intelligent.").

## 16. Footer

One line of "built with X/Y/Z" credit plus a copyright line. Must include extra bottom padding if a fixed-position ticker (see §7) sits over the very bottom of the viewport.

## 17. SEO / Accessibility

- Descriptive `<title>` (e.g. "{Name} | AI Engineer & Python Developer"), meta description, Open Graph + Twitter card tags, a `Person` JSON-LD schema block in `index.html`.
- Semantic heading hierarchy (one `h1` in the hero, `h2` per section via a shared `SectionHeading` component, `h3`/`h4` for sub-groups).
- Respect `prefers-reduced-motion` everywhere animation is added.
- Every image needs real `alt` text; every icon-only button needs `aria-label`.

## 18. Performance & Hygiene

- Keep bundle/image weight low: any user-supplied photo must be resized + re-encoded (e.g. via `sharp`, used as a one-off dev dependency and removed afterward) to a small JPEG rather than shipped as a multi-MB PNG.
- No unused imports/components left behind when a feature is revised or removed — delete the file, not just the usage.
- After **every** change: run `npx tsc --noEmit` and `npm run build`; both must be clean before considering the change done.
- Prefer small, focused components (one visual concern each) over one giant section file — e.g. `TerminalStack`, `OrbitRings`, `FloatingChips`, `ParticleNetwork`, `Typewriter`, `ScrollIndicator` are all separate files even though they only appear in the Hero.

## 19. Tone for Iteration

Expect to refine visual details (spacing, animation speed/size, card density, section naming) through several rounds of feedback rather than nailing it in one pass — keep components small and data-driven so a tweak (e.g. "slow down the rotation", "show 3 instead of 6", "rename this heading") is a one- or two-line change, not a rewrite.
