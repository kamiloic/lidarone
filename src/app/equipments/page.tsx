'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackToTop from '../../components/BackToTop';
import EquipmentGrid from '../../components/EquipmentGrid';
import { equipments } from '../../data/equipments';

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
            Découvrez notre gamme complète d&apos;équipements pour la topographie, le cadastre et les levés drone. Location et vente disponibles.
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
            <Link
              href="/#contact"
              className="cyber-button bg-glass-light backdrop-blur-sm text-white border border-white/30 font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-file-invoice mr-2"></i> Demander un devis
              </span>
            </Link>
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
              La précision rencontre l&apos;innovation
            </p>
          </div>
          <EquipmentGrid equipments={equipments} />
          <div className="text-center mt-12">
            <Link
              href="/#contact"
              className="cyber-button inline-block bg-glass-light backdrop-blur-sm text-lidar-blue border border-lidar-blue/40 font-bold py-4 px-8 rounded-lg hover:bg-lidar-blue/20 transition-all duration-500 font-semibold"
            >
              <span className="relative z-10 flex items-center justify-center">
                <i className="fas fa-envelope mr-2"></i> Contactez-nous pour plus d&apos;infos
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