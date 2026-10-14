const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error("Provide the generated feature illustration sheet path.");
  const destination = path.resolve(__dirname, "../public/images/website-design/features");
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) throw new Error("Cannot read illustration dimensions.");
  await fs.mkdir(destination, { recursive: true });
  for (const [index, name] of ["insights", "lead-generation", "campaigns"].entries()) {
    const top = Math.round(index * height / 3);
    await sharp(source).extract({ left: 0, top, width, height: Math.round((index + 1) * height / 3) - top }).webp({ quality: 88 }).toFile(path.join(destination, `${name}.webp`));
  }
  console.log("Prepared three website feature illustrations.");
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
