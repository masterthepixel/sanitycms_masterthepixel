#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');

/**
 * Asset Downloader
 * Downloads assets from Sanity CDN to local filesystem
 */

class AssetDownloader {
  constructor(options = {}) {
    this.options = {
      assetsPath: 'studio/masterthepixel/production-export-*/assets.json',
      outputDir: 'public/uploads',
      assetMapPath: 'data/asset-map.json',
      projectId: '5ywyt4ng',
      dataset: 'production',
      dryRun: false,
      ...options
    };

    this.stats = {
      total: 0,
      downloaded: 0,
      skipped: 0,
      errors: 0
    };

    this.assetMap = {};
  }

  findAssetsFile() {
    // Look for assets.json in export directories
    const studioDir = path.join(process.cwd(), 'studio', 'masterthepixel');
    if (!fs.existsSync(studioDir)) return null;

    const entries = fs.readdirSync(studioDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && entry.name.startsWith('production-export-')) {
        const assetsPath = path.join(studioDir, entry.name, 'assets.json');
        if (fs.existsSync(assetsPath)) {
          return assetsPath;
        }
      }
    }
    return null;
  }

  loadAssets() {
    let assetsPath = this.options.assetsPath;

    if (assetsPath.includes('*')) {
      assetsPath = this.findAssetsFile();
    }

    if (!assetsPath || !fs.existsSync(assetsPath)) {
      console.warn('Assets file not found, skipping asset download');
      return {};
    }

    try {
      const content = fs.readFileSync(assetsPath, 'utf8');
      return JSON.parse(content);
    } catch (error) {
      console.error('Error loading assets file:', error.message);
      return {};
    }
  }

  saveAssetMap() {
    if (this.options.dryRun) {
      console.log(`[DRY RUN] Would save asset map to: ${this.options.assetMapPath}`);
      return;
    }

    try {
      const dir = path.dirname(this.options.assetMapPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(this.options.assetMapPath, JSON.stringify(this.assetMap, null, 2));
      console.log(`Asset map saved to: ${this.options.assetMapPath}`);
    } catch (error) {
      console.error('Failed to save asset map:', error.message);
    }
  }

  async downloadFile(url, outputPath) {
    return new Promise((resolve, reject) => {
      if (this.options.dryRun) {
        console.log(`[DRY RUN] Would download: ${url} -> ${outputPath}`);
        resolve();
        return;
      }

      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const file = fs.createWriteStream(outputPath);
      const request = https.get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode}: ${url}`));
          return;
        }

        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      });

      request.on('error', (err) => {
        fs.unlink(outputPath, () => {}); // Delete the file on error
        reject(err);
      });

      file.on('error', (err) => {
        fs.unlink(outputPath, () => {}); // Delete the file on error
        reject(err);
      });
    });
  }

  async downloadAsset(asset) {
    try {
      const assetId = asset._id;
      const extension = asset.mimeType?.split('/')[1] || 'jpg';
      const type = 'images'; // All assets are images for now
      const slug = assetId; // Use assetId as slug for images
      const outputPath = path.join(this.options.outputDir, type, slug, `${assetId}.${extension}`);
      const localPath = `/uploads/${type}/${slug}/${assetId}.${extension}`;

      // Skip if already exists
      if (fs.existsSync(outputPath)) {
        this.stats.skipped++;
        // Still add to mapping
        this.assetMap[assetId] = localPath;
        return;
      }

      const url = this.getSanityImageUrl(assetId);
      await this.downloadFile(url, outputPath);

      this.stats.downloaded++;
      this.assetMap[assetId] = localPath;
      console.log(`Downloaded: ${assetId} -> ${localPath}`);
    } catch (error) {
      console.error(`Failed to download asset ${asset._id}:`, error.message);
      this.stats.errors++;
    }
  }

  async downloadAll() {
    const assets = this.loadAssets();

    if (!assets || Object.keys(assets).length === 0) {
      console.log('No assets to download');
      return;
    }

    // Convert assets object to array
    const assetList = Object.values(assets);
    this.stats.total = assetList.length;

    console.log(`Downloading ${this.stats.total} assets...`);

    for (const asset of assetList) {
      await this.downloadAsset(asset);
    }

    // Save asset mapping
    this.saveAssetMap();

    console.log('\n=== Asset Download Report ===');
    console.log(`Total: ${this.stats.total}`);
    console.log(`Downloaded: ${this.stats.downloaded}`);
    console.log(`Skipped: ${this.stats.skipped}`);
    console.log(`Errors: ${this.stats.errors}`);
  }
}

// CLI interface
function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  const downloader = new AssetDownloader({ dryRun });

  downloader.downloadAll()
    .then(() => {
      console.log('\nAsset download completed.');
    })
    .catch((error) => {
      console.error('Asset download failed:', error);
      process.exit(1);
    });
}

if (require.main === module) {
  main();
}

module.exports = AssetDownloader;