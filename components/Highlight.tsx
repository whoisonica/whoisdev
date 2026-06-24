"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Evidențiază o sintagmă scurtă: text mai luminos + o subliniere cu degrade
 * care „se desenează" de la stânga la dreapta când intră în viewport.
 * La prefers-reduced-motion sublinierea apare direct, fără animație.
 */
export function Hi({
  children,
  delay = 0.15,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <span className="relative inline-block whitespace-nowrap font-medium text-text-primary">
      {children}
      <motion.span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-accent to-accent-hover"
        initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
        }
      />
    </span>
  );
}
