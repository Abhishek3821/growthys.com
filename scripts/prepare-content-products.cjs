const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
async function main() {
  const source = process.argv[2];
  const directory = path.join(process.cwd(), 'public/images/content-marketing/products');
  await fs.mkdir(directory, { recursive: true });
  const { width, height } = await sharp(source).metadata();
  const names = ['tablets', 'syrups', 'injectables', 'ointments'];
  for (let index = 0; index < names.length; index++) {
    const left = Math.round(width * index / 4);
    const right = Math.round(width * (index + 1) / 4);
    await sharp(source).extract({ left, top: 0, width: right - left, height }).webp({ quality: 88 }).toFile(path.join(directory, `${names[index]}.webp`));
  }
  console.log('Saved four product images.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
