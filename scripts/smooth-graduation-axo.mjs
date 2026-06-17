import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const dir = path.resolve(process.cwd(), 'images', 'graduation');
const input = path.join(dir, 'graduationaxo.opt.webp');
const inputSmall = path.join(dir, 'graduationaxo.opt.small.webp');
const outSmooth = path.join(dir, 'graduationaxo.opt.smooth.webp');
const outSmoothSmall = path.join(dir, 'graduationaxo.opt.small.smooth.webp');

async function smoothFile(src, destTmp, maxWidth) {
  const img = sharp(src);
  const meta = await img.metadata();

  // Mild gaussian blur to soften block edges, then a gentle sharpen to preserve detail
  let pipeline = img.clone().blur(0.6);

  if (maxWidth && meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth });
  }

  pipeline = pipeline.sharpen();

  await pipeline.webp({ quality: 60 }).toFile(destTmp);
}

(async () => {
  try {
    if (!fs.existsSync(input)) {
      console.error('Input not found:', input);
      process.exit(1);
    }

    await smoothFile(input, outSmooth);
    await smoothFile(inputSmall, outSmoothSmall, 1200);

    const s1 = fs.statSync(outSmooth).size;
    const s2 = fs.statSync(outSmoothSmall).size;
    console.log('Smoothed files written:', outSmooth, '-', s1, 'bytes');
    console.log('Smoothed files written:', outSmoothSmall, '-', s2, 'bytes');
  } catch (err) {
    console.error('Smoothing failed:', err);
    process.exit(1);
  }
})();
