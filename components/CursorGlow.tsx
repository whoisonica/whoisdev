"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Cursor personalizat (doar pe dispozitive cu pointer fin — desktop):
 * un punct precis care urmărește instant cursorul + un inel care „lag-uiește"
 * prin spring și crește când treci peste elemente interactive.
 * Dezactivat complet pe touch și la prefers-reduced-motion.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [data-cursor]"));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* punct precis */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60]"
        style={{ x, y }}
      >
        <div className="h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </motion.div>

      {/* inel care lag-uiește + reacționează la hover / click */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60"
          animate={{
            width: hovering ? 46 : 28,
            height: hovering ? 46 : 28,
            opacity: hovering ? 1 : 0.45,
            scale: down ? 0.8 : 1,
            backgroundColor: hovering
              ? "rgba(91,141,239,0.08)"
              : "rgba(91,141,239,0)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
      </motion.div>
    </>
  );
}
