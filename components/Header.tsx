'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menus = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/#products' },
  { name: 'Applications', href: '/#applications' },
  { name: 'Factory', href: '/#factory' },
  { name: 'About Us', href: '/#about' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">AYSENT</span>
            <span className="text-xl font-light text-gray-500 ml-1">SMART FILM</span>
          </a>

          <nav className="hidden lg:flex items-center space-x-6">
            {menus.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-md hover:bg-accent-light transition-colors"
          >
            Get Free Quote
          </a>

          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {menus.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-semibold text-white bg-accent rounded-md text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
