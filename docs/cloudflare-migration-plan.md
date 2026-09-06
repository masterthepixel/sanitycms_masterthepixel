# Vercel → Cloudflare migration plan (masterthepixel.io)

Status: PLAN ONLY — nothing below has been executed.
Drafted: 2026-09-05. Source of truth for facts: audit run on that date.

## 0. Decisions and fixed facts

| Item | Decision / fact |
|---|---|
| Domain | **masterthepixel.io** (stay). masterthepixel.com is owned by a third party since 2026-08-16; ignore it. |
| Repo | `masterthepixel/sanitycms_masterthepixel`, branch `main`. Name is stale; Sanity is gone. Consider renaming the repo to `masterthepixel.io` at the end (GitHub redirects old URLs). |
| Current host | Vercel project `sanitycmsmasterthepixel`, team `masterthepixel-s-team`. Zero env vars. No `vercel.json`. |
| Target host | Cloudflare **Workers free plan**, Workers Static Assets. Account already runs okchale-web on Workers. |
| Package manager | **bun** (1.3.13 installed). Drop pnpm. |
| Next.js | Upgrade **15.5.18 → 16.3.x** before the Cloudflare cut-over. |
| Build target | **Static export** (`output: "export"`) is the primary path. OpenNext is Plan B. Rationale in §5. |
| CI/CD | Cloudflare Workers Builds (GitHub integration). Keep the existing GitHub Actions job for content validation + Playwright. |
| Email | masterthepixel.io mail currently forwards via Namecheap `eforward*` MX. Moving nameservers to Cloudflare **breaks Namecheap forwarding**. Replace with Cloudflare Email Routing (free) in the same change. |
| `/news` route | **Keep.** Content to be added; route and nav stay. |
| Canonical host | **`www.masterthepixel.io`**. Apex redirects to www (as today). |

Execution log: see `docs/cloudflare-migration-log.md`.

## 1. Phase 0 — Repo hygiene and branch management

Goal: one clean `main`, no dead branches, no leaked secrets, before any upgrade work starts.

### 1.1 Branch state (as of 2026-09-05)

| Branch | Where | State | Action |
|---|---|---|---|
| `main` | local + origin | clean, tracks origin/main | keep |
| `chore/tailwind-v4-upgrade` | local only | fully merged into main | delete |
| `feature/mig-009-sanity-removal` | local only | fully merged into main | delete |
| `origin/fix/update-pilot-snapshots` | remote | merged, Feb 2026 | delete on origin |
| `origin/prune-keep-docs-backup-20251218T053546Z` | remote | merged; a snapshot of the pre-prune tree with the embedded Sanity studio (2,215 files diff vs main) | tag it `archive/sanity-studio-2025-12-18` then delete the branch |

No open PRs, no stashes, no tags, no branch protection on `main`.

### 1.2 Branch model for the migration

- Keep `main` deployable to Vercel until the DNS cut-over (§7). Vercel keeps auto-deploying `main` until the project is deleted, so **no migration work merges to `main` until it has been verified on a Cloudflare preview URL**.
- Work on one long-lived integration branch: `migrate/cloudflare`. Stack short-lived branches on it in this order and merge each via PR into `migrate/cloudflare`:
  1. `chore/bun-only`
  2. `chore/next-16`
  3. `content/fix-missing-assets`
  4. `feat/static-export`
  5. `ci/workers-builds`
- Enable **non-production branch builds** in Workers Builds so every PR gets a `*.workers.dev` preview URL and a PR comment.
- Add branch protection on `main` once Workers Builds is wired: require the frontmatter + image validation job to pass.

### 1.3 Secret and leftover cleanup (do first, on `main`, before anything else)

- `check-content.js` (tracked) contains a hardcoded Sanity **write token** for project `5ywyt4ng`. Revoke the token in sanity.io/manage, then `git rm` the file. The token stays in history; revocation is what matters.
- `git rm` `schema.json` and `content-only.ndjson` (Sanity export dumps).
- Remove the dangling `sanity.types` path alias from `tsconfig.json:20`.
- Remove `content/pages/*.backup.json` (home, about, services) or move them to `docs/archive/`.
- README, `docs/ARCHITECTURE.md`, `docs/rollback-procedures.md` all describe Vercel. Rewrite after §7, not before.
- Build/test artifacts (`.next/`, `playwright-report/`, `test-results/`) were tracked in git. Untrack and ignore (done in Phase 1).

## 2. Phase 1 — bun as the only package manager

Facts: both `bun.lock` (May 11) and `pnpm-lock.yaml` (May 18, newer, matches package.json) are committed. CI uses pnpm. `trustedDependencies` (esbuild, sharp, unrs-resolver) is already set for bun. `engines` already lists `bun >=1.0.0`.

Steps:
1. `git rm pnpm-lock.yaml`.
2. `rm bun.lock && bun install` to regenerate a lockfile that matches current package.json. Commit `bun.lock`.
3. `.github/workflows/validate-frontmatter.yml`: replace `actions/setup-node` with `cache: pnpm` by `oven-sh/setup-bun@v2`; replace `pnpm install --frozen-lockfile` with `bun install --frozen-lockfile`; `pnpm run` → `bun run`. (The current workflow is broken anyway: it sets `cache: pnpm` without installing pnpm.)
4. Add `.bun-version` or pin bun in the workflow so local and CI agree.
5. Workers Builds auto-detects bun from `bun.lock`; no extra config.
6. Verify: `bun run build` passes; `bun run test:e2e` passes.

## 3. Phase 2 — Next.js 15.5 → 16.3 upgrade

Why now: Cloudflare's recommended adapter (vinext) and the OpenNext adapter's current peer range (`>=16.3.3`) both want Next 16. Doing the upgrade before the host change keeps the two risks separable.

Facts from the probe:
- No `middleware.ts`, no `experimental` flags, no sync `params` access, no `images` config, no `next/og`, no server actions. The code surface is small.
- `lint` script is `next lint`, which **Next 16 removed**. ESLint is 8.x with `eslint-config-next@15.1.0`.
- `@next/third-parties@15.1.6` must move to 16.x alongside `next`.
- `styled-components@6` + `next-mdx-remote@6` + `react-player@2` have no known Next 16 blockers.
- `tsconfig` target is ES2017; Next 16 will bump it.

Steps:
1. Branch `chore/next-16`.
2. Run the official codemod: `bunx @next/codemod@canary upgrade latest`. It bumps `next`, `react`, `react-dom`, `eslint-config-next`, and rewrites known breaking patterns.
3. Bump `@next/third-parties` to the same major as `next`.
4. Replace `next lint`: migrate to ESLint 9 flat config (`eslint.config.mjs`) with `eslint-config-next`'s flat export; `lint` script becomes `eslint .`.
5. Fix the case-studies bug regardless of host (it is **500 in production on Vercel today**): re-enable `generateStaticParams` in `src/app/(frontend)/case-studies/[slug]/page.tsx:18-26` and set `export const dynamicParams = false`. The old comment says "debug build issue"; find and fix the underlying cause rather than leaving it dynamic. Likely culprits: the missing hero image referenced by `ai-chatbot-ecommerce.mdx` (§4) or `next-mdx-remote/serialize` throwing at build.
6. `bun run build` must produce **44 prerendered routes** (43 today + the case study). `bun run test:e2e` green.
7. Keep this branch deployable to Vercel as a safety check: `vercel deploy --scope masterthepixel-s-team` to a preview URL and smoke-test. Do not promote to production.

## 4. Phase 3 — Content state review and fixes

Inventory (2026-09-05):

| Area | Count | Notes |
|---|---|---|
| Blog posts | 4 | all `draft: false`; dates Dec 2024 – Jan 2025; 3 have matching `public/uploads/production/blog-*` dirs |
| Case studies | 1 | `ai-chatbot-ecommerce.mdx`; hero image missing; route 500s in prod |
| News | 0 | `news/` route exists with no content — decide: remove route or add content |
| Services | 18 | 7 reference hero images that do not exist |
| Projects | 3 | ok |
| Pages | 12 | includes 3 `.backup.json` leftovers |
| Site settings | `content/site.json` | holds GA/GTM IDs, nav, company email |

Validation results:
- `validate:frontmatter`: **passes**.
- `validate:images`: **fails** on 8 missing files:
  - `public/uploads/case-studies/ai-chatbot-hero.jpg`
  - `public/uploads/production/services/{branding-kit,landing-pages,logo-design,packaging-design,presentation-design,print-design,social-graphics}-hero.jpg`
- `public/uploads/production/services/` contains 6 hashed images from the Sanity era that are not referenced by those slugs. Map each service to one of them or add real assets.

Steps (branch `content/fix-missing-assets`):
1. Resolve the 8 missing images (map to existing hashed files or add new ones). `bun run validate:images` must pass. Make this job **required** in CI.
2. `/news` stays (decided 2026-09-05). Add at least one news item so the listing is not empty at launch.
3. Delete the three `.backup.json` files.
4. Confirm `content/site.json` GA/GTM IDs are the ones you want on the new host (they are the only "config" the site has).
5. Check `data/redirects.json`: it contains one placeholder (`/test-redirect`). Replace with real redirects or empty it. Under static export this file moves to `public/_redirects` (§5).

## 5. Phase 4 — Cloudflare build target

### 5.1 Why static export first

The audit found no request-time logic at all once the case-study route is static: no API routes, no middleware, no server actions, no ISR, no forms, no env vars. Everything is 44 prerendered HTML routes plus 42 public files (15 MB, largest 3.1 MB).

On Workers, **requests to static assets are free and unlimited** and do not count toward the free plan's 100,000 requests/day or the 10 ms CPU limit. A static export has no Worker script at all, so none of those limits can ever be hit. It is also the simplest thing to roll back.

Trade-offs of `output: "export"` and how each is handled:

| Next feature | Under export | Handling |
|---|---|---|
| `next/image` (18 usages) | default optimizer unavailable | Custom `loader` that emits `/cdn-cgi/image/width=…,quality=…,format=auto/<src>` URLs. Enable **Image Transformations** on the zone (free: 5,000 unique transformations/month; ~50 images × ~8 widths ≈ 400). Fallback: `images.unoptimized: true`. |
| `redirects()` in next.config | not supported | `public/_redirects` file (Workers Static Assets supports it, 2,000 rules). |
| `app/sitemap.ts` | supported (emitted at build) | none |
| `dynamicParams` | must be `false` everywhere | done in §3 step 5 |
| `/blog/` → `/blog` 308 (current Vercel behaviour) | Workers `html_handling: "auto-trailing-slash"` does the same | set in wrangler config |
| 404 page | `not_found_handling: "404-page"` serves `404.html` | set in wrangler config |
| GTM/GA via `@next/third-parties` | client-side, unaffected | none |
| react-player YouTube | client-side, unaffected | none |

### 5.2 Config to add (branch `feat/static-export`)

- `next.config.ts`: `output: "export"`, `images: { loader: "custom", loaderFile: "./src/lib/cf-image-loader.ts" }`, remove `redirects()`.
- `public/_redirects`: contents of `data/redirects.json` in `_redirects` syntax.
- `wrangler.jsonc` (no `main`, assets only):
  ```jsonc
  {
    "$schema": "node_modules/wrangler/config-schema.json",
    "name": "masterthepixel-io",
    "compatibility_date": "2026-09-05",
    "assets": {
      "directory": "./out",
      "html_handling": "auto-trailing-slash",
      "not_found_handling": "404-page"
    },
    "observability": { "enabled": true }
  }
  ```
- `package.json` scripts: `"preview": "bun run build && wrangler dev"`, `"deploy": "bun run build && wrangler deploy"`. Add `wrangler` as a devDependency.
- Verify locally with `wrangler dev`: every route in the prerender manifest returns 200, `/blog/` redirects to `/blog`, unknown path returns the 404 page. `/cdn-cgi/image/...` requests 404 locally — `wrangler dev`'s local asset simulator doesn't implement Image Transformations or its `onerror=redirect` fallback, both real-edge-only features — confirmed this degrades safely (image containers keep their layout size, no broken-image icons) and will resolve once deployed to the real zone with Image Transformations enabled.

### 5.3 Plan B — OpenNext adapter

Use only if a real server-side need appears (e.g. a contact form handled in a Worker, or ISR). The okchale-web repo has a working reference at commit `2b7351d` (`wrangler.jsonc` + `open-next.config.ts`, Images binding, `nodejs_compat`). Differences from static export: Worker requests count toward 100k/day and 10 ms CPU; needs `@opennextjs/cloudflare` (peer `next >=16.3.3`) and the Images binding for `next/image`. Traffic for this site is far below the free ceiling either way.

vinext (Cloudflare's newer recommended path) is beta; run `bunx vinext check` after the Next 16 upgrade and revisit if it reports full compatibility.

## 6. Phase 5 — CI/CD on Cloudflare

**Chosen path: GitHub Actions with `cloudflare/wrangler-action`, not native Workers Builds.** Native Workers Builds needs a one-time interactive authorization of the Cloudflare GitHub App from the dashboard (Workers & Pages → a Worker → Settings → Builds → Connect) — a real click only the account owner can do, with no API path around it. `cloudflare/wrangler-action` is Cloudflare's own documented alternative: it authenticates with a plain API token stored as a GitHub Actions secret, entered directly into GitHub's own secrets UI, never touching a chat session or an agent. This is `.github/workflows/deploy-cloudflare.yml`, already added to `migrate/cloudflare`.

One-time setup (2 minutes, entirely in the browser, owner-only):
1. https://dash.cloudflare.com/profile/api-tokens → **Create Token** → the built-in **Edit Cloudflare Workers** template → scope it to the account → create, copy the token (shown once).
2. This repo → **Settings → Secrets and variables → Actions → New repository secret** → name it `CLOUDFLARE_API_TOKEN`, paste the value.
3. Only if the token can see more than one Cloudflare account: also add `CLOUDFLARE_ACCOUNT_ID` (found on the Cloudflare dashboard's right sidebar). Most single-account setups don't need this.

Once the secret exists, trigger the first deploy either by pushing to `migrate/cloudflare` (the workflow's push trigger) or on demand: `gh workflow run deploy-cloudflare.yml` or the Actions tab's **Run workflow** button. It builds with bun, then deploys via `wrangler deploy` using the token — no interactive login, no browser click from an agent. First deploy lands on `<name>.<subdomain>.workers.dev`; smoke-test there before touching DNS.

Once the DNS cut-over (Phase 6) is done and `main` becomes the Cloudflare-serving branch, change the workflow's push trigger from `migrate/cloudflare` to `main`.

Native Workers Builds remains available later if preferred (per-PR preview URLs, GitHub PR status comments) — see the abandoned draft below for that path.

<details>
<summary>Alternative: native Workers Builds (needs the manual GitHub App click)</summary>

1. Cloudflare dashboard → Workers & Pages → Create → Import repository → `masterthepixel/sanitycms_masterthepixel`.
2. Build settings: build command `bun run build`, deploy command `bunx wrangler deploy`, root `/`. Production branch `main`. Enable non-production branch builds (preview URLs + PR comments).
3. No build variables needed (site has no env vars). Optionally set `NEXT_PUBLIC_SITE_NAME`.
4. Keep the GitHub Actions job for `validate:frontmatter`, `validate:images`, Playwright. It does not deploy.
5. First deploy lands on `masterthepixel-io.<subdomain>.workers.dev`. Smoke-test there before touching DNS.
</details>

## 7. Phase 6 — DNS, email, and cut-over

Current DNS (Namecheap nameservers `dns1/dns2.registrar-servers.com`):

| Record | Value |
|---|---|
| A `@` | 216.150.1.1 (Vercel) |
| CNAME `www` | `cd892848fe3d8e1a.vercel-dns-016.com` |
| MX | 5 × `eforward*.registrar-servers.com` (Namecheap email forwarding) |
| TXT | `v=spf1 +a +mx ~all` |
| TXT `_dmarc` | `v=DMARC1; p=none; rua=mailto:dmarc@masterthepixel.io` |

Steps:
1. Add zone `masterthepixel.io` to the Cloudflare account (Free plan). Cloudflare imports existing records; check the import against the table above.
2. **Before changing nameservers**, set up Cloudflare Email Routing for the zone and recreate every forwarding rule that exists in Namecheap today (list them in the Namecheap dashboard first). Email Routing replaces the MX and SPF records automatically. Keep the DMARC record.
3. At Namecheap, switch nameservers to the two Cloudflare assigns. Propagation up to 24 h; Vercel keeps serving during that window because the imported A/CNAME still point at Vercel.
4. In the Worker: Settings → Domains & Routes → add custom domains `masterthepixel.io` and `www.masterthepixel.io`. Cloudflare rewrites the A/CNAME to the Worker and issues certificates.
5. Canonical host is `www.masterthepixel.io` (decided 2026-09-05). Apex → www 301 via a Cloudflare Redirect Rule on the zone (free), so it works even when the Worker is not involved.
6. Enable Image Transformations on the zone (Images → Transformations → enable for zone) so the `/cdn-cgi/image/` loader works.
7. Verify: `curl -I https://www.masterthepixel.io` shows `server: cloudflare`, all 44 routes 200, `/blog/` 308s to `/blog`, unknown path 404, images load as AVIF/WebP, GA/GTM fire, email forwarding delivers a test message.

## 8. Phase 7 — Decommission Vercel and update docs

Only after 48 h of clean traffic on Cloudflare:
1. Remove domains `masterthepixel.io` and `www` from the Vercel project, then delete project `sanitycmsmasterthepixel` (team `masterthepixel-s-team`). This also removes the Vercel GitHub integration.
2. Rewrite README "Deployment" sections, `docs/ARCHITECTURE.md` (11 Vercel mentions), `docs/rollback-procedures.md`.
3. Optionally rename the GitHub repo and local folder to `masterthepixel.io`.

## 9. Rollback

- Before §7 step 4: nothing to roll back; Vercel is still live.
- After §7 step 4: remove the custom domains from the Worker and restore the A/CNAME to the Vercel values in the table. Vercel still has the project until §8.
- After §8: redeploy `main` to a new Vercel project; the repo is host-agnostic apart from `wrangler.jsonc`.

## 10. Risks and open questions

1. **Case-studies "debug build issue"** — root cause unknown; it may be the missing hero image. Must be fixed for static export.
2. **Email forwarding** — losing it silently is the biggest user-facing risk of the DNS move. §7 step 2 must be done before step 3.
3. **Image transformations cap** — 5,000 unique per month on Free. Well within budget, but the loader should use `onerror=redirect` so an over-cap image falls back to the original.
4. **Next 16 + styled-components** — untested here; okchale-web is on 16.3 without it. Check after the codemod.
5. **`/news` route with zero content** — product decision, not technical.
6. Should the site keep Vercel-style preview URLs per PR? Workers Builds provides them only when "non-production branch builds" is on.
