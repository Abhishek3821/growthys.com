const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error("Provide the generated contact sheet path.");
  const destination = path.resolve(__dirname, "../public/images/website-design");
  const names = ["bridge", "street", "lamps", "dog", "driftwood", "stairs", "bicycle", "clock", "zebras"];
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) throw new Error("Cannot read contact sheet dimensions.");
  await fs.mkdir(destination, { recursive: true });
  for (const [index, name] of names.entries()) {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const left = Math.round(col * width / 3);
    const top = Math.round(row * height / 3);
    await sharp(source).extract({
      left, top,
      width: Math.round((col + 1) * width / 3) - left,
      height: Math.round((row + 1) * height / 3) - top,
    }).webp({ quality: 88 }).toFile(path.join(destination, `${name}.webp`));
  }
  console.log(`Prepared ${names.length} gallery images in ${destination}`);
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
