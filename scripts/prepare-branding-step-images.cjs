const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error("Provide the generated branding process contact sheet path.");
  const destination = path.resolve(__dirname, "../public/images/services/branding-steps");
  const names = ["discovery", "concepts", "refinement", "delivery"];
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) throw new Error("Cannot read illustration dimensions.");
  await fs.mkdir(destination, { recursive: true });
  for (const [index, name] of names.entries()) {
    const col = index % 2;
    const row = Math.floor(index / 2);
    const left = Math.round(col * width / 2);
    const top = Math.round(row * height / 2);
    await sharp(source).extract({ left, top, width: Math.round((col + 1) * width / 2) - left, height: Math.round((row + 1) * height / 2) - top }).webp({ quality: 90 }).toFile(path.join(destination, `${name}.webp`));
  }
  console.log("Prepared four branding process illustrations.");
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
