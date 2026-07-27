import { Section, SectionHeader } from "./Section";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SpotlightCard } from "./SpotlightCard";
import { Hi } from "./Highlight";
import { stack } from "@/lib/site";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeader
          index="01"
          eyebrow="About"
          title="Full-stack, from idea to production."
          intro={
            <>
              I&apos;m a full-stack engineer based in Oradea, Romania. I cover{" "}
              <Hi>the whole chain</Hi>: mobile, web and backend — which means I can
              take a product from the first wireframe to deploy, with no seams
              between the layers.
            </>
          }
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-4 sm:grid-cols-3">
        {stack.map((item) => (
          <StaggerItem key={item.tech} className="h-full">
            <SpotlightCard
              tilt
              className="group h-full rounded-xl border border-border bg-surface p-6 transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/40 hover:bg-surface-2 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.85)]"
            >
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                <span className="text-accent/50">{"#"}</span> {item.label}
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
