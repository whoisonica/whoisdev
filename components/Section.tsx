import { type ReactNode } from "react";
import { WordReveal } from "./WordReveal";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border/60 py-20 sm:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  index,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  index?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        {index ? (
          <span className="font-mono text-xs text-text-muted">{index}</span>
        ) : null}
        <span className="eyebrow">{eyebrow}</span>
        <span
          className="hairline h-px flex-1"
          aria-hidden
        />
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        <WordReveal text={title} />
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
