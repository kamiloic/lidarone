export interface Equipment {
  id: string;
  image?: string; // Optional single image
  images?: string[]; // Optional array of images
  title: string;
  description: string;
  features: { icon: string; text: string }[];
  rentLink: string;
  buyLink: string;
  badge: string;
}

export const equipments: Equipment[] = [
  {
    id: 'dji-matrice-350-l2',
    images: ['/products/lidar/lidar2.jpg', '/products/lidar/lidar1.jpg',],
    title: 'Produit LiDAR - Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2',
    description: 'Solution complète LiDAR avec drone professionnel Dji Matrice 350 et capteur Zenmuse L2 pour relevés 3D haute précision et cartographie avancée',
    features: [
      { icon: 'fas fa-mountain', text: 'Cartographie 3D détaillée' },
      { icon: 'fas fa-bolt', text: 'Performance optimale' },
      { icon: 'fas fa-satellite', text: 'RTK intégré' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat du Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2',
    badge: 'Nouveau',
  },
  {
    id: 'drone-bathymetric',
    images: ['/products/bathy/bathy1.jpg'],
    title: 'Produit Bathy - Drone Bathymétrique bi fréquence',
    description: 'Solution bathymétrique spécialisée avec drone bi-fréquence pour cartographie précise des fonds marins, lacustres et fluviaux',
    features: [
      { icon: 'fas fa-water', text: 'Bathymétrie avancée' },
      { icon: 'fas fa-wave-square', text: 'Bi-fréquence' },
      { icon: 'fas fa-map', text: 'Cartographie marine' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Drone Bathymétrique bi fréquence',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat du Drone Bathymétrique bi fréquence',
    badge: 'Spécialisé',
  },
  {
    id: 'dji-mavic-3-multispectral',
    images: ['/products/drone-photogrammetrie/photogrammetrie1.jpg', '/products/drone-photogrammetrie/photogrammetrie2.jpg', '/products/drone-photogrammetrie/photogrammetrie3.jpg'],
    title: 'Drone Photogrammétrie Thermique et Multispectral - Dji Mavic 3 Multispectral',
    description: 'Drone avancé pour photogrammétrie, imagerie thermique et multispectrale, idéal pour agriculture de précision, environnement et inspections thermiques',
    features: [
      { icon: 'fas fa-seedling', text: 'Imagerie multispectrale' },
      { icon: 'fas fa-camera', text: 'Capteurs spécialisés' },
      { icon: 'fas fa-leaf', text: 'Analyse agricole' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Drone Dji mavic 3 multispectral',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat du Drone Dji mavic 3 multispectral',
    badge: 'Innovation',
  },
  {
    id: 'emlid-rs3',
    images: ['/products/gnss/gnss1.jpg', '/products/gnss/gnss2.jpg', '/products/gnss/gnss3.jpg', '/products/gnss/gnss4.jpg'],
    title: 'Récepteur GNSS Emlid RS3, RS4 Pro, D-RTK 3 et Hi-Target - Emlid RS3',
    description: 'Récepteur GNSS haute précision Emlid RS3 avec RTK temps réel, multi-constellation pour applications topographiques et géodésiques avancées',
    features: [
      { icon: 'fas fa-satellite', text: 'Multi-constellation GNSS' },
      { icon: 'fas fa-tachometer-alt', text: 'Précision centimétrique' },
      { icon: 'fas fa-wifi', text: 'RTK temps réel' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Récepteur GNSS différentiel Emlid RS3',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat du Récepteur GNSS différentiel Emlid RS3',
    badge: 'Pro',
  },
  {
    id: 'stonex-r60',
    images: ['/products/station-totale/station1.jpg', '/products/station-totale/station2.jpg', '/products/station-totale/station3.jpg', '/products/station-totale/station4.jpg'],
    title: 'Station Totale et Niveau Électronique - Stonex R60',
    description: 'Station totale robotisée Stonex R60 avec ATR automatique et niveau électronique pour mesures topographiques précises et nivellement professionnel',
    features: [
      { icon: 'fas fa-cube', text: 'Technologie robotisée' },
      { icon: 'fas fa-expand-arrows-alt', text: 'ATR automatique' },
      { icon: 'fas fa-crosshairs', text: 'Suivi de cible précis' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location de la Station totale Stonex R60',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat de la Station totale Stonex R60',
    badge: 'Premium',
  },
  {
    id: 'station-travail-vehicule',
    images: ['/products/station-travail/travail1.jpg', '/products/station-travail/travail2.jpg', '/products/station-travail/travail3.jpg', '/products/station-travail/travail4.jpg'],
    title: 'Station de Travail et Véhicule',
    description: 'Station de travail mobile équipée d\'ordinateurs haute performance et véhicule tout-terrain adapté pour interventions sur site et traitement de données géospatiales',
    features: [
      { icon: 'fas fa-desktop', text: 'Station de travail mobile' },
      { icon: 'fas fa-truck', text: 'Véhicule tout-terrain' },
      { icon: 'fas fa-microchip', text: 'Puissance de calcul avancée' },
      { icon: 'fas fa-road', text: 'Mobilité sur tous terrains' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location de la Station de Travail et Véhicule',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat de la Station de Travail et Véhicule',
    badge: 'Mobile',
  },
];
