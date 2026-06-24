"use client";

import { useEffect, useRef } from "react";

/**
 * Fundal „aurora": două pete de gradient care plutesc lent + un spotlight
 * care urmărește cursorul. Mișcarea automată e oprită prin CSS la
 * prefers-reduced-motion (.aurora-blob), iar spotlight-ul de mouse devine
 * irelevant (nu există hover pe touch / fără cursor).
 */
export function Aurora() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    function onMove(e: MouseEvent) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        el?.style.setProperty("--spot-x", `${x}%`);
        el?.style.setProperty("--spot-y", `${y}%`);
      });
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* grilă subtilă */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* blob aurora 1 */}
      <div
        className="aurora-blob absolute left-1/2 top-[-20%] h-[520px] w-[760px] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(91,141,239,0.45) 0%, rgba(91,141,239,0) 70%)",
          animation: "aurora-1 18s ease-in-out infinite",
        }}
      />
      {/* blob aurora 2 (mov-rece pentru profunzime) */}
      <div
        className="aurora-blob absolute left-1/2 top-[5%] h-[460px] w-[640px] rounded-full opacity-40 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,122,255,0.35) 0%, rgba(139,122,255,0) 70%)",
          animation: "aurora-2 22s ease-in-out infinite",
        }}
      />

      {/* spotlight care urmărește cursorul */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 30%), rgba(91,141,239,0.08), transparent 60%)",
        }}
      />

      {/* fade spre fundal jos */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
