import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const { assets } = JSON.parse(await fs.readFile("docs/website-design-image-prompts.json", "utf8"));
const target = "public/images/website-design/graphics";
await fs.mkdir(`${target}/originals`, { recursive: true });
const records = [];
for (const asset of assets) {
  const original = path.join(target, "originals", `${asset.name}.png`);
  await fs.copyFile(asset.source, original);
  const native = await sharp(original).metadata();
  const output = path.join(target, `${asset.name}.webp`);
  const info = await sharp(original).resize(asset.width, asset.height, { fit: "fill", kernel: "lanczos3" }).webp({ quality: 95, effort: 6 }).toFile(output);
  records.push({ name: asset.name, originalWidth: native.width, originalHeight: native.height, width: info.width, height: info.height, bytes: info.size, upscaled: native.width < info.width, output });
}
await fs.writeFile("docs/website-design-image-sizes.json", JSON.stringify(records, null, 2) + "\n");
console.log(JSON.stringify({ images: records.length, totalBytes: records.reduce((sum, asset) => sum + asset.bytes, 0), assets: records }, null, 2));
