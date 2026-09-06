import type { ImageLoaderProps } from 'next/image';

// Cloudflare Image Transformations loader for `next/image` under a static
// export. Serves images through Cloudflare's URL-based resizing at
// /cdn-cgi/image/... — only works once the zone has Image Transformations
// enabled (dashboard: Images > Transformations > enable for zone) and the
// site is actually served through Cloudflare. Falls back to the original
// asset if a transform ever fails, via onerror=redirect.
export default function cloudflareImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // Cloudflare Image Transformations does not accept SVG as an input format
  // and errors on it; serve vector assets untouched instead of 404ing.
  if (src.endsWith('.svg')) {
    return src;
  }
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto', 'onerror=redirect'];
  return `/cdn-cgi/image/${params.join(',')}${src}`;
}
