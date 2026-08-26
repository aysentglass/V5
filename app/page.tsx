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
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
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
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

