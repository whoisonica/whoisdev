"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Card cu glow radial care urmărește cursorul pe margine + suprafață.
 * Efectul vizual e pur CSS (vezi .spotlight-card în globals.css); aici doar
 * actualizăm variabilele --mx/--my. Inofensiv cu prefers-reduced-motion
 * (e doar hover, fără mișcare automată).
 */
export function SpotlightCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  const Component = Tag as "div";

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </Component>
  );
}
