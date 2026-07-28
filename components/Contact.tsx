import { Reveal } from "./motion";
import { Hi } from "./Highlight";
import { site } from "@/lib/site";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden border-t border-border/60 py-20 sm:py-32"
    >
      <div className="relative mx-auto w-full max-w-content px-5 sm:px-6">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(91,141,239,0.16) 0%, rgba(91,141,239,0) 70%)",
          }}
          aria-hidden
        />
        <Reveal>
          <div className="relative text-center">
            <span className="eyebrow">Contact</span>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              Let&apos;s build something together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Hiring a full-stack engineer, or looking for a contractor to build
              something? Send me a few lines about it and I&apos;ll get back to you
              with a <Hi>straight answer</Hi>.
            </p>
            <p className="mt-3 font-mono text-xs text-text-muted">
              <span className="text-accent">●</span> Open to full-time roles and B2B
              contracts
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-glow sm:w-auto"
              >
                <MailIcon />
                {site.email}
              </a>
            </div>

            <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-text-muted">
              <li className="flex items-center gap-1.5">
                <span className="text-accent">✓</span> Replies within 24h
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-accent">✓</span> Employment or B2B invoicing
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-accent">✓</span> Remote / hybrid / relocation
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href={site.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:border-accent/40 hover:text-accent"
              >
                <DownloadIcon />
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
