# masterthepixel Copilot Instructions

## Architecture Overview

This is a Next.js 15 app with Sanity CMS, using App Router with route groups for frontend/backend separation:
- `(frontend)/` - Public-facing pages with SSR/SSG
- `(backend)/` - API routes for draft mode, email, OG images
- `studio/` - Embedded Sanity Studio at `/studio`

**Key Integration Points:**
- Sanity Live Queries with `sanityFetch()` for real-time updates
- Visual Editing via `next-sanity` with draft mode previews
- Page Builder system with 12+ dynamic blocks
- Shared layout with settings queries in `(frontend)/layout.tsx`

## Page Builder System

The core feature is a modular page builder in `src/components/page-builder/`:
- `index.tsx` - Main orchestrator with dynamic imports
- `blocks/` - 12 content blocks (hero, features, testimonials, etc.)
- Uses Sanity's `pageBuilder` array field with conditional rendering
- Each block receives props typed from `sanity.types.ts` (auto-generated)

**Pattern for new blocks:**
```tsx
export default function NewBlock({ block }: { block: NewBlockType }) {
  return (
    <section>
      {/* Always wrap in semantic HTML */}
    </section>
  );
}
```

## Sanity Integration Patterns

**Query Structure:**
- Singletons: `src/sanity/lib/queries/singletons/` (settings, navigation)
- Documents: `src/sanity/lib/queries/documents/` (pages, posts)
- Use `defineQuery()` for TypeScript inference
- Prefer `sanityFetch()` over direct client calls for caching

**Schema Organization & Relationships:**
- `src/sanity/schemas/singletons/` - Global settings with page references
- `src/sanity/schemas/documents/` - Content types (pages, posts, services, projects)
- `src/sanity/schemas/page-builder/` - Block definitions organized in groups
- `src/sanity/schemas/objects/` - Reusable field groups (SEO, buttons, headings)

**Key Schema Patterns:**
- Page references use `pageReferenceTypes` for consistent linking
- SEO object (`seoObject`) shared across content types with auto-generated fallbacks
- Page builder array with 12 blocks grouped by purpose (intro, content, marketing, social proof)
- Settings singletons reference pages for homepage/landing page assignment

**Studio Structure:**
Custom studio structure in `src/sanity/lib/structure/` with organized sidebar items.

**Webhooks & ISR:**
- Currently manual revalidation (webhooks not configured)
- Redirects fetched from Sanity at build time via `fetchRedirects()`
- Live queries provide real-time updates in development

## Development Workflows

**Package Manager:** Uses Bun (preferred) with PNPM fallback
```bash
bun dev            # Start with Turbopack
bun run build      # Production build
```

**Environment Setup:**
- Copy `.env.example` to `.env.local`
- Requires Sanity project ID, dataset, and API token
- Demo content available from original SiteEngine repo

**Key Commands:**
```bash
# Import demo content
npx sanity dataset import <path> production

# Access studio
http://localhost:3000/studio

# Draft mode preview
/api/draft-mode/enable?slug=<page-slug>
```

## Component Architecture

**Global Components:** `src/components/global/`
- `container.tsx` - Consistent layout wrapper
- `client-layout.tsx` - Client-side layout state
- `navbar.tsx` & `footer.tsx` - Navigation components

**Shared Components:** `src/components/shared/`
- Reusable UI elements used across blocks
- Often receive Sanity data as props

**UI Components:** `src/components/ui/`
- Shadcn/ui base components
- Low-level, unstyled components

## State Management

No global state library - uses:
- Server state via Sanity Live Queries
- Form state via React Hook Form + Zod
- Client state in `client-layout.tsx` for navigation

## Styling Conventions

**Tailwind CSS** with custom config:
- Custom breakpoints and spacing
- Font families: `geistSans`, `geistMono`
- Pattern backgrounds and animations defined
- **Note:** Dark mode not yet implemented (see `docs/dark-mode-ui-audit.md`)

**Component Patterns:**
- Use `clsx()` for conditional classes
- Prefer semantic HTML (`<section>`, `<article>`, etc.)
- Consistent spacing with `py-16` for sections

## API Routes

Located in `src/app/(backend)/api/`:
- `send/route.ts` - Email via Resend
- `draft-mode/` - Sanity preview toggles
- `og/route.tsx` - Dynamic OG image generation

## Type Safety

- `sanity.types.ts` auto-generated from schemas
- Import types from generated file: `PageBySlugQueryResult`
- Use `defineQuery()` for query validation
- Strict TypeScript config

## Critical Files

- `sanity.config.ts` - Studio configuration and plugins
- `src/app/(frontend)/layout.tsx` - Settings queries and metadata
- `src/sanity/lib/live.ts` - Live query configuration
- `next.config.ts` - Redirects from Sanity data

## Performance Notes

- Dynamic imports for page builder blocks
- Image optimization via `next/image` with Sanity CDN
- ISR with Sanity webhooks (not yet configured)
- Uses Turbopack in development for faster builds