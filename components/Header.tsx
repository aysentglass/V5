'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const menus = [
  { name: 'Home', href: '/#home' },
  { name: 'Products', href: '/#products' },
  { name: 'Applications', href: '/#applications' },
  { name: 'Factory', href: '/#factory' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/#home" className="flex items-center group">
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              AYSENT
            </span>
            <span
              className={`text-xl font-light ml-1 transition-colors duration-300 ${
                scrolled ? 'text-gray-400' : 'text-white/80'
              }`}
            >
              SMART FILM
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {menus.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-accent relative group ${
                  scrolled ? 'text-gray-700' : 'text-white/80'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="/#contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Get Free Quote
          </a>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} className={scrolled ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 mt-3">
          <div className="px-4 py-4 space-y-1">
            {menus.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="block px-4 py-3 mt-2 text-base font-semibold text-white bg-accent rounded-lg text-center"
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
