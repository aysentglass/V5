'use client';

import Reveal from './Reveal';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function OkkiForm() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <Reveal className="lg:col-span-2">
            <div>
              <span className="inline-flex items-center gap-2 text-accent-light font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Request a
                <br />
                <span className="text-accent-light">Factory Quote</span>
              </h2>
              <p className="text-lg text-white/75 mb-10 leading-relaxed">
                Tell us about your project. Our PDLC specialists will respond within 24 hours with
                pricing, samples and technical guidance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Email</div>
                    <a
                      href="mailto:aaronliu@aysentglass.com"
                      className="text-white font-medium hover:text-accent-light transition-colors"
                    >
                      aaronliu@aysentglass.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Phone / WhatsApp</div>
                    <a
                      href="https://wa.me/8615163206207"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-accent-light transition-colors"
                    >
                      +86-15163206207
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Factory Location</div>
                    <p className="text-white/75 text-sm leading-relaxed">
                      Huantou Center HQ, No.1728 Shanguo South Rd, Jinghe Sub-district, Tengzhou,
                      Zaozhuang, Shandong, China
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Okki Form iframe */}
          <Reveal delay={150} className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="relative w-full" style={{ minHeight: '600px' }}>
                <iframe
                  id="okki-form-105732795520471"
                  width="100%"
                  height="100%"
                  src="https://tfile.xiaoman.cn/okki-form/index.html#/?client_id=365757&site_id=33489&form_id=105732795520471"
                  frameBorder="0"
                  title="AYSENT Inquiry Form"
                  className="w-full rounded-xl"
                  style={{ minHeight: '600px', border: 'none' }}
                  allow="clipboard-write"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
