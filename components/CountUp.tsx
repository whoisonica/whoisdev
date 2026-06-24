"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animă numărul dintr-un string (ex. "10M+", "2+ ani", "4") de la 0 la valoare
 * când intră în viewport. Păstrează prefixul/sufixul ne-numeric intact.
 *
 * - Fără layout shift: valoarea finală e randată invizibil ca să rezerve lățimea,
 *   iar numărul care se animă stă deasupra (cifre tabulare = fără „salturi").
 * - Fără mismatch la hidratare: pornește mereu de la 0 pe server și client;
 *   animația / valoarea finală se setează abia într-un effect (doar pe client).
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

  // Valori ne-numerice: randăm textul ca atare, fără animație.
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
      // easeOutExpo — finalul „aterizează" elegant
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
      {/* placeholder invizibil — rezervă lățimea valorii finale (anti-jitter) */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {value}
      </span>
      {/* valoarea care se animă, suprapusă peste placeholder */}
      <span className="col-start-1 row-start-1">
        {start}
        {display.toFixed(decimals)}
        {end}
      </span>
    </span>
  );
}
