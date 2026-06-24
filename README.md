# whoisdev — portofoliu personal

Site de portofoliu pentru **whoisdev**, dezvoltator full-stack din Oradea.
Minimalist dark, în spiritul Linear / Vercel.

## Stack
- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animații subtile, respectă `prefers-reduced-motion`)

## Dezvoltare locală
```bash
npm install
npm run dev      # http://localhost:3000
```

Build de producție:
```bash
npm run build
npm start
```

## Structură
- `app/` — layout, pagina principală, SEO (sitemap, robots, metadata, icon)
- `components/` — secțiuni (Hero, About, CaseStudies, Services, Contact) + helpers de animație
- `lib/site.ts` — **toate datele site-ului** (brand, stack, case studies, servicii, contact). Editează aici.
- `public/case-studies/` — screenshot-uri. Vezi `public/case-studies/README.md` pentru nume de fișiere.

## Ce poți edita rapid
- Text, proiecte, linkuri → `lib/site.ts`
- Culori / tipografie → `tailwind.config.ts` + `app/globals.css`
- Imagini before/after & galerii → pune fișierele în `public/case-studies/...`

## Deploy pe Vercel
1. Pune codul pe un repo Git (GitHub/GitLab/Bitbucket).
2. Pe [vercel.com](https://vercel.com) → **New Project** → importă repo-ul.
   Vercel detectează Next.js automat; nu e nevoie de config special.
3. Deploy. Gata.

### Domeniu custom `whoisdev.dev`
1. În proiectul Vercel → **Settings → Domains** → adaugă `whoisdev.dev` (și `www.whoisdev.dev`).
2. La registrarul domeniului, setează DNS-ul indicat de Vercel:
   - `A` record `@` → `76.76.21.21`, **sau** un `CNAME` pe `www` → `cname.vercel-dns.com`
   - (Vercel îți arată exact valorile în interfață.)
3. Așteaptă propagarea DNS — Vercel emite automat certificatul HTTPS.

`site.url` este deja setat la `https://whoisdev.dev` în `lib/site.ts` (folosit pentru SEO/OG/sitemap).
