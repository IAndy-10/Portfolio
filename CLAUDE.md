# Portfolio — Claude Code Instructions

## Architecture

- **Next.js 16** App Router with TypeScript and Tailwind CSS
- All project content lives in `data.tsx` — two arrays: `dataPortfolio_Artist` (Sound & Interaction) and `dataPortfolio_Engineer` (Data & Science)
- Single dynamic route `app/(routes)/projects/[slug]/page.tsx` renders all project pages
- Each project has a `slug` field used for routing (`/projects/{slug}`)
- `hexagonData` in `data.tsx` drives the hexagonal grid navigation on the projects index page
- `serviceData` in `data.tsx` drives the featured projects carousel on the home page

## Adding a New Project

1. Add project object to the appropriate array in `data.tsx` with a unique `slug`
2. Add entry to `hexagonData` with `link: "/projects/your-slug"`
3. For custom content (video embeds, audio, etc.), add slug-specific rendering in the `[slug]/page.tsx`

## Key Components

- `components/hexagon.tsx` — Hexagonal grid on projects index (desktop)
- `components/project-mobile-display.tsx` — Mobile project carousel
- `components/sidebar-projects.tsx` — Desktop sidebar navigation on project pages
- `components/counter-services.tsx` — Stats counters on home page
- `components/profile-card.tsx` — Profile photo and name
- `components/yoterra-poem.tsx` — Bilingual poem content for YoTerra project

## Embedded Sub-App

`apps/fish-story/` is a separate Vite + React app. Build with `npm run build:fish-story`. Served at `/fish-story/` via Next.js rewrites.

## Do NOT

- Create individual route folders for new projects — use the dynamic `[slug]` route
- Edit `.next/` or build output directly
- Remove the fish-story rewrites from `next.config.mjs`
