#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(process.cwd(), 'content', 'pages');
const files = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.mdx'));
let edited = 0;
for (const f of files) {
  const p = path.join(pagesDir, f);
  let src = fs.readFileSync(p, 'utf8');
  const original = src;

  // Remove fenced ```json blocks that contain a top-level "_type" field
  src = src.replace(/```json[\s\S]*?```/g, (match) => {
    if (/"_type"\s*:\s*"[A-Za-z0-9_-]+"/.test(match)) {
      return '';
    }
    return match;
  });

  // Trim accidental consecutive newlines after removals
  src = src.replace(/\n{3,}/g, '\n\n');

  if (src !== original) {
    fs.writeFileSync(p, src, 'utf8');
    console.log('Cleaned fences in', f);
    edited++;
  }
}
console.log('Total files cleaned:', edited);
