import fs from "node:fs/promises";
import sharp from "sharp";

const assets = JSON.parse(await fs.readFile(process.argv[2] ?? "tmp/imagegen/hero-v2-sources.json", "utf8"));
const info = [];
const previews = [];
for (const [index, asset] of assets.entries()) {
  const output = `public/images/homepage/${asset.name}.webp`;
  const file = await sharp(asset.source).webp({ quality: 96, effort: 6 }).toFile(output);
  info.push({ name: asset.name, width: file.width, height: file.height, bytes: file.size });
  const preview = await sharp(output).resize(960, 540, { fit: "cover" }).png().toBuffer();
  previews.push({ input: preview, left: 0, top: index * 540 });
}
await sharp({ create: { width: 960, height: assets.length * 540, channels: 3, background: "#eef3f8" } }).composite(previews).png().toFile(process.argv[3] ?? "tmp/imagegen/hero-v2-preview.png");
console.log(JSON.stringify(info, null, 2));
