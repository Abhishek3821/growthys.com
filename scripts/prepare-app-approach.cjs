const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error('Pass the generated furniture contact sheet path.');
  const destination = path.join(process.cwd(), 'public', 'images', 'app-development', 'approach');
  await fs.mkdir(destination, { recursive: true });
  const { width, height } = await sharp(source).metadata();
  const split = Math.round(width / 2);
  await sharp(source).extract({ left: 0, top: 0, width: split, height }).webp({ quality: 88 }).toFile(path.join(destination, 'lamp-chair.webp'));
  await sharp(source).extract({ left: split, top: 0, width: width - split, height }).webp({ quality: 88 }).toFile(path.join(destination, 'teal-armchair.webp'));
  console.log('Saved two approach photographs.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
