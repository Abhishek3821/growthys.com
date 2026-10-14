const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require("sharp");

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error("Provide the generated client portrait contact sheet path.");
  const destination = path.resolve(__dirname, "../public/images/crm-management/clients");
  const names = ["young-professional", "family", "senior"];
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) throw new Error("Cannot read photo dimensions.");
  await fs.mkdir(destination, { recursive: true });
  for (const [index, name] of names.entries()) {
    const left = Math.round(index * width / 3);
    await sharp(source).extract({ left, top: 0, width: Math.round((index + 1) * width / 3) - left, height }).webp({ quality: 88 }).toFile(path.join(destination, `${name}.webp`));
  }
  console.log("Prepared three CRM client portraits.");
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });
