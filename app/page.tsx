import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import ProductGrid from '@/components/ProductGrid';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <ProductGrid />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
