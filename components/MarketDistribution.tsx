'use client';

import Reveal from './Reveal';
import { MapPin, Globe, Truck, Headphones, Package, Award } from 'lucide-react';

const regions = [
  { name: 'North America', x: '17%', y: '38%', countries: 'USA, Canada, Mexico' },
  { name: 'Latin America', x: '26%', y: '72%', countries: 'Brazil, Argentina, Chile' },
  { name: 'Europe', x: '47%', y: '30%', countries: 'UK, Germany, France, Italy' },
  { name: 'Middle East', x: '56%', y: '44%', countries: 'UAE, Saudi Arabia, Qatar' },
  { name: 'Africa', x: '49%', y: '60%', countries: 'South Africa, Egypt, Nigeria' },
  { name: 'China (HQ)', x: '71%', y: '40%', countries: 'Headquarters & Factory', isHQ: true },
  { name: 'Southeast Asia', x: '76%', y: '56%', countries: 'Singapore, Malaysia, Thailand' },
  { name: 'Oceania', x: '83%', y: '73%', countries: 'Australia, New Zealand' },
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(59,130,246,0.15)_0%,transparent_65%)]" />

              {/* Abstract World Map - dot matrix + outline */}
              <svg
                viewBox="0 0 1000 625"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Dot pattern for continents */}
                  <pattern id="continentDots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="0.8" fill="white" opacity="0.25" />
                  </pattern>
                  <pattern id="continentDotsLight" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.6" fill="white" opacity="0.15" />
                  </pattern>
                  <linearGradient id="outlineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.5" />
                  </linearGradient>
                  <filter id="softGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="strongGlow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Continent fill with dot pattern - creates abstract dot-matrix world map */}
                {/* North America */}
                <path
                  d="M120,100 Q140,85 180,90 Q220,95 250,115 Q275,135 280,165 Q285,195 275,225 Q265,255 250,275 Q235,295 215,300 Q195,305 180,295 Q165,285 155,265 Q145,245 140,220 Q135,195 130,170 Q125,140 120,100Z"
                  fill="url(#continentDots)"
                />
                {/* Greenland */}
                <path
                  d="M310,70 Q330,60 350,65 Q365,75 360,95 Q355,110 340,110 Q325,110 315,100 Q305,90 310,70Z"
                  fill="url(#continentDotsLight)"
                />
                {/* South America */}
                <path
                  d="M225,310 Q245,305 255,325 Q265,355 260,390 Q255,425 245,455 Q238,475 228,480 Q218,475 215,455 Q212,430 210,405 Q208,380 212,355 Q216,330 225,310Z"
                  fill="url(#continentDots)"
                />
                {/* Europe */}
                <path
                  d="M455,115 Q475,108 500,110 Q525,112 545,125 Q560,138 555,155 Q550,170 535,175 Q520,180 505,178 Q490,176 478,168 Q466,160 458,145 Q452,130 455,115Z"
                  fill="url(#continentDots)"
                />
                {/* Africa */}
                <path
                  d="M465,195 Q490,188 515,195 Q540,205 550,230 Q560,260 555,295 Q550,330 540,360 Q530,385 515,395 Q500,405 488,398 Q476,390 470,370 Q464,345 460,320 Q456,290 458,260 Q460,230 465,195Z"
                  fill="url(#continentDots)"
                />
                {/* Middle East */}
                <path
                  d="M545,200 Q565,195 580,205 Q590,218 585,235 Q580,250 568,252 Q556,254 548,242 Q542,230 545,200Z"
                  fill="url(#continentDotsLight)"
                />
                {/* Russia / Northern Asia */}
                <path
                  d="M555,85 Q620,75 700,80 Q780,85 840,95 Q870,105 875,125 Q880,145 865,155 Q850,165 830,160 Q800,155 770,150 Q740,145 710,148 Q680,151 655,148 Q630,145 610,138 Q590,130 575,118 Q562,105 555,85Z"
                  fill="url(#continentDots)"
                />
                {/* China / East Asia */}
                <path
                  d="M680,175 Q710,168 740,175 Q765,185 775,205 Q785,228 775,250 Q765,270 748,275 Q730,280 715,272 Q700,264 690,248 Q682,230 678,210 Q675,190 680,175Z"
                  fill="url(#continentDots)"
                />
                {/* India */}
                <path
                  d="M620,210 Q640,205 650,220 Q658,238 652,258 Q646,275 635,278 Q624,280 618,265 Q612,250 614,232 Q616,218 620,210Z"
                  fill="url(#continentDotsLight)"
                />
                {/* Southeast Asia */}
                <path
                  d="M745,290 Q760,285 770,295 Q778,308 772,322 Q766,335 755,335 Q744,335 738,322 Q732,310 738,298 Q742,292 745,290Z"
                  fill="url(#continentDotsLight)"
                />
                {/* Australia */}
                <path
                  d="M800,385 Q830,378 860,385 Q885,395 890,415 Q895,435 880,448 Q865,460 845,458 Q825,456 810,445 Q798,434 795,415 Q793,398 800,385Z"
                  fill="url(#continentDots)"
                />
                {/* Japan */}
                <path
                  d="M810,195 Q818,190 822,200 Q826,212 820,220 Q814,228 808,220 Q804,210 810,195Z"
                  fill="url(#continentDotsLight)"
                />
                {/* UK */}
                <path
                  d="M445,130 Q452,126 455,135 Q458,145 452,150 Q446,155 442,147 Q439,138 445,130Z"
                  fill="url(#continentDotsLight)"
                />

                {/* Continent outlines - thin glowing lines */}
                <g stroke="url(#outlineGrad)" strokeWidth="1" fill="none" filter="url(#softGlow)" opacity="0.6">
                  <path d="M120,100 Q140,85 180,90 Q220,95 250,115 Q275,135 280,165 Q285,195 275,225 Q265,255 250,275 Q235,295 215,300 Q195,305 180,295 Q165,285 155,265 Q145,245 140,220 Q135,195 130,170 Q125,140 120,100Z" />
                  <path d="M225,310 Q245,305 255,325 Q265,355 260,390 Q255,425 245,455 Q238,475 228,480 Q218,475 215,455 Q212,430 210,405 Q208,380 212,355 Q216,330 225,310Z" />
                  <path d="M455,115 Q475,108 500,110 Q525,112 545,125 Q560,138 555,155 Q550,170 535,175 Q520,180 505,178 Q490,176 478,168 Q466,160 458,145 Q452,130 455,115Z" />
                  <path d="M465,195 Q490,188 515,195 Q540,205 550,230 Q560,260 555,295 Q550,330 540,360 Q530,385 515,395 Q500,405 488,398 Q476,390 470,370 Q464,345 460,320 Q456,290 458,260 Q460,230 465,195Z" />
                  <path d="M555,85 Q620,75 700,80 Q780,85 840,95 Q870,105 875,125 Q880,145 865,155 Q850,165 830,160 Q800,155 770,150 Q740,145 710,148 Q680,151 655,148 Q630,145 610,138 Q590,130 575,118 Q562,105 555,85Z" />
                  <path d="M680,175 Q710,168 740,175 Q765,185 775,205 Q785,228 775,250 Q765,270 748,275 Q730,280 715,272 Q700,264 690,248 Q682,230 678,210 Q675,190 680,175Z" />
                  <path d="M800,385 Q830,378 860,385 Q885,395 890,415 Q895,435 880,448 Q865,460 845,458 Q825,456 810,445 Q798,434 795,415 Q793,398 800,385Z" />
                </g>

                {/* Latitude / longitude lines - subtle */}
                <g stroke="white" strokeWidth="0.3" opacity="0.08">
                  <line x1="0" y1="156" x2="1000" y2="156" />
                  <line x1="0" y1="312" x2="1000" y2="312" />
                  <line x1="0" y1="468" x2="1000" y2="468" />
                  <line x1="250" y1="0" x2="250" y2="625" />
                  <line x1="500" y1="0" x2="500" y2="625" />
                  <line x1="750" y1="0" x2="750" y2="625" />
                </g>

                {/* Connection arcs from China HQ */}
                {regions.filter(r => !r.isHQ).map((region, i) => {
                  const hqX = 710;
                  const hqY = 250;
                  const targetX = parseInt(region.x) * 10;
                  const targetY = parseInt(region.y) * 6.25;
                  const midX = (hqX + targetX) / 2;
                  const midY = Math.min(hqY, targetY) - 70;
                  return (
                    <path
                      key={i}
                      d={`M${hqX},${hqY} Q${midX},${midY} ${targetX},${targetY}`}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1.2"
                      opacity="0.35"
                      strokeDasharray="8,8"
                      filter="url(#softGlow)"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="16"
                        to="0"
                        dur={`${2.5 + i * 0.4}s`}
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
                        <div className="absolute -inset-2 rounded-full bg-blue-500/10 animate-pulse" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-10 whitespace-nowrap">
                        <span className="text-white text-sm font-bold drop-shadow-lg bg-primary/50 px-2 py-0.5 rounded">{region.name}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative">
                        <div className="w-3.5 h-3.5 bg-gradient-to-br from-blue-400 to-accent rounded-full shadow-lg shadow-accent/40" />
                        <div className="absolute inset-0 w-3.5 h-3.5 bg-accent rounded-full animate-ping opacity-40" />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-5 whitespace-nowrap">
                        <span className="text-white/80 text-xs font-medium drop-shadow">{region.name}</span>
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
              {/* Corner brackets */}
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
