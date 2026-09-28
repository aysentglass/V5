import { blogPosts } from '@/data/blog-posts';

export default function sitemap() {
  const baseUrl = 'https://www.aysentsmartfilm.com';
  const lastUpdated = new Date('2026-09-28');
  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: lastUpdated },
    { url: `${baseUrl}/blog`, lastModified: lastUpdated },
  ];
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  return [...staticUrls, ...blogUrls];
}
