'use client';

import Reveal from './Reveal';
import { MapPin, Globe, Truck, Headphones, Package, Award } from 'lucide-react';

const regions = [
  { name: 'North America', x: '18%', y: '42%', countries: 'USA, Canada, Mexico' },
  { name: 'Europe', x: '48%', y: '35%', countries: 'UK, Germany, France, Italy' },
  { name: 'China', x: '72%', y: '45%', countries: 'Headquarters & Factory' },
  { name: 'Middle East', x: '58%', y: '52%', countries: 'UAE, Saudi Arabia, Qatar' },
  { name: 'Africa', x: '50%', y: '62%', countries: 'South Africa, Egypt, Nigeria' },
  { name: 'Latin America', x: '28%', y: '70%', countries: 'Brazil, Argentina, Chile' },
  { name: 'Southeast Asia', x: '78%', y: '60%', countries: 'Singapore, Malaysia, Thailand' },
  { name: 'Oceania', x: '85%', y: '75%', countries: 'Australia, New Zealand' },
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
            <div className="relative bg-primary rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
              {/* Abstract world map - dot matrix pattern */}
              <svg
                viewBox="0 0 800 500"
                className="absolute inset-0 w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Dot grid background */}
                <defs>
                  <pattern id="dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" opacity="0.4" />
                  </pattern>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#0B1F3A" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="800" height="500" fill="url(#dots)" />
                <rect width="800" height="500" fill="url(#glow)" />

                {/* Simplified continent shapes - North America */}
                <path
                  d="M100,120 Q120,100 160,110 Q200,120 220,150 Q240,180 230,220 Q220,260 200,280 Q180,300 160,290 Q140,280 130,250 Q120,220 110,190 Q100,160 100,120Z"
                  fill="white"
                  opacity="0.15"
                />
                {/* South America */}
                <path
                  d="M180,300 Q200,290 210,320 Q220,360 210,400 Q200,440 190,450 Q180,440 175,410 Q170,370 175,340 Q178,315 180,300Z"
                  fill="white"
                  opacity="0.15"
                />
                {/* Europe */}
                <path
                  d="M370,130 Q390,120 420,125 Q450,130 460,150 Q470,170 460,185 Q450,200 430,200 Q410,200 390,195 Q375,190 370,170 Q365,150 370,130Z"
                  fill="white"
                  opacity="0.15"
                />
                {/* Africa */}
                <path
                  d="M390,220 Q420,210 440,230 Q460,260 455,300 Q450,340 440,370 Q430,395 415,400 Q400,395 395,370 Q390,340 385,310 Q380,270 385,245 Q388,228 390,220Z"
                  fill="white"
                  opacity="0.15"
                />
                {/* Asia */}
                <path
                  d="M480,120 Q530,110 580,120 Q630,130 660,160 Q680,190 670,220 Q660,250 640,260 Q620,270 600,265 Q570,260 550,250 Q530,240 510,230 Q490,215 480,190 Q475,160 480,120Z"
                  fill="white"
                  opacity="0.15"
                />
                {/* Australia */}
                <path
                  d="M640,340 Q670,330 700,340 Q720,355 715,375 Q710,395 690,400 Q670,405 655,395 Q640,385 638,365 Q637,350 640,340Z"
                  fill="white"
                  opacity="0.15"
                />

                {/* Connection lines from China hub */}
                {regions.map((region, i) => {
                  const x = parseInt(region.x) * 8;
                  const y = parseInt(region.y) * 5;
                  return (
                    <line
                      key={i}
                      x1="576"
                      y1="225"
                      x2={x}
                      y2={y}
                      stroke="#3b82f6"
                      strokeWidth="1"
                      opacity="0.4"
                      strokeDasharray="4,4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="8"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </line>
                  );
                })}
              </svg>

              {/* Region markers */}
              {regions.map((region, index) => (
                <div
                  key={region.name}
                  className="absolute group"
                  style={{ left: region.x, top: region.y, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50" />
                    <div className="absolute inset-0 w-4 h-4 bg-accent rounded-full animate-ping opacity-40" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-5 whitespace-nowrap">
                    <span className="text-white text-xs font-semibold drop-shadow-lg">{region.name}</span>
                  </div>
                  {/* Tooltip on hover */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-8 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
                    <p className="text-xs font-semibold text-primary">{region.name}</p>
                    <p className="text-xs text-gray-500">{region.countries}</p>
                  </div>
                </div>
              ))}

              {/* China hub - larger marker */}
              <div className="absolute" style={{ left: '72%', top: '45%', transform: 'translate(-50%, -50%)' }}>
                <div className="relative">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-3 h-3 bg-accent rounded-full" />
                  </div>
                  <div className="absolute inset-0 w-6 h-6 bg-white rounded-full animate-ping opacity-30" />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-7 whitespace-nowrap">
                  <span className="text-white text-sm font-bold drop-shadow-lg">China (HQ)</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right side - benefits + company card */}
          <div className="space-y-6">
            <Reveal direction="right">
              <div className="bg-primary rounded-2xl p-6 text-white shadow-xl">
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
                <div className="flex items-center gap-2 text-accent-light text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>50+ Countries Served</span>
                </div>
              </div>
            </Reveal>

            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} direction="right" delay={index * 100}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">{benefit.title}</h4>
                    <p className="text-gray-500 text-xs mt-1">{benefit.desc}</p>
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
