import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import Trust from '@/components/Trust';
import ProductGrid from '@/components/ProductGrid';
import Applications from '@/components/Applications';
import Services from '@/components/Services';
import GlobalReach from '@/components/GlobalReach';
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
        <Applications />
        <Services />
        <GlobalReach />
        <Factory />
        <BlogSection />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
