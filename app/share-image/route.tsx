import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const logo = await readFile(path.join(process.cwd(), "public/images/brand/growthys-logo.png"));
  const logoSource = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "70px", background: "#ffffff", color: "#080d55", fontFamily: "sans-serif", borderBottom: "12px solid #ff7900" }}>
      {/* Native image is required by ImageResponse; this is not page UI. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSource} alt="Growthys logo" width={900} height={251} style={{ objectFit: "contain" }} />
      <div style={{ display: "flex", marginTop: 38, fontSize: 28 }}>Design. Technology. Digital growth.</div>
      <div style={{ display: "flex", marginTop: 32, fontSize: 21, color: "#62657a" }}>www.growthys.com</div>
    </div>,
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800" } },
  );
}
