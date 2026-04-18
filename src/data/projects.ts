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
    image: '/projects/1/vcy-t3-01.webp',
    images: [
      '/projects/1/vcy-t3-01.webp',
      '/projects/1/vcy-t3-02.webp',
      '/projects/1/vcy-t3-03.webp',
      '/projects/1/vcy-t3-04.webp'
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
    image: '/projects/2/kikot-01.webp',
    images: [
      '/projects/2/kikot-01.webp',
      '/projects/2/kikot-02.webp',
      '/projects/2/kikot-03.webp',
      '/projects/2/kikot-04.webp'
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
    image: '/projects/3/bafoussam-01.webp',
    images: [
      '/projects/3/bafoussam-01.webp',
      '/projects/3/bafoussam-02.webp',
      '/projects/3/bafoussam-03.webp'
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
    image: '/projects/4/kribi-dup-01.webp',
    images: [
      '/projects/4/kribi-dup-01.webp',
      '/projects/4/kribi-dup-02.webp',
      '/projects/4/kribi-dup-03.webp'
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
    image: '/projects/5/ntam-nabeba-01.webp',
    images: [
      '/projects/5/ntam-nabeba-01.webp',
      '/projects/5/ntam-nabeba-02.webp',
      '/projects/5/ntam-nabeba-03.webp'
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
    image: '/projects/6/ebolowa-akom2-kribi-01.webp',
    images: [
      '/projects/6/ebolowa-akom2-kribi-01.webp',
      '/projects/6/ebolowa-akom2-kribi-02.webp',
      '/projects/6/ebolowa-akom2-kribi-03.webp'
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
    image: '/projects/7/lomie-messok-01.webp',
    images: [
      '/projects/7/lomie-messok-01.webp',
      '/projects/7/lomie-messok-02.webp',
      '/projects/7/lomie-messok-03.webp'
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
    image: '/projects/8/lobe-rail-01.webp',
    images: [
      '/projects/8/lobe-rail-01.webp',
      '/projects/8/lobe-rail-02.webp'
    ],
    location: 'Fleuve LOBE, Cameroun',
    year: '2025',
    services: ['LiDAR', 'Photogrammétrie', 'Bathymétrie', 'Canevas polygonale'],
  },
];

export const categories = ['Tous', 'Topographie', 'LiDAR', 'Bathymétrie', 'Photogrammétrie'];
