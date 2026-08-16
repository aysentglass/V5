'use client';

import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { Globe, TrendingUp, MapPin } from 'lucide-react';

const regions = [
  { name: 'North America', countries: 'USA, Canada, Mexico', flag: '🇺🇸' },
  { name: 'Europe', countries: 'UK, Germany, France, Italy, Spain', flag: '🇪🇺' },
  { name: 'Middle East', countries: 'UAE, Saudi Arabia, Qatar, Kuwait', flag: '🇦🇪' },
  { name: 'Southeast Asia', countries: 'Singapore, Malaysia, Thailand, Vietnam', flag: '🇸🇬' },
  { name: 'Oceania', countries: 'Australia, New Zealand', flag: '🇦🇺' },
  { name: 'Africa', countries: 'South Africa, Nigeria, Egypt', flag: '🇿🇦' },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function GlobalReach() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0B1F3A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Global Presence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Trusted Across
              <br />
              <span className="text-gray-400">50+ Countries Worldwide</span>
            </h2>
            <p className="text-lg text-gray-600">
              From North America to the Middle East, our PDLC smart film solutions power
              premium commercial and residential projects on six continents.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Globe, value: 50, suffix: '+', label: 'Countries Served' },
            { icon: TrendingUp, value: 1000000, suffix: '+', label: 'Sqm Produced' },
            { icon: MapPin, value: 500, suffix: '+', label: 'Global Projects' },
            { icon: Globe, value: 10, suffix: '+', label: 'Years Exporting' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 4) * 100}>
              <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Regions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {regions.map((region, i) => (
            <Reveal key={region.name} delay={(i % 6) * 80}>
              <div className="p-5 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {region.flag}
                </div>
                <div className="font-semibold text-primary text-sm mb-1">{region.name}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{region.countries}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
