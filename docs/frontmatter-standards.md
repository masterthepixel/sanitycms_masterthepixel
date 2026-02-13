# Standard Frontmatter Templates

## Page Template

```yml
---
title: "Page Title Here"
slug: "page-slug"
date: "2024-11-21T11:34:37Z"  # ISO 8601 format
seo:
  title: "SEO Title | masterthepixel"
  description: "SEO description for search engines and social sharing"
  image: null  # Optional: "/assets/image.jpg" for custom OG image  
draft: false  # Optional: true to hide from production
coverImage: "/assets/placeholder-cover.jpg"
---
```

## Blog Post Template  

```yml
---
title: "Blog Post Title Here"
slug: "blog-post-slug" 
date: "2024-11-21T11:34:37Z"  # ISO 8601 format (YYYY-MM-DDTHH:mm:ssZ)
excerpt: "Brief summary of the post content for listings and SEO"
seo:
  title: "Blog Post Title | masterthepixel"
  description: "SEO description for search engines and social sharing"
  image: null  # Optional: "/assets/custom-og-image.jpg"
coverImage: "/assets/placeholder-cover.jpg"  # Featured image
draft: false  # Optional: set to true to hide from production
---
```

## Required Fields Validation

### Pages MUST have:
- `title` - Display title
- `slug` - URL slug  
- `date` - ISO 8601 format date
- `seo.title` - SEO title
- `seo.description` - Meta description
- `coverImage` - Featured image path

### Posts MUST have:
- All page fields PLUS:
- `excerpt` - Post summary for listings

## Optional Fields:
- `draft: true` - Hide from production
- `seo.image` - Custom OG image (defaults to coverImage)

## Date Format:
Always use ISO 8601 format: `"YYYY-MM-DDTHH:mm:ssZ"`
Examples:
- ✅ `"2024-11-21T11:34:37Z"`
- ✅ `"2025-01-01T00:00:00Z"`  
- ❌ `"2025-01-01"`
- ❌ `"11/21/2024"`

## Images:
- Use `/assets/placeholder-cover.jpg` as default coverImage
- Store custom assets in `/public/assets/` or `/public/uploads/`
- Reference with absolute paths starting with `/`

## Validation:
Run `node scripts/validate-frontmatter.js` to check all MDX files for required fields and proper formatting.