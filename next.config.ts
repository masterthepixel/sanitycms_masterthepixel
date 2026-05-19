import type { NextConfig } from 'next';
import redirects from './data/redirects.json';

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;