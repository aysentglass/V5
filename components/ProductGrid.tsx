import Image from 'next/image';
import Reveal from './Reveal';
import { ArrowRight, Scissors, Package, Layers, Settings } from 'lucide-react';

// Product catalog for AYSENT PDLC smart film solutions
// Organized by product form: Cut Sheet (pre-cut, ready to install) vs Roll Film (bulk roll, self-cut)
const products = [
  {
    slug: 'pdlc-smart-film-cut-sheet',
    name: 'PDLC Smart Film — Cut Sheet',
    form: 'Cut Sheet',
    formIcon: Scissors,
    desc: 'Factory pre-cut to your exact dimensions with bus bars pre-installed. Peel, stick to glass and power on — zero fabrication needed. Ideal for end users, contractors and distributors without cutting capability.',
    image: '/images/product-pdlc.jpg',
    features: ['Pre-cut & bus bars installed', 'Width up to 1.8m (ultra-wide 2.1m)', 'Any length, unlimited', 'MOQ: 1 m²'],
  },
  {
    slug: 'pdlc-smart-film-roll',
    name: 'PDLC Smart Film — Roll',
    form: 'Roll Film',
    formIcon: Package,
    desc: 'Full-roll bulk supply for glass processors, fabricators and large distributors. Cut to size on-site and install bus bars yourself. Lower unit cost, maximum flexibility for high-volume projects.',
    image: '/images/product-self-adhesive.jpg',
    features: ['Widths: 1m / 1.2m / 1.5m / 1.8m / 2.1m', 'Length: 30m or 50m per roll', 'Self-adhesive & lamination grades', 'MOQ: 30 m²'],
  },
  {
    slug: 'laminated-smart-glass',
    name: 'Laminated Smart Glass',
    form: 'Finished Glass',
    formIcon: Layers,
    desc: 'Fully laminated switchable glass panels for new construction and premium projects. PDLC film sandwiched between two glass layers — safety rated, sound insulating and ready to install.',
    image: '/images/hero-building.jpg',
    features: ['Safety laminated glass', '20–30 dB sound reduction', '99% UV protection', 'Custom sizes & shapes'],
  },
  {
    slug: 'control-systems',
    name: 'Control Systems',
    form: 'Accessories',
    formIcon: Settings,
    desc: 'Complete range of smart controllers, remote controls, wall switches, dimmers, WiFi modules and automation integration accessories. Compatible with all AYSENT PDLC film and glass products.',
    image: '/images/product-control-systems.jpg',
    features: ['Remote & wall switch control', 'WiFi / App / voice control', 'Zone & group control', 'Dimming & automation'],
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Smart Film Solutions
              <br />
              <span className="text-gray-400">Cut Sheet & Roll Film</span>
            </h2>
            <p className="text-lg text-gray-600">
              Two product forms to match your business model — pre-cut sheets for instant installation,
              or bulk rolls for high-volume fabrication. Both available in standard 1.8m and ultra-wide 2.1m widths.
            </p>
          </div>
        </Reveal>

        {/* Product form legend */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full">
              <Scissors className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-primary">Cut Sheet — Ready to Install</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full">
              <Package className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-primary">Roll Film — Bulk Supply</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Reveal key={product.slug} direction="scale" delay={(index % 2) * 150}>
              <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden img-zoom-container bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Product form badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-primary shadow-md">
                    <product.formIcon className="w-3.5 h-3.5 text-accent" />
                    {product.form}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">{product.desc}</p>

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

                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-accent font-semibold group/link"
                    >
                      Request Quote
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Size guide note */}
        <Reveal>
          <div className="mt-12 p-6 bg-gray-50 border border-gray-100 rounded-2xl text-center">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-primary">Size Guide:</span> Standard maximum width{' '}
              <span className="font-semibold text-accent">1.8m</span> · Ultra-wide option{' '}
              <span className="font-semibold text-accent">2.1m</span> · Length unlimited (made to order) ·
              Custom & oversized shapes available on request
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
