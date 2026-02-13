#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const assetMapPath = path.join(process.cwd(), 'data', 'asset-map.json');
const contentDir = path.join(process.cwd(), 'content');

if (!fs.existsSync(assetMapPath)) {
  console.error('asset-map.json not found');
  process.exit(1);
}

const assetMap = JSON.parse(fs.readFileSync(assetMapPath, 'utf8'));
const cdnUrls = Object.keys(assetMap).filter(k => k.startsWith('http'));
if (cdnUrls.length === 0) {
  console.log('No CDN URLs in asset map');
  process.exit(0);
}

function walk(dir) {
  const results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) results.push(...walk(filePath));
    else results.push(filePath);
  });
  return results;
}

const files = walk(contentDir).filter(f => f.endsWith('.mdx') || f.endsWith('.json'));
let changed = 0;
for (const file of files) {
  let src = fs.readFileSync(file, 'utf8');
  let out = src;
  for (const url of cdnUrls) {
    const local = assetMap[url];
    if (!local) continue;
    // Replace full CDN URL and also encoded /_next/image wrappers
    out = out.split(url).join(local);
    const encoded = encodeURIComponent(url);
    out = out.split(`/ _next/image?url=${encoded}`.replace(/ /g, '')).join(local);
    // Replace next/image wrappers that include the URL as a query param
    out = out.replace(new RegExp(`/\\_next/image\?url=${encoded}[^\)\"\'\s]*`, 'g'), local);
  }
  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    changed++;
    console.log('Updated', file);
  }
}

console.log(`Files changed: ${changed}`);
