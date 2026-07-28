"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the number inside a string (e.g. "10M+", "1.5 yrs", "4") from 0 to
 * its value on entering the viewport, keeping any non-numeric prefix/suffix.
 *
 * - No layout shift: the final value is rendered invisibly to reserve width,
 *   with the animating number layered on top (tabular figures = no jitter).
 * - No hydration mismatch: server and first client render both show the final
 *   value; the count-up starts from 0 only once the effect runs, so anything
 *   reading the HTML without executing JS (crawlers, link previews, ATS
 *   scrapers) sees the real number instead of a zero.
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

  // Starts at the final value so the server-rendered HTML carries the real
  // number; the effect below rewinds to 0 and animates up, client-side only.
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (reduce) {
      setDisplay(target);
      return;
    }
    if (!inView) {
      setDisplay(0);
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
