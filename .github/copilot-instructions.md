# masterthepixel Copilot Instructions

## Architecture Overview

This is a Next.js 15 app with Sanity CMS, using App Router with route groups for frontend/backend separation:
- `(frontend)/` - Public-facing pages with SSR/SSG
- `(backend)/` - API routes for draft mode, email, OG images
- `studio/` - Embedded Sanity Studio at `/studio`

**Key Integration Points:**
- Sanity Live Queries with `sanityFetch()` for real-time updates
```instructions
# masterthepixel — Copilot instructions (developer-facing)

## Quick context (one-liner)
Monorepo-style Next.js (App Router v15) site with an embedded Sanity Studio (project: 5ywyt4ng). Core feature is a modular Page Builder backed by Sanity content and Live queries.

## Big-picture architecture
- Frontend: `src/app/(frontend)/` — public pages, page-builder rendering, site metadata (`layout.tsx`).
- Backend: `src/app/(backend)/` — API routes for draft-mode, OG generation, transactional email.
- Sanity Studio: `studio/masterthepixel/` (root for Vercel deploys and local studio work).

## Essential developer flows (commands)
- Repo root: use `pnpm` (v10) for site tasks; Node 20.x is used in CI.
  - Install: `pnpm install`
  - Frontend dev: `pnpm run dev` (Next.js App Router)
  - Build site: `pnpm run build`
- Studio: `cd studio/masterthepixel` then:
  - Install: `pnpm install` (or `npm install`)
  - Local dev: `pnpm run dev` (alias to `sanity start`)
  - Build: `pnpm run build` (produces `dist/`)
  - Create viewer token: `sanity tokens add "Label" --role viewer --project <projectId> --raw`

## Vercel deployment notes
- Root for the Studio deployment is `studio/masterthepixel` (we linked the project). Use `vercel --prod` from that directory to publish.
- Recommended env vars (Vercel project scope):
  - `NEXT_PUBLIC_SANITY_PROJECT_ID` = 5ywyt4ng
  - `NEXT_PUBLIC_SANITY_DATASET` = production
  - `SANITY_API_READ_TOKEN` = <viewer token> (encrypted)
- If deployment protection is enabled, disable it in Vercel dashboard or use a bypass token for testing.

## Sanity-specific patterns to follow
- Use `defineQuery()` in `src/sanity/lib/queries/` for type inference and to keep queries central.
- Use `sanityFetch()` / `sanityLive` exported from `src/sanity/lib/live.ts` for server-side and live queries (this handles draft mode logic and revalidation tags).
- Schema-first: types are under `src/sanity/schemas/*`. Generated types land in `sanity.types.ts` — prefer those in app code for strong typing.

## Page Builder specifics
- Entrypoint: `src/components/page-builder/index.tsx` — maps Sanity `pageBuilder[]` to React components (blocks/ folder).
- Blocks are loaded with dynamic imports; follow existing block patterns (hero, feature, testimonial). Example props: `({ pageBuilder })` or typed `NewBlock({ block }: { block: NewBlockType })`.

### Sample block creation checklist ✅

1. **Add a Sanity schema**: create `src/sanity/schemas/page-builder/blocks/<blockName>.ts` using an existing block (e.g., `heroBlock`) as reference.
  - Export the block in `src/sanity/schemas/page-builder/index.ts` so it becomes part of the compiled schema.
2. **Add / update query fragments** (if needed): place reusable GROQ fragments in `src/sanity/lib/queries/fragments/page-builder/blocks.ts` and reference them in `pageBySlug`.
3. **Generate types**: run schema extract and type generation (if your workflow uses it):
  - `npx sanity@latest schema extract --path=src/sanity/extract.json`
  - `npx sanity@latest typegen generate` (or the repo's typegen script if present)
4. **Create the React block**: add `src/components/page-builder/blocks/<BlockName>.tsx`.
  - Default export a component that accepts the typed block prop (from `sanity.types.ts`).
  - Keep it small & testable; prefer semantic HTML and Tailwind utility classes.
  - Minimal example:
  ```tsx
  export default function NewBlock({ block }: { block: any }) {
    return <section className="py-16">{block?.heading}</section>
  }
  ```
5. **Wire into page-builder**: ensure the block name matches the schema `_type` and that `index.tsx` (page-builder) will render it (dynamic import key or mapping).
6. **Test locally**: run `pnpm run dev`, create a page in Studio using the new block, and verify it renders on the appropriate page (home or slug).
7. **Build & deploy checks**: run `pnpm run build` for the site and `cd studio/masterthepixel && pnpm run build` for Studio; fix any type or build issues before pushing.
8. **Commit & document**: include schema and component changes in a single PR/commit; add a short note in the commit message about where you updated the schema, types, and component.


## Useful files to inspect first
- `src/sanity/lib/live.ts` — live content client + `sanityFetch` exports
- `src/app/(frontend)/page.tsx` and `src/app/(frontend)/[slug]/page.tsx` — page rendering & `generateStaticParams`
- `src/sanity/lib/queries/` — all GROQ queries (singletons & documents)
- `studio/masterthepixel/sanity.config.ts` — sanity project config and dataset
- `.env.example` / `.env.local` — required env var names

## Conventions & gotchas (project-specific)
- Flattened studio path is `studio/masterthepixel` (historically nested; don't re-create nested folders).
- Use `SANITY_API_READ_TOKEN` (viewer) for server-browser live preview tokens — required for `defineLive` usage.
- `next.config.ts` fetches redirects from Sanity at build time; ensure build has access to Sanity when building on Vercel.
- Large files (e.g., `demo-content.tar.gz`) exist in history — consider Git LFS if adding similar assets.

## How AI agents should help (short guidance)
- When asked to add a block, update schema in `src/sanity/schemas/page-builder/*`, run `sanity schema extract` (if the repo uses typegen), and add a React block in `src/components/page-builder/blocks/` with the same export name.
- For data-related tasks: prefer editing/adding queries in `src/sanity/lib/queries/` and use `defineQuery()` to keep types aligned.
- For deployments: modify `studio/masterthepixel/sanity.cli.ts` only if you know what `appId` or deploy channels require; use the Vercel project linked to `studio/masterthepixel` for Studio deployments.

## Recent updates (Dec 2025) 🚀

- **Blog improvements:** Author hover tooltips use a Radix HoverCard; dates use `formatDate` with ordinal suffixes; the post content is rendered with a client-only `PortableTextViewer` to prevent server-to-client event handler issues; the blog post layout now includes a responsive right sidebar (Table of Contents + Posts by Category) and uses `prose` typography classes for article text.
- **Post card accessibility/fix:** Post cards previously wrapped with an outer `<Link>` caused nested `<a>` issues. Cards are now clickable `<article>` elements using `router.push` with keyboard handlers (role="link", tabIndex) to avoid nested anchors while preserving accessibility.
- **Projects page parity:** The Projects listing, toolbar, categories, and grid were copied to match the reference repository and now use `ProjectGrid` / `ProjectCard` components.
- **Legal pages added & canonical via Sanity:** Added `/acknowledgements`, `/terms-of-use`, and `/privacy-policy`. These now fetch canonical content from Sanity using `pageBySlugQuery` and render via `PageBuilder`, with local fallbacks if Sanity data is missing.
- **Layout spacing fix:** Blog post detail wrapper increased to `max-w-7xl` so the main content and sidebar match the reference spacing.
- **TypeScript note:** Some prop types were relaxed to unblock integration; we should tighten these types once the Sanity schema is finalized.

## Recommended follow-ups

- Import canonical legal page content into Sanity (I can prepare a create/patch script using our production export if you want single source-of-truth content in Sanity).
- Add Playwright smoke tests: assert blog listing loads without console errors, legal pages load, and footer legal links present. I can add a small test suite and a GitHub Action workflow for CI.
- If you want pixel-perfect parity, I can run a visual diff for Blog/Projects pages and apply targeted CSS tweaks for spacing/typography.

---
If anything here looks incomplete or you want more examples (e.g., a sample new block, or a walkthrough for adding an env var + preview deploy on Vercel), tell me which part to expand and I’ll iterate.
```

## Testing (recommended checks & examples) 🧪

Automated tests are not yet enforced in this repo, but we rely on a small set of repeatable checks (lint/typecheck/build) and recommend adding end-to-end tests with Playwright for regressions.

Quick smoke checks (manual / CI):
- Lint: `pnpm run lint` (uses Next.js ESLint config)
- Type check: `npx tsc --noEmit` (runs against repo TypeScript config)
- Build checks:
  - Frontend: `pnpm run build` (root)
  - Studio: `cd studio/masterthepixel && pnpm run build`

Local smoke test flow:
1. Start dev servers: `pnpm run dev` (frontend) and `cd studio/masterthepixel && pnpm run dev` (Studio).
2. Run Playwright tests (in a separate terminal) after the dev server is ready:
  - `pnpm run test:e2e` (or `pnpm run test:e2e:headed`)
  - If you prefer, start dev server manually and set `PW_BASE_URL` to run tests against a specific URL (e.g., `PW_BASE_URL=http://localhost:3000 pnpm run test:e2e`).
  - Note: the Playwright config defaults to `reuseExistingServer: true` — starting the dev server first avoids build-time auto-start issues in complex monorepo layouts.
2. Create or edit a page in Studio, save, and verify the frontend shows changes via `sanityFetch` live updates or a page refresh.
3. Run the build checks above to ensure the production build succeeds locally before pushing.

End-to-end tests (recommended):
- Install Playwright: `pnpm add -D @playwright/test && npx playwright install`.
- Minimal test example `tests/e2e/home.spec.ts`:
```ts
import { test, expect } from '@playwright/test'

test('home page loads', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page).toHaveTitle(/masterthepixel/i)
  await expect(page.locator('#home')).toBeVisible()
})
```
- Run locally with `npx playwright test --headed` or in CI with `npx playwright test`.

Studio-specific tests:
- Start Studio locally (`cd studio/masterthepixel && pnpm run dev`) and point Playwright at `http://localhost:3333` (or the port shown by `sanity start`).
- Test that key Studio routes load and schema editors render without errors.

CI checklist to add to GitHub Actions (example):
- Install deps: `pnpm install`
- Run lint + typecheck: `pnpm run lint && npx tsc --noEmit`
- Build frontend + studio: `pnpm run build && cd studio/masterthepixel && pnpm run build`
- Install Playwright and run e2e tests: `npx playwright install && npx playwright test`

Test data & fixtures:
- Use the demo dataset export if you need predictable content for tests: `npx sanity dataset import <path> production` before running Studio or e2e tests.

If you want, I can add a Playwright config and a GitHub Action workflow template that implements the CI checklist above — say “add e2e CI” and I’ll create it.