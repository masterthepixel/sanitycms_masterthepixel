#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SITE = 'https://www.masterthepixel.io';
const outputDir = path.join(process.cwd(), 'public', 'uploads', 'production');
const assetMapPath = path.join(process.cwd(), 'data', 'asset-map.json');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function extractImageUrls(html) {
  const urls = new Set();
  // <img src="...">
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = imgRegex.exec(html)) !== null) urls.add(m[1]);
  // CSS background-image: url("...")
  const bgRegex = /background-image:\s*url\(["']?([^\)"']+)["']?\)/gi;
  while ((m = bgRegex.exec(html)) !== null) urls.add(m[1]);
  // inline style="background-image: url('/path')"
  const styleRegex = /style=["'][^"']*url\(([^)]+)\)[^"']*["']/gi;
  while ((m = styleRegex.exec(html)) !== null) urls.add(m[1]);
  return Array.from(urls).filter(Boolean).map(u => u.trim());
}

function downloadUrl(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const dir = path.dirname(dest);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
    }).on('error', reject);
  });
}

(async () => {
  try {
    // Build list of pages from local MDX files
    const pagesDir = path.join(process.cwd(), 'content', 'pages');
    const postsDir = path.join(process.cwd(), 'content', 'posts');

    const pageFiles = fs.existsSync(pagesDir) ? fs.readdirSync(pagesDir).filter(f => f.endsWith('.mdx')) : [];
    const postFiles = fs.existsSync(postsDir) ? fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx')) : [];

    const pagePaths = pageFiles.map(f => {
      const slug = f.replace(/\.mdx$/, '');
      return slug === 'home' ? '/' : `/${slug}`;
    });

    const postPaths = postFiles.map(f => `/blog/${f.replace(/\.mdx$/, '')}`);

    const urls = ['/', ...pagePaths.filter(p => p !== '/'), ...postPaths];

    const assetMap = fs.existsSync(assetMapPath) ? JSON.parse(fs.readFileSync(assetMapPath, 'utf8')) : {};

    for (const pagePath of urls) {
      const url = SITE.replace(/\/$/, '') + (pagePath === '/' ? '/' : pagePath);
      console.log('Fetching', url);
      let html;
      try {
        html = await fetchHtml(url);
      } catch (err) {
        console.warn('Failed to fetch', url, err.message);
        continue;
      }

      const imgs = extractImageUrls(html);
      if (imgs.length === 0) continue;

      const slug = (pagePath === '/') ? 'home' : pagePath.replace(/^\//, '').replace(/\//g, '-');
      for (const img of imgs) {
        let src = img;
        if (src.startsWith('//')) src = 'https:' + src;
        if (src.startsWith('/')) src = SITE.replace(/\/$/, '') + src;
        if (!/^https?:\/\//i.test(src)) continue;

        const parsed = new URL(src);
        const baseName = path.basename(parsed.pathname.split('?')[0]);
        const outDir = path.join(outputDir, slug);
        const outPath = path.join(outDir, baseName);
        const publicPath = `/uploads/production/${slug}/${baseName}`;

        if (fs.existsSync(outPath)) {
          console.log('Already have', publicPath);
          assetMap[src] = publicPath;
          continue;
        }

        try {
          await downloadUrl(src, outPath);
          console.log('Downloaded', src, '->', publicPath);
          assetMap[src] = publicPath;
        } catch (err) {
          console.warn('Failed to download', src, err.message);
        }
      }
    }

    // Save asset map
    fs.mkdirSync(path.dirname(assetMapPath), { recursive: true });
    fs.writeFileSync(assetMapPath, JSON.stringify(assetMap, null, 2));
    console.log('\nSaved asset map to', assetMapPath);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();
