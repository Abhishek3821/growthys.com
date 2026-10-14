const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error("Provide the generated creative object atlas path.");
  const destination = path.resolve(__dirname, "../public/images/digital-marketing/marquee");
  const names = ["headphones", "trophy", "shopping", "star", "microphone", "offers", "tennis", "megaphone", "approval"];
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) throw new Error("Cannot read atlas dimensions.");
  await fs.mkdir(destination, { recursive: true });
  for (const [index, name] of names.entries()) {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const left = Math.round(col * width / 3);
    const top = Math.round(row * height / 3);
    await sharp(source).extract({ left, top, width: Math.round((col + 1) * width / 3) - left, height: Math.round((row + 1) * height / 3) - top }).webp({ quality: 90 }).toFile(path.join(destination, `${name}.webp`));
  }
  console.log("Prepared nine creative marquee illustrations.");
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
