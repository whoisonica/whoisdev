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
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-text-muted backdrop-blur"
          >
            <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
