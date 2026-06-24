"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Cadru de telefon pentru screenshot-uri în portret (ex. app Flutter JOBBIN).
 * Ecranul are raport ~9/19.5, deci screenshot-urile de telefon intră aproape
 * perfect. `delay` + `float` dau o intrare/plutire subtilă (oprite la
 * prefers-reduced-motion prin regula globală din globals.css).
 */
export function PhoneFrame({
  src,
  alt,
  float = false,
  size = "md",
}: {
  src: string;
  alt: string;
  float?: boolean;
  size?: "sm" | "md";
}) {
  const [failed, setFailed] = useState(false);
  const width =
    size === "sm" ? "w-[112px] sm:w-[180px]" : "w-[160px] sm:w-[210px]";

  return (
    <div
      className={`group/phone relative shrink-0 ${width}`}
      style={float ? { animation: "float-slow 6s ease-in-out infinite" } : undefined}
    >
      {/* glow în spate */}
      <div
        className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover/phone:opacity-100"
        aria-hidden
      />
      <div className="relative rounded-[2rem] border border-border bg-surface-2 p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover/phone:-translate-y-1">
        {/* ecran */}
        <div
          className="relative overflow-hidden rounded-[1.5rem] bg-bg"
          style={{ aspectRatio: "9 / 19.5" }}
        >
          {/* notch */}
          <div
            className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black/60"
            aria-hidden
          />
          {!failed ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="210px"
              className="object-cover object-top"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center p-4 text-center font-mono text-xs text-text-muted">
              {alt}
            </div>
          )}
          {/* reflexie la hover */}
          <div
            className="pointer-events-none absolute inset-0 translate-y-[-120%] bg-gradient-to-b from-white/10 to-transparent transition-transform duration-700 ease-out group-hover/phone:translate-y-[120%]"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
