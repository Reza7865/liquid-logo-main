import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  devIndicators: {
    appIsrStatus: false,
  },
  env: {
    PORT: process.env.PORT || '3000',
  },
};

export default nextConfig;
