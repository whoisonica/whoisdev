"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Card with a radial glow that follows the cursor across border and surface
 * (CSS effect, see .spotlight-card in globals.css), plus optional 3D tilt:
 * the card leans toward the cursor and lifts on hover.
 * Tilt-ul e dezactivat la prefers-reduced-motion.
 */
export function SpotlightCard({
  children,
  className = "",
  as = "div",
  tilt = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  tilt?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const ty = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 170, damping: 16 });
  const sry = useSpring(ry, { stiffness: 170, damping: 16 });
  const sty = useSpring(ty, { stiffness: 220, damping: 20 });

  const useTilt = tilt && !reduce;

  function handleMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    el.style.setProperty("--mx", `${mx}px`);
    el.style.setProperty("--my", `${my}px`);
    if (useTilt) {
      const px = mx / rect.width - 0.5;
      const py = my / rect.height - 0.5;
      ry.set(px * 9);
      rx.set(-py * 9);
      ty.set(-5);
    }
  }

  function reset() {
    rx.set(0);
    ry.set(0);
    ty.set(0);
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={
        useTilt
          ? { rotateX: srx, rotateY: sry, y: sty, transformPerspective: 900 }
          : undefined
      }
      className={`spotlight-card ${className}`}
    >
      {children}
    </MotionTag>
  );
}
