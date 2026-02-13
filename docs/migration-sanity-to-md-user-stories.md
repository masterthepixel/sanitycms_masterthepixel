# Migration — User stories (Product Owner breakdown)

Epic: Replace Sanity CMS with file-based Next.js content

Notes: these user stories are PO-written and developer-ready. Each story contains description, acceptance criteria, developer tasks, estimate, priority and `done` checklist.

---

### MIG-001 — Add file-content foundation (MDX reader + sample content)
- Priority: High
- Estimate: 8–12 hours
- Description: Add MDX support and a small content-reading library so the app can load posts/pages from `content/` files instead of Sanity. Create an epic branch and a sample MDX page to validate the change.
- Acceptance criteria:
  - `content/posts/sample.mdx` and `content/pages/sample.mdx` exist and render correctly
  - `src/lib/content.ts` exposes `getAllPosts()`, `getPostBySlug()`, `getPageBySlug()` and has unit tests
  - `pnpm run dev` and `pnpm run build` succeed
- Developer tasks:
  - Add dependencies (`gray-matter`, `@mdx-js/react` or `next-mdx-remote`) and update `package.json`
  - Implement `src/lib/content.ts` (fs-based server helpers)
  - Add `components/MDXRenderer.tsx` with basic MDX components mapping
  - Create two sample MDX files with frontmatter
  - Add unit tests for content reader
  - Create branch `feature/migration/sanity-to-md/mig-001` and open draft PR into `feature/migration/sanity-to-md`
- Done when:
  - All acceptance criteria met and PR opened

---

### MIG-002 — Pilot: Convert 3 Page Builder pages to MDX
- Priority: High
- Estimate: 12–20 hours
- Description: Convert three representative Page Builder pages (choose pages covering hero, feature grid, testimonial blocks) into MDX and implement MDX wrappers for reused block components.
- Acceptance criteria:
  - 3 pilot pages render identically when served from MDX
  - No Sanity runtime calls for pilot pages
- Developer tasks:
  - Identify 3 pages (PO to select)
  - Create `components/mdx/*` wrappers that reuse existing UI blocks
  - Convert page builder JSON → MDX files manually for pilots
  - Wire router to read pilot pages from `content/pages/` using `src/lib/content.ts`
  - Visual QA and snapshot tests
- Done when:
  - Pilot PR merged into epic and PO signs off on visual parity

---

### MIG-003 — NDJSON → MDX/JSON converter script (idempotent)
- Priority: High
- Estimate: 12–24 hours
- Description: Build an idempotent converter that transforms `content-only.ndjson` into MDX/JSON files; includes asset download and NDJSON validation/cleaner.
- Acceptance criteria:
  - `scripts/sanity-to-mdx.js --dry-run` reports counts, lists unmapped blocks, and validates NDJSON
  - Script can convert sample posts reproducibly and generate `content/posts.json` index
- Developer tasks:
  - Implement NDJSON validator/cleaner (pre-process step)
  - Implement block mapping and Portable Text → Markdown/MDX conversion
  - Asset downloader that writes to `public/uploads/<type>/<slug>/`
  - `--dry-run`, `--report` and `--commit` modes
  - Unit/integration tests for converter (sample fixtures)
- Done when:
  - Converter dry-run shows zero critical unmapped blocks for sample set and PR merged

---

### MIG-004 — Replace blog listing & post pages to use file content
- Priority: High
- Estimate: 8–16 hours
- Description: Replace `sanityFetch` usages for blog listing and post detail pages with `src/lib/content.ts` and MDX renderer.
- Acceptance criteria:
  - Blog list and individual post pages are served from `content/` files
  - `generateStaticParams` / `generateMetadata` read frontmatter
  - Tests (unit + e2e) updated and passing
- Developer tasks:
  - Update `src/app/(frontend)/blog/page.tsx` and `src/app/(frontend)/blog/[slug]/page.tsx`
  - Replace PortableTextViewer with `MDXRenderer` or mapped wrapper
  - Update search/index to use `content/posts.json`
  - Update/extend tests and Playwright assertions
- Done when:
  - PO confirms blog pages render correctly from MDX and CI passes

---

### MIG-005 — Migrate remaining pages & singletons to file content
- Priority: Medium
- Estimate: 12–24 hours
- Description: Convert Projects, Services, Legal pages, and site singletons (navigation, settings) to file-based content (MDX or JSON as appropriate).
- Acceptance criteria:
  - `src/app/(frontend)/layout.tsx` reads site settings from `content/site.json` or `src/config/site.ts`
  - All major public pages served from file content
- Developer tasks:
  - Convert singletons and Page Builder pages using converter or manual conversion
  - Ensure `page-builder` frontend accepts file-based block arrays when needed
  - Update type definitions and remove Sanity-type usage from runtime
- Done when:
  - Site pages render from file content and PO signs off on parity

---

### MIG-006 — Asset migration, images, redirects & SEO
- Priority: Medium
- Estimate: 6–12 hours
- Description: Migrate assets to `public/uploads/`, update `next/image` usage and port redirects & SEO fields into frontmatter.
- Acceptance criteria:
  - OG/cover images render correctly via `next/image`
  - Redirects are present in `next.config.js` or `data/redirects.json`
  - Frontmatter includes `seo.title`, `seo.description`, `coverImage` for each migrated file
- Developer tasks:
  - Bulk-download assets per `assets.json`
  - Repoint frontmatter image URLs to local `/uploads/` paths
  - Add redirects to `next.config.js` static redirects
  - Add automatic frontmatter validation check in CI
- Done when:
  - Images/redirects verified on staging and frontmatter checks pass

---

### MIG-007 — QA, tests & cutover
- Priority: High
- Estimate: 6–12 hours
- Description: Update unit/e2e tests, perform regression, PO verification, then merge epic branch to `main` and cutover.
- Acceptance criteria:
  - Playwright e2e suite passes against epic branch build
  - PO verifies migrated pages in staging
  - Epic PR merged to `main` and production deploy succeeds
- Developer tasks:
  - Update tests (unit + Playwright) to use `content/` data
  - Run regression & visual spot-checks
  - Prepare rollback instructions and backups (git tag + sanity export)
- Done when:
  - All tests pass and PO signs off on staging

---

### MIG-008 — Sanity cleanup & archive Studio
- Priority: Low
- Estimate: 4–8 hours
- Description: Remove Sanity runtime, archive studio files and update docs & CI env vars.
- Acceptance criteria:
  - `@sanity/*` packages removed from `package.json`
  - No Sanity runtime code left in `src/` that runs in production
  - `SANITY_API_READ_TOKEN` removed from CI/Vercel envs
- Developer tasks:
  - Remove packages and run a full build/test
  - Move `studio/` to `archive/studio/` or keep read-only in repo
  - Update docs to reflect new authoring workflow
- Done when:
  - Build passes and PR merged; final tag applied for archive

---

## How to use these stories
- Create issues from each section (copy the title, description, tasks, and acceptance criteria). Assign MIG-001 first and branch from `feature/migration/sanity-to-md`.
- PO will review acceptance results and mark stories `done` when criteria are met.

---

If you want, I can now: (A) create the story issues as draft GitHub issues in your repo (I will add the markdown for each so you can paste them), or (B) start implementing MIG-001 on a feature branch and open a draft PR. Which next?