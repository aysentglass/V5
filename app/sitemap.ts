import { blogPosts } from '@/data/blog-posts';

export default function sitemap() {
  const baseUrl = 'https://www.aysentsmartfilm.com';
  const staticUrls = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
  ];
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  return [...staticUrls, ...blogUrls];
}
