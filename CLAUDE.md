# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

**Next.js App Router** portfolio site for Caleb Kusumo, a Mechanical Systems & Design Engineer. Uses React 19, TypeScript (strict), Tailwind CSS v4, Framer Motion, and Three.js (via React Three Fiber).

### Routing

All pages live under `app/`. Each project has its own static page directory — there is no dynamic `[slug]` route:

```
app/
  page.tsx               # Hero/home with scroll-driven 3D model
  about/page.tsx         # Skills matrix
  experience/page.tsx    # Career timeline
  contact/page.tsx       # Contact form & links
  projects/
    page.tsx             # Project archive grid
    2025-robot/page.tsx
    2024-robot/page.tsx
    2023-robot/page.tsx
    darkslide/page.tsx
    rail-camera/page.tsx
    lutron-lighting/page.tsx
    directors-finder/page.tsx
    mamiya-hood/page.tsx
```

### Components

- `components/Navbar.tsx` — Fixed nav with `mix-blend-difference` styling
- `components/ModelViewer.tsx` — Client-only Three.js canvas; accepts a `modelPath` prop and rotates the model in sync with `scrollYProgress` from Framer Motion

### Content is hardcoded

There is no CMS or markdown. All data (projects list, skills, experience) is defined as arrays directly inside each page component. Adding a project means: (1) create a new page directory, (2) add the project entry to `app/projects/page.tsx`, (3) add the GLB to `public/models/` and images to `public/projects/<slug>/`.

### 3D Models

GLB files live in `public/models/`. The home page uses `public/model.glb`. `ModelViewer` is always loaded with `dynamic(..., { ssr: false })` to prevent SSR of the WebGL canvas.

### Styling patterns

- Tailwind v4 via `@tailwindcss/postcss`; configured through `postcss.config.mjs`
- Custom utility `.text-outline` (webkit-text-stroke) defined in `app/globals.css`
- `mix-blend-difference` on Navbar and hero text for the inversion blending effect
- Typography scales dramatically: e.g., `text-8xl md:text-[14rem]`

### Client vs Server Components

Pages that use scroll hooks, Framer Motion, or Three.js are marked `"use client"`. Pure display pages (`about`, `experience`) are server components by default.
