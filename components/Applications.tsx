import Image from 'next/image';
import Reveal from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const applications = [
  {
    title: 'Corporate Offices',
    desc: 'Smart glass partitions for meeting rooms and executive offices. Instant privacy on demand.',
    image: '/images/application-office.jpg',
  },
  {
    title: 'Hotels & Hospitality',
    desc: 'Bathroom privacy glass, lobby partitions and premium guest room experiences.',
    image: '/images/application-hotel.jpg',
  },
  {
    title: 'Luxury Residential',
    desc: 'Floor-to-ceiling smart windows, bathroom privacy and home theater environments.',
    image: '/images/application-residential.jpg',
  },
  {
    title: 'Retail & Commercial',
    desc: 'Storefront display windows, changing rooms and showroom privacy solutions.',
    image: '/images/application-retail.jpg',
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
                Applications
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                Where Smart Film
                <br />
                <span className="text-gray-400">Makes a Difference</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 lg:max-w-md">
              From corporate headquarters to luxury residences, our smart film solutions
              enhance privacy, energy efficiency and architectural design.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {applications.map((app, index) => (
            <Reveal
              key={app.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={(index % 2) * 150}
            >
              <div className="group relative rounded-2xl overflow-hidden bg-primary h-80 lg:h-96 cursor-pointer img-zoom-container">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:translate-y-0 transition-transform duration-500">
                    {app.title}
                  </h3>
                  <p className="text-white/70 mb-4 max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {app.desc}
                  </p>
                  <div className="flex items-center text-accent-light font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
