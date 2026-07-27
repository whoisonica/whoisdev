"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { LoadIn } from "./motion";
import { Aurora } from "./Aurora";
import { MagneticButton } from "./MagneticButton";
import { TechMarquee } from "./TechMarquee";
import { Typewriter } from "./Typewriter";
import { Hi } from "./Highlight";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Subtle content parallax on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);

  const letters = site.brand.split("");

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      <Aurora />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-content flex-col justify-center px-5 pb-20 pt-28 sm:px-6 sm:pt-32"
      >
        <LoadIn delay={0.05}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 py-1.5 pl-2.5 pr-3.5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wide text-text-secondary">
              <span className="text-accent">$</span>{" "}
              <span className="text-text-primary">
                open to full-time remote roles
              </span>
              <span className="mx-2 text-text-muted">·</span>
              {site.location}
            </span>
          </span>
        </LoadIn>

        {/* Heading animated letter by letter + shimmer */}
        <h1 className="mt-6 flex flex-wrap items-baseline text-[clamp(2.75rem,9vw,5.75rem)] font-semibold leading-[0.95] tracking-tight">
          <span className="sr-only">{site.brand}</span>
          <span
            aria-hidden
            className="bracket mr-[0.15em] text-[0.55em] leading-none"
          >
            &lt;
          </span>
          <motion.span
            aria-hidden
            className="text-shimmer inline-flex"
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "visible"}
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
            }}
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: "0.5em", rotateX: -45 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          <span
            aria-hidden
            className="bracket ml-[0.2em] text-[0.55em] leading-none"
          >
            /&gt;
          </span>
          <span aria-hidden className="caret ml-[0.15em] self-center" />
        </h1>

        <LoadIn delay={0.4}>
          <p className="mt-6 font-mono text-sm text-text-muted">
            <span className="text-accent/60">{"//"}</span>{" "}
            <Typewriter
              className="text-text-secondary"
              words={[
                "Flutter developer",
                "React / TypeScript engineer",
                "Java Spring Boot backend",
                "from idea to production",
              ]}
            />
          </p>
        </LoadIn>

        <LoadIn delay={0.45}>
          <p className="mt-3 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary sm:text-xl">
            I turn ideas into <Hi>real products</Hi> that ship and get used — from
            the first wireframe to deploy. Mobile with{" "}
            <code className="code-chip">Flutter</code>, web with{" "}
            <code className="code-chip">React/TS</code>, backend with{" "}
            <code className="code-chip">Spring Boot</code>.
          </p>
        </LoadIn>

        <LoadIn delay={0.58}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton
              href="#contact"
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover hover:shadow-glow"
            >
              Get in touch
              <span
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              >
                →
              </span>
            </MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3.5 text-sm font-medium text-text-primary backdrop-blur transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              View projects
            </a>
            <a
              href={site.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3.5 text-sm font-medium text-text-primary backdrop-blur transition-colors duration-200 hover:border-accent/40 hover:text-accent"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download CV
            </a>
          </div>
        </LoadIn>

        <LoadIn delay={0.66}>
          <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-text-muted">
            <li className="flex items-center gap-1.5">
              <span className="text-accent">✓</span> 2 apps live on App Store &amp;
              Google Play
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-accent">✓</span> 10M+ records integrated
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-accent">✓</span> replies within 24h
            </li>
          </ul>
        </LoadIn>

        <LoadIn delay={0.75}>
          <div className="mt-12 sm:mt-16">
            <TechMarquee />
          </div>
        </LoadIn>
      </motion.div>

      {/* subtle scroll indicator */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-text-muted"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
