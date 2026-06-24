import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#101012",
        "surface-2": "#16161A",
        border: "#1F1F23",
        "text-primary": "#EDEDED",
        "text-secondary": "#8B8B8F",
        "text-muted": "#5A5A5F",
        accent: "#5B8DEF",
        "accent-hover": "#74A0F5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,141,239,0.35), 0 0 40px -8px rgba(91,141,239,0.25)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
