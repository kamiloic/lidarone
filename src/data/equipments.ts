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
    images: ['/equipements/IMG-20251021-WA0006.jpg', '/equipements/IMG-20251021-WA0007.jpg'],
    title: 'Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2',
    description: 'Drone professionnel avec LiDAR intégré pour relevés 3D haute précision',
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
    id: 'stonex-r60',
    image: '/equipements/IMG-20251021-WA0003.jpg',
    title: 'Station totale Stonex R60',
    description: 'Station totale robotisée avec ATR pour mesures précises',
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
    id: 'emlid-rs3',
    image: '/equipements/IMG-20251021-WA0005.jpg',
    title: 'Récepteur GNSS différentiel Emlid RS3',
    description: 'Récepteur GNSS haute précision avec RTK temps réel',
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
    id: 'dji-mavic-3-multispectral',
    image: '/equipements/IMG-20251021-WA0001.jpg',
    title: 'Drone Dji mavic 3 multispectral',
    description: 'Drone spécialisé en imagerie multispectrale pour agriculture et environnement',
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
    id: 'hi-target-v200',
    image: '/equipements/IMG-20251021-WA0002.jpg',
    title: 'Récepteur GNSS Hi target V200',
    description: 'Récepteur GNSS professionnel avec précision millimétrique',
    features: [
      { icon: 'fas fa-satellite', text: 'Multi-constellation GNSS' },
      { icon: 'fas fa-tachometer-alt', text: 'Précision millimétrique' },
      { icon: 'fas fa-wifi', text: 'RTK temps réel' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Récepteur GNSS Hi target V200',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat du Récepteur GNSS Hi target V200',
    badge: 'Haute Précision',
  },
  {
    id: 'drone-bathymetric',
    image: '/equipements/IMG-20251021-WA0004.jpg',
    title: 'Drone Bathymétrique bi fréquence',
    description: 'Drone spécialisé en bathymétrie pour cartographie des fonds marins',
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
    id: 'base-station-drtk3',
    image: '/equipements/IMG-20251021-WA0008.jpg',
    title: 'Base station DRTK3',
    description: 'Station de base RTK pour corrections GNSS précises',
    features: [
      { icon: 'fas fa-broadcast-tower', text: 'Station de base RTK' },
      { icon: 'fas fa-signal', text: 'Corrections précises' },
      { icon: 'fas fa-network-wired', text: 'Réseau RTK' },
    ],
    rentLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location de la Base station DRTK3',
    buyLink: 'https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l\'achat de la Base station DRTK3',
    badge: 'Station',
  },
];