import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | PDLC Smart Film Insights & Guides',
  description: 'Expert articles on PDLC smart film technology, installation guides, buying tips, and application ideas from AYSENT, a leading smart film manufacturer.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-[0.2em]">
              AYSENT Blog
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
              Smart Film Insights
              <br />
              <span className="text-white/40">& Industry Guides</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Expert articles on PDLC technology, installation, applications, and buying guides
              from a leading smart film manufacturer with 10+ years of experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden img-zoom-container bg-gray-100">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" loading="lazy" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <span className="inline-flex items-center text-accent text-sm font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
