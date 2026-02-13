# Migration plan — Sanity → file-based Markdown/MDX (repo-specific)

## Executive summary ✅

Migrate blog content from Sanity to a file-based MDX system so posts live in `content/posts/*.mdx`. Keep the Studio running during the migration for safety. Implement an idempotent NDJSON → MDX conversion script, add MDX rendering and frontmatter-based data loaders, migrate images into `public/uploads/` (or CDN), then remove Sanity runtime packages and environment variables after verification.

Why this repo is straightforward: the blog lives under `src/app/(frontend)/blog/` and Sanity post queries are centralized at `src/sanity/lib/queries/documents/post.ts`. The export `content-only.ndjson` plus `studio/masterthepixel/production-export-*/assets.json` contains everything needed to convert content and assets.

---

## Repo-specific actions at a glance 🔧

- Convert Sanity `post` documents (see `src/sanity/lib/queries/documents/post.ts`) into MDX files in `content/posts/`.
- Add MDX toolchain (recommended: `gray-matter` + `@mdx-js/react` or `@next/mdx`).
- Replace `sanityFetch` calls used by blog pages with filesystem readers (`lib/content.ts` helpers). Files to edit immediately:
  - `src/app/(frontend)/blog/[slug]/page.tsx` (routing + metadata)
  - `src/app/(frontend)/blog/page.tsx` (listing)
  - `src/app/(frontend)/blog/_components/post-content.tsx` (renderer)
  - `src/components/portable-text/portable-text-viewer.tsx` → replace with `components/MDXRenderer.tsx`
  - `src/sanity/lib/queries/documents/post.ts` (use as conversion map)
  - `sanity.types.ts` (replace Sanity-types usage with frontmatter types)
- Write an idempotent conversion script `scripts/sanity-to-mdx.js` that consumes `content-only.ndjson` and `assets.json`.
- Keep Studio (`studio/`) live until content parity is verified; decommission only after successful cutover and rollback window.

---

## Recommended frontmatter schema (example)

- title: string
- slug: string
- date: string (ISO 8601)
- draft: boolean
- excerpt: string
- categories: [string]
- category: string
- tags: [string]
- author: string | { name, avatar }
- coverImage: string (local path `/uploads/posts/...` or absolute URL)
- coverImageAlt: string
- canonical: string (optional)
- seo:
  - title: string
  - description: string
  - noIndex: boolean
- related: [slug] (optional)

Body: converted Portable Text → Markdown/MDX below frontmatter.

Store files in `content/posts/slug.mdx` (or `content/posts/YYYY-MM-DD--slug.mdx` if you prefer date-prefixed filenames).

---

## Content migration strategy (safe & repeatable) 📦

1. Inventory
   - Inspect `content-only.ndjson` and `studio/masterthepixel/production-export-*/assets.json` to confirm post count and asset URLs.
2. Conversion script (idempotent)
   - Node script `scripts/sanity-to-mdx.js` that:
     - Parses NDJSON documents for `_type == 'post'`.
     - Builds frontmatter from fields listed in `postBySlugQuery`.
     - Converts `content[]` (Portable Text) to Markdown/MDX using `@portabletext/to-markdown` or `@sanity/block-content-to-markdown`.
     - Downloads images referenced by posts to `public/uploads/posts/<slug>/` and rewrites URLs in Markdown body and frontmatter.
     - Outputs `content/posts/<slug>.mdx` and appends to/updates `content/posts.json` (index file used by site at build time).
     - Supports `--dry-run` and `--verify` mode to compare counts and show sample mappings.
3. Asset migration
   - Use `assets.json` to bulk-download assets; for missing assets, keep original remote URLs temporarily.
   - Prefer local storage under `public/uploads/posts/<slug>/` for deterministic builds and `next/image` usage.
4. Verification
   - Dry-run conversion reporting: counts, missing assets, unmatched block types, sample diffs.
   - Visual spot-check 10–20 representative posts (images, embeds, TOC, author block).
   - Run `pnpm run build` and Playwright smoke tests.
5. Cutover
   - Merge migration PR, trigger preview deploy, QA, then merge to main for production deploy.

---

## Code changes required (high-level) — where and why

- Data layer:
  - Replace `sanityFetch` calls in `src/app/(frontend)/blog/*` and `src/app/(frontend)/layout.tsx` with local `lib/content` helpers that read MDX frontmatter and bodies.
- Rendering:
  - Replace `PortableTextViewer` usages with `MDXRenderer`.
  - Implement MDX components mapping for existing Portable Text components (images, callouts, embeds, YouTube, etc.).
- Routing & metadata:
  - `generateStaticParams` / `generateMetadata` should read file frontmatter instead of Sanity queries.
- Search/index:
  - Create `content/posts.json` at migration time for listing and client-side search (same minimal shape as Sanity query returned previously).
- RSS & sitemap:
  - Generate RSS and sitemap from `content/posts.json` during build.
- Preview/draft-mode:
  - Replace Sanity preview with Git-based preview or implement `draft: true` handling (filter in production builds). Remove `SanityLive` after cutover.
- Images:
  - Use `next/image` with local `/public/uploads/` paths or update `next.config.js` for any external host.
- Types & tests:
  - Replace `PostBySlugQueryResult` usages with a new `PostFrontmatter`/`Post` type. Update unit and e2e tests accordingly.

---

## package.json & env changes

- Add (suggested):
  - `gray-matter` — read/write frontmatter
  - `@mdx-js/react` or `@next/mdx` / `next-mdx-remote` — MDX rendering
  - `remark-slug`, `remark-autolink-headings`, `rehype-highlight` (optional)
  - (for conversion) `@portabletext/to-markdown` or `@sanity/block-content-to-markdown`
- Remove (after cutover):
  - `@sanity/client`, `@sanity/image-url`, `@sanity/types`, `@sanity/vision`, other `@sanity/*` runtime deps
- CI / Env:
  - Remove `SANITY_API_READ_TOKEN` from environment and docs once Studio is decommissioned.
  - Update Vercel environment variables and deployment settings if you used the Studio deployment.

---

## Testing & verification ✅

Pre-merge smoke tests (must pass before cutover):
- `pnpm run build` succeeds locally.
- All migrated posts are present in `content/posts/` and count matches `content-only.ndjson` (script report).
- 10 representative posts render correctly (images, TOC, embeds).
- Playwright smoke tests updated to assert blog listing & a post detail load without console errors.
- RSS & sitemap contain expected entries.

Post-merge rollout checks:
- Production preview matches main branch content.
- 24–48 hour rollback window where Studio/previous state is preserved.

---

## Rollout & rollback plan (safe approach) ⚠️

1. Merge migration to a feature branch and deploy to a preview environment.
2. QA thoroughly (editor verification, SEO check, Playwright tests, manual spot checks).
3. Deploy to production during a low-traffic window.
4. Keep Studio and last Sanity snapshot/tagged state (do not delete content or Sanity project immediately).
5. If regression found, revert the deployment (standard revert of the merge PR). Sanity remains available as fallback while rollback is implemented.
6. After 1–2 weeks of stable production and editorial sign-off, archive Studio and remove Sanity runtime deps.

---

## Timeline & effort (recommended phased milestones)

- Milestone A (Discovery + frontmatter spec + sample conversion): 1 day (4–8 hours)
- Milestone B (Converter + asset migration + index generation): 2–3 days (12–18 hours)
- Milestone C (MDX integration + page wiring + tests): 2 days (8–12 hours)
- Milestone D (QA, e2e tests, cutover + cleanup): 1–2 days (6–10 hours)

Total estimate: ~36 hours (complexity: medium). Adjust ±50% for unpredictable custom blocks or large asset counts.

---

## Migration checklist (ordered PR scope suggestions) 🗂️

1. PR-1 (small): Add MDX support, `lib/content.ts` skeleton, `components/MDXRenderer.tsx`, and sample post at `content/posts/sample.mdx`.
2. PR-2 (converter): Add `scripts/sanity-to-mdx.js` (dry-run mode) and run on CI to produce `content/posts.json` (do not commit converted posts yet).
3. PR-3 (pages): Switch blog listing & post page to read from `lib/content`. Update `PostContent` to use `MDXRenderer` and adjust `blog-search` prop usage.
4. PR-4 (assets & conversion): Commit converted posts + images under `public/uploads/`. Update tests and snapshot files.
5. PR-5 (QA + RSS/sitemap): Add RSS generation, update sitemap generation, fix edge-cases.
6. PR-6 (cleanup): Remove Sanity runtime packages, update docs, archive Studio.

---

## Risks & gotchas (detailed) 🚩

- Portable Text conversion often needs custom mapping for atomic blocks (videos, callouts, buttons). Mitigate by: (a) enumerating block types from `pageBuilder`/Portable Text in export, (b) creating MDX shortcodes for those blocks, (c) logging unmapped blocks in the converter.
- References between documents (author pages, internal page references) must be rewritten to site URLs. Conversion script should resolve references and write `href` values.
- Drafts: Sanity drafts are not automatically part of the export unless exported. Detect document IDs prefixed with `drafts.` and mark `draft: true` in frontmatter.
- SEO/Open Graph: Ensure `seo` object maps to frontmatter and OG image paths are resolvable by `next/image`.

---

## Example verification commands (described in prose)

- Run the conversion script in dry-run mode to validate counts and missing assets (the script prints a summary report).
- Run local dev server (`pnpm run dev`) pointing to the branch with MDX changes and confirm blog listing and multiple post pages load.
- Run the static build (`pnpm run build`) and verify the production build succeeds with no Sanity runtime errors.
- Run Playwright tests (existing `tests/e2e`) after updating expectations to check main flows.

---

## Final recommendations / next steps 💡

1. Start with an exploratory conversion of 5–10 posts (PR-1/PR-2) to verify Portable Text → MDX fidelity and to design MDX component mapping.
2. Keep Studio available as read-only during the entire migration and for at least one release after cutover.
3. Implement a `--dry-run` and `--report` option in the converter script to identify any manual remediation required.
4. If editorial workflow must remain WYSIWYG, evaluate lightweight file-based CMS alternatives (Netlify CMS, Forestry, Tina) before removing Studio.

---

If you want, I can now: (A) generate the detailed `scripts/sanity-to-mdx.js` pseudocode and a sample MDX file, or (B) perform an inventory of all `post` documents in `content-only.ndjson` and produce a CSV-to-MDX mapping preview. Tell me which next step to take.
