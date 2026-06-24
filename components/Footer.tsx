import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <span className="text-text-muted">~/</span>
          {site.brand}
          <span className="text-accent">$</span>
        </a>
        <p className="order-last text-center font-mono text-xs text-text-muted sm:order-none">
          <span className="text-accent/50">{"//"}</span> {site.location} · built with
          Next.js, TypeScript &amp; Tailwind
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
