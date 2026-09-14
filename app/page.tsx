import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import Trust from '@/components/Trust';
import ProductGrid from '@/components/ProductGrid';
import TechSpecs from '@/components/TechSpecs';
import Applications from '@/components/Applications';
import Services from '@/components/Services';
import GlobalReach from '@/components/GlobalReach';
import MarketDistribution from '@/components/MarketDistribution';
import Factory from '@/components/Factory';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import { ProductSchema, FAQSchema, BreadcrumbSchema } from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      {/* Page-specific JSON-LD */}
      <ProductSchema />
      <FAQSchema />
      <BreadcrumbSchema />
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <Trust />
        <ProductGrid />
        <TechSpecs />
        <Applications />
        <Services />
        <GlobalReach />
        <MarketDistribution />
        <Factory />
        <BlogSection />
        <FAQ />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
