import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "70px 78px", background: "#10213b", color: "#fffaf7", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 52, fontWeight: 700, letterSpacing: -2 }}>growthys<span style={{ color: "#ff99be" }}>.</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, fontWeight: 700, lineHeight: 1.12, letterSpacing: -2 }}><span>Good ideas.</span><span>Unforgettable execution.</span></div>
        <div style={{ display: "flex", color: "#ffbad2", fontSize: 26 }}>Design. Technology. Digital growth.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#c9d2dd" }}><span>Gurugram, India</span><span>www.growthys.com</span></div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" } },
  );
}
