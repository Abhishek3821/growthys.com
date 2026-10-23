import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const { assets } = JSON.parse(await fs.readFile("docs/ecommerce-marketing-image-prompts.json", "utf8"));
const target = "public/images/ecommerce-marketing/graphics";
await fs.mkdir(path.join(target, "originals"), { recursive: true });
const records = [];
for (const asset of assets) {
  const original = path.join(target, "originals", `${asset.name}.png`);
  await fs.copyFile(asset.source, original);
  const metadata = await sharp(original).metadata();
  const output = path.join(target, `${asset.name}.webp`);
  const result = await sharp(original)
    .resize(asset.width, asset.height, { fit: "cover", kernel: "lanczos3" })
    .webp({ quality: 95, effort: 6 })
    .toFile(output);
  records.push({
    name: asset.name,
    originalWidth: metadata.width,
    originalHeight: metadata.height,
    width: result.width,
    height: result.height,
    bytes: result.size,
    upscaled: metadata.width < asset.width || metadata.height < asset.height,
    output,
  });
}
// Preserve the existing three-window image sheet and its crop offsets.
const caseNames = ["store-rebuild", "marketplace", "retention"];
const tileSize = 2560;
const tiles = await Promise.all(caseNames.map(async (name, index) => ({
  input: await sharp(path.join(target, "originals", name + ".png"))
    .resize(tileSize, tileSize, { fit: "cover", kernel: "lanczos3" }).png().toBuffer(),
  top: index * tileSize,
  left: 0,
})));
const sheetPath = path.join(target, "case-studies-sheet.webp");
const sheet = await sharp({ create: { width: tileSize, height: tileSize * 3, channels: 3, background: "#f3ede1" } })
  .composite(tiles).webp({ quality: 95, effort: 6 }).toFile(sheetPath);
records.push({ name: "case-studies-sheet", width: sheet.width, height: sheet.height, bytes: sheet.size, upscaled: true, atlas: true, parts: caseNames, output: sheetPath });

await fs.writeFile("docs/ecommerce-marketing-image-sizes.json", JSON.stringify(records, null, 2) + "\n");
console.log(JSON.stringify(records, null, 2));
