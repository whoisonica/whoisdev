import { Section, SectionHeader } from "./Section";
import { Reveal } from "./motion";
import { Hi } from "./Highlight";
import { ImageFrame } from "./ImageFrame";
import { PhoneFrame } from "./PhoneFrame";
import { SpotlightCard } from "./SpotlightCard";
import { caseStudies, type CaseStudy } from "@/lib/site";

export function CaseStudies() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeader
          index="02"
          eyebrow="Projects"
          title="Projects, each one a story: from problem to result."
          intro={
            <>
              Each project is an <Hi>end-to-end</Hi> walkthrough: what the problem
              was, what I built, and how it turned out.
            </>
          }
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

const LinkIcon = ({ kind }: { kind?: string }) => {
  const common = { width: 14, height: 14, "aria-hidden": true } as const;
  if (kind === "github")
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.37.8 1.1.8 2.22v3.29c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
      </svg>
    );
  if (kind === "apple")
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.37 12.77c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.1-2.02-3.77-2.05-1.6-.16-3.13.94-3.94.94-.82 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.15-.47 7.81 1.3 10.37.87 1.25 1.9 2.66 3.26 2.61 1.31-.05 1.8-.85 3.39-.85 1.58 0 2.03.85 3.41.82 1.41-.02 2.3-1.28 3.16-2.54.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.73-1.05-2.76-4.14ZM13.9 4.66c.72-.87 1.2-2.08 1.07-3.29-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.09 3.18 1.15.09 2.32-.58 3.04-1.45Z" />
      </svg>
    );
  if (kind === "play")
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.6 1.84a1.5 1.5 0 0 0-.6 1.2v17.92c0 .48.23.92.6 1.2l10.03-10.16L3.6 1.84Zm11.6 8.02 2.9-2.94-9.9-5.6a1.5 1.5 0 0 0-.6-.18l7.6 8.72Zm0 4.28-7.6 8.72c.2-.02.41-.08.6-.19l9.9-5.6-2.9-2.93Zm4.28-2.31-2.33-1.32-3.16 3.2 3.16 3.2 2.33-1.32c1.1-.62 1.1-2.14 0-2.76Z" />
      </svg>
    );
  return (
    <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
};

function CaseStudyLinks({ links }: { links: NonNullable<CaseStudy["links"]> }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2.5">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-text-secondary transition-colors duration-200 hover:border-accent/40 hover:bg-surface-2 hover:text-accent"
        >
          <LinkIcon kind={l.icon} />
          {l.label}
          <span
            aria-hidden
            className="text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
          >
            →
          </span>
        </a>
      ))}
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
              {study.links && study.links.length > 0 ? (
                <CaseStudyLinks links={study.links} />
              ) : null}
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
          <Step label="Problem">{study.problem}</Step>
          <Step label="What I built">{study.built}</Step>
          <Step label="Result">{study.result}</Step>
        </div>
      </Reveal>

      {study.highlights && study.highlights.length > 0 ? (
        <Reveal delay={0.06}>
          <div className="mt-12">
            <p className="label-mono mb-5">What I shipped</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {study.highlights.map((h) => (
                <SpotlightCard
                  key={h.title}
                  tilt
                  className="group h-full rounded-xl border border-border bg-surface p-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-accent/40 hover:bg-surface-2 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.85)]"
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
                  className="rounded-2xl border border-border bg-surface/40 p-4 sm:p-8"
                >
                  <p className="mb-6 text-center text-sm text-text-secondary">
                    {pair.label}
                  </p>
                  <div className="flex items-start justify-center gap-3 sm:gap-10">
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
            {/* First image — featured, full width */}
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
