# Sunil Date — Portfolio

A premium, dark-mode AI/software engineering portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Updating content

All portfolio content (experience, skills, education, projects, certifications, contact info) lives in a
single file: **`src/data/profile.ts`**. Edit values there and the whole site updates automatically — no
component changes needed.

Sections currently rendering placeholder states (because the LinkedIn profile didn't list them yet):

- **Projects** — add entries to the `projects` array in `src/data/profile.ts`.
- **GitHub** — set `personal.github` to your GitHub profile URL.
- **Certifications** — add entries to the `certifications` array.

## Project structure

```text
src/
 ├── components/   # Reusable UI: Navbar, cards, badges, timeline, icons
 ├── sections/      # Page sections: Hero, About, Skills, Experience, Projects, AIStack, Contact, ...
 ├── data/          # profile.ts — single source of truth for all content
 ├── hooks/         # useInView (scroll reveal), useScrollSpy (nav active state)
 └── index.css      # Tailwind + design tokens (colors, fonts, grid background)
```

## Deploying

The site is a static build (`npm run build` outputs to `dist/`) — deploy it to Vercel, Netlify, GitHub Pages,
or any static host.
