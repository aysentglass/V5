import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function BlogSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="max-w-2xl">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
                Insights & Guides
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
                From the AYSENT
                <br />
                <span className="text-gray-400">Knowledge Base</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 lg:max-w-md">
              Technical deep-dives, installation guides, and industry insights from
              a manufacturer with ten years of PDLC experience.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Reveal key={post.slug} direction="up" delay={index * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden img-zoom-container bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
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
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-accent text-sm font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 border-2 border-primary/20 text-primary font-semibold rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
