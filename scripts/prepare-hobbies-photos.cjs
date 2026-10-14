const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error('Pass the generated contact sheet path.');
  const destination = path.join(process.cwd(), 'public', 'images', 'ecommerce-marketing', 'hobbies');
  await fs.mkdir(destination, { recursive: true });
  const { width, height } = await sharp(source).metadata();
  const names = ['garden', 'exploring', 'sunshine', 'weekend'];
  for (let index = 0; index < names.length; index++) {
    const left = Math.round((index % 2) * width / 2);
    const top = Math.round(Math.floor(index / 2) * height / 2);
    await sharp(source).extract({ left, top, width: Math.floor(width / 2), height: Math.floor(height / 2) }).webp({ quality: 88 }).toFile(path.join(destination, `${names[index]}.webp`));
  }
  console.log('Saved 4 Hobbies photos.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
