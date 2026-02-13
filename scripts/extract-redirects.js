#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Redirect Extractor
 * Extracts redirects from content-only.ndjson and creates redirects config
 */

class RedirectExtractor {
  constructor(options = {}) {
    this.options = {
      inputPath: 'content-only.ndjson',
      outputPath: 'data/redirects.json',
      nextConfigPath: 'next.config.ts',
      ...options
    };
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
        }
      }
    }

    return documents;
  }

  extractRedirects(documents) {
    return documents
      .filter(doc => doc._type === 'redirect' && doc.isEnabled)
      .map(doc => ({
        source: doc.source,
        destination: doc.destination,
        permanent: doc.permanent || false
      }));
  }

  generateNextConfigRedirects(redirects) {
    const redirectsCode = redirects.map(r => {
      return `      {
        source: '${r.source}',
        destination: '${r.destination}',
        permanent: ${r.permanent}
      }`;
    }).join(',\n');

    return `  async redirects() {
    return [
${redirectsCode}
    ];
  },`;
  }

  async writeRedirectsJson(redirects) {
    const dir = path.dirname(this.options.outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(this.options.outputPath, JSON.stringify(redirects, null, 2));
    console.log(`Redirects saved to: ${this.options.outputPath}`);
  }

  async updateNextConfig(redirects) {
    if (!fs.existsSync(this.options.nextConfigPath)) {
      console.warn('next.config.ts not found, skipping update');
      return;
    }

    const content = fs.readFileSync(this.options.nextConfigPath, 'utf8');
    const redirectsCode = this.generateNextConfigRedirects(redirects);

    // Replace the commented redirects function
    const updatedContent = content.replace(
      /  \/\/ async redirects\(\) {\s*\/\/\s*return await fetchRedirects\(\);\s*\/\/\s*},/,
      redirectsCode
    );

    fs.writeFileSync(this.options.nextConfigPath, updatedContent);
    console.log(`Next.js config updated with redirects: ${this.options.nextConfigPath}`);
  }

  async extract() {
    console.log('Loading NDJSON...');
    const documents = await this.loadNdjson(this.options.inputPath);

    console.log(`Found ${documents.length} documents`);
    const redirects = this.extractRedirects(documents);
    console.log(`Found ${redirects.length} enabled redirects`);

    if (redirects.length === 0) {
      console.log('No redirects to process');
      return;
    }

    // Write redirects.json
    await this.writeRedirectsJson(redirects);

    // Update next.config.ts
    await this.updateNextConfig(redirects);

    console.log('\nRedirect extraction completed.');
    console.log('Redirects:', redirects);
  }
}

// CLI interface
function main() {
  const extractor = new RedirectExtractor();

  extractor.extract()
    .then(() => {
      console.log('\nRedirect extraction completed successfully.');
    })
    .catch((error) => {
      console.error('Redirect extraction failed:', error);
      process.exit(1);
    });
}

if (require.main === module) {
  main();
}

module.exports = RedirectExtractor;