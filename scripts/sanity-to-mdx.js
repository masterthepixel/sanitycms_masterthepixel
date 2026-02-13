#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

// NOTE: `@portabletext/markdown` is an ESM-only dependency and can cause
// Jest (CommonJS) to fail when required at module load time. We import it
// dynamically inside `convertPortableTextToMarkdown` and fall back to a
// lightweight converter when dynamic import is not available (e.g. test
// environments). This keeps the top-level module require-safe for Jest.

/**
 * Sanity to MDX Converter
 * Converts content-only.ndjson into MDX/JSON files
 */

class SanityToMdxConverter {
  constructor(options = {}) {
    this.options = {
      inputPath: 'content-only.ndjson',
      outputDir: 'content',
      assetsDir: 'public/uploads',
      assetMapPath: 'data/asset-map.json',
      dryRun: false,
      report: true,
      commit: false,
      ...options
    };

    this.stats = {
      processed: 0,
      posts: 0,
      pages: 0,
      skipped: 0,
      errors: 0,
      unmappedBlocks: new Set(),
      missingAssets: new Set(),
      downloadedAssets: 0
    };

    this.downloadedUrls = new Set();
    this.assetMap = this.loadAssetMap();
  }

  loadAssetMap() {
    try {
      if (fs.existsSync(this.options.assetMapPath)) {
        const content = fs.readFileSync(this.options.assetMapPath, 'utf8');
        return JSON.parse(content);
      }
    } catch (error) {
      console.warn('Could not load asset map:', error.message);
    }
    return {};
  }

  async loadNdjson(filePath) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`Input file not found: ${filePath}`);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.trim().split('\n');

    const documents = [];
    for (const line of lines) {
      if (line.trim()) {
        try {
          documents.push(JSON.parse(line));
        } catch (error) {
          console.warn(`Skipping invalid JSON line: ${error.message}`);
          this.stats.errors++;
        }
      }
    }

    return documents;
  }

  filterDocuments(documents) {
    return documents.filter(doc => ['post', 'page', 'projectsPage', 'servicesPage'].includes(doc._type));
  }

  mapToFrontmatter(doc) {
    const frontmatter = {};

    // Common fields
    if (doc.title) frontmatter.title = doc.title;
    if (doc.slug?.current) frontmatter.slug = doc.slug.current;

    // Date handling
    if (doc.publishedAt) {
      frontmatter.date = doc.publishedAt;
    } else if (doc._createdAt) {
      frontmatter.date = doc._createdAt;
    }

    // Excerpt
    if (doc.excerpt) frontmatter.excerpt = doc.excerpt;

    // SEO
    if (doc.seo) {
      frontmatter.seo = {};
      if (doc.seo.title) frontmatter.seo.title = doc.seo.title;
      else if (doc.title) frontmatter.seo.title = doc.title; // Fallback to document title
      if (doc.seo.description) frontmatter.seo.description = doc.seo.description;
      if (doc.seo.image) frontmatter.seo.image = this.mapImageUrl(doc.seo.image);
    }

    // Cover image
    if (doc.image || doc.coverImage) {
      const image = doc.image || doc.coverImage;
      frontmatter.coverImage = this.mapImageUrl(image);
    } else {
      frontmatter.coverImage = null; // Ensure coverImage is always present
    }

    // Draft status
    if (doc._id?.startsWith('drafts.')) {
      frontmatter.draft = true;
    }

    // Author (for posts)
    if (doc.author) {
      if (typeof doc.author === 'object' && doc.author.name) {
        frontmatter.author = doc.author.name;
      } else if (typeof doc.author === 'string') {
        frontmatter.author = doc.author;
      }
    }

    // Category (for posts)
    if (doc.category) {
      if (typeof doc.category === 'object' && doc.category.title) {
        frontmatter.category = doc.category.title;
      } else if (typeof doc.category === 'string') {
        frontmatter.category = doc.category;
      }
    }

    return frontmatter;
  }

  mapImageUrl(imageObj) {
    if (!imageObj) return null;

    // If it's already a string URL, return as-is
    if (typeof imageObj === 'string') return imageObj;

    // Handle Sanity image objects
    if (imageObj.asset?._ref) {
      const assetRef = imageObj.asset._ref;
      const assetId = assetRef.replace('image-', '').split('-')[0];

      // Check if we have a local mapping
      if (this.assetMap[assetId]) {
        return this.assetMap[assetId];
      }

      // Fallback to original CDN URL if download failed
      const extension = this.getImageExtension(imageObj);
      return `https://cdn.sanity.io/images/5ywyt4ng/production/${assetId}.${extension}`;
    }

    return null;
  }

  getImageExtension(imageObj) {
    // Default to jpg, but could be enhanced to detect from metadata
    return 'jpg';
  }

  async downloadAsset(assetRef, localPath) {
    if (this.downloadedUrls.has(assetRef)) return;

    this.downloadedUrls.add(assetRef);

    if (this.options.dryRun) {
      console.log(`[DRY RUN] Would download asset: ${assetRef} -> ${localPath}`);
      return;
    }

    try {
      // For now, we'll just track missing assets since we don't have direct URLs
      // In a real implementation, you'd construct the Sanity CDN URL
      this.stats.missingAssets.add(assetRef);
    } catch (error) {
      console.warn(`Failed to download asset ${assetRef}:`, error.message);
      this.stats.errors++;
    }
  }

  checkForUnmappedBlocks(content) {
    if (!Array.isArray(content)) return false;

    const mappedTypes = ['block', 'image', 'video', 'callToAction'];

    for (const item of content) {
      if (item._type && !mappedTypes.includes(item._type)) {
        return true;
      }
      // Recursively check nested content
      if (item.children && Array.isArray(item.children)) {
        if (this.checkForUnmappedBlocks(item.children)) return true;
      }
      if (item.content && Array.isArray(item.content)) {
        if (this.checkForUnmappedBlocks(item.content)) return true;
      }
    }

    return false;
  }

  async convertPortableTextToMarkdown(portableText) {
    if (!portableText || !Array.isArray(portableText)) return '';

    // Track unmapped blocks
    const blocks = portableText.map(block => {
      if (block._type && !['block', 'image', 'video', 'callToAction'].includes(block._type)) {
        this.stats.unmappedBlocks.add(block._type);
      }
      return block;
    });

    // Try dynamic import of the ESM portabletext package. If that fails
    // (e.g. in Jest/CommonJS environment), fall back to a minimal converter
    // that extracts plain text from block children.
    try {
      let portableModule = null;
      try {
        portableModule = await import('@portabletext/markdown');
      } catch (e) {
        // dynamic import might fail in some environments; try require as a last resort
        try {
          // eslint-disable-next-line global-require
          portableModule = require('@portabletext/markdown');
        } catch (err) {
          portableModule = null;
        }
      }

      if (portableModule && (portableModule.portableTextToMarkdown || portableModule.default)) {
        const fn = portableModule.portableTextToMarkdown || portableModule.default?.portableTextToMarkdown;
        if (typeof fn === 'function') {
          return fn(blocks, {
            image: (node) => {
              const url = this.mapImageUrl(node);
              const alt = node.alt || '';
              return `![${alt}](${url})`;
            },
            custom: {
              video: (node) => {
                const url = node.videoUrl || node.url;
                const title = node.title || '';
                return `<video src="${url}" title="${title}" controls></video>`;
              },
              callToAction: (node) => {
                const text = node.callToActionTitle || node.title || 'Learn More';
                const url = '#';
                return `[${text}](${url})`;
              }
            }
          });
        }
      }
    } catch (error) {
      console.warn('PortableText converter import failed, falling back to plain-text conversion.');
    }

    // Fallback: simple plain-text extraction from block children
    try {
      const parts = [];
      for (const block of blocks) {
        if (block._type === 'block' && Array.isArray(block.children)) {
          for (const child of block.children) {
            if (child.text) parts.push(child.text);
          }
        } else if (typeof block === 'string') {
          parts.push(block);
        }
      }
      return parts.join('\n\n');
    } catch (err) {
      console.warn('Fallback PortableText conversion failed:', err.message);
      return '';
    }
  }

  generateMdxContent(frontmatter, body) {
    const fmLines = [];

    for (const [key, value] of Object.entries(frontmatter)) {
      if (key === 'seo' && typeof value === 'object' && value !== null) {
        fmLines.push('seo:');
        for (const [seoKey, seoValue] of Object.entries(value)) {
          fmLines.push(`  ${seoKey}: ${JSON.stringify(seoValue)}`);
        }
      } else {
        fmLines.push(`${key}: ${JSON.stringify(value)}`);
      }
    }

    return `---\n${fmLines.join('\n')}\n---\n\n${body}\n`;
  }

  async writeFile(filePath, content) {
    if (this.options.dryRun) {
      console.log(`[DRY RUN] Would write to: ${filePath}`);
      return;
    }

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, content, 'utf8');
  }

  async convertDocument(doc) {
    const frontmatter = this.mapToFrontmatter(doc);
    const body = await this.convertPortableTextToMarkdown(doc.content || doc.body || doc.pageBuilder || []);

    const type = doc._type;
    const slug = frontmatter.slug || 'untitled';

    // Check if this document has unmapped blocks
    const hasUnmappedBlocks = this.checkForUnmappedBlocks(doc.pageBuilder || doc.content || doc.body || []);

    let outputPath, content;
    if (hasUnmappedBlocks && ['projectsPage', 'servicesPage'].includes(type)) {
      // Create JSON fallback for pages with unmapped blocks
      content = JSON.stringify(doc, null, 2);
      const fileName = `${slug}.json`;
      outputPath = path.join(this.options.outputDir, 'pages', fileName);
      console.log(`Creating JSON fallback for ${type} with unmapped blocks: ${slug}`);
    } else {
      // Create MDX file
      content = this.generateMdxContent(frontmatter, body);
      const fileName = `${slug}.mdx`;
      outputPath = path.join(this.options.outputDir, type === 'post' ? 'posts' : 'pages', fileName);
    }

    await this.writeFile(outputPath, content);

    if (type === 'post') this.stats.posts++;
    else if (['page', 'projectsPage', 'servicesPage'].includes(type)) this.stats.pages++;

    // Return metadata for index
    return {
      type,
      slug,
      outputPath,
      frontmatter,
      _id: doc._id,
      _createdAt: doc._createdAt,
      _updatedAt: doc._updatedAt,
      hasUnmappedBlocks
    };
  }

  generateReport() {
    const report = {
      stats: {
        ...this.stats,
        unmappedBlocks: Array.from(this.stats.unmappedBlocks),
        missingAssets: Array.from(this.stats.missingAssets)
      },
      timestamp: new Date().toISOString()
    };

    if (!this.options.dryRun) {
      fs.writeFileSync('report.json', JSON.stringify(report, null, 2));
    }

    return report;
  }

  printReport(report) {
    console.log('\n=== Conversion Report ===');
    console.log(`Posts processed: ${report.stats.posts}`);
    console.log(`Pages processed: ${report.stats.pages}`);
    console.log(`Total documents: ${report.stats.processed}`);
    console.log(`Errors: ${report.stats.errors}`);

    if (report.stats.unmappedBlocks.length > 0) {
      console.log(`\nUnmapped block types: ${report.stats.unmappedBlocks.join(', ')}`);
    }

    if (report.stats.missingAssets.size > 0) {
      console.log(`\nMissing assets: ${report.stats.missingAssets.size} items`);
    }
  }

  async convert() {
    try {
      console.log('Loading NDJSON...');
      const documents = await this.loadNdjson(this.options.inputPath);

      console.log(`Found ${documents.length} documents`);
      const filteredDocs = this.filterDocuments(documents);
      console.log(`Processing ${filteredDocs.length} posts/pages`);

      const processedDocs = [];
      for (const doc of filteredDocs) {
        const result = await this.convertDocument(doc);
        processedDocs.push(result);
        this.stats.processed++;
      }

      // Generate posts.json index
      const postsIndex = processedDocs
        .filter(doc => doc.type === 'post')
        .map(doc => ({
          _id: doc._id,
          slug: doc.slug,
          title: doc.frontmatter.title,
          excerpt: doc.frontmatter.excerpt,
          date: doc.frontmatter.date,
          author: doc.frontmatter.author,
          category: doc.frontmatter.category,
          coverImage: doc.frontmatter.coverImage,
          draft: doc.frontmatter.draft || false,
          _createdAt: doc._createdAt,
          _updatedAt: doc._updatedAt
        }))
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      if (postsIndex.length > 0) {
        const indexPath = path.join(this.options.outputDir, 'posts.json');
        await this.writeFile(indexPath, JSON.stringify(postsIndex, null, 2));
      }

      const report = this.generateReport();

      if (this.options.report) {
        this.printReport(report);
      }

      return report;
    } catch (error) {
      console.error('Conversion failed:', error.message);
      throw error;
    }
  }
}

// CLI interface
function main() {
  const args = process.argv.slice(2);

  let inputPath = 'content-only.ndjson';
  let outputDir = 'content';
  const options = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    switch (arg) {
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--report':
        options.report = true;
        break;
      case '--no-report':
        options.report = false;
        break;
      case '--commit':
        options.commit = true;
        break;
      case '--input':
        if (i + 1 < args.length) {
          inputPath = args[i + 1];
          i++; // Skip next arg
        }
        break;
      case '--output':
        if (i + 1 < args.length) {
          outputDir = args[i + 1];
          i++; // Skip next arg
        }
        break;
      default:
        if (arg.startsWith('--input=')) {
          inputPath = arg.split('=')[1];
        } else if (arg.startsWith('--output=')) {
          outputDir = arg.split('=')[1];
        }
        break;
    }
  }

  if (!options.dryRun && !options.commit) {
    console.error('Must specify either --dry-run or --commit');
    process.exit(1);
  }

  const converter = new SanityToMdxConverter({
    inputPath,
    outputDir,
    ...options
  });

  converter.convert()
    .then(() => {
      console.log('\nConversion completed successfully.');
    })
    .catch((error) => {
      console.error('Conversion failed:', error);
      process.exit(1);
    });
}

if (require.main === module) {
  main();
}

module.exports = SanityToMdxConverter;