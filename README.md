# Italo Rojas — Portfolio

Personal portfolio site for [italorojas-portfolio.cl](https://italorojas-portfolio.cl). Built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/(routes)/
  projects/          # Projects index (hexagon grid)
  projects/[slug]/   # Dynamic route for all project pages
  about-me/          # About page
components/          # Reusable UI components
data.tsx             # All project content and site data
public/              # Static assets (images, audio, video)
apps/fish-story/     # Embedded A Fish Story sub-app
```

## Adding a New Project

1. Add a project object to `dataPortfolio_Artist` or `dataPortfolio_Engineer` in `data.tsx` with a unique `slug`
2. Add an entry to `hexagonData` in `data.tsx` with `link: "/projects/your-slug"`
3. If the project needs custom sections (video embeds, audio players, etc.), add slug-specific rendering in `app/(routes)/projects/[slug]/page.tsx`

No new files or route folders needed.

## Building the Fish Story Sub-App

```bash
npm run build:fish-story
```

This builds the Vite sub-app and copies its output to `public/fish-story/`.

## Deployment

Deployed on Vercel. Push to `main` triggers automatic deployment.

- Set Node.js version to **22.x** (LTS) in Vercel project settings
- Domain: `italorojas-portfolio.cl`
