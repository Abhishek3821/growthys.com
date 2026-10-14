const sharp=require('sharp');
const fs=require('node:fs/promises');
const path=require('node:path');
async function main(){
  const source=process.argv[2];
  if(!source)throw new Error('Pass the generated photo sheet path.');
  const destination=path.join(process.cwd(),'public/images/hrms-selected-projects');
  await fs.mkdir(destination,{recursive:true});
  const {width,height}=await sharp(source).metadata();
  const names=['packaging','identity','shopping-bag'];
  for(let i=0;i<3;i++){
    const left=Math.round(i*width/3),right=Math.round((i+1)*width/3);
    await sharp(source).extract({left,top:0,width:right-left,height}).webp({quality:90}).toFile(path.join(destination,`${names[i]}.webp`));
  }
  console.log('Saved three selected project images.');
}
main().catch(e=>{console.error(e);process.exitCode=1;});
