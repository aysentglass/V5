import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    slug: 'pdlc-smart-film',
    name: 'PDLC Smart Film',
    desc: 'Standard polymer-dispersed liquid crystal film for switchable glass applications.',
    image: '/images/product-pdlc.jpg',
    features: ['Switchable ON/OFF', 'High transparency', 'Custom sizes'],
  },
  {
    slug: 'self-adhesive-smart-film',
    name: 'Self-Adhesive Film',
    desc: 'Peel-and-stick smart film for retrofitting existing glass without replacement.',
    image: '/images/product-self-adhesive.jpg',
    features: ['Easy installation', 'Retrofit ready', 'Cost-effective'],
  },
  {
    slug: 'laminated-smart-glass',
    name: 'Laminated Smart Glass',
    desc: 'Fully laminated switchable glass panels for new construction and premium projects.',
    image: '/images/hero-building.jpg',
    features: ['Safety glass', 'Sound insulation', 'UV protection'],
  },
  {
    slug: 'accessories',
    name: 'Control Systems',
    desc: 'Smart controllers, switches, dimmers and automation integration accessories.',
    image: '/images/factory-production.jpg',
    features: ['WiFi & app control', 'Voice assistant', 'Custom automation'],
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Smart Film Solutions
              <br />
              <span className="text-gray-400">for Every Project</span>
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive range of PDLC smart films and intelligent glass products.
              From standard rolls to fully customized laminated glass.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Reveal key={product.slug} direction="scale" delay={(index % 2) * 150}>
              <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden img-zoom-container bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    {product.slug}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{product.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center text-accent font-semibold group/link"
                  >
                    Request Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
