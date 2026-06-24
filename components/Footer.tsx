import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
          {site.brand}
        </a>
        <p className="order-last text-center text-xs text-text-muted sm:order-none">
          {site.location} · Construit cu Next.js, TypeScript &amp; Tailwind
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <span className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
