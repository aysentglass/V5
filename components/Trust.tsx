import Reveal from './Reveal';
import { Shield, Award, Zap, Globe, Settings, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'ISO9001 Certified',
    desc: 'Quality management system certified, CE & RoHS compliant products for global markets.',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    desc: 'Decade of expertise in PDLC smart film manufacturing, R&D and large-scale production.',
  },
  {
    icon: Zap,
    title: 'Fast Sampling',
    desc: 'Free samples within 3-5 days. Custom sizes and specifications available on request.',
  },
  {
    icon: Globe,
    title: 'Global Shipping',
    desc: 'Worldwide logistics support with competitive freight rates and reliable delivery.',
  },
  {
    icon: Settings,
    title: 'OEM/ODM Customization',
    desc: 'Custom sizes, colors, switching modes and control systems to match your project.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Professional installation guidance, training and dedicated after-sales service.',
  },
];

export default function Trust() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Why AYSENT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Engineered for Excellence,
              <br />
              <span className="text-gray-400">Trusted Worldwide</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your reliable partner for high-quality PDLC smart film and intelligent glass solutions.
              We combine advanced technology with craftsmanship to deliver products that exceed expectations.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={((index % 3) + 1) * 100}>
              <div className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-accent/20">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
