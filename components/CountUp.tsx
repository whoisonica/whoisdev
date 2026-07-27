"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the number inside a string (e.g. "10M+", "1.5 yrs", "4") from 0 to
 * its value on entering the viewport, keeping any non-numeric prefix/suffix.
 *
 * - No layout shift: the final value is rendered invisibly to reserve width,
 *   with the animating number layered on top (tabular figures = no jitter).
 * - No hydration mismatch: always starts at 0 on both server and client; the
 *   animation and final value are set in an effect (client only).
 */
export function CountUp({
  value,
  duration = 1400,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const match = value.match(/(\d+(?:[.,]\d+)?)/);

  // Non-numeric values: render the text as-is, with no animation.
  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <Animated
      className={className}
      value={value}
      raw={match[1]}
      index={match.index ?? 0}
      duration={duration}
      reduce={!!reduce}
      inView={inView}
      hostRef={ref}
    />
  );
}

function Animated({
  className,
  value,
  raw,
  index,
  duration,
  reduce,
  inView,
  hostRef,
}: {
  className?: string;
  value: string;
  raw: string;
  index: number;
  duration: number;
  reduce: boolean;
  inView: boolean;
  hostRef: React.RefObject<HTMLSpanElement>;
}) {
  const target = parseFloat(raw.replace(",", "."));
  const decimals = raw.includes(".") || raw.includes(",") ? 1 : 0;
  const start = value.slice(0, index);
  const end = value.slice(index + raw.length);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      // easeOutExpo — the ending lands gracefully
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, target, duration]);

  return (
    <span
      ref={hostRef}
      className={`relative inline-grid tabular-nums ${className ?? ""}`}
    >
      {/* invisible placeholder — reserves the final value's width (anti-jitter) */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {value}
      </span>
      {/* the animating value, layered over the placeholder */}
      <span className="col-start-1 row-start-1">
        {start}
        {display.toFixed(decimals)}
        {end}
      </span>
    </span>
  );
}
