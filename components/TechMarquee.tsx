"use client";

const items = [
  "Flutter",
  "React",
  "TypeScript",
  "Spring Boot",
  "Next.js",
  "Java",
  "REST API",
  "PostgreSQL",
  "Stripe",
  "Firebase",
  "Heroku",
  "WPF / C#",
];

export function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 pr-3">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-gradient-to-b from-surface/80 to-surface/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(91,141,239,0.8)]"
              aria-hidden
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
