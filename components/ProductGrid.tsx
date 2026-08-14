import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function ProductGrid() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-2 mb-4">
            Smart Film Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive range of PDLC smart films and intelligent glass products for any application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🔲</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
                {product.keyword && (
                  <p className="text-sm text-gray-500 mb-4">{product.keyword}</p>
                )}
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-light group/link"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
