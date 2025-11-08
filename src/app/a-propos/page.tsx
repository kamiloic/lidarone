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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
                Notre Entreprise
              </h2>
              <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-lidar-dark to-lidar-blue"></div>
            </div>

            <div className="reveal-card glass-card rounded-xl p-8 md:p-12 mb-12">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 font-medium text-lidar-dark">
                  LiDAR One est une entreprise spécialisée en géomatique, topographie et cartographie 3D.
                </p>
                <p className="mb-6">
                  Son équipe de géomètres-experts, techniciens topographes et télépilotes de drones met en œuvre des technologies avancées telles que le LiDAR, la photogrammétrie et le GNSS.
                </p>
                <p className="mb-6">
                  Elle réalise des levés terrestres, aériens et bathymétriques pour des projets de BTP, d'ingénierie et d'environnement.
                </p>
                <p className="mb-6">
                  LiDAR One fournit des données géospatiales précises et fiables pour une meilleure prise de décision.
                </p>
                <p className="text-lg font-medium text-lidar-blue">
                  Son objectif : offrir des solutions innovantes et complètes à chaque étape des projets de ses clients.
                </p>
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
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Une équipe d'experts passionnés composée de géomètres, techniciens topographes et pilotes de drones professionnels.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <div className="text-3xl text-lidar-blue mb-3">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h4 className="font-bold text-lidar-dark">Géomètres-Experts</h4>
                  <p className="text-sm text-gray-600">Spécialistes en topographie et géomatique</p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="text-3xl text-lidar-blue mb-3">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h4 className="font-bold text-lidar-dark">Techniciens</h4>
                  <p className="text-sm text-gray-600">Experts en équipements et technologies</p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="text-3xl text-lidar-blue mb-3">
                    <i className="fas fa-drone"></i>
                  </div>
                  <h4 className="font-bold text-lidar-dark">Télépilotes</h4>
                  <p className="text-sm text-gray-600">Pilotes de drones certifiés</p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="text-3xl text-lidar-blue mb-3">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h4 className="font-bold text-lidar-dark">Analystes</h4>
                  <p className="text-sm text-gray-600">Spécialistes en traitement de données</p>
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