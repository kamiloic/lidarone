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
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text">Notre Équipe</h3>
              <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                Une équipe d'experts passionnés et dynamiques, prête à relever tous vos défis.
              </p>

              {/* Team Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
                <div className="glass-card rounded-xl p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lidar-blue mb-1">10+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="glass-card rounded-xl p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lidar-blue mb-1">500+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
                <div className="glass-card rounded-xl p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lidar-blue mb-1">50+</div>
                  <div className="text-sm text-gray-600">Clients satisfaits</div>
                </div>
                <div className="glass-card rounded-xl p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-lidar-blue mb-1">15+</div>
                  <div className="text-sm text-gray-600">Experts</div>
                </div>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Team Member 1 - Micarel */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-lidar-blue/10 to-transparent rounded-full -translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lidar-teal/10 to-transparent rounded-full translate-x-8 translate-y-8"></div>

                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-lidar-blue to-lidar-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src="/cvs/Micarel_tchuisse.webp"
                        alt="Micarel"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-white shadow-lg object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lidar-blue to-lidar-dark text-white text-xs font-semibold px-4 py-1 rounded-full z-20">
                        Managing Partner
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2 group-hover:text-lidar-blue transition-colors">Micarel</h4>
                  <p className="text-lidar-blue font-medium mb-3">IS ING - Managing Partner</p>
                  <p className="text-gray-500 text-sm mb-6">Expert en topographie et géomatique avec plus de 10 ans d'expérience dans la gestion de projets d'infrastructure.</p>

                  {/* Social Links */}
                  {/* <div className="flex justify-center gap-3">
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/237650907144" className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div> */}
                </div>

                {/* Team Member 2 - NGAH ONANA Bernadin Fabrice */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-lidar-blue/10 to-transparent rounded-full -translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lidar-teal/10 to-transparent rounded-full translate-x-8 translate-y-8"></div>

                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-lidar-blue to-lidar-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src="/cvs/fabrice_ngah.webp"
                        alt="NGAH ONANA Bernadin Fabrice"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-white shadow-lg object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lidar-blue to-lidar-dark text-white text-xs font-semibold px-4 py-1 rounded-full z-20">
                        Ingénieur
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2 group-hover:text-lidar-blue transition-colors">NGAH ONANA Bernadin Fabrice</h4>
                  <p className="text-lidar-blue font-medium mb-3">Ingénieur Géomètre-Topographe</p>
                  <p className="text-gray-500 text-sm mb-6">Diplômé de l'ENSTP en Topographie et Cadastre. Expérience en levés topographiques, GNSS, photogrammétrie et conception routière.</p>

                  {/* Social Links */}
                  {/* <div className="flex justify-center gap-3">
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/237650907144" className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div> */}
                </div>

                {/* Team Member 3 - Ruben ZEUFACK KITIO */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-lidar-blue/10 to-transparent rounded-full -translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lidar-teal/10 to-transparent rounded-full translate-x-8 translate-y-8"></div>

                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-lidar-blue to-lidar-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src="/cvs/Ruben_zeufack.webp"
                        alt="Ruben ZEUFACK KITIO"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-white shadow-lg object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lidar-blue to-lidar-dark text-white text-xs font-semibold px-4 py-1 rounded-full z-20">
                        Géomaticien
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2 group-hover:text-lidar-blue transition-colors">Ruben ZEUFACK KITIO</h4>
                  <p className="text-lidar-blue font-medium mb-3">Géomaticien | SIG | Cartographie</p>
                  <p className="text-gray-500 text-sm mb-6">Plus de 4 ans d'expérience en cartographie thématique, photogrammétrie par drone, télédétection et gestion de bases de données spatiales.</p>

                  {/* Contact Info */}
                  {/* <div className="text-xs text-gray-500 mb-4 space-y-1">
                    <p><i className="fas fa-phone mr-2"></i>+237 691 445 145</p>
                    <p><i className="fas fa-envelope mr-2"></i>ruben.zeufack@gmail.com</p>
                  </div> */}

                  {/* Social Links */}
                  {/* <div className="flex justify-center gap-3">
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="mailto:ruben.zeufack@gmail.com" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/237691445145" className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div> */}
                </div>

                {/* Team Member 4 - BIZIMANA Jean Claude */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-lidar-blue/10 to-transparent rounded-full -translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lidar-teal/10 to-transparent rounded-full translate-x-8 translate-y-8"></div>

                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-lidar-blue to-lidar-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src="/cvs/bizi.webp"
                        alt="BIZIMANA Jean Claude"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-white shadow-lg object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lidar-blue to-lidar-dark text-white text-xs font-semibold px-4 py-1 rounded-full z-20">
                        Technicien
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2 group-hover:text-lidar-blue transition-colors">BIZIMANA Jean Claude</h4>
                  <p className="text-lidar-blue font-medium mb-3">Technicien Supérieur en Topographie</p>
                  <p className="text-gray-500 text-sm mb-6">Plus de 23 ans d'expérience en levés topographiques, nivellement, calcul de polygonales et implantation de routes et infrastructures.</p>

                  {/* Contact Info */}
                  {/* <div className="text-xs text-gray-500 mb-4 space-y-1">
                    <p><i className="fas fa-phone mr-2"></i>+237 675 669 173</p>
                    <p><i className="fas fa-envelope mr-2"></i>bizimanajc21@gmail.com</p>
                  </div> */}

                  {/* Social Links */}
                  {/* <div className="flex justify-center gap-3">
                    <a href="mailto:bizimanajc21@gmail.com" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/237675669173" className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div> */}
                </div>

                {/* Team Member 5 - Loïc KAMI */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-lidar-blue/10 to-transparent rounded-full -translate-x-10 -translate-y-10"></div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-lidar-teal/10 to-transparent rounded-full translate-x-8 translate-y-8"></div>

                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-lidar-blue to-lidar-dark rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Image
                        src="/team-drone.jpg"
                        alt="Loïc KAMI"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-white shadow-lg object-cover w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lidar-blue to-lidar-dark text-white text-xs font-semibold px-4 py-1 rounded-full z-20">
                        R&D
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-lidar-dark mb-2 group-hover:text-lidar-blue transition-colors">Loïc KAMI</h4>
                  <p className="text-lidar-blue font-medium mb-3">Research & Dev, IT</p>
                  <p className="text-gray-500 text-sm mb-6">Développeur et expert en solutions technologiques géospatiales. Développement d'applications et traitement de données.</p>

                  {/* Social Links */}
                  {/* <div className="flex justify-center gap-3">
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lidar-blue hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/237650907144" className="w-10 h-10 bg-gray-100 hover:bg-green-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div> */}
                </div>
              </div>

              {/* Join Team CTA */}
              <div className="mt-16 p-8 bg-gradient-to-r from-lidar-dark to-lidar-blue rounded-2xl text-white max-w-3xl mx-auto">
                <h4 className="text-2xl font-bold mb-4">Rejoignez notre équipe!</h4>
                <p className="text-lg mb-6 text-white/90">Nous sommes toujours à la recherche de talents pour renforcer notre équipe.</p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center bg-white text-lidar-dark font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <i className="fas fa-user-plus mr-2"></i>
                  Postuler maintenant
                </Link>
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
