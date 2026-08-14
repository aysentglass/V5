import { Shield, Award, Zap, Globe, Settings, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'ISO9001 Certified',
    desc: 'Quality management system certified, CE & RoHS compliant products.',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    desc: 'Decade of expertise in PDLC smart film manufacturing and R&D.',
  },
  {
    icon: Zap,
    title: 'Fast Sampling',
    desc: 'Free samples within 3-5 days, customized solutions available.',
  },
  {
    icon: Globe,
    title: 'Global Shipping',
    desc: 'Worldwide logistics support with competitive freight rates.',
  },
  {
    icon: Settings,
    title: 'OEM/ODM Customization',
    desc: 'Custom sizes, colors, and switching modes to match your project.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    desc: 'Professional installation guidance and after-sales service.',
  },
];

export default function Trust() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose AYSENT SMART FILM
          </h2>
          <p className="text-lg text-gray-600">
            Your reliable partner for high-quality PDLC smart film and intelligent glass solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg hover:border-accent/20 transition-all"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
