import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = process.argv[2] || 'public/cvs';
const outputDir = process.argv[3] || 'public/cvs-web';
const maxWidth = Number(process.argv[4] || 1400);
const quality = Number(process.argv[5] || 80);

const isImage = (file) => /\.(jpe?g|png|webp)$/i.test(file);

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(inputDir);
  for (const file of files) {
    if (!isImage(file)) continue;

    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpe?g|png|webp)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);

    console.log(`Compressed ${file} -> ${path.join(outputDir, outputName)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
