import { blogPosts } from '@/data/blog-posts';

/**
 * JSON-LD Structured Data for SEO + GEO (Generative Engine Optimization)
 * Helps Google, Bing, Yandex and AI engines (ChatGPT, Perplexity, Copilot)
 * understand site entities, products and content.
 */
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AYSENT',
    alternateName: 'AYSENT Smart Film',
    url: 'https://www.aysentsmartfilm.com',
    logo: 'https://www.aysentsmartfilm.com/images/logo.png',
    description:
      'AYSENT is a leading PDLC smart film manufacturer and switchable glass supplier in China, providing premium smart glass solutions for offices, hotels, retail and residential projects worldwide.',
    foundingDate: '2014',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '50-200' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Headquarters Building of Huantou Center, No. 1728, Shanguo South Road, Jinghe Sub-district',
      addressLocality: 'Tengzhou City',
      addressRegion: 'Shandong Province',
      addressCountry: 'CN',
      postalCode: '277500',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-15163206207',
      contactType: 'sales',
      email: 'aaronliu@aysentglass.com',
      availableLanguage: ['English', 'Chinese'],
    },
    sameAs: [
      'https://www.aysentsmartfilm.com',
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AYSENT Smart Film Factory',
    image: 'https://www.aysentsmartfilm.com/images/factory-building.jpg',
    url: 'https://www.aysentsmartfilm.com',
    telephone: '+86-15163206207',
    email: 'aaronliu@aysentglass.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Headquarters Building of Huantou Center, No. 1728, Shanguo South Road, Jinghe Sub-district',
      addressLocality: 'Tengzhou City, Zaozhuang City',
      addressRegion: 'Shandong Province',
      addressCountry: 'CN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.09,
      longitude: 117.16,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '18:00',
    },
    priceRange: '$$',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'AYSENT PDLC Smart Film',
    image: [
      'https://www.aysentsmartfilm.com/images/product-film.jpg',
      'https://www.aysentsmartfilm.com/images/product-glass.jpg',
    ],
    description:
      'PDLC (Polymer Dispersed Liquid Crystal) smart film that switches glass from transparent to frosted in milliseconds. Available in self-adhesive film and laminated smart glass. Max width 2.1m, custom sizes, FCC certified.',
    brand: { '@type': 'Brand', name: 'AYSENT' },
    manufacturer: { '@type': 'Organization', name: 'AYSENT' },
    category: 'Smart Glass / PDLC Film',
    model: 'AYSENT-PDLC-Series',
    offers: {
      '@type': 'AggregateOffer',
      url: 'https://www.aysentsmartfilm.com/#contact',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      description: 'Factory-direct pricing, custom sizing, global shipping. Price per square meter varies by film type and quantity. Contact for exact quote.',
      lowPrice: '25',
      highPrice: '80',
      offerCount: '500',
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          priceCurrency: 'USD',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 7, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 5, maxValue: 15, unitCode: 'DAY' },
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'Worldwide',
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'Worldwide',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/ReturnFeesCustomerResponsibility',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120',
      bestRating: '5',
      worstRating: '1',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Switching Time', value: '<0.5 seconds' },
      { '@type': 'PropertyValue', name: 'Operating Voltage', value: '48V-65V AC' },
      { '@type': 'PropertyValue', name: 'Power Consumption', value: '~5W/m²' },
      { '@type': 'PropertyValue', name: 'Lifespan', value: '>50,000 hours' },
      { '@type': 'PropertyValue', name: 'Max Width', value: '2.1m' },
      { '@type': 'PropertyValue', name: 'Certification', value: 'FCC, CE' },
      { '@type': 'PropertyValue', name: 'Warranty', value: '5 years' },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is PDLC smart film?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDLC (Polymer Dispersed Liquid Crystal) smart film is a laminated film that switches glass between transparent and frosted states. When power is on, liquid crystals align and the glass becomes transparent; when power is off, crystals scatter light and the glass turns opaque frosted white for privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does PDLC smart glass switch from transparent to opaque?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PDLC smart glass operates on electrical voltage. In the powered (ON) state, liquid crystal molecules align uniformly, allowing light to pass through for full transparency. In the unpowered (OFF) state, molecules scatter randomly, creating a frosted opaque appearance that blocks visibility while still transmitting light.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the maximum width of PDLC smart film?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AYSENT PDLC smart film is available in widths up to 2.1 meters (2100mm), which is among the widest in the industry. Custom lengths are available for both sheet and roll formats to suit large-scale architectural projects.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does PDLC smart film last?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AYSENT PDLC smart film has a rated lifespan of over 50,000 hours of continuous operation. With normal office usage patterns, this translates to 15+ years of reliable service. We provide a 5-year global warranty on all products.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can PDLC film be applied to existing glass?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. AYSENT offers self-adhesive PDLC smart film that can be applied directly to existing glass surfaces without replacement. This is ideal for retrofit projects in offices, hotels, and residential spaces. Professional installation is recommended for best results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What certifications does AYSENT PDLC film have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AYSENT PDLC smart film and smart glass products are FCC certified and CE certified, meeting international safety and electromagnetic compatibility standards for global markets including North America, Europe, Middle East and Southeast Asia.',
        },
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

export function BreadcrumbSchema() {
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
        name: 'Blog',
        item: 'https://www.aysentsmartfilm.com/blog',
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

export function BlogPostingSchema() {
  const articles = blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'AYSENT' },
    publisher: {
      '@type': 'Organization',
      name: 'AYSENT',
      logo: { '@type': 'ImageObject', url: 'https://www.aysentsmartfilm.com/images/logo.png' },
    },
    mainEntityOfPage: `https://www.aysentsmartfilm.com/blog/${post.slug}`,
    image: `https://www.aysentsmartfilm.com${post.image}`,
    articleSection: post.category,
  }));
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': articles }) }}
    />
  );
}
