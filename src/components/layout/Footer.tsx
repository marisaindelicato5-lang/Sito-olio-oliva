import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { siteConfig, footerNavigation } from '../../data/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-granite-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpg"
                alt={siteConfig.name}
                className="w-14 h-14 rounded-full object-cover"
                width={56}
                height={56}
              />
              <div>
                <span className="block font-display text-xl font-semibold text-white">
                  {siteConfig.name}
                </span>
                <span className="block text-sm text-granite-400 font-accent italic">
                  Valle del Belice
                </span>
              </div>
            </Link>
            <p className="text-granite-400 text-sm leading-relaxed mb-6">
              Olio Extravergine di Oliva IGP dalla Sicilia. 
              Monocultivar Nocellara del Belice, raccolto a mano, molitura a freddo.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-granite-800 flex items-center justify-center
                           text-granite-400 hover:bg-granite-700 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-granite-800 flex items-center justify-center
                           text-granite-400 hover:bg-granite-700 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-whatsapp-500 flex items-center justify-center
                         text-white hover:bg-whatsapp-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Navigazione</h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-granite-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-granite-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    {siteConfig.address.city}<br />
                    {siteConfig.address.zone}, Sicilia
                  </span>
                </div>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="flex items-center gap-3 text-granite-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
              </li>
              {siteConfig.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-granite-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{siteConfig.email}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Informazioni</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-granite-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Ordini</p>
                  <p>Via WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-granite-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Spedizioni</p>
                  <p>Tutta Italia con Poste Italiane</p>
                </div>
              </li>
              <li className="mt-4 pt-4 border-t border-granite-800">
                <div className="text-sm">
                  <p className="text-forno-400 font-medium">Ordine Minimo</p>
                  <p className="text-granite-400">2 litri</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-granite-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-granite-500 text-sm">
              © {currentYear} {siteConfig.name}. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-granite-500 hover:text-granite-300 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
