const sharp=require('sharp');
const fs=require('node:fs/promises');
const path=require('node:path');
async function main(){const source=process.argv[2];if(!source)throw new Error('Pass image sheet path.');const destination=path.join(process.cwd(),'public/images/content-marketing/designer');await fs.mkdir(destination,{recursive:true});const {width,height}=await sharp(source).metadata();const split=Math.round(width/2);await sharp(source).extract({left:0,top:0,width:split,height}).webp({quality:88}).toFile(path.join(destination,'portrait.webp'));await sharp(source).extract({left:split,top:0,width:width-split,height}).webp({quality:90}).toFile(path.join(destination,'illustration.webp'));console.log('Saved designer portrait and illustration.');}
main().catch(e=>{console.error(e);process.exitCode=1;});
