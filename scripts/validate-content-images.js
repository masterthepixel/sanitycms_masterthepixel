#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'content');
const PUBLIC_DIR = path.join(ROOT, 'public');

function findFiles(dir, exts = ['.md', '.mdx', '.json']) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...findFiles(full, exts));
    else if (exts.includes(path.extname(e.name))) files.push(full);
  }
  return files;
}

function extractUploadPathsFromText(text) {
  if (!text) return [];
  const matches = new Set();
  // match /uploads/... or /assets/... (quoted or unquoted)
  const re = /(?:"|')?(\/uploads\/[\w\-./]+|\/assets\/[\w\-./]+)(?:"|')?/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    matches.add(m[1]);
  }
  return Array.from(matches);
}

function extractUploadPathsFromJson(obj) {
  const results = new Set();
  function walk(value) {
    if (!value) return;
    if (typeof value === 'string') {
      if (value.startsWith('/uploads/') || value.startsWith('/assets/')) results.add(value);
      return;
    }
    if (Array.isArray(value)) return value.forEach(walk);
    if (typeof value === 'object') return Object.values(value).forEach(walk);
  }
  walk(obj);
  return Array.from(results);
}

function verifyPath(uploadPath) {
  const rel = uploadPath.replace(/^\//, '');
  const full = path.join(PUBLIC_DIR, rel);
  return fs.existsSync(full);
}

function main() {
  console.log('🔍 Validating content image paths (searching /uploads and /assets)...\n');
  const files = findFiles(CONTENT_DIR);
  const missing = [];
  const found = new Set();

  for (const file of files) {
    const ext = path.extname(file);
    const raw = fs.readFileSync(file, 'utf8');

    let paths = [];
    if (ext === '.json') {
      try {
        const parsed = JSON.parse(raw);
        paths = extractUploadPathsFromJson(parsed);
      } catch (err) {
        // fallback to text scan
        paths = extractUploadPathsFromText(raw);
      }
    } else {
      // MDX / MD -> check frontmatter + embedded JSON + inline references
      paths = extractUploadPathsFromText(raw);
    }

    for (const p of paths) {
      found.add(p);
      if (!verifyPath(p)) {
        missing.push({ file: path.relative(ROOT, file), path: p });
      }
    }
  }

  if (found.size === 0) {
    console.log('⚠️  No /uploads or /assets paths found in content — nothing to validate.');
  } else {
    console.log(`✅ Found ${found.size} referenced asset path(s) in content`);
  }

  if (missing.length) {
    console.error('\n❌ Missing asset files detected:');
    missing.forEach((m) => console.error(`   - ${m.path} (referenced in ${m.file})`));
    console.error('\nPlease add the referenced files under `public/` or update the content to point to an existing asset.');
    process.exitCode = 1;
  } else {
    console.log('\n✅ All referenced asset files exist under `public/`');
  }
}

main();
