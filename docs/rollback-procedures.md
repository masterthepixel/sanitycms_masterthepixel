# Rollback Procedures for Sanity to MDX Migration

## Emergency Rollback Steps

If the migration causes issues in production, follow these steps to rollback:

### 1. Git Rollback
```bash
# Reset to pre-migration state
git reset --hard pre-migration-20260213
git push --force-with-lease origin mig-001
```

### 2. Sanity Data Restore
```bash
# From the studio/masterthepixel directory
npx sanity dataset import ../backup/sanity-export-20260213.ndjson production
```

### 3. Deploy Rollback
```bash
# Deploy the rolled back code
# (Use your deployment method - Vercel, etc.)
```

### 4. Verification
- Check that all pages load correctly
- Verify Sanity Studio is accessible
- Run e2e tests to ensure functionality

## Backup Files
- Git tag: `pre-migration-20260213`
- Sanity export: `backup/sanity-export-20260213.ndjson` (requires Sanity CLI login to create)

## Contact
If rollback is needed, notify the development team immediately.