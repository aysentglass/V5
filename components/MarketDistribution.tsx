'use client';

import Reveal from './Reveal';
import { MapPin, Globe, Truck, Headphones, Package, Award } from 'lucide-react';

const regions = [
  { name: 'North America', x: '20%', y: '36%', countries: 'USA, Canada, Mexico' },
  { name: 'Latin America', x: '28%', y: '70%', countries: 'Brazil, Argentina, Chile' },
  { name: 'Europe', x: '48%', y: '28%', countries: 'UK, Germany, France, Italy' },
  { name: 'Middle East', x: '57%', y: '42%', countries: 'UAE, Saudi Arabia, Qatar' },
  { name: 'Africa', x: '50%', y: '58%', countries: 'South Africa, Egypt, Nigeria' },
  { name: 'China (HQ)', x: '72%', y: '38%', countries: 'Headquarters & Factory', isHQ: true },
  { name: 'Southeast Asia', x: '77%', y: '54%', countries: 'Singapore, Malaysia, Thailand' },
  { name: 'Oceania', x: '84%', y: '72%', countries: 'Australia, New Zealand' },
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
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
              />

              {/* Radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(59,130,246,0.12)_0%,transparent_65%)]" />

              {/* Accurate World Map SVG */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="landFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
                  </linearGradient>
                  <linearGradient id="landStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#93c5fd" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="mapGlow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* North America */}
                <path
                  d="M145,65 L160,58 L185,55 L210,58 L235,65 L255,75 L270,90 L280,110 L285,130 L282,150 L275,168 L268,182 L260,195 L252,208 L245,220 L238,232 L230,242 L222,252 L215,260 L208,268 L200,275 L192,280 L185,285 L178,288 L172,290 L168,285 L165,278 L162,270 L158,262 L155,252 L152,242 L150,230 L148,218 L147,205 L146,192 L145,178 L144,165 L143,152 L142,140 L142,128 L142,115 L143,102 L144,88 L145,75 Z M175,255 L182,258 L188,265 L192,272 L195,280 L190,285 L182,288 L175,285 L170,278 L168,270 L170,262 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Greenland */}
                <path
                  d="M310,40 L325,35 L340,35 L352,40 L358,50 L358,65 L352,78 L342,85 L330,85 L320,80 L312,70 L308,58 L308,48 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* South America */}
                <path
                  d="M225,275 L238,270 L250,272 L258,280 L263,292 L265,308 L263,325 L258,342 L252,358 L246,372 L240,385 L235,398 L230,410 L225,420 L220,428 L215,435 L210,438 L205,435 L202,425 L200,412 L198,398 L198,382 L200,365 L202,348 L205,332 L208,318 L212,305 L216,292 L220,282 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Europe */}
                <path
                  d="M455,95 L468,88 L482,85 L498,85 L512,88 L525,95 L535,105 L540,118 L538,130 L532,140 L522,148 L510,152 L498,152 L485,148 L475,142 L466,132 L460,120 L456,108 Z M445,105 L452,100 L458,105 L460,115 L458,125 L452,132 L446,135 L441,130 L439,120 L440,112 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Africa */}
                <path
                  d="M462,165 L478,158 L495,158 L512,162 L528,170 L540,182 L548,198 L552,215 L552,235 L548,255 L542,275 L535,292 L528,308 L520,322 L512,335 L505,345 L498,352 L490,358 L482,360 L475,355 L470,345 L466,332 L463,318 L461,302 L460,285 L460,268 L461,250 L461,232 L460,215 L460,198 L461,182 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Middle East */}
                <path
                  d="M545,155 L558,150 L570,152 L578,160 L582,172 L580,185 L575,195 L565,200 L555,198 L548,190 L544,178 L543,165 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Russia / Northern Asia */}
                <path
                  d="M540,55 L580,48 L630,45 L680,45 L730,48 L780,52 L820,58 L850,65 L870,75 L880,88 L882,102 L878,115 L870,125 L858,132 L842,135 L820,132 L795,128 L770,125 L745,125 L720,128 L695,132 L670,135 L648,132 L628,128 L610,122 L595,115 L582,105 L572,92 L565,78 L560,65 L555,58 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* China / East Asia */}
                <path
                  d="M670,145 L695,138 L720,138 L742,142 L760,150 L772,162 L780,178 L782,195 L778,212 L770,225 L758,235 L742,240 L725,238 L710,232 L698,222 L688,208 L682,192 L678,175 L676,158 Z M755,230 L765,228 L772,235 L775,245 L772,255 L765,260 L755,258 L748,250 L748,240 Z M775,255 L785,252 L790,260 L792,270 L788,278 L780,280 L772,275 L770,265 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* India / South Asia */}
                <path
                  d="M615,168 L632,162 L645,165 L654,175 L658,190 L655,205 L648,218 L638,225 L628,225 L620,218 L615,205 L612,190 L612,178 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Southeast Asia */}
                <path
                  d="M735,248 L748,242 L758,245 L765,255 L768,268 L765,280 L758,288 L748,290 L740,285 L735,275 L732,262 L733,255 Z M762,268 L772,265 L778,272 L780,282 L776,290 L768,292 L760,287 L758,278 Z M778,285 L788,282 L793,290 L795,300 L790,308 L782,310 L775,305 L773,295 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Australia */}
                <path
                  d="M795,335 L820,328 L848,328 L870,335 L885,348 L890,365 L888,382 L880,395 L865,405 L845,408 L825,405 L808,398 L795,385 L788,368 L788,350 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Japan */}
                <path
                  d="M808,155 L815,150 L820,158 L822,168 L818,178 L812,182 L806,178 L803,168 L805,160 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* UK */}
                <path
                  d="M442,108 L448,104 L452,110 L453,120 L450,128 L444,130 L440,124 L439,115 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />
                {/* Madagascar */}
                <path
                  d="M548,290 L553,288 L556,298 L555,310 L552,320 L548,322 L545,315 L544,302 L546,293 Z"
                  fill="url(#landFill)"
                  stroke="url(#landStroke)"
                  strokeWidth="0.8"
                  filter="url(#mapGlow)"
                />

                {/* Latitude lines */}
                <g stroke="white" strokeWidth="0.3" opacity="0.06">
                  <line x1="0" y1="125" x2="1000" y2="125" />
                  <line x1="0" y1="250" x2="1000" y2="250" />
                  <line x1="0" y1="375" x2="1000" y2="375" />
                </g>

                {/* Connection arcs from China HQ */}
                {regions.filter(r => !r.isHQ).map((region, i) => {
                  const hqX = 720;
                  const hqY = 190;
                  const targetX = parseInt(region.x) * 10;
                  const targetY = parseInt(region.y) * 5;
                  const midX = (hqX + targetX) / 2;
                  const midY = Math.min(hqY, targetY) - 55;
                  return (
                    <path
                      key={i}
                      d={`M${hqX},${hqY} Q${midX},${midY} ${targetX},${targetY}`}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1"
                      opacity="0.3"
                      strokeDasharray="6,6"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="12"
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
