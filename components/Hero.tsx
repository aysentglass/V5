'use client';

import { ChevronDown, Play } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Preload video for faster display
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = '/videos/hero-bg.mp4';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const blockEvent = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <section id="home" className="relative h-[100dvh] min-h-[560px] sm:min-h-[700px] w-full overflow-hidden">
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
          // X5 kernel (Quark/QQ browser) anti-hijack attributes
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          x5-video-orientation="portrait"
          x5-playsinline="true"
          onLoadedData={() => setVideoLoaded(true)}
          onContextMenu={blockEvent}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster="/images/application-office.jpg"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Solid overlay to block browser video toolbar (Quark/X5) */}
        <div
          className="absolute inset-0 z-10 bg-black/[0.001]"
          onContextMenu={blockEvent}
          onTouchStart={blockEvent}
          onTouchEnd={blockEvent}
          onTouchMove={blockEvent}
        />
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
      <div className="relative z-10 h-full flex items-center pt-14 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl pt-6 lg:pt-0">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-5 sm:mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                Trusted by 500+ Global Projects
              </span>
            </div>

            {/* Main Title */}
            <h1
              className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6 animate-fade-in-up break-words"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              Transform Glass Into
              <br />
              <span className="gradient-text">Intelligent Privacy</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm sm:text-lg lg:text-xl text-white/70 max-w-xl sm:max-w-2xl mb-6 sm:mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
              Premium PDLC smart film manufacturer. Switch from transparent to frosted
              in milliseconds. Engineered for architects, designers and global enterprises.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up"
              style={{ animationDelay: '0.8s', opacity: 0 }}
            >
              <a
                href="#products"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Explore Products
                <ChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Request Factory Quote
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md sm:max-w-lg animate-fade-in-up"
              style={{ animationDelay: '1s', opacity: 0 }}
            >
              {[
                { value: '10+', label: 'Years' },
                { value: '50+', label: 'Countries' },
                { value: '1M+', label: 'Sqm' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on small screens to avoid overlap */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-float flex-col items-center">
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
