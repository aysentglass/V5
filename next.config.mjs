/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 31536000,
  },
  // Optimize font loading
  optimizeFonts: true,
  // Reduce JavaScript size
  productionBrowserSourceMaps: false,
  // Compress more aggressively
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
