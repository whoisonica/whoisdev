"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const links = [
  { href: "#despre", label: "Despre" },
  { href: "#proiecte", label: "Proiecte" },
  { href: "#servicii", label: "Servicii" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -16 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium text-text-primary"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
          {site.brand}
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-md border border-border bg-surface px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50 hover:text-accent"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-md border border-border bg-surface px-3.5 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent/50 hover:text-accent sm:hidden"
        >
          Contact
        </a>
      </div>
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-border to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.header>
  );
}
