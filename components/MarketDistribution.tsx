'use client';

import Reveal from './Reveal';
import { MapPin, Globe, Truck, Headphones, Package, Award } from 'lucide-react';

const regions = [
  { name: 'North America', x: '20%', y: '36%', countries: 'USA, Canada, Mexico' },
  { name: 'Latin America', x: '28%', y: '70%', countries: 'Brazil, Argentina, Chile' },
  { name: 'Europe', x: '48%', y: '30%', countries: 'UK, Germany, France, Italy' },
  { name: 'Middle East', x: '57%', y: '44%', countries: 'UAE, Saudi Arabia, Qatar' },
  { name: 'Africa', x: '50%', y: '58%', countries: 'South Africa, Egypt, Nigeria' },
  { name: 'China (HQ)', x: '73%', y: '40%', countries: 'Headquarters & Factory', isHQ: true },
  { name: 'Southeast Asia', x: '78%', y: '56%', countries: 'Singapore, Malaysia, Thailand' },
  { name: 'Oceania', x: '84%', y: '74%', countries: 'Australia, New Zealand' },
];

const benefits = [
  { icon: Globe, title: 'Global Shipping', desc: 'Worldwide logistics network to 50+ countries' },
  { icon: Package, title: 'Low MOQ', desc: 'Flexible order quantities for distributors' },
  { icon: Headphones, title: 'Free Training', desc: 'Technical support and installation guidance' },
  { icon: Award, title: 'Free Samples', desc: 'Test product quality before committing' },
];

export default function MarketDistribution() {
  return (
    <section id="market" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Global Reach
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Market Distribution
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide versatile PDLC smart film solutions for global resellers, builders, and manufacturers.
              Enjoy international shipping, free training, and technical support. Low MOQ and free samples available.
              Partner with us to elevate your business.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map Area */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-[#060f1f] via-[#0a1a35] to-[#060f1f] rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] border border-white/5">
              {/* Real world map SVG background */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/world-map.svg"
                  alt="World map"
                  className="w-full h-full object-contain opacity-[0.4] select-none pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
              />

              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(59,130,246,0.1)_0%,transparent_65%)]" />

              {/* Connection arcs SVG overlay */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {regions.filter(r => !r.isHQ).map((region, i) => {
                  const hqX = 73;
                  const hqY = 40;
                  const targetX = parseInt(region.x);
                  const targetY = parseInt(region.y);
                  const midX = (hqX + targetX) / 2;
                  const midY = Math.min(hqY, targetY) - 12;
                  return (
                    <path
                      key={i}
                      d={`M${hqX},${hqY} Q${midX},${midY} ${targetX},${targetY}`}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.15"
                      opacity="0.35"
                      strokeDasharray="1,1"
                      vectorEffect="non-scaling-stroke"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="2"
                        to="0"
                        dur={`${2.5 + i * 0.3}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  );
                })}
              </svg>

              {/* Region markers */}
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="absolute group z-10"
                  style={{ left: region.x, top: region.y, transform: 'translate(-50%, -50%)' }}
                >
                  {region.isHQ ? (
                    <>
                      <div className="relative">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40">
                          <div className="w-4 h-4 bg-gradient-to-br from-accent to-blue-600 rounded-full" />
                        </div>
                        <div className="absolute inset-0 w-8 h-8 bg-white rounded-full animate-ping opacity-15" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-10 whitespace-nowrap">
                        <span className="text-white text-sm font-bold drop-shadow-lg bg-primary/60 px-2 py-0.5 rounded backdrop-blur-sm">{region.name}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                        <div className="w-3.5 h-3.5 bg-gradient-to-br from-blue-400 to-accent rounded-full shadow-lg shadow-accent/40" />
                        <div className="absolute inset-0 w-3.5 h-3.5 bg-accent rounded-full animate-ping opacity-40" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-5 whitespace-nowrap">
                        <span className="text-white/85 text-xs font-medium drop-shadow">{region.name}</span>
                      </div>
                    </>
                  )}
                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-12 bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 whitespace-nowrap translate-y-1 group-hover:translate-y-0 border border-gray-100">
                    <p className="text-xs font-bold text-primary">{region.name}</p>
                    <p className="text-xs text-gray-500">{region.countries}</p>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-l border-t border-gray-100" />
                  </div>
                </div>
              ))}

              {/* Corner decorations */}
              <div className="absolute top-5 left-5 flex items-center gap-2 text-white/25">
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-semibold tracking-[0.2em]">GLOBAL NETWORK</span>
              </div>
              <div className="absolute bottom-5 right-5 flex items-center gap-2 text-white/20">
                <span className="text-[10px] font-mono tracking-wider">50+ COUNTRIES</span>
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-white/10 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-white/10 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l border-b border-white/10 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-white/10 rounded-br-lg" />
            </div>
          </Reveal>

          {/* Right side */}
          <div className="space-y-5">
            <Reveal direction="right">
              <div className="bg-gradient-to-br from-primary to-[#0a1628] rounded-2xl p-6 text-white shadow-xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-light" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AYSENT Smart Film</h3>
                    <p className="text-white/60 text-sm">Headquarters</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Headquarters Building of Huantou Center, No. 1728, Shanguo South Road,
                  Jinghe Sub-district, Tengzhou City, Shandong Province, China
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </span>
                  <span className="text-accent-light text-sm font-medium">50+ Countries Served</span>
                </div>
              </div>
            </Reveal>

            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} direction="right" delay={index * 80}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 group">
                  <div className="w-11 h-11 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-accent/20 group-hover:to-accent/10 transition-colors">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">{benefit.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
