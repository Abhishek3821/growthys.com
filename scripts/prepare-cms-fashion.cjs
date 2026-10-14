const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error('Pass the generated contact sheet path.');
  const destination = path.join(process.cwd(), 'public', 'images', 'cms-design');
  await fs.mkdir(destination, { recursive: true });
  const { width, height } = await sharp(source).metadata();
  const split = Math.round(height * 468 / 1024);
  const names = ['orange-look', 'green-suit', 'yellow-portrait', 'blue-suit', 'colourful-look', 'heart-sunglasses', 'teal-look', 'creative-avatar'];
  for (let index = 0; index < names.length; index++) {
    const column = index % 4;
    const left = Math.round(column * width / 4);
    const right = Math.round((column + 1) * width / 4);
    const top = index < 4 ? 0 : split;
    await sharp(source).extract({ left, top, width: right - left, height: index < 4 ? split : height - split }).webp({ quality: 90 }).toFile(path.join(destination, `${names[index]}.webp`));
  }
  console.log('Saved 8 CMS fashion images.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
