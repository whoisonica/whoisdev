import { Section, SectionHeader } from "./Section";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SpotlightCard } from "./SpotlightCard";
import { services } from "@/lib/site";

export function Services() {
  return (
    <Section id="servicii">
      <Reveal>
        <SectionHeader
          eyebrow="Servicii"
          title="Cu ce te pot ajuta."
          intro="Trei zone, un singur dezvoltator — fără handoff-uri pierdute între echipe."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
        {services.map((service, i) => (
          <StaggerItem key={service.title} className="h-full">
            <SpotlightCard className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-accent/40 hover:bg-surface-2">
              <span className="font-mono text-xs text-text-muted">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-text-primary transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {service.desc}
              </p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
