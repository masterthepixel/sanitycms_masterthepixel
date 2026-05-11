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
│   └── (backend)/      # API routes (OG images, email, draft mode)
├── components/         # Shared React components
├── hooks/              # Custom React hooks
├── lib/                # Content loaders, utilities
└── types/              # TypeScript interfaces
content/                # MDX + JSON content (primary source of truth)
docs/                   # Standards, plans, migration notes
public/                 # Static assets and uploads
tests/                  # Unit and e2e test suites
```

---

## Deployment

The site is deployed to **Vercel** (`sanitycmsmasterthepixel` project). Push to `main` triggers a production deploy automatically.

Required environment variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=5ywyt4ng
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=<viewer token>
```

---

## License

Private — all rights reserved. © masterthepixel.
