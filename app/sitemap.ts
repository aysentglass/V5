import { blogPosts } from '@/data/blog-posts';

// Extend this list as more product/application pages are added.
const productPaths = ['self-adhesive-smart-film'];

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
  const productUrls = productPaths.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
  }));
  return [...staticUrls, ...productUrls, ...blogUrls];
}
