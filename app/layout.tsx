import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.role}`,
    template: `%s — ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "full-stack developer",
    "Flutter",
    "React",
    "TypeScript",
    "Spring Boot",
    "Oradea",
    "whoisdev",
  ],
  authors: [{ name: site.brand }],
  creator: site.brand,
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-bg text-text-primary font-sans antialiased">
        <div className="noise-overlay" aria-hidden />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Sari la conținut
        </a>
        {children}
      </body>
    </html>
  );
}
