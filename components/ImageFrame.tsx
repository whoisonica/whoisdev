"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Cadru de imagine cu placeholder elegant. Câtă vreme fișierul real nu există
 * în public/, se afișează un placeholder; după ce pui screenshot-ul real
 * (același path), apare imaginea automat. Înlocuiește pozele în /public.
 */
export function ImageFrame({
  src,
  alt,
  label,
  ratio = "16/10",
  sizes = "(max-width: 768px) 100vw, 540px",
}: {
  src: string;
  alt: string;
  label?: string;
  ratio?: string;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className="group/img relative w-full overflow-hidden rounded-xl border border-border bg-surface-2 transition-colors duration-300 hover:border-accent/40"
      style={{ aspectRatio: ratio }}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.03]"
          onError={() => setFailed(true)}
        />
      ) : (
        <Placeholder label={label} alt={alt} />
      )}

      {/* reflexie / shine care traversează la hover */}
      <div
        className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 ease-out group-hover/img:translate-x-[120%]"
        aria-hidden
      />
    </div>
  );
}

function Placeholder({ label, alt }: { label?: string; alt: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-grid p-6 text-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-muted">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      </div>
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
        {label ?? "Screenshot"}
      </span>
      <span className="max-w-[80%] text-xs text-text-muted/70">{alt}</span>
    </div>
  );
}
