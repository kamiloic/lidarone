'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';

export default function APropos() {
  useEffect(() => {
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
    document.querySelectorAll('.reveal-card').forEach(card => {
      card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white text-lidar-dark grid-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-cover bg-center pattern-background text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            À Propos de LiDAR One
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto">
            Excellence et innovation dans la géomatique et la topographie 3D
          </p>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-8">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
                Notre Entreprise
              </h2>
              {/* <div className="w-40 h-1 mx-auto mb-8 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div> */}
              <p className="text-2xl md:text-3xl font-semibold text-lidar-dark leading-relaxed text-center">
                LiDAR One est une entreprise spécialisée en géomatique, topographie et cartographie 3D.
              </p>
            </div>

            <div className="reveal-card rounded-2xl p-10 md:p-16 mb-16">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Son équipe de géomètres-experts, techniciens topographes et télépilotes de drones met en œuvre des technologies avancées telles que le LiDAR, la photogrammétrie et le GNSS.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Elle réalise des levés terrestres, aériens et bathymétriques pour des projets de BTP, d'ingénierie et d'environnement.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      LiDAR One fournit des données géospatiales précises et fiables pour une meilleure prise de décision.
                    </p>

                    {/* 🎯 Objectif Section with Icon */}
                    <div className="text-center md:text-left">
                      <h3 className="flex items-center justify-center md:justify-start text-2xl md:text-3xl font-bold text-lidar-dark relative inline-block pb-2 w-fit mx-auto md:mx-0">
                        <i className="fas fa-bullseye text-red-800 mr-3 text-3xl"></i>
                        Objectif
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lidar-red rounded-full"></span>
                      </h3>

                      <p className="mt-2 text-lg md:text-xl text-gray-700 leading-relaxed">
                        Offrir des solutions innovantes et complètes à chaque étape des projets de nos clients.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>


            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="reveal-card glass-card rounded-xl p-6 text-center">
                <div className="text-4xl text-lidar-blue mb-4">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-lidar-dark">Précision</h3>
                <p className="text-gray-600">
                  Des données géospatiales d'une précision millimétrique pour des résultats fiables.
                </p>
              </div>

              <div className="reveal-card glass-card rounded-xl p-6 text-center">
                <div className="text-4xl text-lidar-blue mb-4">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-lidar-dark">Innovation</h3>
                <p className="text-gray-600">
                  Technologies de pointe et méthodes innovantes pour des solutions d'avenir.
                </p>
              </div>

              <div className="reveal-card glass-card rounded-xl p-6 text-center">
                <div className="text-4xl text-lidar-blue mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-lidar-dark">Confiance</h3>
                <p className="text-gray-600">
                  Un partenaire fiable pour tous vos projets de géomatique et topographie.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="reveal-card text-center">
              <h3 className="text-3xl font-bold mb-6 text-lidar-dark">Notre Équipe</h3>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Une équipe d'experts passionnés composée de géomètres, techniciens topographes et pilotes de drones professionnels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-card rounded-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="relative mb-6">
                    <Image src="/team-drone.jpg" alt="Micarel" width={120} height={120} className="rounded-full mx-auto border-4 border-lidar-blue/20 shadow-lg" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-lidar-blue/10 to-transparent"></div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2">Micarel</h4>
                  <p className="text-sm text-lidar-blue font-medium">Geometre Expert</p>
                </div>

                <div className="glass-card rounded-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="relative mb-6">
                    <Image src="/team-drone.jpg" alt="Ruben" width={120} height={120} className="rounded-full mx-auto border-4 border-lidar-blue/20 shadow-lg" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-lidar-blue/10 to-transparent"></div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2">Ruben</h4>
                  <p className="text-sm text-lidar-blue font-medium">Ing. Topo</p>
                </div>

                <div className="glass-card rounded-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="relative mb-6">
                    <Image src="/team-drone.jpg" alt="Loïc" width={120} height={120} className="rounded-full mx-auto border-4 border-lidar-blue/20 shadow-lg" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-lidar-blue/10 to-transparent"></div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2">Loïc</h4>
                  <p className="text-sm text-lidar-blue font-medium">Research & Dev, IT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-lidar-dark to-lidar-blue text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à collaborer avec nous?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Découvrez comment LiDAR One peut vous accompagner dans vos projets de géomatique et topographie.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="cyber-button bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/30 font-bold py-3 px-8 rounded-lg hover:bg-lidar-blue/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-list mr-2"></i> Nos Services
              </span>
            </Link>
            <Link
              href="/#contact"
              className="cyber-button bg-glass-light backdrop-blur-sm text-white border border-white/30 font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-paper-plane mr-2"></i> Nous contacter
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}