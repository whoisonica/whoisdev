import { Section, SectionHeader } from "./Section";
import { Reveal } from "./motion";
import { ImageFrame } from "./ImageFrame";
import { PhoneFrame } from "./PhoneFrame";
import { SpotlightCard } from "./SpotlightCard";
import { caseStudies, type CaseStudy } from "@/lib/site";

export function CaseStudies() {
  return (
    <Section id="proiecte">
      <Reveal>
        <SectionHeader
          eyebrow="Proiecte"
          title="Proiecte, fiecare ca o poveste: de la problemă la rezultat."
          intro="Fiecare proiect e o demonstrație de end-to-end: ce problemă a fost, ce am construit și ce a ieșit."
        />
      </Reveal>

      <div className="mt-16 space-y-24 sm:space-y-32">
        {caseStudies.map((study) => (
          <CaseStudyBlock key={study.id} study={study} />
        ))}
      </div>
    </Section>
  );
}

function Step({ label, children }: { label: string; children: string }) {
  return (
    <div className="relative pl-5">
      <span
        className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent"
        aria-hidden
      />
      <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
        {label}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{children}</p>
    </div>
  );
}

function CaseStudyBlock({ study }: { study: CaseStudy }) {
  return (
    <article className="scroll-mt-28" id={study.id}>
      <Reveal>
        <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-start gap-5">
            <span className="font-mono text-sm text-accent">{study.index}</span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                  {study.title}
                </h3>
                {study.status ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden />
                    {study.status}
                  </span>
                ) : null}
              </div>
              <p className="mt-1.5 text-sm text-text-secondary">{study.subtitle}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {study.role ? (
        <Reveal delay={0.04}>
          <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border bg-surface/50 p-6 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="text-sm font-medium text-text-primary">
                {study.role.title}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary">
                {study.role.summary}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-accent">
              {study.role.period}
            </span>
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <Step label="Problema">{study.problem}</Step>
          <Step label="Ce am construit">{study.built}</Step>
          <Step label="Rezultat">{study.result}</Step>
        </div>
      </Reveal>

      {study.highlights && study.highlights.length > 0 ? (
        <Reveal delay={0.06}>
          <div className="mt-12">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              Ce am livrat
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {study.highlights.map((h) => (
                <SpotlightCard
                  key={h.title}
                  className="group h-full rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/40 hover:bg-surface-2"
                >
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors group-hover:text-accent">
                    <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                    {h.title}
                  </h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                    {h.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      {study.beforeAfter ? (
        <Reveal delay={0.1}>
          <div className="mt-12">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              {study.beforeAfter.caption}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <span className="mb-2 inline-block rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                  Before
                </span>
                <ImageFrame
                  src={study.beforeAfter.before.src}
                  alt={study.beforeAfter.before.alt}
                  label="Before"
                />
              </div>
              <div>
                <span className="mb-2 inline-block rounded border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                  After
                </span>
                <ImageFrame
                  src={study.beforeAfter.after.src}
                  alt={study.beforeAfter.after.alt}
                  label="After"
                />
              </div>
            </div>
          </div>
        </Reveal>
      ) : null}

      {study.phoneCompare ? (
        <Reveal delay={0.1}>
          <div className="mt-12">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              {study.phoneCompare.caption}
            </p>
            <div className="space-y-6">
              {study.phoneCompare.pairs.map((pair) => (
                <div
                  key={pair.label}
                  className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8"
                >
                  <p className="mb-6 text-center text-sm text-text-secondary">
                    {pair.label}
                  </p>
                  <div className="flex items-start justify-center gap-4 sm:gap-10">
                    <div className="flex flex-col items-center gap-3">
                      <span className="inline-block rounded border border-border bg-surface px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-text-muted">
                        Before
                      </span>
                      <PhoneFrame
                        src={pair.before.src}
                        alt={pair.before.alt}
                        size="sm"
                      />
                    </div>
                    <span
                      className="mt-16 hidden text-2xl text-text-muted sm:inline"
                      aria-hidden
                    >
                      →
                    </span>
                    <div className="flex flex-col items-center gap-3">
                      <span className="inline-block rounded border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                        After
                      </span>
                      <PhoneFrame
                        src={pair.after.src}
                        alt={pair.after.alt}
                        size="sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      {study.phones ? (
        <Reveal delay={0.1}>
          <div className="mt-12">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
              {study.phones.caption}
            </p>
            <div className="flex flex-wrap items-start justify-center gap-6 rounded-2xl border border-border bg-surface/40 p-8 sm:gap-10 sm:p-12">
              {study.phones.shots.map((shot, i) => (
                <PhoneFrame
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  float={i % 2 === 1}
                />
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}

      {study.gallery && study.gallery.length > 0 ? (
        <Reveal delay={0.12}>
          <div className="mt-12 space-y-4">
            {study.galleryCaption ? (
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                {study.galleryCaption}
              </p>
            ) : null}
            {/* Prima imagine — featured, pe toată lățimea */}
            <ImageFrame
              src={study.gallery[0].src}
              alt={study.gallery[0].alt}
              label="Screenshot"
              ratio="16/9"
              sizes="(max-width: 1100px) 100vw, 1052px"
            />
            {study.gallery.length > 1 ? (
              <div
                className={`grid gap-4 ${
                  study.gallery.length > 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"
                }`}
              >
                {study.gallery.slice(1).map((img) => (
                  <ImageFrame
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    label="Screenshot"
                    ratio="16/10"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      ) : null}
    </article>
  );
}
