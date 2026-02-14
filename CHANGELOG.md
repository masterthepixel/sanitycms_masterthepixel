# Changelog

All notable changes to **masterthepixel** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Dark mode implementation story and comprehensive documentation
- Design system documentation with component patterns and guidelines
- SEO audit report with findings and prioritized action plan
- Refactoring analysis with code quality recommendations
- `LatestPosts` MDX component and homepage integration to render the 3 most recent blog posts from file-based content
- MDX page-builder wrappers (`LogoBlock`, `FeaturesMinimal`, `MediaBlock`, `FreeformBlock`, `CallToActionBlock`) to restore homepage block parity
- MDX client-side renderer enhancement to forward `frontmatter.latestPosts` into MDX components
- Playwright E2E assertion to validate latest posts render on the homepage

### Changed
- Replaced the homepage Freeform area with `LatestPosts` (homepage now shows dynamic/latest blog entries)
- Homepage server now injects latest posts (top 3, non-draft) into MDX frontmatter at render-time
- Restored original page-builder block ordering and improved MDX ↔ page-builder parity

### Fixed
- Resolved MDX runtime ReferenceError by moving page-builder block objects into YAML frontmatter (client MDX no longer references inline JS objects)
- Fixed MDX serialization/component injection edge-cases so page-builder blocks receive their frontmatter reliably
- Updated E2E test to avoid flaky selectors when asserting LatestPosts


## [0.1.0] - 2026-02-12

### Added
- **Complete blog system** with post cards, author/date components, and category filtering
- **Project showcase pages** with grid layout and filtering capabilities
- **Legal pages** (Acknowledgements, Terms of Use, Privacy Policy) with Sanity CMS integration
- **Comprehensive documentation** including Copilot instructions, testing guides, and deployment notes
- **Dark mode planning** with UI audit and implementation roadmap
- **SEO optimization** with meta tags, Open Graph, and structured data
- **Responsive design** with mobile-first approach and progressive enhancement
- **TypeScript path mapping** (`@/*` → `src/*`) for cleaner imports
- **Playwright E2E testing** setup with comprehensive test suite
- **Sanity Studio integration** with embedded CMS interface
- **Form handling** with React Hook Form and Zod validation
- **Animation system** with Framer Motion for smooth interactions

### Changed
- **Flattened studio structure** from nested to root-level organization
- **Updated build scripts** for Vercel compatibility and performance
- **Enhanced error handling** and user experience improvements
- **Improved CSS organization** with utility-first approach using Tailwind
- **Optimized component architecture** with class-variance-authority patterns

### Fixed
- **CSS encoding issues** with SVG data URLs in global styles
- **Build failures** related to environment variables and module resolution
- **TypeScript errors** and type safety improvements
- **Redirect logic** to respect enabled/disabled states
- **Vercel deployment** issues with proper environment configuration

### Technical Improvements
- **Next.js 15** with App Router and latest features
- **Sanity CMS v4** integration with Live Queries and Visual Editing
- **Modern React patterns** with Server Components and Suspense
- **Performance optimizations** with Turbopack and optimized builds
- **Accessibility compliance** with WCAG guidelines
- **SEO best practices** implementation throughout

## [0.0.1] - 2025-12-18

### Added
- Initial project setup with Next.js and Sanity CMS
- Basic project structure and configuration
- Sanity Studio scaffolding and schema definitions
- Core component library foundation
- Documentation backup and repository organization

### Infrastructure
- **Repository pruning** to focus on core functionality
- **Backup system** for documentation preservation
- **Git history management** and branch organization

---

## Commit History

### Recent Commits (2026-02-12)

- **1648319** - docs: record deployment & Sanity import status (prod URL, env vars, drafted legal pages)
- **e8c0915** - chore(sanity): add safe defaults for dataset & projectId to avoid build-time failure
- **8e8a5a4** - chore(deploy): trigger redeploy with Sanity envs
- **7867b72** - chore(import): add canonical legal pages import + blog/projects UI & fixes
- **e0e9bcc** - docs: update copilot instructions with recent site changes (blog, projects, legal pages, fixes, tests)
- **7b76a4f** - feat: implement complete blog page with post cards, author/date components
- **114dff3** - chore: add TS path mapping for '@/*' -> 'src/*'
- **621e3e2** - fix(css): repair broken encoded SVG data-urls in globals.css
- **5bdadff** - fix: restore missing src/app/(frontend)/globals.css to resolve module-not-found
- **b17008c** - chore: flatten nested studio (moved studio-masterthepixel up to studio/masterthepixel)
- **bc7c357** - chore(sanity): embed studio files into repository (merge from nested repo)
- **f632f6c** - chore(sanity): add studio scaffold
- **1117e52** - prune: remove all files except docs/ (preserve .git)
- **383f162** - backup: snapshot before pruning (20251218T053546Z)
- **ba052c7** - Fix build scripts for Vercel compatibility
- **4b73c8d** - Fix Vercel build issues with environment variables
- **107bf4d** - Add comprehensive Copilot instructions and fix TypeScript errors
- **bf74bce** - Remove large demo content file and update README
- **9f838c7** - Complete dark mode UI audit and project setup
- **d0fec62** - fix(redirect): respect `isEnabled` field for redirects — closes #3

---

## Types of Changes

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities

---

## Versioning Strategy

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

---

## Development Status

**Current Version:** 0.1.0
**Status:** Active Development
**Next Milestone:** Dark mode implementation and enhanced design system

For more details on upcoming features and planned improvements, see the [roadmap](./docs/roadmap.md) and [dark mode implementation story](./docs/story/dark-mode-implementation-story.md).

---

*This changelog is automatically maintained. Please update it with every significant change to the codebase.*