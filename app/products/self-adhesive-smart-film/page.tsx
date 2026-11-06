import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import Reveal from '@/components/Reveal';
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Gauge,
  Maximize2,
  Clock,
  Check,
  ChevronDown,
} from 'lucide-react';

const PRODUCT_URL = 'https://www.aysentsmartfilm.com/products/self-adhesive-smart-film';
const PRODUCT_IMAGE = '/images/product-self-adhesive.jpg';

export const metadata: Metadata = {
  title: 'Self-Adhesive PDLC Smart Film for Retrofit',
  description:
    'Self-adhesive PDLC smart film switches existing glass from clear to frosted. Retrofit switchable film for offices, hotels, retail and homes. Get a quote.',
  alternates: {
    canonical: '/products/self-adhesive-smart-film',
  },
  openGraph: {
    title: 'Self-Adhesive PDLC Smart Film for Retrofit',
    description:
      'Self-adhesive PDLC smart film switches existing glass from clear to frosted. A retrofit switchable film for existing glass.',
    url: PRODUCT_URL,
    type: 'website',
    images: [
      {
        url: PRODUCT_IMAGE,
        width: 2048,
        height: 1152,
        alt: 'Self-Adhesive PDLC Smart Film',
      },
    ],
  },
};

const specs = [
  {
    icon: Clock,
    label: 'Switching Time',
    value: 'Milliseconds',
    detail: 'Clear to frosted and back on demand',
  },
  {
    icon: Zap,
    label: 'Operating Voltage',
    value: '48–65V AC',
    detail: 'Low-voltage operation via a controller',
  },
  {
    icon: Gauge,
    label: 'Power Consumption',
    value: '~5W/m²',
    detail: 'Low power draw in the powered state',
  },
  {
    icon: Maximize2,
    label: 'Maximum Width',
    value: '2.1m',
    detail: 'Made to measure for large panels',
  },
];

const useCases = [
  'Meeting rooms and executive offices',
  'Hotel bathrooms and lobby partitions',
  'Retail storefronts and changing rooms',
  'Residential windows and bathrooms',
  'Healthcare screening and privacy areas',
  'Existing glass partitions and doors',
];

const faqs = [
  {
    q: 'Can self-adhesive smart film be applied to existing glass?',
    a: 'Yes. The self-adhesive format is designed for retrofit projects and bonds directly to existing glass surfaces, so the glass does not need to be removed or replaced. It is suitable for upgrading partitions, windows and doors already in place.',
  },
  {
    q: 'What is the difference between self-adhesive film and laminated smart glass?',
    a: 'Self-adhesive film is a flexible layer applied onto existing glass and is suited to retrofit projects. Laminated smart glass is a finished panel with the film sealed between two glass layers, generally used in new construction. The choice depends on whether the project is a retrofit or a new build.',
  },
  {
    q: 'Does the film provide privacy in the frosted state?',
    a: 'Yes. In the unpowered state the film scatters light and appears frosted, blocking clear visibility through the glass while still allowing light to pass through. In the powered state it becomes transparent.',
  },
  {
    q: 'How do I get the correct size and a quote?',
    a: 'The film is supplied made to measure, with a maximum width of 2.1m. Send your glass dimensions and project details through the contact form and the technical team will advise on sizing and provide a quote.',
  },
];

function ProductJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Self-Adhesive PDLC Smart Film',
    image: `https://www.aysentsmartfilm.com${PRODUCT_IMAGE}`,
    description:
      'Self-adhesive PDLC smart film that switches existing glass from transparent to frosted in milliseconds. A retrofit switchable film applied directly to glass, with a maximum width of 2.1m.',
    brand: { '@type': 'Brand', name: 'AYSENT' },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://www.aysentsmartfilm.com/#organization',
      name: 'AYSENT',
    },
    category: 'Smart Glass / PDLC Film',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Switching Time', value: 'Milliseconds' },
      { '@type': 'PropertyValue', name: 'Operating Voltage', value: '48V-65V AC' },
      { '@type': 'PropertyValue', name: 'Power Consumption', value: '~5W/m²' },
      { '@type': 'PropertyValue', name: 'Max Width', value: '2.1m' },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BreadcrumbJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.aysentsmartfilm.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://www.aysentsmartfilm.com/#products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Self-Adhesive PDLC Smart Film',
        item: PRODUCT_URL,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function SelfAdhesiveProductPage() {
  return (
    <>
      <ProductJsonLd />
      <BreadcrumbJsonLd />
      <FaqJsonLd />
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={PRODUCT_IMAGE}
              alt="Self-adhesive PDLC smart film applied to glass"
              fill
              sizes="100vw"
              className="object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">
            <Link
              href="/#products"
              className="inline-flex items-center text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
            <span className="inline-block px-3 py-1 bg-accent/20 text-accent-light rounded-full text-xs font-semibold mb-4">
              Retrofit Switchable Film
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Self-Adhesive PDLC Smart Film
            </h1>
            <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
              Switch existing glass from clear to frosted in milliseconds without replacing it.
              A self-adhesive smart film built for retrofit projects across offices, hotels,
              retail and residential spaces.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-5">
                What Is Self-Adhesive PDLC Smart Film?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Self-adhesive PDLC smart film is a switchable film that bonds directly to glass
                already in place. It contains a polymer-dispersed liquid-crystal layer controlled
                by an electrical field. When powered, the glass is transparent; when unpowered,
                it turns frosted for privacy. Because it works on existing glass, it is the
                practical choice where replacing panels would be disruptive or unnecessary.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                For a full explanation of the underlying technology, see our introduction to{' '}
                <Link
                  href="/blog/what-is-pdlc-smart-film"
                  className="text-accent hover:underline"
                >
                  what PDLC smart film is
                </Link>
                .
              </p>
            </Reveal>

            <Reveal>
              <h3 className="text-xl font-bold text-primary mb-4">
                Self-Adhesive Film vs. Laminated Smart Glass
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                The two formats share the same switching principle but fit different project
                stages. Self-adhesive film is applied to existing glass and is suited to
                retrofits. Laminated smart glass is a finished, factory-assembled panel used in
                new construction. Our{' '}
                <Link
                  href="/blog/pdlc-film-vs-smart-glass"
                  className="text-accent hover:underline"
                >
                  smart film versus smart glass comparison
                </Link>{' '}
                explains the trade-offs in detail.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-5">
                Where It Is Used
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {useCases.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                These settings mirror the wider range of{' '}
                <Link
                  href="/blog/top-applications-switchable-glass"
                  className="text-accent hover:underline"
                >
                  switchable glass applications
                </Link>{' '}
                covered in our technical resources.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-5">
                Key Specifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-6 border border-gray-200 rounded-2xl hover:border-accent/30 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <spec.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-xl font-bold text-primary mb-1">{spec.value}</div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">{spec.label}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{spec.detail}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-5">
                Why Choose the Self-Adhesive Format
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The format preserves the glass you already have and avoids the cost and
                disruption of removing panels. It is flexible across retrofit layouts and can be
                supplied made to measure for large surfaces. If you are comparing options for a
                project, our{' '}
                <Link
                  href="/blog/pdlc-film-selection-guide"
                  className="text-accent hover:underline"
                >
                  PDLC film selection guide
                </Link>{' '}
                sets out the decisions that matter.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Once installed, the surface is cared for with a simple routine. Our{' '}
                <Link
                  href="/blog/pdlc-smart-film-maintenance-guide"
                  className="text-accent hover:underline"
                >
                  cleaning and long-term care guide
                </Link>{' '}
                covers safe agents and procedure.
              </p>
            </Reveal>

            {/* FAQ */}
            <Reveal>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 mb-12">
                {faqs.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-gray-100 transition-colors">
                      <span className="font-semibold text-primary pr-4">{item.q}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
                  </details>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <div className="p-8 lg:p-10 bg-primary rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-white mb-3">
                Request a Quote for Your Project
              </h2>
              <p className="text-white/75 mb-6 leading-relaxed">
                Share your glass dimensions and project details and our technical team will
                advise on sizing and supply for your retrofit.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-colors"
              >
                Get a Project Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <QuoteForm />
      <Footer />
    </>
  );
}
