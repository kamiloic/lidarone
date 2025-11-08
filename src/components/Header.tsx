'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// WhatsApp Configuration
const WHATSAPP_CONFIG = {
  phone: '+237650907144',
  defaultMessage: 'Bonjour, je souhaiterais obtenir plus d\'informations sur vos services.',
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    if (typeof window === 'undefined') return;
    const currentPath = window.location.pathname;

    if (currentPath !== '/') {
      window.location.href = `/${sectionId}`;
      return;
    }

    const element = document.querySelector(sectionId) as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  }, []);

  const openWhatsApp = useCallback(() => {
    if (typeof window === 'undefined') return;
    const encodedMessage = encodeURIComponent(WHATSAPP_CONFIG.defaultMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, []);

  const copyToClipboard = useCallback(async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  const navItems = [
    { name: 'Accueil', path: '/', isButton: false },
    { name: 'Services', path: '/services', isButton: false },
    { name: 'À propos', path: '/a-propos', isButton: false },
    { name: 'Équipements', path: '/equipments', isButton: false },
  ];

  return (
    <>
      <header
        id="header"
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
          ? 'py-2 shadow-lg bg-white/95 backdrop-blur-md'
          : 'py-3 bg-white'
          }`}
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center text-lidar-dark text-xl font-bold focus:outline-none focus:ring-2 focus:ring-lidar-blue focus:ring-offset-2 rounded"
              aria-label="Lidar One - Retour à l'accueil"
            >
              <div className="logo-container h-16 relative">
                <div className="logo-ray"></div>
                <Image
                  src="/logo.svg"
                  className="w-24 h-24 contain logo-grayscale logo-glow -translate-y-4"
                  alt="Lidar One Logo"
                  width={96}
                  height={96}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block" role="navigation" aria-label="Navigation principale">
              <ul className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-lidar-blue after:transition-all after:duration-300 ${isActive(item.path)
                        ? 'text-lidar-blue after:w-full'
                        : 'text-lidar-dark hover:text-lidar-blue after:w-0 hover:after:w-full'
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className={`font-medium transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-lidar-blue after:transition-all after:duration-300 ${typeof window !== 'undefined' && pathname === '/' && window.location.hash === '#contact'
                      ? 'text-lidar-blue after:w-full'
                      : 'text-lidar-dark hover:text-lidar-blue after:w-0 hover:after:w-full'
                      }`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            {/* WhatsApp Button - Desktop */}
            <button
              onClick={openWhatsApp}
              className="hidden lg:flex bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 items-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ml-4"
              aria-label="Contactez-nous sur WhatsApp"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span className="hidden xl:inline">+237 650 907 144</span>
            </button>

            {/* Mobile WhatsApp Button */}
            <button
              onClick={openWhatsApp}
              className="lg:hidden bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 mr-2 flex items-center gap-2"
              aria-label="Contactez-nous sur WhatsApp"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              <span className="text-sm font-medium">+237 650 907 144</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="menuToggle"
              className="lg:hidden text-lidar-dark text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-lidar-blue"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={isMobileMenuOpen}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation mobile"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="text-lg font-bold text-lidar-dark">Menu</span>
            <button
              id="closeMenu"
              className="text-2xl text-gray-600 hover:text-lidar-blue transition-colors p-2 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-lidar-blue"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6" role="navigation" aria-label="Navigation mobile">
            <ul className="space-y-2 px-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 ${isActive(item.path)
                      ? 'bg-lidar-blue text-white'
                      : 'text-gray-800 hover:bg-gray-100 hover:text-lidar-blue'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`fas ${item.path === '/' ? 'fa-home' :
                      item.path === '/services' ? 'fa-cogs' :
                        item.path === '/a-propos' ? 'fa-info-circle' :
                          'fa-tools'
                      } mr-3 w-5 text-center`}></i>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full text-left py-3 px-4 rounded-lg font-medium text-gray-800 hover:bg-gray-100 hover:text-lidar-blue transition-all duration-200"
                >
                  <i className="fas fa-envelope mr-3 w-5 text-center"></i>
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Footer - CTA Buttons */}
          <div className="p-6 border-t border-gray-200 space-y-3">
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-lidar-blue hover:bg-lidar-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <i className="fas fa-file-invoice mr-2"></i>
              Demander un devis
            </button>

            {/* Company Info Footer */}
            <div className="pt-4 border-t border-gray-200 text-center">
              <div className="text-xs text-gray-600 space-y-1">
                <p className="font-medium text-lidar-dark">LiDAR One</p>
                <p>Montée Jouvence, Yaoundé</p>
                <p>RCCM CM-NSI-01-2025-813-01420</p>
                <p>NIU: M102518129452A</p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span>+237 650 907 144</span>
                    <button
                      onClick={() => copyToClipboard('+237650907144', 'phone')}
                      className="text-lidar-blue hover:text-lidar-dark transition-colors"
                      aria-label="Copier le numéro de téléphone"
                    >
                      {copiedItem === 'phone' ? (
                        <span className="text-green-600 font-medium">Copié!</span>
                      ) : (
                        <i className="fas fa-copy text-xs"></i>
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>contact@lidarone.com</span>
                    <button
                      onClick={() => copyToClipboard('contact@lidarone.com', 'email')}
                      className="text-lidar-blue hover:text-lidar-dark transition-colors"
                      aria-label="Copier l'adresse email"
                    >
                      {copiedItem === 'email' ? (
                        <span className="text-green-600 font-medium">Copié!</span>
                      ) : (
                        <i className="fas fa-copy text-xs"></i>
                      )}
                    </button>
                  </div>
                </div>
                <p className="pt-2 text-gray-500">© 2025 LiDAR One</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}