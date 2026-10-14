const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');
async function main() {
  const source = process.argv[2];
  if (!source) throw new Error('Pass the generated contact sheet path.');
  const destination = path.join(process.cwd(), 'public/images/seo-care-services');
  await fs.mkdir(destination, {recursive:true});
  const {width,height} = await sharp(source).metadata();
  const names=['consultation','appointment','pharmacy'];
  for(let i=0;i<3;i++) {
    const left=Math.round(i*width/3), right=Math.round((i+1)*width/3);
    await sharp(source).extract({left,top:0,width:right-left,height}).webp({quality:88}).toFile(path.join(destination,`${names[i]}.webp`));
  }
  console.log('Saved three healthcare service photographs.');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
