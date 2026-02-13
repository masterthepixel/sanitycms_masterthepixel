#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Asset Assignment Fixer
 * Assigns downloaded assets to their corresponding content files
 */

class AssetAssignmentFixer {
  constructor() {
    this.contentDir = path.join(process.cwd(), 'content');
    this.uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    this.assetMapPath = path.join(process.cwd(), 'data', 'asset-map.json');
    
    this.stats = {
      pages: { fixed: 0, total: 0 },
      posts: { fixed: 0, total: 0 }
    };
  }

  loadAssetMap() {
    if (!fs.existsSync(this.assetMapPath)) {
      console.log('Asset map not found, proceeding without it');
      return {};
    }
    
    try {
      return JSON.parse(fs.readFileSync(this.assetMapPath, 'utf8'));
    } catch (error) {
      console.error('Error loading asset map:', error.message);
      return {};
    }
  }

  getAvailableAssets() {
    const productionDir = path.join(this.uploadsDir, 'production');
    if (!fs.existsSync(productionDir)) {
      return {};
    }
    
    const assets = {};
    const categories = fs.readdirSync(productionDir, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
    
    for (const category of categories) {
      const categoryDir = path.join(productionDir, category);
      const files = fs.readdirSync(categoryDir)
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
      
      if (files.length > 0) {
        assets[category] = files.map(file => `/uploads/production/${category}/${file}`);
      }
    }
    
    return assets;
  }

  updateFrontmatter(filePath, updates) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n/);
    if (!frontmatterMatch) {
      console.warn(`No frontmatter found in ${filePath}`);
      return false;
    }
    
    let frontmatter = frontmatterMatch[1];
    let updated = false;
    
    // Update coverImage if provided and currently null or placeholder
    if (updates.coverImage) {
      if (frontmatter.includes('coverImage: null') || 
          frontmatter.includes('coverImage: "/assets/placeholder-cover.jpg"')) {
        frontmatter = frontmatter.replace(
          /coverImage: (null|"\/assets\/placeholder-cover\.jpg")/,
          `coverImage: "${updates.coverImage}"`
        );
        updated = true;
        console.log(`   → Replacing coverImage with: ${updates.coverImage}`);
      } else {
        console.log(`   → Skipping coverImage (not null/placeholder): ${frontmatter.match(/coverImage: [^\n]+/)?.[0]}`);
      }
    }
    
    if (updated) {
      const newContent = content.replace(/^---\n[\s\S]*?\n---\n/, `---\n${frontmatter}\n---\n`);
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  }

  fixBlogPosts() {
    const postsDir = path.join(this.contentDir, 'posts');
    if (!fs.existsSync(postsDir)) return;
    
    const availableAssets = this.getAvailableAssets();
    const postFiles = fs.readdirSync(postsDir)
      .filter(file => file.endsWith('.mdx') && !file.includes('.backup'));
    
    for (const file of postFiles) {
      const filePath = path.join(postsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract slug from frontmatter
      const slugMatch = content.match(/slug: ["']?([^"'\n]+)["']?/);
      if (!slugMatch) continue;
      
      const slug = slugMatch[1];
      this.stats.posts.total++;
      
      // Look for matching asset directory
      const blogSlug = `blog-${slug}`;
      if (availableAssets[blogSlug]) {
        // Get the first image as cover image
        const coverImage = availableAssets[blogSlug][0];
        
        if (this.updateFrontmatter(filePath, { coverImage })) {
          this.stats.posts.fixed++;
          console.log(`✓ Fixed ${file}: ${coverImage}`);
        }
      } else {
        console.log(`? No assets found for blog post: ${slug}`);
      }
    }
  }

  fixPages() {
    const pagesDir = path.join(this.contentDir, 'pages');
    if (!fs.existsSync(pagesDir)) return;
    
    const availableAssets = this.getAvailableAssets();
    const pageFiles = fs.readdirSync(pagesDir)
      .filter(file => file.endsWith('.mdx') && !file.includes('.backup') && !file.includes('sample'));
    
    // Manual mapping for main pages
    const pageAssetMapping = {
      'home.mdx': availableAssets['home'] ? availableAssets['home'][0] : null,
      'about.mdx': availableAssets['about'] ? availableAssets['about'][0] : null,
      'services.mdx': availableAssets['services'] ? availableAssets['services'][0] : null,
      'contact.mdx': availableAssets['contact'] ? availableAssets['contact'][0] : null
    };
    
    for (const file of pageFiles) {
      this.stats.pages.total++;
      
      if (pageAssetMapping[file]) {
        const filePath = path.join(pagesDir, file);
        
        if (this.updateFrontmatter(filePath, { coverImage: pageAssetMapping[file] })) {
          this.stats.pages.fixed++;
          console.log(`✓ Fixed ${file}: ${pageAssetMapping[file]}`);
        }
      }
    }
  }

  checkAssetAvailability() {
    const assetMap = this.loadAssetMap();
    const issues = [];
    
    for (const [sanityUrl, localPath] of Object.entries(assetMap)) {
      if (sanityUrl.startsWith('http')) {
        const fullPath = path.join(process.cwd(), 'public', localPath.substring(1));
        if (!fs.existsSync(fullPath)) {
          issues.push(`Missing: ${localPath}`);
        }
      }
    }
    
    return issues;
  }

  run() {
    console.log('🔧 Fixing asset assignments...\n');
    
    const availableAssets = this.getAvailableAssets();
    console.log(`Found asset categories: ${Object.keys(availableAssets).join(', ')}\n`);
    
    // Fix blog posts
    console.log('Fixing blog posts...');
    this.fixBlogPosts();
    
    // Fix pages  
    console.log('\nFixing pages...');
    this.fixPages();
    
    // Check for missing assets
    console.log('\nChecking asset availability...');
    const issues = this.checkAssetAvailability();
    
    // Report
    console.log('\n=== ASSET ASSIGNMENT REPORT ===');
    console.log(`Blog posts: ${this.stats.posts.fixed}/${this.stats.posts.total} fixed`);
    console.log(`Pages: ${this.stats.pages.fixed}/${this.stats.pages.total} fixed`);
    
    if (issues.length > 0) {
      console.log(`\n⚠️  Missing assets (${issues.length}):`);
      issues.slice(0, 10).forEach(issue => console.log(`   ${issue}`));
      if (issues.length > 10) {
        console.log(`   ... and ${issues.length - 10} more`);
      }
    } else {
      console.log('\n✅ All mapped assets are available');
    }
    
    console.log('\n🎉 Asset assignment completed!');
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new AssetAssignmentFixer();
  fixer.run();
}

module.exports = AssetAssignmentFixer;