# Visual diffs from latest E2E run

## Overview
The Playwright visual-snapshot run reported differences for these MDX pilot pages:

- `home-mdx` — baseline present (`tests/e2e/.../home-mdx-chromium-linux.png`)
- `about-mdx` — baseline present (`tests/e2e/.../about-mdx-chromium-linux.png`)
- `services-mdx` — **baseline + actual + diff** available below

---

## Home (baseline)

![home-mdx baseline](./tests/e2e/pilot-pages.spec.ts-snapshots/home-mdx-chromium-linux.png)

---

## About (baseline)

![about-mdx baseline](./tests/e2e/pilot-pages.spec.ts-snapshots/about-mdx-chromium-linux.png)

---

## Services (baseline / actual / diff)

- Playwright reported: **38,460 pixels different (~5% of image)**

Baseline (expected):

![services baseline](./tests/e2e/pilot-pages.spec.ts-snapshots/services-mdx-chromium-linux.png)

Actual (latest run):

![services actual](./test-results/pilot-pages-services-page-loads-from-MDX-chromium/services-mdx-actual.png)

Diff (areas that changed):

![services diff](./test-results/pilot-pages-services-page-loads-from-MDX-chromium/services-mdx-diff.png)

---

Next steps I can take for you:

1. Inspect and attempt to fix the UI so the _actual_ matches the _baseline_. (I can open a PR with the fix.)
2. Accept the new visuals and update the Playwright snapshot baselines (I can open a PR with updated snapshots).
3. Do nothing yet — just keep these diffs for manual review.

Tell me which of the three actions above you want me to take, or authorize me to proceed with my recommended choice (recommendation: review diffs, then fix CSS if the change is unintended; otherwise update snapshots).