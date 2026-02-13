## Summary
<!-- Short description of the change and the migration story ID(s) -->

## Visual QA checklist
- [ ] Production screenshot(s) attached (or links to preview deploy)
- [ ] Visual diff (if available) shows no regressions for affected pages
- [ ] PO / content owner sign-off: @mastethepixel

## Testing
- Unit tests updated: `pnpm test` ✅
- E2E checks added/updated: `pnpm run test:e2e` ✅
- Frontmatter parity check: `pnpm run validate:frontmatter` ✅

## Deployment notes
- Preview deployed at: 
- Rollback plan: revert PR / redeploy previous `main` commit

## Story / Issue
- Story: MIG-XXX — (link to docs/story/...)