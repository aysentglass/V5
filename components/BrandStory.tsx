import Image from 'next/image';
import Reveal from './Reveal';
import { Award, Target, Users } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div>
              <span className="text-accent-light font-semibold text-sm uppercase tracking-[0.2em]">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-8 leading-tight">
                Engineering the Future
                <br />
                <span className="text-white/70">of Smart Glass</span>
              </h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Founded with a vision to transform ordinary glass into intelligent surfaces,
                AYSENT has grown into one of China&apos;s leading PDLC smart film manufacturers.
                Our 50,000㎡ facility combines advanced coating technology with rigorous quality
                control to deliver products that architects and designers trust.
              </p>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                We serve distributors, glass processors, and project contractors across 50+
                countries, offering competitive factory pricing, custom sizing, and dedicated
                technical support from sample to installation.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Target, value: '10+', label: 'Years in Business' },
                  { icon: Award, value: 'FCC', label: 'Certified Quality' },
                  { icon: Users, value: '200+', label: 'Team Members' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <item.icon className="w-8 h-8 text-accent-light mx-auto mb-2" />
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-xs text-white/75 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom-container relative h-[500px]">
                <Image
                  src="/images/brand-story-factory.jpg"
                  alt="AYSENT manufacturing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-2xl shadow-xl animate-float">
                <div className="text-4xl font-bold">50K</div>
                <div className="text-sm text-gray-500">Sq Meter Facility</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-accent text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">24h</div>
                <div className="text-sm text-white/80">Quote Response</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
