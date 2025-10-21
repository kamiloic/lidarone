'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';

export default function Products() {
  useEffect(() => {
    // Parallax effect for cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.parallax-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
          const xRotation = ((y - rect.height / 2) / rect.height) * 10;
          const yRotation = ((x - rect.width / 2) / rect.width) * 10;

          (card as HTMLElement).style.transform = `
            perspective(1000px)
            rotateX(${-xRotation}deg)
            rotateY(${yRotation}deg)
            translateZ(20px)
          `;
        } else {
          (card as HTMLElement).style.transform = 'none';
        }
      });
    };

    // Reset card transform on mouse leave
    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.parallax-card');
      cards.forEach(card => {
        (card as HTMLElement).style.transform = 'none';
      });
    };

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.hover-card').forEach(card => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(card);
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.parallax-card').forEach(card => {
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.parallax-card').forEach(card => {
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="bg-white text-lidar-dark grid-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center pattern-background text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Équipements professionnels<br />de pointe
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-gray-100">
            Découvrez notre gamme complète d'équipements pour la topographie, le cadastre et les levés drone. Location et vente disponibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products-grid"
              className="cyber-button bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/30 font-bold py-3 px-8 rounded-lg hover:bg-lidar-blue/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-th mr-2"></i> Voir nos équipements
              </span>
            </a>
            <a
              href="/#contact"
              className="cyber-button bg-glass-light backdrop-blur-sm text-white border border-white/30 font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-file-invoice mr-2"></i> Demander un devis
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section id="products-grid" className="py-20 bg-white parallax-container">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Technologies de Pointe
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
            <p className="text-xl text-lidar-blue max-w-2xl mx-auto font-cyber">
              La précision rencontre l'innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2 */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/equipements/IMG-20251021-WA0006.jpg"
                  alt="Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
                </div>
                <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
                  <span className="text-lidar-blue text-sm font-bold">Nouveau</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2</h3>
                  <p className="text-gray-600 text-sm">Drone professionnel avec LiDAR intégré pour relevés 3D haute précision</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-mountain text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Cartographie 3D détaillée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-bolt text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Performance optimale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-satellite text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">RTK intégré</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat du Dji Matrice 350 avec capteur LiDAR dji Zenmuse L2"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Station totale Stonex R60 */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/equipements/IMG-20251021-WA0003.jpg"
                  alt="Station totale Stonex R60"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
                </div>
                <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
                  <span className="text-lidar-blue text-sm font-bold">Premium</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Station totale Stonex R60</h3>
                  <p className="text-gray-600 text-sm">Station totale robotisée avec ATR pour mesures précises</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-cube text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Technologie robotisée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-expand-arrows-alt text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">ATR automatique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-crosshairs text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Suivi de cible précis</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location de la Station totale Stonex R60"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat de la Station totale Stonex R60"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Récepteur GNSS différentiel Emlid RS3 */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/equipements/IMG-20251021-WA0005.jpg"
                  alt="Récepteur GNSS différentiel Emlid RS3"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
                </div>
                <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
                  <span className="text-lidar-blue text-sm font-bold">Pro</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Récepteur GNSS différentiel Emlid RS3</h3>
                  <p className="text-gray-600 text-sm">Récepteur GNSS haute précision avec RTK temps réel</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-satellite text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Multi-constellation GNSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-tachometer-alt text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Précision centimétrique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-wifi text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">RTK temps réel</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Récepteur GNSS différentiel Emlid RS3"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat du Récepteur GNSS différentiel Emlid RS3"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Drone Dji mavic 3 multispectral */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/equipements/IMG-20251021-WA0001.jpg"
                  alt="Drone Dji mavic 3 multispectral"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
                </div>
                <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
                  <span className="text-lidar-blue text-sm font-bold">Innovation</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Drone Dji mavic 3 multispectral</h3>
                  <p className="text-gray-600 text-sm">Drone spécialisé en imagerie multispectrale pour agriculture et environnement</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-seedling text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Imagerie multispectrale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-camera text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Capteurs spécialisés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-leaf text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Analyse agricole</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Drone Dji mavic 3 multispectral"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat du Drone Dji mavic 3 multispectral"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Récepteur GNSS Hi target V200 */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/equipements/IMG-20251021-WA0002.jpg"
                  alt="Récepteur GNSS Hi target V200"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
                </div>
                <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
                  <span className="text-lidar-blue text-sm font-bold">Haute Précision</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Récepteur GNSS Hi target V200</h3>
                  <p className="text-gray-600 text-sm">Récepteur GNSS professionnel avec précision millimétrique</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-satellite text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Multi-constellation GNSS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-tachometer-alt text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Précision millimétrique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-wifi text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">RTK temps réel</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Récepteur GNSS Hi target V200"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat du Récepteur GNSS Hi target V200"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Drone Bathymétrique bi fréquence */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/equipements/IMG-20251021-WA0004.jpg"
                  alt="Drone Bathymétrique bi fréquence"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
                </div>
                <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
                  <span className="text-lidar-blue text-sm font-bold">Spécialisé</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Drone Bathymétrique bi fréquence</h3>
                  <p className="text-gray-600 text-sm">Drone spécialisé en bathymétrie pour cartographie des fonds marins</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-water text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Bathymétrie avancée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-wave-square text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Bi-fréquence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-map text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Cartographie marine</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Drone Bathymétrique bi fréquence"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat du Drone Bathymétrique bi fréquence"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Base station DRTK3 */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/equipements/IMG-20251021-WA0008.jpg"
                  alt="Base station DRTK3"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lidar-dark/30 via-transparent to-transparent">
                </div>
                <div className="absolute top-4 right-4 bg-lidar-blue/20 backdrop-blur-sm px-3 py-1 rounded-full border border-lidar-blue/30">
                  <span className="text-lidar-blue text-sm font-bold">Station</span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Base station DRTK3</h3>
                  <p className="text-gray-600 text-sm">Station de base RTK pour corrections GNSS précises</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-broadcast-tower text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Station de base RTK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-signal text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Corrections précises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-network-wired text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Réseau RTK</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location de la Base station DRTK3"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat de la Base station DRTK3"
                    className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 font-semibold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/#contact"
              className="cyber-button inline-block bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/40 font-bold py-4 px-8 rounded-lg hover:bg-lidar-blue/20 transition-all duration-500 font-semibold"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-envelope mr-2"></i> Contactez-nous pour plus d'infos
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}