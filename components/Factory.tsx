import Reveal from './Reveal';
import { Factory as FactoryIcon, FlaskConical, Ruler, Truck } from 'lucide-react';

const capabilities = [
  {
    icon: FactoryIcon,
    value: '50,000㎡',
    label: 'Production Facility',
  },
  {
    icon: FlaskConical,
    value: 'R&D Center',
    label: 'In-house Innovation',
  },
  {
    icon: Ruler,
    value: '1.8m Width',
    label: 'Max Film Format',
  },
  {
    icon: Truck,
    value: 'Global',
    label: 'Shipping Network',
  },
];

export default function Factory() {
  return (
    <section id="factory" className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/factory-production.jpg"
          alt="Factory"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <Reveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom-container">
                <img
                  src="/images/factory-production.jpg"
                  alt="AYSENT manufacturing facility"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white text-primary p-6 rounded-2xl shadow-xl animate-float">
                <div className="text-4xl font-bold">ISO</div>
                <div className="text-sm text-gray-500">9001 Certified</div>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal direction="right">
            <div>
              <span className="text-accent-light font-semibold text-sm uppercase tracking-[0.2em]">
                Our Factory
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
                Advanced Manufacturing
                <br />
                <span className="text-white/50">Facility</span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Our state-of-the-art production facility combines precision engineering
                with automated manufacturing. Every roll of smart film undergoes rigorous
                quality control to ensure consistent performance and longevity.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <cap.icon className="w-8 h-8 text-accent-light mb-3" />
                    <div className="text-xl font-bold mb-1">{cap.value}</div>
                    <div className="text-sm text-white/50">{cap.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Factory Visit
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
