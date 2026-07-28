import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card shown when the site is shared on LinkedIn, WhatsApp, Slack, etc.
 * Rendered by next/og at request time — no external assets, no fonts to load.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0A0B",
          backgroundImage:
            "radial-gradient(1000px 500px at 15% 0%, rgba(91,141,239,0.22) 0%, rgba(10,10,11,0) 60%)",
          padding: "72px 80px",
          color: "#F2F4F7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#5B8DEF",
            letterSpacing: 1,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#5B8DEF",
              display: "flex",
            }}
          />
          {site.domain}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: -2,
            marginTop: 28,
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#A8B0BC",
            marginTop: 10,
          }}
        >
          {site.role} · {site.location}
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 44,
            flexWrap: "wrap",
          }}
        >
          {["Flutter", "React + TypeScript", "Java Spring Boot", "PostgreSQL"].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  fontSize: 26,
                  color: "#D5DBE5",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 10,
                  padding: "10px 20px",
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#8A93A0",
            marginTop: 44,
          }}
        >
          {site.availability}
        </div>
      </div>
    ),
    size
  );
}
