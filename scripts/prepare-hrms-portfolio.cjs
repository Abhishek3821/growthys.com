const sharp=require('sharp');
const fs=require('node:fs/promises');
const path=require('node:path');
async function main(){
  const source=process.argv[2];
  if(!source)throw new Error('Pass the generated image sheet path.');
  const destination=path.join(process.cwd(),'public/images/hrms-portfolio');
  await fs.mkdir(destination,{recursive:true});
  const {width,height}=await sharp(source).metadata();
  const names=['fishing-hut','parasols','tablet','architecture','carnival','typewriter'];
  for(let i=0;i<names.length;i++){
    const left=Math.round((i%3)*width/3),right=Math.round((i%3+1)*width/3),top=Math.round(Math.floor(i/3)*height/2),bottom=Math.round((Math.floor(i/3)+1)*height/2);
    await sharp(source).extract({left,top,width:right-left,height:bottom-top}).webp({quality:90}).toFile(path.join(destination,`${names[i]}.webp`));
  }
  console.log('Saved six portfolio images.');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
