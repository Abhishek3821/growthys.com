const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error('Pass the generated park contact sheet path.');
  const destination = path.join(process.cwd(), 'public', 'images', 'app-development', 'park');
  await fs.mkdir(destination, { recursive: true });
  const { width, height } = await sharp(source).metadata();
  const names = ['family-ride', 'roller-coaster', 'bicycle'];
  for (let i = 0; i < names.length; i++) {
    const left = Math.round(i * width / 3);
    const right = Math.round((i + 1) * width / 3);
    const crop = await sharp(source).extract({ left, top: 0, width: right - left, height }).png().toBuffer();
    await sharp(crop).trim().webp({ quality: 90 }).toFile(path.join(destination, `${names[i]}.webp`));
  }
  console.log('Saved three park attraction images.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
