import type { NextConfig } from 'next';
import redirects from './data/redirects.json';

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  // Next 16 auto-generates AGENTS.md/CLAUDE.md on `next dev`; not wanted in this repo.
  agentRules: false,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;