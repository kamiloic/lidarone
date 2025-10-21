'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';

export default function Services() {
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
            Nos Services
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
            Des solutions professionnelles pour la topographie, le cadastre, la bathymétrie et les relevés drone/Lidar
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#services-grid"
              className="cyber-button bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/30 font-bold py-3 px-8 rounded-lg hover:bg-lidar-blue/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-arrow-down mr-2"></i> Découvrir nos services
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

      {/* Services Grid Section */}
      <section id="services-grid" className="py-20 bg-white parallax-container">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              Nos Domaines d'Expertise
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
            <p className="text-xl text-lidar-blue max-w-2xl mx-auto font-cyber">
              Excellence et précision dans chaque mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Topographie */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-drafting-compass"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Topographie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Levés topographiques précis pour vos projets de construction, d'infrastructure et d'aménagement.
                  Nous utilisons des technologies de pointe pour garantir une précision millimétrique.
                </p>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 inline-block font-semibold"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>

            {/* Cadastre */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Cadastre</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Délimitation précise des propriétés et mise à jour des documents cadastraux.
                  Nos experts garantissent la conformité avec les réglementations en vigueur.
                </p>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 inline-block font-semibold"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>

            {/* Bathymétrie */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-water"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Bathymétrie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Cartographie des fonds marins et des plans d'eau pour vos projets hydrauliques et portuaires.
                  Nous utilisons des sondeurs multifaisceaux pour des résultats précis.
                </p>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 inline-block font-semibold"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    En savoir plus <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
            </div>

            {/* Lidar & Drone Survey */}
            <div className="glass-card rounded-xl overflow-hidden hover-card parallax-card group">
              <div className="p-8 text-center">
                <div className="service-icon">
                  <i className="fas fa-drone"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-lidar-dark">Lidar & Drone Survey</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Technologies de pointe pour des relevés 3D rapides et précis par drone et lidar.
                  Idéal pour les projets complexes nécessitant une modélisation détaillée.
                </p>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue/20 border border-lidar-blue/40 text-lidar-blue py-2 px-6 rounded-lg hover:bg-lidar-blue/30 transition-all duration-300 inline-block font-semibold"
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

      {/* Detailed Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Solutions Complètes
            </h2>
            <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
            <p className="text-xl text-lidar-blue max-w-2xl mx-auto font-cyber">
              Des services adaptés à vos besoins spécifiques
            </p>
          </div>

          {/* Topographie Details */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-lidar-dark">Topographie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Notre équipe de topographes expérimentés utilise des équipements de dernière génération pour réaliser des levés topographiques précis et fiables.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Levés planimétriques et altimétriques</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Implantation de projets de construction</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Suivi de déformations et mouvements de terrain</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Calculs de cubatures et mouvements de terres</span>
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue hover:bg-lidar-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block font-semibold"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Demander un devis <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/gps-green-grass.jpg"
                  alt="Topographie"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Cadastre Details */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-lidar-dark">Cadastre</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nous proposons des services complets de gestion cadastrale, de la délimitation des propriétés à la mise à jour des documents officiels.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Bornage et délimitation de propriétés</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Mise à jour des plans cadastraux</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Expertises judiciaires en matière foncière</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Géoréférencement de documents anciens</span>
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue hover:bg-lidar-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Demander un devis <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/topo-map.jpg"
                  alt="Cadastre"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Bathymétrie Details */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-lidar-dark">Bathymétrie</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nos services bathymétriques permettent de cartographier avec précision les fonds marins, lacustres et fluviaux pour divers projets d'ingénierie.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Cartographie des fonds marins et lacustres</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Suivi de l'évolution des fonds et de l'érosion</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Études de faisabilité pour projets portuaires</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Recherche de câbles et pipelines sous-marins</span>
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue hover:bg-lidar-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Demander un devis <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/bathymetrie.jpg"
                  alt="Bathymétrie"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Lidar & Drone Survey Details */}
          <div className="mb-20">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-lidar-dark">Lidar & Drone Survey</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nous utilisons des technologies de pointe comme le lidar aéroporté et les drones pour des relevés 3D rapides, précis et économiques.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Relevés lidar aéroportés et terrestres</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Photogrammétrie par drone haute résolution</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Modélisation 3D de sites et d'infrastructures</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-lidar-blue mt-1 mr-3"></i>
                    <span>Inspections techniques par drone</span>
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="cyber-button bg-lidar-blue hover:bg-lidar-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Demander un devis <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </a>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Lidar & Drone Survey"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-lidar-dark to-lidar-blue text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <a
            href="/#contact"
            className="cyber-button bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/30 font-bold py-3 px-8 rounded-lg hover:bg-lidar-blue/10 transition-all duration-500 inline-block"
          >
            <span className="relative z-10 flex items-center justify-center">
              <i className="fas fa-paper-plane mr-2"></i> Nous contacter
            </span>
          </a>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}