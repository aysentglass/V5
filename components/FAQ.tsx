'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqCategories = [
  {
    title: 'Product Basics',
    questions: [
      {
        q: 'What is PDLC smart film and how does it work?',
        a: 'PDLC (Polymer Dispersed Liquid Crystal) smart film switches glass between transparent and frosted instantly with power. Power ON → liquid crystal molecules align → light passes through → transparent. Power OFF → molecules scatter → light blocked → frosted/private. No blinds, no curtains — instant privacy control at the touch of a button.',
      },
      {
        q: 'Self-adhesive film vs. laminated film — which should I choose?',
        a: 'Self-adhesive film sticks directly to existing glass — ideal for retrofits and existing buildings, easy DIY installation, lower cost. Laminated film is sandwiched between two glass layers at the factory — best for new construction or glass replacement, fully sealed for superior durability. Already have glass? Go self-adhesive. Doing new glass work? Go laminated.',
      },
      {
        q: 'Why choose PDLC film instead of frosted glass or blinds?',
        a: 'PDLC film is the only solution that offers switchable transparency — frosted glass is permanently opaque, and blinds require manual operation with dust accumulation and mechanical parts that break. PDLC film supports smart app/voice/sensor control, doubles as a projection screen, and delivers a premium modern aesthetic with zero maintenance.',
      },
    ],
  },
  {
    title: 'Grades & Parameters',
    questions: [
      {
        q: 'What clarity grades do you offer? Which is right for me?',
        a: 'We offer three grades: T6 HD Standard (~85% transmittance, 140° angle) for budget projects; T7 HD Pro (92% transmittance, 165° angle, <2.5% haze) — our best seller, perfect balance of clarity and price for offices, hotels and retail; T8 Ultra HD (97% transmittance, 170° angle, <2% haze) for high-end projects, museums and luxury spaces. Most customers choose T7.',
      },
      {
        q: 'What are the key quality parameters to compare?',
        a: 'Focus on five critical parameters: (1) Light transmittance — premium films should be 85%+; (2) Haze — lower is sharper, high-end achieves <2%; (3) Viewing angle — top films reach 165°; (4) Temperature resistance — quality films handle -30°C to 90°C; (5) Service life — premium imported base lasts 15+ years vs. 3-5 years for low-end. Cheaper films may yellow, bubble or fail within years.',
      },
      {
        q: 'Is PDLC film expensive to run? What is the power consumption?',
        a: 'PDLC film is extremely energy-efficient at ~3.2W per m² (lab tested). Example: 10 m² × 10 hours/day × 30 days = only 9.6 kWh/month — less than a single LED light bulb. You can leave it transparent 24/7 without worrying about your electric bill.',
      },
    ],
  },
  {
    title: 'Installation & Usage',
    questions: [
      {
        q: 'Can I install PDLC film myself?',
        a: 'Yes — self-adhesive sheet film installation is straightforward: clean glass thoroughly, peel the protective backing, apply film and squeegee out bubbles, connect bus bar wires to the transformer, then plug in and test. We provide step-by-step installation videos, one-on-one remote technical support, and detailed English manuals. For areas under 10 m², DIY is totally doable.',
      },
      {
        q: 'What transformer do I need? Is it included?',
        a: 'Transformers are matched to your order and included at no extra cost. Sizing rule: 10W per square meter of film. Input voltage is safe low voltage (48V-60V), customized for your local power (110V or 220V). CE/RoHS certified for safety. Just tell us your total film area and local voltage — we include everything you need.',
      },
      {
        q: 'Can PDLC film be used in bathrooms or outdoors?',
        a: 'Yes. For bathrooms, apply film to the dry side of the glass and seal all four edges with pH-neutral silicone sealant to prevent moisture. For outdoor use, our film is rated -20°C to 85°C (tested to -35°C to -40°C cold resistance) — all edges must be silicone-sealed. For direct water exposure, we recommend laminated switchable glass for maximum durability.',
      },
    ],
  },
  {
    title: 'Buying & After-Sales',
    questions: [
      {
        q: 'Roll film vs. sheet film — which is better for me?',
        a: 'Roll film (full uncut roll, MOQ 30 m²) is for glass factories and window manufacturers with in-house processing capability — lower unit price but requires cutting and bus bar installation. Sheet film (pre-cut to your exact sizes, bus bars pre-installed, MOQ 1 m²) is for resellers, installers and end users — zero waste, ready to install. Can you process glass? Roll saves money. Just need to install? Sheet saves time.',
      },
      {
        q: 'Can I get samples before ordering?',
        a: 'Absolutely. Our professional sample kit (~USD 30, fully refundable on your first formal order) includes A4-size samples of all 3 grades (T6/T7/T8), a mini controller/power adapter, installation tool sample, and product catalog. Shipped within 3 days. Contact our sales team, pay the sample fee, test and confirm, then place your bulk order.',
      },
      {
        q: "What is the warranty and how long does the film last?",
        a: 'We offer a 5-Year Global Warranty — one of the best in the industry (most suppliers offer only 1-2 years). It covers switching failure, bubbling/delamination, and yellowing under normal use. Plus lifetime free technical support. Our T7 and T8 grades use imported optical-grade Mitsubishi PET base materials with stable liquid crystal formulas — built to last 15+ years under normal use.',
      },
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const allQuestions = faqCategories.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.title }))
  );

  return (
    <section id="faq" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Frequently Asked
              <br />
              <span className="text-gray-400">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about PDLC smart film — from how it works to installation,
              grades, warranty and ordering. Can't find your answer? Contact our team.
            </p>
          </div>
        </Reveal>

        <div className="space-y-3">
          {allQuestions.map((item, index) => (
            <Reveal key={index} delay={(index % 4) * 60}>
              <div
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-accent/30 shadow-lg shadow-accent/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex items-start gap-4 pr-4">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                        openIndex === index
                          ? 'bg-accent text-white'
                          : 'bg-gray-100 text-gray-500 group-hover:bg-accent/10 group-hover:text-accent'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-base lg:text-lg font-semibold text-primary mt-0.5 leading-snug">
                        {item.q}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[4.5rem]">
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-12 p-8 bg-primary rounded-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-light rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <Sparkles className="w-8 h-8 text-accent-light mx-auto mb-4" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-white/85 mb-6 max-w-lg mx-auto">
                Our PDLC specialists are ready to help you choose the right solution for your project.
                Get a free quote within 24 hours.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
