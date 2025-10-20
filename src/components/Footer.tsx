
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#19355D] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main footer content sits above the decorative pattern */}
        <div className="relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="logo-container">
                  <div className="logo-ray"></div>
                  <Image
                    src="/logo.svg"
                    className="w-12 h-12 contain logo-grayscale logo-glow mr-3"
                    alt="Lidar One Logo"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-2xl font-bold">Lidar One</span>
              </div>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Votre partenaire de confiance pour tous vos projets de topographie, cadastre et levés drone.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-lidar-blue rounded flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-lidar-blue rounded flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-lidar-blue rounded flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-lidar-blue rounded flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Nos Services</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Topographie
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Cadastre
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Bathymétrie
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Lidar & Drone Survey
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/#accueil"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Services
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Vente & Location Équipements
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i> Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Restez informé de nos actualités et offres
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l focus:outline-none focus:ring-2 focus:ring-lidar-blue text-white placeholder-gray-400"
                />
                <button className="bg-lidar-blue hover:bg-opacity-80 px-6 py-3 rounded-r transition-colors duration-300">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Lidar One. Tous droits réservés. Conçu avec <i className="fas fa-heart text-red-500 mx-1"></i> au Cameroun</p>
          </div>
        </div>
      </div>
    </footer>
  );
}