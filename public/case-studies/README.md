# Case study images

Filenames must match the list below **exactly** — they are referenced from
`lib/site.ts`. Where a file is missing the site renders a graceful placeholder
instead, so nothing breaks.

Recommended format: PNG or WebP, width ≥ 1280px (landscape for web captures;
phone shots can be portrait).

## JOBBIN — `public/case-studies/jobbin/`

Before/after (phone, portrait):
- `old-applications.jpeg` / `new-applications.jpeg`
- `old-jobs.png` / `new-jobs.jpeg`

Mobile showcase (Flutter):
- `new-dashboard.jpeg`, `new-positions.jpeg`, `new-profile.jpeg`

Employer web dashboard (React/TS, landscape):
- `web-post-job.png`, `web-credits.png`, `web-events.png`

## ATEMSUITE — `public/case-studies/atemsuite/`

- `multiview.png` — the app running on a real video signal
- `dashboard.png` — full UI on SMPTE 100% color bars
- `analysis.png` — EBU R84 color bar analysis

> Want different images, or another before/after pair? Edit the `caseStudies`
> array in `lib/site.ts`.
