const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

async function main() {
  const source = process.argv[2];
  if (!source) throw new Error('Pass the generated interior contact sheet path.');
  const destination = path.join(process.cwd(), 'public', 'images', 'app-development', 'agenda');
  await fs.mkdir(destination, { recursive: true });
  const { width, height } = await sharp(source).metadata();
  const names = ['introduction', 'team', 'project', 'awards', 'contact'];
  for (let i = 0; i < names.length; i++) {
    const left = Math.round((i % 3) * width / 3);
    const right = Math.round((i % 3 + 1) * width / 3);
    const top = Math.round(Math.floor(i / 3) * height / 2);
    await sharp(source).extract({ left, top, width: right - left, height: Math.floor(height / 2) }).webp({ quality: 88 }).toFile(path.join(destination, `${names[i]}.webp`));
  }
  console.log('Saved five agenda interior photographs.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
