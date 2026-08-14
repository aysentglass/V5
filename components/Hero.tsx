export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Trusted by 500+ Global Projects
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Smart Film Manufacturer for
            <span className="text-accent-light"> Intelligent Privacy</span> Glass Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Professional PDLC smart glass film, switchable privacy film and OEM/ODM solutions.
            Transform ordinary glass into intelligent privacy glass with instant switching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Get Factory Quote
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-400">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm text-gray-400">Sqm Produced</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
