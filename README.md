# masterthepixel

The official website for [masterthepixel](https://www.masterthepixel.io) — a digital studio specialising in AI integration, design, and web development.

Built with **Next.js 15** (App Router, Turbopack) and powered by **local MDX + JSON** for content authoring. **No external CMS required.**

> **Migration complete**: Sanity CMS fully removed. This is now a pure, file-based Next.js application.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Rendering | SSG (static generation) + on-demand ISR |
| Content | MDX + JSON (file-based, zero external CMS) |
| Styling | Tailwind CSS v3 + `tailwindcss-animate` |
| UI primitives | Radix UI |
| Forms | React Hook Form + Zod |
| Package manager | Bun |
| Testing | Jest (unit) + Playwright (e2e) |
| Deployment | Vercel (zero env vars required) |

---

## Site structure

The site is divided into the following public sections, all under `src/app/(frontend)/`:

| Route | Description |
|---|---|
| `/` | Home — hero, services overview, featured work |
| `/services` | Design & AI services with cover images |
| `/blog` | Blog archive and post detail pages |
| `/news` | News archive and article detail pages |
| `/case-studies` | Case study archive and detail pages |
| `/projects` | Projects portfolio grid |
| `/credits` | Credits and acknowledgements |
| `/privacy-policy` | Privacy policy |
| `/terms-of-use` | Terms of use |
| `/[slug]` | Catch-all for additional MDX pages |

---

## Content

All site content lives in the `content/` directory and is authored in **MDX** (with YAML frontmatter) or **JSON**.

```
content/
├── case-studies/       # MDX case studies (challenge / solution / results)
├── news/               # MDX news articles
├── pages/              # MDX static pages (home, about, services, etc.)
├── posts/              # MDX blog posts
├── posts.json          # Blog post metadata index
├── projects.json       # Projects portfolio data
├── project-categories.json
└── site.json           # Global site settings (SEO, social, contact)
```

> **Content represents the majority of the site.** The case studies and news sections in particular drive the core editorial publishing workflow. See [`docs/CONTENT_STANDARDS.md`](docs/CONTENT_STANDARDS.md) for naming conventions, frontmatter schemas, and the editorial workflow.

---

## Getting started

### Prerequisites

- [Bun](https://bun.sh) ≥ 1.0
- Node.js ≥ 20

### Install & run

```bash
bun install
bun run dev
```

The dev server starts at **http://localhost:3000** with Turbopack.

### Other commands

```bash
bun run build           # Production build
bun run start           # Start production server
bun run lint            # ESLint
bun run test            # Jest unit tests
bun run test:e2e        # Playwright end-to-end tests
bun run validate:frontmatter   # Validate MDX frontmatter
bun run validate:images        # Validate content image references
```

---

## Adding content

### Blog post

Create `content/posts/<slug>.mdx` following the frontmatter schema in [`docs/CONTENT_STANDARDS.md`](docs/CONTENT_STANDARDS.md).

### News article

Create `content/news/<slug>.mdx` with the required frontmatter fields (`title`, `slug`, `date`, `excerpt`, `coverImage`, `category`).

### Case study

Create `content/case-studies/<slug>.mdx` with fields including `client`, `challenge`, `solution`, `results`, and optional `metrics[]` and `services[]`. See [`content/case-studies/ai-chatbot-ecommerce.mdx`](content/case-studies/ai-chatbot-ecommerce.mdx) as a reference.

---

## Project layout

```
src/
├── app/
│   ├── (frontend)/     # Public-facing pages
│   └── (backend)/      # API routes (OG images, analytics)
├── components/         # Shared React components
├── hooks/              # Custom React hooks
├── lib/                # Content loaders, utilities
└── types/              # TypeScript interfaces
content/                # MDX + JSON content (primary source of truth)
docs/                   # Standards, plans, migration notes
public/                 # Static assets and uploads
scripts/                # Validation utilities
tests/                  # Unit and e2e test suites
```

---

## Architecture & Migration

This repository **completed a full Sanity CMS → file-based migration** (Epic MIG-009). 

**What changed:**

- ❌ Removed: Sanity runtime, Studio, migration scripts, external dependencies
- ✅ Added: Local file-based content, Git-driven workflow, static generation

**Why:**
- Simpler deployment (zero external APIs)
- Faster content iteration (edit → commit → deploy)
- Full version control of all content
- No vendor lock-in

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for technical details.

---

## Content Authoring (Local MDX Workflow)

This site uses a **file-based, Git-driven publishing workflow**. All content lives in the `content/` directory and is authored directly in VS Code.

### Quick start

```bash
# Create a new blog post
cp content/posts/sample-post.mdx content/posts/my-new-post.mdx

# Edit the file
# - Change frontmatter (title, slug, date, excerpt, etc.)
# - Write your MDX content below the ---

# Add cover image
# Place image at: /public/uploads/production/blog-my-new-post/image.jpg

# Preview locally
bun run dev
# Visit: http://localhost:3000/blog/my-new-post

# Deploy
git add content/posts/my-new-post.mdx
git add public/uploads/production/blog-my-new-post/
git commit -m "content: add blog post about ..."
git push origin main
# Vercel auto-deploys → live in ~60s
```

### Adding a blog post

1. **Create file:** `content/posts/<slug>.mdx`

2. **Add frontmatter:**

```yaml
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2024-05-18"
excerpt: "Brief summary for archive pages"
coverImage: "/uploads/production/blog-your-post/image.jpg"
seo:
  title: "Post Title | masterthepixel"
  description: "SEO meta description (160 chars)"
  keywords: ["optional", "keywords"]
categories: ["category-slug"]
draft: false
---
```

3. **Add image:**
   - Place cover image in `/public/uploads/production/blog-<slug>/`
   - Update `coverImage` path in frontmatter
   - Images are optimized via Next.js Image

4. **Write content:** Use MDX syntax below frontmatter

5. **Preview:** `bun run dev` → visit `http://localhost:3000/blog/<slug>`

6. **Deploy:** Commit to `main` → Vercel auto-deploys

**See** [`docs/CONTENT_STANDARDS.md`](docs/CONTENT_STANDARDS.md) for detailed naming conventions and SEO best practices.

### Adding a news article

Create `content/news/<slug>.mdx` with frontmatter fields:
- `title`, `slug`, `date`, `excerpt`, `coverImage`, `seo`, `isPinned` (optional)

News articles are cached and updated on-demand.

### Adding a case study

Create `content/case-studies/<slug>.mdx` with:

```yaml
---
title: "Case Study Title"
slug: "case-study-slug"
date: "2024-05-18"
excerpt: "One-line description"
client: "Client Name"
clientUrl: "https://example.com"
challenge: "Business challenge or problem statement"
solution: "How we solved it"
results: "Outcomes and impact"
category: "Industry category"
services: ["Service A", "Service B"]
metrics:
  - label: "Metric Label"
    value: "123"
featured: true
---
```

### Adding a project (portfolio)

Edit or add entries to `content/projects.json`:

```json
{
  "_id": "unique-id",
  "title": "Project Title",
  "slug": "project-slug",
  "client": "Client Name",
  "year": 2024,
  "services": ["Engineering", "Design"],
  "category": {
    "slug": "engineering",
    "title": "Engineering"
  },
  "image": {
    "url": "/uploads/production/home/image-hash-1920x1280.jpg",
    "altText": "Alt text"
  },
  "excerpt": "Brief description"
}
```

Available categories: `Engineering`, `Energy & Utilities`, `Telecommunications`, `Healthcare`

Projects render with:
- Full project grid at `/projects`
- Category filtering: `/projects/category/<slug>`
- Individual detail pages: `/projects/<slug>`

### Adding a static page

Create `content/pages/<slug>.mdx`:

```yaml
---
title: "Page Title"
slug: "page-slug"
seo:
  title: "Page Title | masterthepixel"
  description: "SEO description"
---
```

This auto-creates route: `/<slug>`

**For complex pages:** Include page builder blocks in frontmatter:

```yaml
---
title: "Home"
heroBlock:
  heading: "Welcome"
  content: "Page content"
  buttons: [...]
featureGridBlock:
  features: [...]
---

import { Hero, FeatureGrid } from '@/components/mdx';

<Hero />
<FeatureGrid />
```

---

## Deployment

The site is deployed to **Vercel**. Push to `main` triggers a production build automatically.

### Environment variables

**None required.** All content is local and self-contained.

### Deployment workflow

```bash
# Local development
bun run dev

# Build for production
bun run build

# Verify locally
bun run start

# Deploy to Vercel
git push origin main
# Automatic → deployed at https://masterthepixel.io
```

**Build time:** ~2-3 minutes (42 static pages + assets)

### Rollback

If something breaks:

```bash
# Revert to previous commit
git revert HEAD

# Vercel auto-deploys the revert
```

See [`docs/rollback-procedures.md`](docs/rollback-procedures.md) for emergency procedures.

---

## License

Private — all rights reserved. © masterthepixel.
