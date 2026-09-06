import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  // Next 16 auto-generates AGENTS.md/CLAUDE.md on `next dev`; not wanted in this repo.
  agentRules: false,
  // Cloudflare Workers Static Assets deploy: a plain static export served
  // directly by the Worker's asset handler, no Worker script needed for
  // rendering. `redirects()`/`rewrites()`/`headers()` are not supported
  // with `output: "export"` — the one prior redirect (`/test-redirect` ->
  // `/new-redirect-path`) was placeholder test data, not a real route, and
  // has been dropped rather than ported to public/_redirects.
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/cf-image-loader.ts',
  },
};

export default nextConfig;
