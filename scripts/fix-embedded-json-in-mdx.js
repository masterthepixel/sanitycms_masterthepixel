#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const contentDir = path.join(process.cwd(), 'content');
const components = ['Hero','FeatureGrid','Services','Testimonial','Image','YouTube'];
const mdxFiles = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith('.mdx')) mdxFiles.push(p);
  }
}

walk(contentDir);
let edits = 0;
for (const file of mdxFiles) {
  let src = fs.readFileSync(file, 'utf8');
  let out = src;

  for (const comp of components) {
    // Find start of a broken JSX (<Comp block={{) and the subsequent fenced JSON and closing braces
    const startPattern = new RegExp(`<${comp}\\s+block=\\{{`, 'g');
    let m;
    while ((m = startPattern.exec(out)) !== null) {
      const startIdx = m.index;
      // Find the next ```json after startIdx
      const fenceIdx = out.indexOf('```json', startIdx);
      const closeFenceIdx = fenceIdx >= 0 ? out.indexOf('```', fenceIdx + 7) : -1;
      const closeTagIdx = out.indexOf('}} />', closeFenceIdx + 3);
      if (fenceIdx === -1 || closeFenceIdx === -1 || closeTagIdx === -1) continue;

      const jsonText = out.slice(fenceIdx + 7, closeFenceIdx).trim();
      // Remove any accidental import lines in the jsonText
      const cleaned = jsonText.replace(/^\s*import\s+[^;]+;?/gm, '').trim();

      // Replace full range from startIdx to closeTagIdx+5 with inline JSX
      const before = out.slice(0, startIdx);
      const after = out.slice(closeTagIdx + 5);
      out = `${before}<${comp} block={${cleaned}} />${after}`;
      edits++;
      // restart scanning for this file
      startPattern.lastIndex = startIdx + 1;
    }
  }

  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    console.log('Fixed embedded JSON in', file);
  }
}

console.log('Total files edited:', edits);
