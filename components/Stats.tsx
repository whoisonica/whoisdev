import { Reveal, Stagger, StaggerItem } from "./motion";
import { CountUp } from "./CountUp";

const stats = [
  { value: "10M+", label: "Records integrated", sub: "Hotel inventory at scale" },
  { value: "4", label: "End-to-end products", sub: "Mobile · web · backend · desktop" },
  { value: "2", label: "Apps published", sub: "App Store & Google Play" },
  { value: "1.5 yrs", label: "Java backend in production", sub: "Spring Boot, real teams" },
];

export function Stats() {
  return (
    <section aria-label="Key numbers" className="border-t border-border/60">
      <div className="mx-auto w-full max-w-content px-5 sm:px-6">
        <Reveal>
          <Stagger className="grid grid-cols-2 divide-x divide-y divide-border/60 border-x border-border/60 sm:grid-cols-4 sm:divide-y-0">
            {stats.map((s) => (
              <StaggerItem
                key={s.label}
                className="group relative flex flex-col gap-1.5 px-5 py-8 transition-colors duration-300 hover:bg-surface/40 sm:px-6 sm:py-10"
              >
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
                <CountUp
                  value={s.value}
                  className="text-3xl font-semibold tracking-tight text-text-primary transition-colors group-hover:text-accent sm:text-4xl"
                />
                <span className="text-sm font-medium text-text-primary">
                  {s.label}
                </span>
                <span className="text-xs leading-relaxed text-text-muted">
                  {s.sub}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
