'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DroneAnimation from '../components/DroneAnimation';
import BackToTop from '../components/BackToTop';

export default function Home() {
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

    // Form submission
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      alert('Merci pour votre demande ! Notre équipe vous contactera sous 24h.');
      (e.target as HTMLFormElement).reset();
    };

    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('.parallax-card').forEach(card => {
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('.parallax-card').forEach(card => {
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
      if (form) {
        form.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  return (
    <div className="bg-white text-lidar-dark grid-background">
      <DroneAnimation />

      {/* Landing Pad */}
      <div className="landing-pad">
        <div className="pad-circle"></div>
        <div className="pad-circle"></div>
        <div className="pad-circle"></div>
        <div className="pad-h">1</div>
      </div>

      <Header />

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/team-drone.jpg"
            alt="Drone flying over landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-lidar-dark/80 via-lidar-blue/70 to-lidar-dark/80"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Précision et innovation<br />au service de votre projet
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-gray-100">
            Lidar One vous accompagne avec des solutions de topographie, de cadastre et de levés drone sur mesure pour tous vos projets d'aménagement et de construction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/services"
              className="cyber-button bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/30 font-bold py-4 px-8 rounded-lg hover:bg-lidar-blue/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-rocket mr-2"></i> Découvrir nos services
              </span>
            </a>
            <a
              href="#contact"
              className="cyber-button bg-glass-light backdrop-blur-sm text-white border border-white/30 font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-file-invoice mr-2"></i> Demander un devis
              </span>
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white scroll-indicator z-20">
          <i className="fas fa-chevron-down text-3xl"></i>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white parallax-container">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Nos Services
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
            <p className="text-xl text-lidar-blue max-w-2xl mx-auto font-cyber">
              Excellence et précision dans chaque mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Topographie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Levés topographiques précis pour vos projets de construction, d'infrastructure et d'aménagement.
                </p>
                <a
                  href="/services"
                  className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Cadastre</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Délimitation précise des propriétés et mise à jour des documents cadastraux.
                </p>
                <a
                  href="/services"
                  className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-water"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Bathymétrie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cartographie des fonds marins et des plans d'eau pour vos projets hydrauliques et portuaires.
                </p>
                <a
                  href="/services"
                  className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-drone"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Lidar & Drone Survey</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Technologies de pointe pour des relevés 3D rapides et précis par drone et lidar.
                </p>
                <a
                  href="/services"
                  className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="pourquoi-nous" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/pattern-blue-1200x2400.jpg"
            alt="Technology background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-20">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Pourquoi choisir Lidar One ?
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
            <p className="text-xl text-lidar-blue max-w-2xl mx-auto font-cyber">
              L'excellence à votre service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-xl p-8 text-center hover-card transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lidar-dark to-lidar-blue rounded-2xl flex items-center justify-center text-white transform hover:rotate-6 transition-transform duration-300">
                <i className="fas fa-bullseye text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-lidar-dark">Précision centimétrique</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos équipements de pointe garantissent une précision exceptionnelle pour tous vos projets.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover-card transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lidar-dark to-lidar-blue rounded-2xl flex items-center justify-center text-white transform hover:rotate-6 transition-transform duration-300">
                <i className="fas fa-bolt text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-lidar-dark">Rapidité d'intervention</h3>
              <p className="text-gray-600 leading-relaxed">
                Réactivité et efficacité pour respecter vos délais, même sur les projets les plus complexes.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover-card transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lidar-dark to-lidar-blue rounded-2xl flex items-center justify-center text-white transform hover:rotate-6 transition-transform duration-300">
                <i className="fas fa-user-graduate text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-lidar-dark">Expertise certifiée</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe qualifiée et expérimentée vous accompagne de la conception à la réalisation.
              </p>
            </div>
            <div className="glass-card rounded-xl p-8 text-center hover-card transform hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lidar-dark to-lidar-blue rounded-2xl flex items-center justify-center text-white transform hover:rotate-6 transition-transform duration-300">
                <i className="fas fa-microchip text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-lidar-dark">Technologie moderne</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous utilisons les dernières technologies pour des résultats optimaux et innovants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Produits phares
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
            <p className="text-xl text-lidar-blue max-w-2xl mx-auto font-cyber">
              Équipements professionnels de haute précision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl overflow-hidden hover-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Drone professionnel"
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
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Drone Matrice 350 RTK</h3>
                  <p className="text-gray-600 text-sm">Drone professionnel avec RTK intégré</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-microchip text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Intelligence embarquée avancée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-camera text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">Caméra 4K HDR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-battery-full text-lidar-blue"></i>
                    <span className="text-sm text-gray-600">55 minutes d'autonomie</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du Drone Matrice 350 RTK"
                    className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat du Drone Matrice 350 RTK"
                    className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden hover-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="GPS RTK"
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
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">GPS RTK Leica GS18 T</h3>
                  <p className="text-gray-600 text-sm">Récepteur GNSS de haute précision</p>
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
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location du GPS RTK Leica GS18 T"
                    className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat du GPS RTK Leica GS18 T"
                    className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Acheter
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden hover-card group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Station totale"
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
                  <h3 className="text-xl font-bold mb-2 text-lidar-dark">Station Totale Leica TS16</h3>
                  <p className="text-gray-600 text-sm">Station totale robotisée avec ATR</p>
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
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par la location de la Station Totale Leica TS16"
                    className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <i className="fas fa-clock mr-2"></i>
                      Louer
                    </span>
                  </a>
                  <a
                    href="https://wa.me/237650907144650907155?text=Bonjour, je suis intéressé par l'achat de la Station Totale Leica TS16"
                    className="cyber-button bg-lidar-blue/10 border border-lidar-blue/30 text-lidar-blue py-2 px-4 rounded-lg hover:bg-lidar-blue/20 transition-all duration-300"
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
          <div className="text-center mt-16">
            <a
              href="/products"
              className="cyber-button inline-block bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/30 font-bold py-4 px-8 rounded-lg hover:bg-lidar-blue/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-th mr-2"></i>
                Voir tous les équipements
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lidar-dark mb-4">
              <span className="logo-container inline-block">
                <div className="logo-ray"></div>
                <span className="logo-grayscale">Ils nous font confiance</span>
              </span>
            </h2>
            <div className="w-20 h-1 bg-lidar-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Partenaires et clients satisfaits</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mb-16">
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0868.PNG"
                alt="Partner 1"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0869.JPG"
                alt="Partner 2"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0870.PNG"
                alt="Partner 3"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0871.PNG"
                alt="Partner 4"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0872.WEBP"
                alt="Partner 5"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0873.PNG"
                alt="Partner 6"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0874.PNG"
                alt="Partner 7"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0875.JPG"
                alt="Partner 8"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center p-4 transform hover:-translate-y-2">
              <Image
                src="/partners/IMG_0876.PNG"
                alt="Partner 9"
                width={128}
                height={128}
                className="max-w-full max-h-full object-contain partner-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lidar-dark mb-4">Contactez-nous</h2>
            <div className="w-20 h-1 bg-lidar-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Nous sommes à votre écoute</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-lidar-dark">Demander un devis</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:border-transparent transition"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:border-transparent transition"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Téléphone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:border-transparent transition"
                    placeholder="+237 650 907 144"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Service demandé</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:border-transparent transition">
                    <option>Topographie</option>
                    <option>Cadastre</option>
                    <option>Bathymétrie</option>
                    <option>Lidar & Drone Survey</option>
                    <option>Vente d'équipement</option>
                    <option>Location d'équipement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:border-transparent transition resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-lidar-blue hover:bg-lidar-dark text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Envoyer la demande
                </button>
              </form>
            </div>
            {/* Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg mb-6 border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-lidar-dark">Coordonnées</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lidar-blue rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lidar-dark mb-1">Adresse</p>
                      <p className="text-gray-600">Yaoundé, Montée Jourvence</p>
                      <p className="text-gray-600">Cameroun</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lidar-blue rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lidar-dark mb-1">Téléphone</p>
                      <p className="text-gray-600">+237 650 907 144</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lidar-blue rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <i className="fab fa-whatsapp text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lidar-dark mb-1">WhatsApp</p>
                      <p className="text-gray-600">+237 650 907 144</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-lidar-blue rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                      <p className="font-semibold text-lidar-dark mb-1">Email</p>
                      <p className="text-gray-600">contact@lidarone.cm</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <a
                    href="tel:+237650907144"
                    className="flex-1 bg-lidar-blue hover:bg-lidar-dark text-white text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <i className="fas fa-phone mr-2"></i> Appeler
                  </a>
                  <a
                    href="https://wa.me/237650907144"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    <i className="fab fa-whatsapp mr-2"></i> WhatsApp
                  </a>
                </div>
              </div>
              {/* Map */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden h-64 border border-gray-200">
                <div className="w-full h-full flex items-center justify-center text-center p-6">
                  <div>
                    <i className="fas fa-map-marked-alt text-6xl text-lidar-blue mb-4"></i>
                    <p className="text-xl font-bold text-lidar-dark">Yaoundé, Cameroun</p>
                    <p className="text-gray-600 mt-2">Intervention dans tout le Cameroun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
