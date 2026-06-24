import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm text-text-secondary">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          {site.brand}
        </div>
        <p className="text-xs text-text-muted">
          {site.location} · Construit cu Next.js, TypeScript & Tailwind
        </p>
        <p className="font-mono text-xs text-text-muted">
          © {new Date().getFullYear()} {site.domain}
        </p>
      </div>
    </footer>
  );
}
