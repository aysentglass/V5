import Reveal from './Reveal';
import { Wrench, Truck, FileCheck, Headphones, Ruler, Shield } from 'lucide-react';

const services = [
  {
    icon: Ruler,
    title: 'Custom Sizing',
    desc: 'Standard width up to 1.8m, ultra-wide up to 2.1m. Any length. Precision CNC cutting to your exact project dimensions.',
  },
  {
    icon: Wrench,
    title: 'OEM / ODM',
    desc: 'Private label packaging, custom branding, and tailored product specifications for your business.',
  },
  {
    icon: FileCheck,
    title: 'Sample Service',
    desc: 'Professional sample kit with 3 transmittance grades, USB controller and test tools. Ships within 1-3 days.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    desc: 'DHL / FedEx / by sea / by air. Competitive freight rates and door-to-door delivery worldwide.',
  },
  {
    icon: Headphones,
    title: 'Tech Support',
    desc: 'Professional installation guidance, wiring diagrams, and remote troubleshooting assistance.',
  },
  {
    icon: Shield,
    title: '5-Year Global Warranty',
    desc: 'Industry-leading 5-year warranty covering cracking, adhesive failure and yellowing. Full inspection before shipment.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              End-to-End Support
              <br />
              <span className="text-gray-400">From Sample to Installation</span>
            </h2>
            <p className="text-lg text-gray-600">
              We handle everything from custom manufacturing to global delivery, ensuring
              a seamless experience for distributors, contractors and project owners.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/20">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
