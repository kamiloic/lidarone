'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId) as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="header"
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 shadow-md' : 'py-4'
        } bg-white`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center text-lidar-dark text-xl font-bold">
              <div className="logo-container">
                <div className="logo-ray"></div>
                <img
                  src="/logo.svg"
                  className="w-16 h-16 contain logo-grayscale logo-glow"
                  alt="Lidar One Logo"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </a>
            <nav className="hidden lg:block">
              <ul className="flex space-x-8">
                <li>
                  <button
                    onClick={() => scrollToSection('#accueil')}
                    className="text-lidar-blue font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-lidar-blue"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-lidar-dark font-medium hover:text-lidar-blue transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lidar-blue after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#pourquoi-nous')}
                    className="text-lidar-dark font-medium hover:text-lidar-blue transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lidar-blue after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Pourquoi nous
                  </button>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-lidar-dark font-medium hover:text-lidar-blue transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lidar-blue after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Équipements
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="text-lidar-dark font-medium hover:text-lidar-blue transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lidar-blue after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:block bg-lidar-blue hover:bg-lidar-dark text-white font-semibold py-2 px-6 rounded transition-all duration-300"
            >
              Demander un devis
            </button>
            <button
              id="menuToggle"
              className="lg:hidden text-lidar-dark text-2xl"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            id="closeMenu"
            className="text-2xl text-gray-800 mb-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => scrollToSection('#accueil')}
                className="block text-lidar-blue font-medium"
              >
                Accueil
              </button>
            </li>
            <li>
              <a
                href="/services"
                className="block text-gray-800 font-medium hover:text-lidar-blue transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('#pourquoi-nous')}
                className="block text-gray-800 font-medium hover:text-lidar-blue transition-colors"
              >
                Pourquoi nous
              </button>
            </li>
            <li>
              <a
                href="/products"
                className="block text-gray-800 font-medium hover:text-lidar-blue transition-colors"
              >
                Équipements
              </a>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('#contact')}
                className="block text-gray-800 font-medium hover:text-lidar-blue transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}