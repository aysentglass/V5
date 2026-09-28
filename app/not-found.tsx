import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Page Not Found | AYSENT',
  description: 'The page you are looking for does not exist. Return to the AYSENT PDLC smart film homepage.',
  alternates: { canonical: '/404' },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto pt-20">
          <h1 className="text-8xl lg:text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-white/60 text-lg mb-10">
            The page you are looking for may have been moved, renamed, or does not exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Browse Blog
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
