"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
];

export function Nav() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: -16 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-5 transition-all duration-300 sm:px-6 ${
          scrolled || open ? "py-3" : "py-5"
        } ${
          scrolled || open
            ? "bg-bg/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2 font-mono text-sm font-medium text-text-primary"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
          {site.brand}
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md border border-border bg-surface"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                    aria-hidden
                  />
                ) : null}
                {link.label}
              </a>
            );
          })}
          <a
            href={site.cvUrl}
            download
            className="rounded-md px-3 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            CV
          </a>
          <a
            href="#contact"
            className="ml-2 rounded-md border border-accent/40 bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:border-accent/60 hover:bg-accent/20"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-text-primary transition-colors hover:border-accent/50 sm:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-4 w-5" aria-hidden>
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 overflow-hidden rounded-xl border border-border bg-surface/95 p-2 backdrop-blur-md sm:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base text-text-secondary transition-colors hover:bg-surface-2 hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.cvUrl}
              download
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base text-text-secondary transition-colors hover:bg-surface-2 hover:text-text-primary"
            >
              Download CV
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg bg-accent px-4 py-3 text-center text-base font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-border to-transparent transition-opacity duration-300 ${
          scrolled && !open ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.header>
  );
}
