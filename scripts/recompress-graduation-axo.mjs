import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const input = path.resolve(process.cwd(), 'images', 'graduation', 'graduationaxo.webp');
const output = path.resolve(process.cwd(), 'images', 'graduation', 'graduationaxo.opt.webp');
const outputSmall = path.resolve(process.cwd(), 'images', 'graduation', 'graduationaxo.opt.small.webp');

(async () => {
  try {
    const image = sharp(input);
    const metadata = await image.metadata();

    console.log('Input metadata:', metadata.width, 'x', metadata.height, 'format:', metadata.format);

    // Re-encode at lower quality
    await image.webp({ quality: 60 }).toFile(output);

    // Create a resized smaller variant (max width 1200)
    const maxSmallWidth = 1200;
    const resizeWidth = metadata.width && metadata.width > maxSmallWidth ? maxSmallWidth : Math.min(metadata.width || maxSmallWidth, maxSmallWidth);
    await image.resize({ width: resizeWidth }).webp({ quality: 60 }).toFile(outputSmall);

    const outStat = fs.statSync(output);
    const outSmallStat = fs.statSync(outputSmall);
    console.log('Wrote:', output, '-', outStat.size, 'bytes');
    console.log('Wrote:', outputSmall, '-', outSmallStat.size, 'bytes');
  } catch (err) {
    console.error('Recompression failed:', err);
    process.exit(1);
  }
})();
