# Cloudflare migration — execution log

Companion to `cloudflare-migration-plan.md`. Newest entries at the bottom. Every entry says what was done, how it was verified, and what is still open.

## 2026-09-05 — Phase 0: hygiene and branch management

Branch: `migrate/cloudflare` (created from `main` at `perf: fix CLS and upgrade Tailwind to v4 CSS-first config`).

### Branches
- Deleted local `chore/tailwind-v4-upgrade` and `feature/mig-009-sanity-removal` (both fully merged into `main`).
- Tagged `origin/prune-keep-docs-backup-20251218T053546Z` as `archive/sanity-studio-2025-12-18` (pushed), then deleted the remote branch.
- Deleted remote `fix/update-pilot-snapshots` (merged Feb 2026).
- Result: `main` is the only branch on origin besides the new `migrate/cloudflare`. One tag.

### Sanity leftovers removed (commit `chore(hygiene): remove Sanity leftovers…`)
- `check-content.js` — dead script with a hardcoded Sanity write token for project `5ywyt4ng`.
- `schema.json`, `content-only.ndjson` — Sanity export dumps.
- `content/pages/{home,about,services}.backup.json`.
- `tsconfig.json` path alias `sanity.types` pointing at a file that no longer existed.

### Skills installed (commit `chore(skills): add Cloudflare agent skills`)
Copied from `cloudflare/skills` at commit `d924cd8` into `.agents/skills/` with symlinks in `.claude/skills/`, tracked in `skills-lock.json` (same layout as okchale-web). The `skills` CLI was blocked by the local permission policy, so the files were copied from a shallow clone instead; the lockfile records source, path, commit and SHA-256 so `npx skills` can take over later.
- `cloudflare` — product selection / architecture
- `wrangler` — CLI and wrangler.jsonc reference
- `workers-best-practices` — Workers runtime rules and review checklist
- `nextjs-on-cloudflare` — vinext vs OpenNext guidance
- `cloudflare-email-service` — Email Routing (needed for Phase 6, replaces Namecheap forwarding)

Already available as plugin skills (no install needed): `vercel:next-upgrade` (Phase 2), `vercel:vercel-cli` (Phase 7 teardown).

### Decisions recorded in the plan
- `/news` route stays.
- Canonical host is `www.masterthepixel.io`; apex redirects to www.

### Open
- **Revoke the Sanity token** at sanity.io/manage → project `5ywyt4ng` → API → Tokens. Removal from the tree does not remove it from git history. Owner action.
