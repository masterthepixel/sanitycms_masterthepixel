# masterthepixel

The official website for [masterthepixel](https://www.masterthepixel.io) — a digital studio specialising in AI integration, design, and web development.

Built with **Next.js 15** (App Router, Turbopack) and powered by **MDX** for content authoring.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Rendering | SSR + on-demand ISR |
| Content | MDX + JSON (file-based) |
| Styling | Tailwind CSS v3 + `tailwindcss-animate` |
| UI primitives | Radix UI |
| Forms | React Hook Form + Zod |
| Package manager | Bun |
| Testing | Jest (unit) + Playwright (e2e) |

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

## Content Authoring (Local MDX Workflow)

This site uses a **file-based, Git-driven publishing workflow**. All content lives in the `content/` directory and is authored directly in VS Code.

### Adding a blog post

1. **Create file:** `content/posts/<slug>.mdx`

2. **Add frontmatter** (see example below):

```yaml
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2024-05-18"
excerpt: "Brief description for archives"
coverImage: "/uploads/production/blog-your-post/image.jpg"
seo:
  title: "Post Title | masterthepixel"
  description: "SEO description"
draft: false
---
```

3. **Add image:** Place cover image in `/public/uploads/production/blog-<slug>/`
4. **Write content:** Use MDX below frontmatter
5. **Preview:** `bun run dev` at `http://localhost:3000`
6. **Deploy:** Commit to `main` → Vercel auto-deploys

### Adding a news article

Same as blog posts, but in `content/news/<slug>.mdx` with fields: `title`, `slug`, `date`, `excerpt`, `coverImage`, `category`.

### Adding a case study

Create `content/case-studies/<slug>.mdx` with:

```yaml
title, slug, date, excerpt, client, challenge, solution, results, category
```

Optional: `metrics[]`, `services[]`, `featured`.

### Adding a static page

Create `content/pages/<slug>.mdx` (e.g., `/pages/custom-page.mdx` → `/custom-page` route).

For pages with page builder blocks (hero, feature grid, etc.), include the block data in YAML frontmatter and render MDX components (e.g., `<Hero />`).

---

## Deployment

The site is deployed to **Vercel** (`sanitycmsmasterthepixel` project). Push to `main` triggers a production build automatically.

**No environment variables required.** All content is local and self-contained.

---

## License

Private — all rights reserved. © masterthepixel.
