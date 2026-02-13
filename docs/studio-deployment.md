# Sanity Studio — deployment & post‑deploy checklist

This document describes the remaining steps to make the Studio production‑ready and visible in the Sanity Dashboard. It covers what to do after merging the Studio into `main` and deploying to Vercel.

## Quick facts
- Sanity project ID: `5ywyt4ng`
- Vercel production domain (example): `https://masterthepixel.vercel.app`
- Studio code location: `studio/masterthepixel`
- Embedded Studio route (Next.js): `src/app/studio/[[...index]]/page.tsx`

---

## Required post‑deploy tasks (do this immediately)
1. Add CORS origin to Sanity (required for browser API calls and auth)
   - Dashboard (UI): Sanity → Project `5ywyt4ng` → Settings → **CORS origins** → Add origin `https://masterthepixel.vercel.app` → **Allow credentials: Yes**
   - OR CLI (local):
     - cd `studio/masterthepixel`
     - npx sanity login
     - npx sanity cors add https://masterthepixel.vercel.app --project 5ywyt4ng --dataset production --yes
   - Why: prevents CORS blocks for requests such as `/users/me` and Live Preview.

2. Register the Studio in the Sanity Dashboard
   - Dashboard → Project → **Studios** → **Add studio** → paste `https://masterthepixel.vercel.app`
   - After adding it will appear inside the Dashboard UI for this project.

3. Verify production env vars in Vercel (project: `sanitycmsmasterthepixel` or repo-linked project)
   - Required (recommended):
     - `NEXT_PUBLIC_SANITY_PROJECT_ID = 5ywyt4ng`
     - `NEXT_PUBLIC_SANITY_DATASET = production`
   - Optional (viewer / preview):
     - `SANITY_API_READ_TOKEN` (viewer token; keep encrypted)

4. (Optional) Add `appId` to `studio/masterthepixel/sanity.cli.ts`
   - Purpose: enable Dashboard auto‑update support for the Studio (recommended for future auto‑deploys).
   - How: obtain the `appId` from Sanity dashboard (deployment settings) and add under `deployment` in `sanity.cli.ts`.

---

## Verification / smoke checks (after CORS + register)
- Open Production Studio: `https://masterthepixel.vercel.app/studio` and `https://masterthepixel.vercel.app/structure`
- Confirm page title is **Sanity Studio** and the editor UI loads
- Check browser console: no CORS errors for `https://5ywyt4ng.api.sanity.io/*`
- Confirm authenticated features work (login, open a document, save/publish)
- Run local builds to confirm nothing regressed:
  - `pnpm run build`
  - `cd studio/masterthepixel && pnpm run build`

Suggested automated smoke test (Playwright):
- Navigate to `/studio`, assert document list visible, open and save a draft, ensure no console errors.

---

## PR / merge checklist (before merging to `main`)
- [ ] Branch created from `main` and changes cherry‑picked/merged from `dev`
- [ ] `pnpm run build` passes (root)
- [ ] `cd studio/masterthepixel && pnpm run build` passes
- [ ] `pnpm run lint` and `npx tsc --noEmit` pass
- [ ] Playwright smoke test (if present) passes
- [ ] Env vars set in Vercel for production

---

## Troubleshooting notes
- If Studio shell loads but API calls fail → missing/incorrect CORS origin or wrong projectId/dataset env var.
- If Studio login fails → confirm `SANITY_API_READ_TOKEN` is not required for general Studio UI (but preview/read tokens may be used for previews). Use Sanity Dashboard to inspect API tokens & roles.
- If Dashboard still shows "No studios detected" → add the deployed URL manually under Project → Studios.

---

## Helpful commands (copy/paste)
- Build site: `pnpm run build`
- Build studio: `cd studio/masterthepixel && pnpm run build`
- Add CORS (CLI): `npx sanity cors add https://masterthepixel.vercel.app --project 5ywyt4ng --dataset production --yes`
- Add studio to dashboard (CLI is not available) — use the Dashboard UI: https://sanity.io/manage

---

If you'd like, I can add a Playwright smoke test and/or update `studio/masterthepixel/sanity.cli.ts` with an `appId` and open a PR for that change.