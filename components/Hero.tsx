'use client';

import { ChevronDown, Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="home" className="relative h-[100dvh] min-h-[600px] sm:min-h-[700px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-primary">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controlsList="nodownload noremoteplayback noplaybackrate nofullscreen"
          onLoadedData={() => setVideoLoaded(true)}
          onContextMenu={(e) => e.preventDefault()}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 pointer-events-none ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="/images/application-office.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Transparent overlay to block browser video toolbar */}
        <div className="absolute inset-0 z-10" onContextMenu={(e) => e.preventDefault()} />
        {/* Fallback image with Ken Burns */}
        {!videoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center ken-burns"
            style={{ backgroundImage: "url('/images/application-office.jpg')" }}
          />
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-16 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl pt-10 lg:pt-0">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Trusted by 500+ Global Projects
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up break-words"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              Transform Glass Into
              <br />
              <span className="gradient-text">Intelligent Privacy</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
              Premium PDLC smart film manufacturer. Switch from transparent to frosted
              in milliseconds. Engineered for architects, designers and global enterprises.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up"
              style={{ animationDelay: '0.8s', opacity: 0 }}
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Explore Products
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Request Factory Quote
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 max-w-lg animate-fade-in-up"
              style={{ animationDelay: '1s', opacity: 0 }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '50+', label: 'Countries Served' },
                { value: '1M+', label: 'Sqm Produced' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a href="#about" className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors">
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
