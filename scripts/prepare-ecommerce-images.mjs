import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const { assets } = JSON.parse(await fs.readFile("docs/ecommerce-solutions-image-prompts.json", "utf8"));
const target = "public/images/services/ecommerce-solutions";
await fs.mkdir(path.join(target, "originals"), { recursive: true });
const records = [];
for (const asset of assets) {
  const original = path.join(target, "originals", `${asset.name}.png`);
  await fs.copyFile(asset.source, original);
  const metadata = await sharp(original).metadata();
  const output = path.join(target, `${asset.name}.webp`);
  const result = await sharp(original)
    .resize(asset.width, asset.height, { fit: "cover", kernel: "lanczos3" })
    .webp({ quality: 95, alphaQuality: 100, effort: 6 })
    .toFile(output);
  records.push({
    name: asset.name,
    originalWidth: metadata.width,
    originalHeight: metadata.height,
    width: result.width,
    height: result.height,
    bytes: result.size,
    upscaled: metadata.width < asset.width || metadata.height < asset.height,
    hasAlpha: metadata.hasAlpha,
    output,
  });
}
await fs.writeFile("docs/ecommerce-solutions-image-sizes.json", JSON.stringify(records, null, 2) + "\n");
console.log(JSON.stringify(records, null, 2));
