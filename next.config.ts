import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  devIndicators: {
    appIsrStatus: false,
  },
  env: {
    PORT: process.env.PORT || '3000',
  },
  images: {
    domains: ['creativerez.xyz', 'liquidmetal-production.up.railway.app'],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3600'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
