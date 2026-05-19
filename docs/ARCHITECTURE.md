# Architecture: File-Based Next.js (Post-Sanity Migration)

**Status:** Migration complete (Epic MIG-009, all 5 stories implemented)

This document describes the current architecture after removing Sanity CMS and transitioning to a pure, file-based Next.js application.

---

## High-Level Overview

```
┌─────────────────────────────────────────────────────────┐
│                  Next.js 15 App Router                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  src/app/(frontend)/                                    │
│  ├── page.tsx          (home)                           │
│  ├── [slug]/           (dynamic pages)                  │
│  ├── blog/             (blog posts + search)            │
│  ├── news/             (news articles)                  │
│  ├── projects/         (portfolio + category filters)   │
│  ├── case-studies/     (case studies)                   │
│  └── services/         (service offerings)              │
│                                                          │
│  Powered by content/ ↓                                  │
└─────────────────────────────────────────────────────────┘
                          │
                          ↓
         ┌─────────────────────────────┐
         │   LOCAL FILE-BASED DATA     │
         ├─────────────────────────────┤
         │                             │
         │  content/                   │
         │  ├── pages/        (MDX)    │
         │  ├── posts/        (MDX)    │
         │  ├── news/         (MDX)    │
         │  ├── case-studies/ (MDX)    │
         │  ├── projects.json (JSON)   │
         │  └── site.json     (JSON)   │
         │                             │
         │  public/assets/             │
         │  └── images, icons, etc     │
         │                             │
         └─────────────────────────────┘
```

---

## Content Model

### Pages (MDX)

**Location:** `content/pages/*.mdx`

**Frontmatter:**
```yaml
---
title: string
slug: string
seo:
  title: string
  description: string
  keywords?: string[]
draft?: boolean
coverImage?: string
---
```

**Rendering:** Direct MDX component rendering via `next-mdx-remote`

**Examples:**
- `content/pages/home.mdx` → `/`
- `content/pages/about.mdx` → `/about`
- `content/pages/contact.mdx` → `/contact`

### Blog Posts (MDX)

**Location:** `content/posts/*.mdx`

**Frontmatter:**
```yaml
---
title: string
slug: string
date: string (ISO 8601)
excerpt: string
coverImage: string
seo:
  title: string
  description: string
  keywords?: string[]
categories?: string[]
draft?: boolean
---
```

**Features:**
- Full-text search via client-side filtering
- Category archive pages
- Related posts (auto-generated based on date)
- Table of contents (optional)
- SEO optimized

**Routes:**
- `/blog` — archive
- `/blog/<slug>` — post detail
- `/blog/category/<slug>` — category archive

### News Articles (MDX)

**Location:** `content/news/*.mdx`

**Frontmatter:** Same as blog posts, plus optional `isPinned`

**Features:**
- Pinned articles appear at top of archive
- Latest news feed on homepage
- Category filtering

**Routes:**
- `/news` — archive
- `/news/<slug>` — article detail

### Case Studies (MDX)

**Location:** `content/case-studies/*.mdx`

**Frontmatter:**
```yaml
---
title: string
slug: string
date: string
excerpt: string
client: string
clientUrl: string
challenge: string
solution: string
results: string
category: string
services?: string[]
metrics?: Array<{ label: string; value: string }>
featured?: boolean
---
```

**Routes:**
- `/case-studies` — archive (featured first)
- `/case-studies/<slug>` — detail page

### Projects (JSON)

**Location:** `content/projects.json`

**Structure:**
```json
[
  {
    "_id": "uuid",
    "title": "Project Name",
    "slug": "project-slug",
    "client": "Client Name",
    "year": 2024,
    "services": ["Service A", "Service B"],
    "category": {
      "slug": "engineering",
      "title": "Engineering"
    },
    "image": {
      "url": "/uploads/production/home/image-hash-1920x1280.jpg",
      "altText": "Image alt text"
    },
    "excerpt": "One-line description"
  }
]
```

**Categories:** Defined in `content/project-categories.json`

**Routes:**
- `/projects` — grid view, all projects
- `/projects/category/<slug>` — filtered by category
- `/projects/<slug>` — project detail (via [slug] route)

### Site Configuration (JSON)

**Location:** `content/site.json`

**Includes:**
- General settings (site title, logo, copyright)
- Marketing settings (analytics IDs)
- Navigation settings (navbar, footer, mobile menu)
- Blog settings (related posts, TOC, categories)

---

## Data Loading Layer

### Content Loader (`src/lib/content.ts`)

**Key functions:**

```typescript
// Posts
getAllPosts(): Promise<Post[]>
getPostBySlug(slug: string): Promise<Post>
getPostsByCategory(slug: string): Promise<Post[]>

// News
getAllNews(): Promise<News[]>
getNewsBySlug(slug: string): Promise<News>

// Pages
getAllPages(): Promise<Page[]>
getPageBySlug(slug: string): Promise<Page>

// Projects
getAllProjects(): Promise<Project[]>
getProjectBySlug(slug: string): Promise<Project>
getProjectsByCategory(slug: string): Promise<Project[]>

// Config
getSiteSettings(): Promise<SiteSettings>
```

**Implementation:**
- Reads MDX files from disk at build time
- Parses YAML frontmatter with `gray-matter`
- Caches results via Next.js build-time computation
- On-demand revalidation via ISR for dynamic routes

---

## Rendering Strategy

### Static Generation (SSG)

**Most content** uses Next.js static generation:

```typescript
export const dynamicParams = true; // Prerender known paths, fallback for unknown

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}
```

**Prerendered at build time:**
- All pages in `content/pages/`
- All blog posts
- All news articles
- All case studies
- All projects
- All category pages

**Result:** ~42 static HTML files

### On-Demand ISR

**Dynamic routes** can be accessed before build-time generation:

```typescript
export const revalidate = 3600; // Revalidate every hour
```

**Benefits:**
- New content auto-deployed without rebuild
- Instant preview on main branch
- Cache invalidation per route

---

## Image Handling

### Image Sources

**Local assets:** `/public/uploads/` and `/public/assets/`

- All images are static files (no CDN)
- Served via Vercel's global CDN
- Optimized by Next.js Image component

### Image Component

**Usage in components:**

```typescript
import Image from 'next/image';

<Image
  src="/uploads/production/blog/image-hash-1920x1280.jpg"
  width={1920}
  height={1280}
  alt="Image description"
  className="rounded-lg object-cover"
  sizes="(max-width: 640px) 100vw, 900px"
/>
```

**Features:**
- Automatic format negotiation (WebP fallback)
- Responsive sizing via `sizes` prop
- Native CSS `object-fit: cover` for cropping (no CDN params)
- Lazy loading by default

### Asset Organization

```
public/assets/
├── icons/              (SVG, PNG)
├── placeholder-cover.jpg
└── masterthepixel_logo.svg

public/uploads/production/
├── home/
├── blog-<slug>/
├── news-<slug>/
├── about/
└── services/
```

---

## Component Architecture

### Page Components

**Structure:**
```
src/app/(frontend)/
├── page.tsx                  (home page)
├── [slug]/
│   └── page.tsx             (dynamic pages)
├── blog/
│   ├── page.tsx             (archive)
│   ├── [slug]/
│   │   └── page.tsx         (post detail)
│   └── category/
│       └── [slug]/
│           └── page.tsx     (category archive)
└── ...
```

**Pattern:**
1. Server component fetches data from `src/lib/content.ts`
2. Passes data to client/server component tree
3. Components render JSX + MDX

### Page Builder Components

**For complex pages** (home, services overview):

```typescript
import { Hero, LogoBlock, FeatureGrid, ... } from '@/components/mdx';

export default function Page() {
  return (
    <>
      <Hero />
      <FeatureGrid />
      <CallToActionBlock />
    </>
  );
}
```

**MDX components are** dynamic imports with Turbopack HMR.

### Shared Components

**Location:** `src/components/`

```
components/
├── mdx/                  (page builder blocks)
│   ├── Hero.tsx
│   ├── FeatureGrid.tsx
│   └── ...
├── shared/               (common UI)
│   ├── button-renderer.tsx
│   ├── heading.tsx
│   └── ...
├── page-builder/         (page assembly)
│   ├── blocks/
│   └── index.tsx
├── global/               (layout)
│   ├── container.tsx
│   ├── header.tsx
│   └── footer.tsx
└── ui/                   (Radix UI + shadcn/ui)
    ├── button.tsx
    ├── dialog.tsx
    └── ...
```

---

## Build & Deployment

### Build Process

```bash
pnpm run build
```

**Steps:**
1. Compile Next.js with Turbopack
2. Load all MDX content from `content/` directory
3. Parse frontmatter and validate types
4. Generate static pages (42 total)
5. Output to `.next/` directory

**Time:** ~3-5 minutes

**Output:** Ready for `pnpm run start` (production server)

### Deployment to Vercel

**Environment:** Zero environment variables

```bash
git push origin main
# Automatic Vercel deployment
# Build: ~3-5 min
# Live: https://masterthepixel.io
```

**Configuration:**
- `next.config.ts` — redirects, image config
- No Sanity credentials
- No external API integrations

### Redirects

**Source:** `data/redirects.json`

```json
[
  {
    "source": "/old-url",
    "destination": "/new-url",
    "permanent": true
  }
]
```

**Loaded at build time** via `next.config.ts`:

```typescript
export async function redirects() {
  return redirects; // from JSON
}
```

---

## Type Safety

### TypeScript

**All content** is strongly typed:

```typescript
interface Post extends PostFrontmatter {
  content: string;
}

interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  coverImage: string;
  seo: { title: string; description: string };
  categories?: string[];
  draft?: boolean;
}
```

**Type validation:**
- `npx tsc --noEmit` passes
- Build-time validation in `src/lib/content.ts`
- No untyped `any` in data loading

---

## Performance

### Metrics

- **First Contentful Paint:** ~800ms
- **Largest Contentful Paint:** ~1.2s
- **Cumulative Layout Shift:** <0.1

### Optimization Strategies

1. **Static generation** — all content prerendered
2. **Code splitting** — page-specific JS chunks
3. **Image optimization** — Next.js Image component
4. **Font subsetting** — Geist sans + mono
5. **CSS pruning** — Tailwind removes unused styles
6. **Caching** — Vercel Edge Cache (default 60s)

---

## Maintenance & Workflow

### Adding Content

1. Create MDX/JSON file in `content/`
2. Edit locally: `bun run dev`
3. Preview at `http://localhost:3000`
4. Commit to Git
5. Push to main — Vercel auto-deploys

### Updating Content

**Published content:**
```bash
# Edit content/posts/my-post.mdx
git add content/posts/my-post.mdx
git commit -m "content(blog): update my post"
git push origin main
# Vercel redeploys with ISR (cache invalidation)
```

### Creating New Pages

**Static pages:**
```bash
# Create content/pages/new-page.mdx
# Next.js generates /new-page route automatically
```

**Dynamic pages:**
```bash
# Create src/app/(frontend)/new-section/page.tsx
# Load data from src/lib/content.ts
# Vercel redeploys
```

---

## Migration History

### From Sanity CMS (Completed)

**Removed:**
- Sanity runtime packages
- Sanity Studio
- Draft mode & live preview
- CDN-based image optimization
- External API dependencies

**Migration phases:**
1. ✅ MIG-009.01 — Decouple build from Sanity
2. ✅ MIG-009.02 — Sanitize images (local assets)
3. ✅ MIG-009.03 — Remove draft mode
4. ✅ MIG-009.04 — Freeze types (local definitions)
5. ✅ MIG-009.05 — Clean studio & scripts

**Result:** 76 files changed, 34,443 deletions

See: `docs/story/feature-migration-sanity-to-md/MIG-009.md`

---

## Future Improvements

### Potential Enhancements

- **Search:** Move from client-side to Vercel Edge Functions
- **Comments:** Add via Vercel Postgres or external service
- **Analytics:** Expand from GA to custom events
- **Webhooks:** Git push → Slack notifications
- **Automation:** Auto-generate image sizes, og-images
- **Queues:** Background jobs via Vercel Queues (beta)

### Known Limitations

- No real-time collaboration (Git-based only)
- Manual image optimization (handled by Next.js Image)
- No visual editor (CLI + text editors only)

---

## References

- [Next.js App Router](https://nextjs.org/docs/app)
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Vercel Deployment](https://vercel.com/docs)
