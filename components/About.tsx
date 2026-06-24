import { Section, SectionHeader } from "./Section";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SpotlightCard } from "./SpotlightCard";
import { stack } from "@/lib/site";

export function About() {
  return (
    <Section id="despre">
      <Reveal>
        <SectionHeader
          eyebrow="Despre"
          title="Full-stack, de la idee la producție."
          intro="Sunt dezvoltator full-stack din Oradea. Acopăr tot lanțul: mobil, web și backend — ceea ce înseamnă că pot duce un produs de la primul wireframe până la deploy, fără cusături între straturi."
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-3">
        {stack.map((item) => (
          <StaggerItem key={item.tech} className="h-full">
            <SpotlightCard className="group h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                {item.label}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-text-primary transition-colors group-hover:text-accent">
                {item.tech}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {item.desc}
              </p>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
