# Chirag Pawar — AI/ML Engineer Portfolio

A cinematic, editorial-style personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev       # local development server
npm run build     # type-check + production build to /dist
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/       # One component per section (Hero, About, Projects, Skills,
                     # Experience, Certifications, Contact) + the ScrollStack
                     # stacking-card primitive
  data/              # All real content lives here — edit these files to update
                     # copy, projects, skills, experience, or certifications
                     # without touching component code
  assets/            # Portrait image + decorative watermark

public/
  videos/            # Hero background video + poster frame
  certificates/       # Certificate preview images (rendered from source PDFs)
  resume.pdf          # Downloadable resume
```

## Editing content

Everything text-based lives in `src/data/`:

- `profile.ts` — name, titles, contact links, hero copy
- `about.ts` — bio paragraph + the 4 metric callouts
- `projects.ts` — the 6 featured projects (title, tech, metrics, GitHub links)
- `skills.ts` — the tech-matrix bento grid + "currently learning" strip
- `experience.ts` — the experience/milestones timeline
- `certifications.ts` — the certificate gallery + the Artifax AI achievement

To swap the hero video or portrait, replace `public/videos/hero.mp4` /
`public/videos/hero-poster.jpg` or `src/assets/about.jpg` — no code changes needed.

## Contact form

The contact form validates client-side and, by default, opens the visitor's
email client with a prefilled message (no backend required). To wire it up to
a real form-handling service instead (Formspree, a serverless function,
EmailJS, etc.), create a `.env` file with:

```
VITE_CONTACT_FORM_ENDPOINT=https://your-endpoint.example.com/submit
```

The form will then POST JSON (`{ name, email, message }`) to that endpoint
instead of opening a mail client.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion (animation)
- Lenis (smooth scrolling)
