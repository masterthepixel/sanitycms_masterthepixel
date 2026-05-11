# Content Standards — masterthepixel.io

This document establishes standards for creating, organizing, and publishing content on masterthepixel.io. All content is managed as MDX files with YAML frontmatter in the `content/` directory.

---

## Naming Conventions

### Slugs
- **Format:** Lowercase, hyphenated, descriptive
- **Length:** 3-50 characters
- **Valid characters:** Letters, numbers, hyphens only
- **Examples:**
  - `building-ai-chatbot`
  - `q1-2025-update`
  - `how-to-optimize-performance`

**Rules:**
- Must match the filename (without `.mdx` extension)
- Must be unique across all content types
- Should be SEO-friendly and descriptive
- Avoid vague slugs like `new-post` or `article-2`

### Titles
- **Format:** Title Case
- **Length:** 5-80 characters
- **Examples:**
  - `Building AI Chatbot with Next.js & Claude`
  - `Q1 2025 Updates and New Features`
  - `How to Optimize React Performance`

**Rules:**
- Clear, benefit-focused, and descriptive
- Should attract readers/viewers
- Avoid all-caps or unclear abbreviations
- Use & instead of "and" for brevity

### Files & Folders
- **Filename:** Must match slug exactly. Example: `building-ai-chatbot.mdx`
- **Folders:**
  - `content/posts/` — Blog articles
  - `content/news/` — News/announcements
  - `content/case-studies/` — Case studies
  - `content/pages/` — Static pages
  - `content/services/` — Service pages

---

## Frontmatter Specifications

All content types use YAML frontmatter at the top of the file, enclosed in `---` delimiters.

### Posts & Blog Articles

**Required fields:**
```yaml
---
title: "String (5-80 chars)"
slug: "string-matching-filename"
date: "2025-05-11T00:00:00Z"
excerpt: "Brief summary (50-200 chars)"
coverImage: "/uploads/image.jpg"
seo:
  title: "30-60 chars, include brand name"
  description: "120-160 chars, compelling meta description"
draft: false
---
```

**Optional fields:**
```yaml
categories:
  - "Category Name"
seo:
  keywords:
    - "keyword1"
    - "keyword2"
```

**Example:**
```yaml
---
title: "Building AI Chatbot with Next.js & Claude"
slug: "building-ai-chatbot"
date: "2025-05-11T10:30:00Z"
excerpt: "Learn how to build a production-ready AI chatbot using Next.js and the Claude API"
coverImage: "/uploads/blog/ai-chatbot-hero.jpg"
categories:
  - "AI/ML"
  - "Next.js"
seo:
  title: "AI Chatbot with Next.js & Claude | masterthepixel"
  description: "Step-by-step guide to building an AI-powered chatbot using Next.js 15 and Claude API"
  keywords:
    - "AI chatbot"
    - "Next.js"
    - "Claude API"
draft: false
---
```

### News Items

**Required fields (extends Post fields):**
```yaml
---
title: "String"
slug: "string"
date: "2025-05-11T00:00:00Z"
excerpt: "String (50-200 chars)"
coverImage: "/uploads/image.jpg"
seo:
  title: "String"
  description: "String"
draft: false
---
```

**Optional fields:**
```yaml
isPinned: true  # Feature on homepage/news archive
```

**Example:**
```yaml
---
title: "Q1 2025 Updates and New Features"
slug: "q1-2025-updates"
date: "2025-05-11T09:00:00Z"
excerpt: "Major features and improvements released in Q1 2025"
coverImage: "/uploads/news/q1-updates.jpg"
seo:
  title: "Q1 2025 Updates | masterthepixel"
  description: "Discover the new features and improvements we shipped in Q1 2025"
isPinned: true
draft: false
---
```

### Case Studies

**Required fields:**
```yaml
---
title: "String (5-80 chars)"
slug: "string-matching-filename"
date: "2025-05-11T00:00:00Z"
excerpt: "Brief summary (50-200 chars)"
coverImage: "/uploads/image.jpg"
client: "Client Name"
challenge: "Problem statement"
solution: "Approach/implementation"
results: "Outcomes and impact"
category: "Category Name"
seo:
  title: "30-60 chars"
  description: "120-160 chars"
draft: false
---
```

**Optional fields:**
```yaml
metrics:
  - label: "Support tickets reduced"
    value: "50%"
  - label: "Customer satisfaction"
    value: "92%"
services:
  - "AI Integration"
  - "Full-stack Development"
featured: true
```

**Example:**
```yaml
---
title: "Building AI Chatbot for E-commerce Company"
slug: "ai-chatbot-ecommerce"
date: "2025-03-15T10:00:00Z"
excerpt: "How we built a conversational AI solution that increased customer engagement by 50%"
coverImage: "/uploads/case-studies/ai-chatbot.jpg"
client: "TechCorp Inc"
challenge: "Client needed to handle 10K+ daily customer inquiries efficiently without scaling support team"
solution: "Built AI-powered chatbot using Claude API and Next.js with custom knowledge base integration"
results: "50% reduction in support tickets, 92% customer satisfaction, 24/7 availability"
category: "AI/ML"
metrics:
  - label: "Support tickets reduced"
    value: "50%"
  - label: "Customer satisfaction"
    value: "92%"
  - label: "Response time"
    value: "< 2s"
services:
  - "AI Integration"
  - "Full-stack Development"
featured: true
seo:
  title: "Case Study: AI Chatbot for E-commerce | masterthepixel"
  description: "See how we built an AI-powered solution that reduced support costs by 50%"
draft: false
---
```

---

## Field Specifications & Validation

### Character Limits
| Field | Min | Max | Notes |
|-------|-----|-----|-------|
| Title | 5 | 80 | SEO titles: 30-60 |
| Slug | 3 | 50 | Letters, numbers, hyphens only |
| Excerpt | 50 | 200 | Teaser text for archives |
| SEO title | 30 | 60 | Include brand name when possible |
| SEO description | 120 | 160 | Compelling, action-oriented |
| Client name | 2 | 100 | Full company name |
| Challenge/Solution | 50 | 500 | Can be multiple sentences |

### URL Patterns
| Content Type | URL Pattern | Example |
|---|---|---|
| Blog Post | `/blog/{slug}` | `/blog/building-ai-chatbot` |
| News | `/news/{slug}` | `/news/q1-2025-updates` |
| Case Study | `/case-studies/{slug}` | `/case-studies/ai-chatbot-ecommerce` |
| Service | `/services/{slug}` | `/services/ai-integration` |

### Image Requirements
- **Format:** JPG, PNG, WebP
- **Size:** Optimize for web (< 200KB for cover images)
- **Dimensions:** 1200×630px recommended (16:9 aspect ratio)
- **Alt text:** Descriptive, for accessibility
- **Naming:** Lowercase, hyphenated. Example: `/uploads/blog/ai-chatbot-hero.jpg`

### Date Format
- **ISO 8601 format:** `YYYY-MM-DDTHH:MM:SSZ`
- **Timezone:** Always UTC (Z)
- **Examples:**
  - `2025-05-11T09:00:00Z` — May 11, 2025 at 9:00 AM UTC
  - `2025-01-01T00:00:00Z` — January 1, 2025 at midnight UTC

---

## Content Organization

### File Structure
```
content/
├── posts/
│   ├── building-ai-chatbot.mdx
│   ├── how-to-optimize-performance.mdx
│   └── react-best-practices.mdx
├── news/
│   ├── q1-2025-updates.mdx
│   └── new-feature-launch.mdx
├── case-studies/
│   ├── ai-chatbot-ecommerce.mdx
│   ├── healthcare-app-redesign.mdx
│   └── startup-scaling-journey.mdx
├── pages/
│   ├── home.mdx
│   ├── about.mdx
│   └── contact.mdx
├── posts.json
├── projects.json
├── site.json
└── services.json
```

### Categories for Posts
- **AI/ML** — Artificial intelligence and machine learning
- **Backend** — Server-side development, APIs
- **Frontend** — React, Next.js, UI/UX
- **DevOps** — Cloud, infrastructure, deployment
- **Design** — Product design, UX/UI
- **Business** — Startups, growth, strategy

---

## Content Quality Checklist

Before publishing, ensure:

### Before Creating
- [ ] Slug is unique and SEO-friendly
- [ ] Title is clear and benefit-focused
- [ ] You have a cover image (1200×630px, optimized)

### Before Writing
- [ ] Outline the content structure
- [ ] Gather any data/metrics (for case studies)
- [ ] Have client testimonial/feedback (for case studies)

### While Writing
- [ ] Use clear, concise language
- [ ] Break into scannable sections with headings
- [ ] Link to related content internally
- [ ] Include relevant images/code examples
- [ ] Cite sources for claims

### Before Publishing
- [ ] [ ] All required frontmatter fields filled
- [ ] [ ] Slug matches filename (without `.mdx`)
- [ ] [ ] SEO title ≤ 60 chars
- [ ] [ ] SEO description: 120-160 chars
- [ ] [ ] Cover image optimized and accessible
- [ ] [ ] Content spell-checked and grammar-checked
- [ ] [ ] All links tested (internal and external)
- [ ] [ ] Code examples run and are correct
- [ ] [ ] Images have proper alt text
- [ ] [ ] For case studies: challenge/solution/results fully filled
- [ ] [ ] For case studies: metrics populated
- [ ] [ ] `draft: false` is set
- [ ] [ ] Date is accurate and in ISO 8601 format

### Before Committing
- [ ] Content preview looks correct in browser
- [ ] Styling is consistent with site
- [ ] Mobile responsive design verified
- [ ] SEO tags render correctly
- [ ] All interactive elements work

---

## Publishing Workflow

### 1. Create Content File
```bash
# Navigate to appropriate directory
cd content/posts/  # or news/, case-studies/

# Create new file with slug as filename
touch your-slug-name.mdx

# Add frontmatter and content (see examples above)
```

### 2. Local Testing
```bash
# Start dev server
npm run dev

# Navigate to content page
# http://localhost:3000/blog/your-slug-name

# Verify:
# - Content renders correctly
# - Images load
# - Links work
# - SEO tags are correct
```

### 3. Git Commit
```bash
# Stage content file
git add content/posts/your-slug-name.mdx

# Commit with descriptive message
git commit -m "Add post: Your Post Title"

# Or for case studies:
git commit -m "Add case study: Client Name Project"
```

### 4. Deploy
```bash
# Push to main branch
git push origin main

# Vercel automatically deploys on push
```

---

## Special Considerations

### Draft Posts
- Set `draft: true` to hide from public archives
- Still accessible at `/blog/{slug}` if you know the URL
- Use for work-in-progress content

### Pinned News
- Set `isPinned: true` to feature on homepage/news archive
- Featured items appear above regular news
- Useful for announcements, major releases

### Featured Case Studies
- Set `featured: true` to highlight on portfolio page
- Appear prominently in case study archive
- Good for portfolio showcase

### Internal Links
- Link to other posts: `/blog/post-slug`
- Link to case studies: `/case-studies/slug`
- Link to services: `/services/slug`
- Use relative paths in MDX content

### External Links
- Always use full URLs: `https://example.com`
- Open in new tab with `target="_blank"` if needed in MDX

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Slug doesn't match filename | Rename file to match slug or update slug in frontmatter |
| Date not displaying | Ensure ISO 8601 format: `2025-05-11T09:00:00Z` |
| SEO description too short | Add more compelling, action-oriented language |
| Image not loading | Check path starts with `/` and is URL-encoded (no spaces) |
| Content not appearing | Check `draft: false` is set and file is in correct directory |
| Special characters in slug | Slugs can only contain letters, numbers, and hyphens |

---

## Questions?

Refer to existing examples in the `content/` directory or check the live site for rendering.

Last updated: 2025-05-11
