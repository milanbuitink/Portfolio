import sharp from 'sharp';
import path from 'path';

const input = path.resolve(process.cwd(), 'images', 'graduation', 'graduationaxo.png');
const output = path.resolve(process.cwd(), 'images', 'graduation', 'graduationaxo.webp');

(async () => {
  try {
    const image = sharp(input);
    const metadata = await image.metadata();

    // Choose a quality that balances speed and visual fidelity
    // If the image has alpha channel, use webp lossless for best quality; otherwise use quality 85.
    const hasAlpha = metadata.hasAlpha;

    if (hasAlpha) {
      await image.webp({ lossless: true }).toFile(output);
    } else {
      await image.webp({ quality: 85 }).toFile(output);
    }

    console.log('Converted:', input, '->', output);
  } catch (err) {
    console.error('Conversion failed:', err);
    process.exit(1);
  }
})();
