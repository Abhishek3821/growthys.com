import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Run after generating the assets listed in the local source manifest.
const manifest = JSON.parse(await fs.readFile("tmp/imagegen/homepage-sources.json", "utf8"));
const target = "public/images/homepage";
await fs.mkdir(target, { recursive: true });
const records = [];
const tiles = [];
for (const [index, item] of manifest.entries()) {
  let input = sharp(item.source);
  if (item.name === "industry-portraits") {
    // Each existing portrait slot selects one of four columns and two rows.
    // Keep the whole generated sheet, aligned to the established 8:5 ratio.
    const { width } = await input.metadata();
    const portraitWidth = Math.floor(width / 8) * 8;
    input = input.resize(portraitWidth, portraitWidth * 5 / 8, { fit: "fill" });
  }
  const output = path.join(target, `${item.name}.webp`);
  const info = await input.webp({ quality: 92, effort: 6 }).toFile(output);
  records.push({ name: item.name, width: info.width, height: info.height, bytes: info.size });
  const thumbnail = await sharp(output).resize(420, 252, { fit: "contain", background: "#edf0f3" }).png().toBuffer();
  const left = (index % 3) * 440 + 10;
  const top = Math.floor(index / 3) * 292 + 10;
  tiles.push({ input: thumbnail, left, top });
  const label = Buffer.from(`<svg width="420" height="30"><rect width="420" height="30" fill="#ffffff"/><text x="10" y="21" font-family="Arial" font-size="16" fill="#142d38">${item.name}</text></svg>`);
  tiles.push({ input: label, left, top: top + 252 });
}
await sharp({ create: { width: 1320, height: Math.ceil(manifest.length / 3) * 292, channels: 3, background: "#ffffff" } })
  .composite(tiles).png().toFile("tmp/imagegen/homepage-contact-sheet.png");
await fs.writeFile("tmp/imagegen/homepage-asset-sizes.json", JSON.stringify(records, null, 2));
console.log(JSON.stringify({ images: records.length, totalBytes: records.reduce((sum, item) => sum + item.bytes, 0), assets: records }, null, 2));
