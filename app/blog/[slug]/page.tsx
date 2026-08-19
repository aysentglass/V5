import { blogPosts, type BlogPost } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

function renderMarkdown(content: string): string {
  let html = content;
  // Tables
  html = html.replace(/\|.*\n\|.*\n((?:\|.*\n)+)/g, (match) => {
    const lines = match.trim().split('\n').filter((l) => l.includes('|'));
    if (lines.length < 2) return match;
    const headers = lines[0].split('|').filter((c) => c.trim()).map((c) => c.trim());
    const rows = lines.slice(2).map((r) => r.split('|').filter((c) => c.trim()).map((c) => c.trim()));
    let table = '<table><thead><tr>';
    headers.forEach((h) => (table += `<th>${h}</th>`));
    table += '</tr></thead><tbody>';
    rows.forEach((row) => {
      table += '<tr>';
      row.forEach((cell) => (table += `<td>${cell}</td>`));
      table += '</tr>';
    });
    table += '</tbody></table>';
    return table;
  });
  // Headings
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Unordered lists
  html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
  // Ordered lists
  html = html.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
  // Paragraphs (lines not starting with <)
  html = html.replace(/^(?!<[hul]|<t|<p|<li)(.+)$/gm, '<p>$1</p>');
  return html;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={post.image} alt="" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/blog" className="inline-flex items-center text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent-light rounded-full text-xs font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 lg:p-10 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <h3 className="text-2xl font-bold text-primary mb-3">Ready for Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Get free samples and a custom quote from AYSENT, your trusted PDLC smart film manufacturer.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-colors"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Prev/Next */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="p-5 border border-gray-200 rounded-xl hover:border-accent/30 hover:shadow-md transition-all group">
                <span className="text-xs text-gray-400">Previous</span>
                <p className="font-semibold text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">{prevPost.title}</p>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="p-5 border border-gray-200 rounded-xl hover:border-accent/30 hover:shadow-md transition-all group text-right">
                <span className="text-xs text-gray-400">Next</span>
                <p className="font-semibold text-primary mt-1 group-hover:text-accent transition-colors line-clamp-2">{nextPost.title}</p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
