import Reveal from './Reveal';
import { Eye, Droplets, Maximize2, Zap, Battery, Clock, Thermometer, Shield, Sun, Layers, Volume2, Gauge } from 'lucide-react';

const specs = [
  {
    icon: Eye,
    label: 'Light Transmittance',
    value: 'Up to 92%',
    detail: 'T7 HD Pro Series · Parallel light measurement',
  },
  {
    icon: Droplets,
    label: 'Haze (ON State)',
    value: '< 2%',
    detail: 'Crystal-clear transparency when powered',
  },
  {
    icon: Maximize2,
    label: 'Viewing Angle',
    value: '165°',
    detail: 'Ultra-wide angle, clear from the side',
  },
  {
    icon: Zap,
    label: 'Response Time',
    value: '≤ 0.1s',
    detail: 'Instant switching between transparent and frosted',
  },
  {
    icon: Battery,
    label: 'Operating Voltage',
    value: '48–65V AC',
    detail: 'Safe low voltage · 110V/220V adapter support',
  },
  {
    icon: Gauge,
    label: 'Power Consumption',
    value: '3.2 W/㎡/h',
    detail: '32% more energy-efficient than competitors',
  },
  {
    icon: Clock,
    label: 'Service Life',
    value: '15+ Years',
    detail: 'Lab aging-tested · 5-year global warranty',
  },
  {
    icon: Thermometer,
    label: 'Temperature Range',
    value: '-30°C ~ 90°C',
    detail: 'Tested extreme environments · Rated -20°C ~ 85°C',
  },
  {
    icon: Shield,
    label: 'Surface Hardness',
    value: '2.5H+',
    detail: 'Scratch-resistant · Competitors average 1.5H–2H',
  },
  {
    icon: Sun,
    label: 'UV / IR Blocking',
    value: '99% UV · 75% IR',
    detail: 'Protects interiors from fading and heat',
  },
  {
    icon: Layers,
    label: 'Film Thickness',
    value: '0.38 mm',
    detail: '5-layer structure: PET + ITO + LC + ITO + PET',
  },
  {
    icon: Volume2,
    label: 'Sound Reduction',
    value: '20–30 dB',
    detail: 'When laminated with glass',
  },
];

export default function TechSpecs() {
  return (
    <section id="specs" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl" />
      </div>
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-[0.2em]">
              Technical Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Engineered for Performance
              <br />
              <span className="text-white/40">Backed by Lab Data</span>
            </h2>
            <p className="text-lg text-white/60">
              Every parameter is verified through rigorous testing. Our PDLC smart film delivers
              consistent quality that outperforms industry standards.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {specs.map((spec, index) => (
            <Reveal key={spec.label} delay={(index % 4) * 80}>
              <div className="group p-6 lg:p-7 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className="w-11 h-11 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-accent/20">
                  <spec.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {spec.value}
                </div>
                <div className="text-sm font-semibold text-white/80 mb-1.5">
                  {spec.label}
                </div>
                <div className="text-xs text-white/40 leading-relaxed">
                  {spec.detail}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Model comparison table */}
        <Reveal>
          <div className="mt-16 overflow-x-auto">
            <div className="min-w-[640px] bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">Product Series Comparison</h3>
                <p className="text-sm text-white/50 mt-1">Choose the right grade for your project</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-white/60">
                    <th className="text-left px-6 py-3 font-medium">Series</th>
                    <th className="text-left px-6 py-3 font-medium">Positioning</th>
                    <th className="text-left px-6 py-3 font-medium">Transmittance (ON)</th>
                    <th className="text-left px-6 py-3 font-medium">Viewing Angle</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="px-6 py-3 font-semibold text-accent-light">T6 HD</td>
                    <td className="px-6 py-3 text-white/60">Entry-level, cost-effective</td>
                    <td className="px-6 py-3">84.5% – 88%</td>
                    <td className="px-6 py-3">145°</td>
                  </tr>
                  <tr className="border-b border-white/5 bg-accent/5">
                    <td className="px-6 py-3 font-semibold text-accent-light">T7 HD Pro <span className="text-xs bg-accent/20 text-accent-light px-2 py-0.5 rounded-full ml-1">Best Seller</span></td>
                    <td className="px-6 py-3 text-white/60">Mainstream, top-selling</td>
                    <td className="px-6 py-3">89.5% – 92%</td>
                    <td className="px-6 py-3">165°</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="px-6 py-3 font-semibold text-accent-light">T8 Premium HD</td>
                    <td className="px-6 py-3 text-white/60">High-end projects</td>
                    <td className="px-6 py-3">92.5% – 94%</td>
                    <td className="px-6 py-3">150°</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 font-semibold text-accent-light">T9 Ultra HD</td>
                    <td className="px-6 py-3 text-white/60">Flagship, limited supply</td>
                    <td className="px-6 py-3">92.7% – 95%</td>
                    <td className="px-6 py-3">165°</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
