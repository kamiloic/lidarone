import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#19355D] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* ===== Main Footer Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* --- Logo + Social --- */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/logo-white.svg"
                className="w-24 h-24 contain mr-3"
                alt="LiDAR One Logo"
                width={96}
                height={96}
              />
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Une vision précise pour vos projets.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: 'fab fa-facebook-f', href: '#' },
                { icon: 'fab fa-twitter', href: '#' },
                { icon: 'fab fa-linkedin-in', href: '#' },
                { icon: 'fab fa-instagram', href: '#' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 bg-lidar-blue rounded flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300"
                >
                  <i className={`${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* --- Services --- */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {['Topographie', 'Cadastre', 'Bathymétrie', 'LiDAR & Drone Survey'].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', href: '/#accueil' },
                { name: 'Services', href: '/services' },
                { name: 'Vente & Location Équipements', href: '/products' },
                { name: 'Contact', href: '/#contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-lidar-blue mr-2 text-xs"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-lidar-blue"></i>
                Montée Jouvence, Yaoundé
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-briefcase text-lidar-blue"></i>
                RCCM CM-NSI-01-2025-813-01420
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-id-card text-lidar-blue"></i>
                NIU : M102518129452A
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-lidar-blue"></i>
                +237 650 907 144
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-lidar-blue"></i>
                contact@lidarone.com
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-white/10 pt-6 pb-8 text-center text-gray-400 text-sm md:text-base">
          <p>
            © 2025 <span className="font-semibold text-white">LiDAR One</span> — Construit avec
            <i className="fas fa-heart text-red-500 mx-1"></i>
            au Cameroun par Bogital
          </p>
        </div>
      </div>
    </footer>
  );
}
