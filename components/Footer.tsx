import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/#products' },
  { name: 'About Us', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

const products = [
  'PDLC Smart Film',
  'Self Adhesive Smart Film',
  'Laminated Smart Glass',
  'Smart Film Accessories',
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">AYSENT</span>
              <span className="text-2xl font-light text-gray-400 ml-1">SMART FILM</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional manufacturer of PDLC smart glass film and intelligent privacy glass solutions.
              Serving global clients with quality products and reliable service.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <a href="#products" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-accent-light mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">sales@aysentsmartfilm.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-accent-light mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+86 138 0000 0000</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-light mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Shandong, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AYSENT SMART FILM. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
