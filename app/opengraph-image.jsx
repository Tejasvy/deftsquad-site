import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DeftSquad — AI Solutions & IT Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#FFFFFF",
          padding: 80,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top row: logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#FF3000",
            }}
          />
          <div
            style={{
              fontSize: 40,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            <span>DEFT</span>
            <span style={{ color: "#FF3000" }}>SQUAD</span>
          </div>
        </div>

        {/* Center: headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ color: "#FF3000" }}>AI</span>
            <span>&nbsp;Solutions</span>
          </div>
          <div style={{ display: "flex" }}>
            <span>&amp;&nbsp;</span>
            <span style={{ color: "#FF3000" }}>IT</span>
            <span>&nbsp;Consulting</span>
          </div>
        </div>

        {/* Bottom row: tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#888888",
          }}
        >
          <span>Production-grade AI · Cloud-native IT</span>
          <span style={{ color: "#FF3000" }}>↗</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
