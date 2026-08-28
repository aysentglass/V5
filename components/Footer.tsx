import { Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Products', href: '#products' },
  { name: 'Applications', href: '#applications' },
  { name: 'Factory', href: '#factory' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const products = [
  'PDLC Smart Film',
  'Self-Adhesive Film',
  'Laminated Smart Glass',
  'Control Systems',
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent-light to-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <span className="text-2xl font-bold">AYSENT</span>
              <span className="text-2xl font-light text-white/70 ml-1">SMART FILM</span>
            </div>
            <p className="text-white/75 text-sm leading-relaxed mb-6">
              Professional manufacturer of PDLC smart glass film and intelligent privacy
              glass solutions. Serving global clients with quality, innovation and reliability.
            </p>
            <div className="flex gap-3">
              {['in', 'fb', 'tw'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent transition-colors text-xs font-bold uppercase"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/75 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-white/75 hover:text-white text-sm transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-accent-light mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/75 text-sm">aaronliu@aysentglass.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-accent-light mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/75 text-sm">+86-15163206207</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-light mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/75 text-sm">Huantou Center HQ, No.1728 Shanguo South Rd, Jinghe Sub-district, Tengzhou, Zaozhuang, Shandong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} AYSENT SMART FILM. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
