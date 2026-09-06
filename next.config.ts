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
  // `/cdn-cgi/image/` resizing only works when a request is proxied through
  // a Cloudflare zone with Image Transformations enabled — not on the
  // *.workers.dev preview subdomain, and this static export ships one build
  // to both, with no way to tell them apart at build time. Serving the
  // original asset unoptimized works everywhere; a custom `/cdn-cgi/image/`
  // loader broke every image on the preview URL (404s, since that path
  // isn't intercepted there at all).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
