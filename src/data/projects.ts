export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  images?: string[];
  location: string;
  year: string;
  client?: string;
  services: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Voie de contournement de Yaoundé (VCY) section T3',
    description: 'Mise en place du canevas de polygonale principale et secondaire, Observations GNSS et Nivellement encadré et fermé de ces bornes + levés LiDAR et Photogrammétrie à Yaoundé – CAMEROUN. 30Km x 300m , levé bathymétrique des sections des ouvrages existants.',
    category: 'LiDAR',
    image: '/projects/1/WhatsApp Image 2026-03-30 at 20.19.05.jpeg',
    images: [
      '/projects/1/WhatsApp Image 2026-03-30 at 20.19.05.jpeg',
      '/projects/1/WhatsApp Image 2026-03-30 at 20.19.06.jpeg',
      '/projects/1/WhatsApp Image 2026-03-30 at 20.19.07.jpeg',
      '/projects/1/WhatsApp Image 2026-03-30 at 20.19.08.jpeg'
    ],
    location: 'Yaoundé, Cameroun',
    year: '2026',
    client: 'Gouvernement du Cameroun',
    services: ['Canevas polygonale', 'GNSS', 'Nivellement', 'LiDAR', 'Photogrammétrie', 'Bathymétrie'],
  },
  {
    id: '2',
    title: 'Projet du barrage hydroélectrique de KIKOT',
    description: 'Levés LiDAR et Photogrammétrie à Kikot pour le compte de KHPC (Barrage 500MW) 500Ha + 26Km + Modélisation 3D des ponts sur le fleuve Sanaga à Kikot pour le compte de KHPC (Barrage 500MW). 120m et 70m',
    category: 'LiDAR',
    image: '/projects/2/WhatsApp Image 2026-03-30 at 20.25.31.jpeg',
    images: [
      '/projects/2/WhatsApp Image 2026-03-30 at 20.25.31.jpeg',
      '/projects/2/WhatsApp Image 2026-03-30 at 20.25.32.jpeg',
      '/projects/2/WhatsApp Image 2026-03-30 at 20.25.33.jpeg',
      '/projects/2/WhatsApp Image 2026-03-30 at 20.56.17 (1).jpeg'
    ],
    location: 'Kikot, Cameroun',
    year: '2024',
    client: 'KHPC',
    services: ['LiDAR', 'Photogrammétrie', 'Modélisation 3D'],
  },
  {
    id: '3',
    title: 'Routes Bafoussam-Batie, Kekem et Dschang',
    description: 'Levés LiDAR et Photogrammétrie des routes reliant Bafoussam-Batie, Kekem et Dschang, Ouest-Cameroun. 135Km x 300m. Matériel utilisé : Dji Matrice 350, LiDAR Zenmuse L2, Emlid RS3 et DRTK3.',
    category: 'LiDAR',
    image: '/projects/3/WhatsApp Image 2026-03-30 at 20.31.17.jpeg',
    images: [
      '/projects/3/WhatsApp Image 2026-03-30 at 20.31.17.jpeg',
      '/projects/3/WhatsApp Image 2026-03-30 at 20.31.18.jpeg',
      '/projects/3/WhatsApp Image 2026-03-30 at 20.31.19.jpeg'
    ],
    location: 'Ouest-Cameroun',
    year: '2025',
    services: ['LiDAR', 'Photogrammétrie'],
  },
  {
    id: '4',
    title: 'Etat des lieux sur la DUP du port de Kribi',
    description: 'Etat des lieux sur la DUP du port de Kribi. Levés LiDAR et Photogrammétrie sur une surface de 400Ha + 300Ha.',
    category: 'Photogrammétrie',
    image: '/projects/4/WhatsApp Image 2026-03-30 at 20.33.51.jpeg',
    images: [
      '/projects/4/WhatsApp Image 2026-03-30 at 20.33.51.jpeg',
      '/projects/4/WhatsApp Image 2026-03-30 at 20.33.52.jpeg',
      '/projects/4/WhatsApp Image 2026-03-30 at 20.33.53.jpeg'
    ],
    location: 'Kribi, Cameroun',
    year: '2026',
    services: ['LiDAR', 'Photogrammétrie'],
  },
  {
    id: '5',
    title: 'Projet de route Ntam – Nabeba (Congo)',
    description: 'Mise en place du canevas de polygonale principale et secondaire + Observations GNSS + levés LiDAR et Photogrammétrie à Ntam-CONGO. 55Km x 200m + 300 Ha, levé bathymétrique des sections des ouvrages existants.',
    category: 'Topographie',
    image: '/projects/5/WhatsApp Image 2026-03-30 at 20.38.04.jpeg',
    images: [
      '/projects/5/WhatsApp Image 2026-03-30 at 20.38.04.jpeg',
      '/projects/5/WhatsApp Image 2026-03-30 at 20.37.46 (1).jpeg',
      '/projects/5/WhatsApp Image 2026-03-30 at 20.37.46 (2).jpeg'
    ],
    location: 'Ntam, Congo',
    year: '2025',
    services: ['Canevas polygonale', 'GNSS', 'LiDAR', 'Photogrammétrie', 'Bathymétrie'],
  },
  {
    id: '6',
    title: 'Aménagement de la route Ebolowa – Akom 2- Kribi',
    description: 'Levés LiDAR et Photogrammétrie sur le long de la route Ebolowa-Akom2-Krib pour le compte d\'ICM. 200Km x 200m.',
    category: 'LiDAR',
    image: '/projects/6/WhatsApp Image 2026-03-30 at 20.43.06.jpeg',
    images: [
      '/projects/6/WhatsApp Image 2026-03-30 at 20.43.06.jpeg',
      '/projects/6/WhatsApp Image 2026-03-30 at 20.43.07.jpeg',
      '/projects/6/WhatsApp Image 2026-03-30 at 20.43.08.jpeg'
    ],
    location: 'Ebolowa-Kribi, Cameroun',
    year: '2024',
    client: 'ICM / Sitinfra SarlU',
    services: ['LiDAR', 'Photogrammétrie'],
  },
  {
    id: '7',
    title: 'Aménagement de la route Lomié – Messok',
    description: 'Levés LiDAR et Photogrammétrie le long de la route Lomie Messok (60Km x 200m) et mise en place du canevas de polygonale principale et secondaire + levés LiDAR et Photogrammétrie (25Km x 200m). Matériel utilisé : Dji Matrice 350, LiDAR Zenmuse L2, Emlid RS3 et DRTK3.',
    category: 'LiDAR',
    image: '/projects/7/WhatsApp Image 2026-03-30 at 20.48.14.jpeg',
    images: [
      '/projects/7/WhatsApp Image 2026-03-30 at 20.48.14.jpeg',
      '/projects/7/WhatsApp Image 2026-03-30 at 20.48.15.jpeg',
      '/projects/7/WhatsApp Image 2026-03-30 at 20.48.16.jpeg'
    ],
    location: 'Lomié-Messok, Cameroun',
    year: '2025',
    services: ['LiDAR', 'Photogrammétrie', 'Canevas polygonale'],
  },
  {
    id: '8',
    title: 'Projet de ligne de chemin fer phase 1',
    description: 'Mise en place du canevas de polygonale principale et secondaire + levés LiDAR et Photogrammétrie (25Km x 200m). Levé bathymétriques sur le fleuve LOBE (02ha x 05). Matériel Utilisé : Echosondeur mono faisceau-Bi fréquence Z axis 2F, Emlid RS3.',
    category: 'Bathymétrie',
    image: '/projects/2/WhatsApp Image 2026-03-30 at 20.56.17 (5).jpeg',
    images: [
      '/projects/2/WhatsApp Image 2026-03-30 at 20.56.17 (5).jpeg',
      '/projects/2/WhatsApp Image 2026-03-30 at 20.56.17 (6).jpeg'
    ],
    location: 'Fleuve LOBE, Cameroun',
    year: '2025',
    services: ['LiDAR', 'Photogrammétrie', 'Bathymétrie', 'Canevas polygonale'],
  },
];

export const categories = ['Tous', 'Topographie', 'LiDAR', 'Bathymétrie', 'Photogrammétrie'];
