import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const projects = [
  {
    dir: 'public/projects/1',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.19.05.jpeg', 'vcy-t3-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.19.06.jpeg', 'vcy-t3-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.19.07.jpeg', 'vcy-t3-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.19.08.jpeg', 'vcy-t3-04.webp']
    ]
  },
  {
    dir: 'public/projects/2',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.25.31.jpeg', 'kikot-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.25.32.jpeg', 'kikot-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.25.33.jpeg', 'kikot-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17 (1).jpeg', 'kikot-04.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17 (2).jpeg', 'kikot-05.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17 (3).jpeg', 'kikot-06.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17 (4).jpeg', 'kikot-07.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17 (5).jpeg', 'rail-lobe-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17 (6).jpeg', 'rail-lobe-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17 (7).jpeg', 'rail-lobe-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17.jpeg', 'kikot-08.webp']
    ]
  },
  {
    dir: 'public/projects/3',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.31.17.jpeg', 'bafoussam-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.31.18.jpeg', 'bafoussam-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.31.19.jpeg', 'bafoussam-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.57.08.jpeg', 'bafoussam-04.webp'],
      ['WhatsApp Image 2026-03-30 at 20.57.09.jpeg', 'bafoussam-05.webp']
    ]
  },
  {
    dir: 'public/projects/4',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.33.51.jpeg', 'kribi-dup-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.33.52.jpeg', 'kribi-dup-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.33.53.jpeg', 'kribi-dup-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.33.54.jpeg', 'kribi-dup-04.webp']
    ]
  },
  {
    dir: 'public/projects/5',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.37.46 (1).jpeg', 'ntam-nabeba-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.37.46 (2).jpeg', 'ntam-nabeba-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.37.46 (3).jpeg', 'ntam-nabeba-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.37.46 (4).jpeg', 'ntam-nabeba-04.webp'],
      ['WhatsApp Image 2026-03-30 at 20.37.46.jpeg', 'ntam-nabeba-05.webp'],
      ['WhatsApp Image 2026-03-30 at 20.38.04.jpeg', 'ntam-nabeba-06.webp']
    ]
  },
  {
    dir: 'public/projects/6',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.43.06.jpeg', 'ebolowa-akom2-kribi-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.43.07.jpeg', 'ebolowa-akom2-kribi-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.43.08.jpeg', 'ebolowa-akom2-kribi-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.57.37.jpeg', 'ebolowa-akom2-kribi-04.webp']
    ]
  },
  {
    dir: 'public/projects/7',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.48.14.jpeg', 'lomie-messok-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.48.15.jpeg', 'lomie-messok-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.48.16.jpeg', 'lomie-messok-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.57.37 (1).jpeg', 'lomie-messok-04.webp'],
      ['WhatsApp Image 2026-03-30 at 20.57.37.jpeg', 'lomie-messok-05.webp'],
      ['WhatsApp Image 2026-03-30 at 20.58.29 (1).jpeg', 'lomie-messok-06.webp'],
      ['WhatsApp Image 2026-03-30 at 20.58.29 (2).jpeg', 'lomie-messok-07.webp'],
      ['WhatsApp Image 2026-03-30 at 20.58.29 (3).jpeg', 'lomie-messok-08.webp'],
      ['WhatsApp Image 2026-03-30 at 20.58.29.jpeg', 'lomie-messok-09.webp']
    ]
  },
  {
    dir: 'public/projects/8',
    files: [
      ['WhatsApp Image 2026-03-30 at 20.53.11.jpeg', 'lobe-rail-01.webp'],
      ['WhatsApp Image 2026-03-30 at 20.53.15.jpeg', 'lobe-rail-02.webp'],
      ['WhatsApp Image 2026-03-30 at 20.53.16.jpeg', 'lobe-rail-03.webp'],
      ['WhatsApp Image 2026-03-30 at 20.54.52.jpeg', 'lobe-rail-04.webp'],
      ['WhatsApp Image 2026-03-30 at 20.55.38.jpeg', 'lobe-rail-05.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.17.jpeg', 'lobe-rail-06.webp'],
      ['WhatsApp Image 2026-03-30 at 20.56.18.jpeg', 'lobe-rail-07.webp']
    ]
  }
];

async function convertFolder({ dir, files }) {
  await fs.mkdir(dir, { recursive: true });

  for (const [source, target] of files) {
    const inputPath = path.join(dir, source);
    const outputPath = path.join(dir, target);

    await sharp(inputPath)
      .resize({ width: 1800, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);

    console.log(`Compressed ${path.join(dir, source)} -> ${path.join(dir, target)}`);
  }
}

async function main() {
  for (const project of projects) {
    await convertFolder(project);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
