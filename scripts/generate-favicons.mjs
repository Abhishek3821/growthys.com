import sharp from "sharp";
import { writeFile } from "node:fs/promises";

// Use the existing Growthys symbol without squeezing the full wordmark into a tab.
const symbol = await sharp("public/images/brand/growthys-logo.png")
  .extract({ left: 0, top: 0, width: 252, height: 251 })
  .png()
  .toBuffer();

async function icon(size, background = { r: 255, g: 255, b: 255, alpha: 0 }) {
  const padding = Math.max(1, Math.round(size * 0.07));
  return sharp(symbol)
    .resize(size - padding * 2, size - padding * 2, { fit: "contain", background })
    .extend({ top: padding, bottom: padding, left: padding, right: padding, background })
    .flatten(background.alpha === 1 ? { background } : false)
    .png()
    .toBuffer();
}

const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((size) => icon(size)));
const header = Buffer.alloc(6 + images.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});

await writeFile("app/favicon.ico", Buffer.concat([header, ...images]));
await writeFile("app/icon.png", await icon(512));
await writeFile("app/apple-icon.png", await icon(180, { r: 255, g: 255, b: 255, alpha: 1 }));
console.log("Created Growthys favicon, PNG icon, and Apple touch icon.");
