# whoisdev — personal portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)

Portfolio site for **Andrei-Vlad Onica**, full-stack engineer based in Oradea, Romania.
Minimal dark theme, in the spirit of Linear / Vercel.

**Live:** [whoisdev.vercel.app](https://whoisdev.vercel.app)

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — subtle animation, honours `prefers-reduced-motion` throughout

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Structure

- `app/` — layout, home page, SEO (sitemap, robots, metadata, icon)
- `components/` — sections (Hero, About, CaseStudies, Services, Contact) + animation helpers
- `lib/site.ts` — **all site content** (brand, stack, case studies, services, contact). Edit here.
- `public/case-studies/` — screenshots. See `public/case-studies/README.md` for filenames.
- `public/Andrei-Onica-CV.pdf` — CV served by the Download CV button.

## Quick edits

| Change | Where |
|---|---|
| Text, projects, links | `lib/site.ts` |
| Colours / typography | `tailwind.config.ts` + `app/globals.css` |
| Before/after images & galleries | drop files in `public/case-studies/...` |

Missing images degrade gracefully — `ImageFrame` renders a placeholder rather than a broken image.

## Deploying to Vercel

1. Push to a Git repo.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
   Vercel detects Next.js automatically; no special configuration needed.
3. Deploy.

`site.url` in `lib/site.ts` drives SEO, Open Graph and the sitemap — keep it pointed at the
canonical deployment. If a custom domain is added later, update that value in the same commit
as the DNS change so the canonical URL never points somewhere that does not resolve.
