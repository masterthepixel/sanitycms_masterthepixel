# Epic: Replace Sanity CMS with file-based Next.js content

## Summary (one line)
Replace Sanity as the site's content source and migrate all content (posts, page-builder pages, projects, legal, redirects, assets) to a file-based system while preserving the existing UI. You will be the single editor and content will be edited directly in the repository (MDX/JSON).

## Goals
- Remove Sanity runtime and embedded Studio once migration is validated. ✅
- Preserve the existing site UI/components (no redesign). 🎨
- Use a simple, repo-first editing flow: MDX/JSON files edited directly by the single site editor — **editorial preview is optional**. 🗂️
- Provide rollback plan and keep Sanity export as a backup during the transition. 🔁
- Pre-merge backup: create a tagged Sanity export snapshot and a git tag before the epic merge.

## Success criteria
- All pages served from file-based content; `pnpm run build` passes without Sanity deps.
- Blog posts and Page Builder pages render identically or with acceptable parity.
- Playwright smoke tests and SEO checks pass for migrated pages. The site editor (you) verifies content post-migration.

---

## Epic timeline & estimate
- Total estimate: ~5–9 business days (40–80 hours) depending on block complexity and assets. Complexity: medium → large. (reduced because you are the sole editor and preview cycles are minimal.)

---

## Stories (priority order)

### Story 1 — Add file-content foundation (MDX reader + sample content)
- ID: MIG-001
- Goal: Add MDX parsing + content reader so the app can consume file-based content.
- Tasks:
  - Add `gray-matter` + `@mdx-js/react` (or `next-mdx-remote`).
  - Create `src/lib/content.ts` with `getAllPosts`, `getPostBySlug`, `getPageBySlug`.
  - Add `content/posts/sample.mdx` and `content/pages/sample.mdx`.
  - Add unit tests for content reader.
  - Create epic branch `feature/migration/sanity-to-md` (from `main`) and protect `main`.
  - Add pre-migration git tag and store a Sanity export snapshot (backup).
- Acceptance criteria:
  - `getAllPosts()` returns sample post metadata.
  - `pnpm run dev` shows sample pages without Sanity.
- Estimate: 8–12 hours

### Story 2 — Convert Page Builder pages to MDX (pilot)
- ID: MIG-002
- Goal: Migrate 3 representative Page Builder pages to MDX to validate mapping approach.
- Tasks:
  - Select 3 pages that cover common blocks (hero, feature grid, testimonial).
  - Create MDX component wrappers for those blocks (`components/mdx/*`).
  - Convert page JSON → MDX manually for pilot pages.
  - Update routing to load MDX page data.
- Acceptance criteria:
  - Pilot pages render identically in preview.
  - No Sanity runtime calls for those pages.
- Estimate: 12–20 hours

### Story 3 — NDJSON → MDX/JSON converter script
- ID: MIG-003
- Goal: Provide an idempotent script to convert Sanity export to file-based content.
- Tasks:
  - Implement `scripts/sanity-to-mdx.js` with `--dry-run` and `--report`.
  - Convert Portable Text content to Markdown/MDX (use converter lib).
  - Download assets referenced in `assets.json` into `public/uploads/`.
  - Produce `content/posts.json` index summary.
  - Add NDJSON validator/cleaner to pre-process `content-only.ndjson` (idempotent) so the converter never fails on malformed exports.
- Acceptance criteria:
  - Dry-run reports counts and unmapped blocks and validates NDJSON input.
  - Script can convert a sample set reproducibly.
- Estimate: 12–24 hours

### Story 4 — Replace blog & post pages to use file content
- ID: MIG-004
- Goal: Swap out `sanityFetch` on blog listing and post detail with the file reader.
- Tasks:
  - Update `src/app/(frontend)/blog/page.tsx` and `[slug]/page.tsx`.
  - Replace `PortableTextViewer` with `MDXRenderer` where needed.
  - Update `generateStaticParams` / `generateMetadata` to read frontmatter.
  - Update search index source to `content/posts.json`.
- Acceptance criteria:
  - All blog pages render from local MDX files and pass existing tests.
- Estimate: 8–16 hours

### Story 5 — Migrate remaining pages & site singletons
- ID: MIG-005
- Goal: Migrate Projects, Services, Legal pages, site-settings to file-based content.
- Tasks:
  - Convert singletons to `content/site.json` or `src/config/site.ts`.
  - Convert remaining Page Builder pages to MDX/JSON using the converter.
  - Update `src/app/(frontend)/layout.tsx` and `src/components/*` calls to read file content.
- Acceptance criteria:
  - All non-Studio pages served from file content.
- Estimate: 12–24 hours

### Story 6 — Asset migration, images, redirects & SEO
- ID: MIG-006
- Goal: Migrate images, update `next/image` usage, create redirects and map SEO fields.
- Tasks:
  - Bulk-download assets; store under `public/uploads/posts/*`.
  - Map `seo` fields into frontmatter for each MDX.
  - Convert Sanity redirects into `next.config.js` static redirects or `data/redirects.json`.
- Acceptance criteria:
  - OG images load properly; redirects work on staging.
- Estimate: 6–12 hours

### Story 7 — QA, tests & cutover
- ID: MIG-007
- Goal: Update tests, run QA and perform the production cutover.
- Tasks:
  - Update Playwright tests and unit tests to use file content.
  - Run full regression and the author's verification checks.
  - Merge to main and monitor rollback window.
- Acceptance criteria:
  - All tests pass; site editor (you) verifies content and signs off.
- Estimate: 6–12 hours

### Story 8 — Sanity cleanup & archive Studio
- ID: MIG-008
- Goal: Remove Sanity runtime packages and archive embedded Studio.
- Tasks:
  - Remove `@sanity/*`, `next-sanity` from `package.json`.
  - Remove `src/sanity/lib/*` files or move to `archive/` folder.
  - Update docs and CI env vars (remove `SANITY_API_READ_TOKEN`).
- Acceptance criteria:
  - `pnpm run build` succeeds; no Sanity references remain in runtime.
- Estimate: 4–8 hours

---

## Tasks & sub-tasks (example GitHub issue checklist for MIG-004)
- [ ] Update blog listing to read `content/posts.json` (server-side)
- [ ] Replace `PortableTextViewer` with `MDXRenderer`
- [ ] Update `generateStaticParams` for posts
- [ ] Update SEO metadata mapping
- [ ] Add unit tests and update e2e assertions

---

## Acceptance / QA checklist (must pass before cutover)
- [ ] Build succeeds without Sanity runtime.
- [ ] Representative pages (home, blog post, project, legal) visually match production.
- [ ] RSS + sitemap updated and validated.
- [ ] Frontmatter parity verified for migrated files (`seo.title`, `seo.description`, `coverImage`).
- [ ] Playwright smoke tests pass.
- [ ] Site editor (you) has verified content in staging.
- [ ] Backups preserved (Sanity export + tagged git branch).

---

## Risks, mitigations & rollback
- Risk: unmapped Page Builder blocks → Mitigate by pilot conversions. Keep a report of unmapped blocks and leave affected pages as JSON until manually fixed.
- Backup mitigation: create a pre-merge Sanity export snapshot and a git tag so you can restore or compare content quickly. If major regressions occur, rollback by reverting the PR; Studio can be archived later since you are the sole editor.

---

## Suggested milestones / sprints (2-week cadence example)
- Sprint 1: MIG-001, MIG-002 (foundation + pilot)
- Sprint 2: MIG-003, MIG-004 (converter + blog switch)
- Sprint 3: MIG-005, MIG-006 (remaining pages + assets)
- Sprint 4: MIG-007, MIG-008 (QA, preview, cleanup)

---

## Branching & PR strategy (required)
- Use a dedicated epic branch so the migration is reviewable and reversible.
  - Epic branch name: `feature/migration/sanity-to-md` (create from `main`).
  - Story branches: `feature/migration/sanity-to-md/mig-001`, `.../mig-002`, etc.
- Workflow (recommended):
  1. Keep `main` protected and up to date.
  2. Create the epic branch locally and push: `git checkout -b feature/migration/sanity-to-md && git push -u origin feature/migration/sanity-to-md`.
  3. Create each story branch from the epic branch and open PRs into the epic (not `main`).
  4. Merge story PRs into the epic branch after CI + review. When the epic is complete, open one PR from the epic → `main`.
- PR conventions and checks:
  - PR title: `[MIG-xxx] Short description` (include story ID).
  - PR body: link to the story in `docs/migration-sanity-to-md-story.md`, checklist, manual test steps, and screenshots if applicable.
  - Require CI (lint, typecheck, build, e2e smoke) and one approval before merge to the epic branch; require your approval for epic → `main`.
- Staging & release:
  - Deploy the epic branch to a preview environment for visual QA.
  - After sign-off, merge epic → `main` and deploy to production during a low-traffic window.
- Rollback & cleanup:
  - If rollback required, revert the epic PR on `main` or redeploy the last good `main` commit.
  - Delete story branches after merge; keep a git tag of the final migration commit for archive.

---

## Owners & roles (suggested)
- Engineering lead — overall migration owner
- 1–2 frontend devs — content reader, MDX components, wiring
- 1 QA engineer — Playwright/visual checks
- Product/Content owner — editorial verification and sign-off

---

If you want, I can now: (A) convert 3 pilot Page Builder pages to MDX and open PR draft, or (B) convert a CSV-style report of `content-only.ndjson` sample pages so you can review mappings first. Which do you want next?