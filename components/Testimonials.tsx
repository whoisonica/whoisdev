import { Section, SectionHeader } from "./Section";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { SpotlightCard } from "./SpotlightCard";
import { Hi } from "./Highlight";
import { testimonials } from "@/lib/site";

const QuoteMark = () => (
  <span
    aria-hidden
    className="font-mono text-4xl leading-none text-accent/30"
  >
    {'"'}
  </span>
);

function initialsFrom(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials() {
  // Only render real testimonials — "TODO" placeholders are hidden.
  const items = testimonials.filter(
    (t) => !t.quote.trim().toUpperCase().startsWith("TODO")
  );

  if (items.length === 0) return null;

  return (
    <Section id="testimonials">
      <Reveal>
        <SectionHeader
          index="04"
          eyebrow="Testimonials"
          title="What the people I have worked with say."
          intro={
            <>
              <Hi>Real results</Hi>, from real projects — not landing-page
              promises.
            </>
          }
        />
      </Reveal>

      <Stagger className="mt-14 grid gap-4 md:grid-cols-2">
        {items.map((t) => (
          <StaggerItem key={t.name + t.quote.slice(0, 16)} className="h-full">
            <SpotlightCard
              tilt
              className="flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/40 hover:bg-surface-2 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.85)]"
            >
              <QuoteMark />
              <blockquote className="mt-2 flex-1 text-base leading-relaxed text-text-primary">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 font-mono text-xs font-medium text-accent">
                  {t.initials ?? initialsFrom(t.name)}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-text-primary">
                    {t.name}
                  </span>
                  <span className="text-xs text-text-muted">{t.role}</span>
                </span>
              </figcaption>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
