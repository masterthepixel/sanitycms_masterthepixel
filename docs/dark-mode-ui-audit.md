# Dark Mode UI Audit Report

## Overview

This document provides a comprehensive audit of all UI components and blocks in the masterthepixel project, identifying what needs to be updated for full dark mode compatibility.

## Current Status

- **Tailwind dark mode**: Not enabled in configuration
- **Existing dark variants**: Only 3 instances found (search components)
- **Total components audited**: 25+ components and blocks

## Components Requiring Updates

### Global Components

#### 1. Navbar (`src/components/global/navbar.tsx`)

**Current Issues:**
- `bg-white/80` → needs `dark:bg-gray-900/80`
- `border-b-gray-100` → needs `dark:border-b-gray-800`
- `bg-white` (dropdown) → needs `dark:bg-gray-900`
- `hover:bg-gray-50` → needs `dark:hover:bg-gray-800`
- `text-white bg-blue-600` (button) → needs dark variants
- `text-blue-700` (active state) → needs dark variant

#### 2. Footer (`src/components/global/footer.tsx`)

**Current Issues:**
- `border-t-gray-200/60` → needs `dark:border-t-gray-700/60`
- `bg-white` → needs `dark:bg-gray-900`
- `hover:bg-gray-50` → needs `dark:hover:bg-gray-800`
- `text-blue-600` → needs dark variant
- `from-white` (gradients) → needs `dark:from-gray-900`

#### 3. Slide-out Menu (`src/components/global/slide-out-menu.tsx`)

**Current Issues:**
- Uses SiteLogo with `theme='dark'` prop (contextual, not theme-based)
- Likely has hardcoded background/text colors

### Page Builder Blocks

#### 4. Hero Block (`src/components/page-builder/blocks/hero-block.tsx`)

**Current Issues:**
- `border-b-gray-200/60` → needs `dark:border-b-gray-700/60`
- `text-gray-600` → needs `dark:text-gray-300`
- Dark overlay is functional but colors may need adjustment

#### 5. Call-to-Action Block (`src/components/page-builder/blocks/call-to-action-block.tsx`)

**Likely Issues:**
- Background colors, text colors, button colors

#### 6. Feature Cards Block (`src/components/page-builder/blocks/feature-cards-block.tsx`)

**Likely Issues:**
- Card backgrounds, text colors, hover states

#### 7. Form Block (`src/components/page-builder/blocks/form-block.tsx`)

**Likely Issues:**
- Form backgrounds, input styles, text colors

#### 8. Freeform Block (`src/components/page-builder/blocks/freeform-block.tsx`)

**Likely Issues:**
- Background colors, border colors

#### 9. Header Block (`src/components/page-builder/blocks/header-block.tsx`)

**Likely Issues:**
- Text colors, background colors

#### 10. Logo Block (`src/components/page-builder/blocks/logo-block.tsx`)

**Likely Issues:**
- Background colors

#### 11. Media Block (`src/components/page-builder/blocks/media-block.tsx`)

**Likely Issues:**
- Overlay colors, border colors

#### 12. Portable Text Block (`src/components/page-builder/blocks/portable-text-block.tsx`)

**Likely Issues:**
- Text colors, background colors

#### 13. Services Block (`src/components/page-builder/blocks/services-block.tsx`)

**Likely Issues:**
- Background colors, text colors, hover states

#### 14. Testimonial Block (`src/components/page-builder/blocks/testimonial-block.tsx`)

**Likely Issues:**
- Background colors, text colors

### Shared Components

#### 15. Heading (`src/components/shared/heading.tsx`)

**Current Issues:**
- `text-gray-900` → needs `dark:text-gray-100`

#### 16. Site Logo (`src/components/shared/site-logo.tsx`)

**Current Issues:**
- Has `theme` prop for light/dark variants
- May need updates for proper dark mode integration

#### 17. Animated Text (`src/components/shared/animated-text.tsx`)

**Likely Issues:**
- Text colors

#### 18. Animated Underline (`src/components/shared/animated-underline.tsx`)

**Likely Issues:**
- Underline colors

### UI Components

#### 19. Button (`src/components/ui/button.tsx`)

**Current Issues:**
- All variants have hardcoded colors:
  - `primary`: `text-white bg-blue-700 hover:bg-blue-600`
  - `secondary`: `text-white bg-black hover:bg-blue-700`
  - `tertiary`: `text-black hover:text-white border border-gray-300/80 hover:border-blue-500 bg-gray-200 hover:bg-blue-600`
  - `outline`: `text-black border border-gray-300/80 hover:border-black hover:bg-black backdrop-blur hover:text-white`
  - `underline`: `decoration-gray-800`

#### 20. Navigation Menu (`src/components/ui/navigation-menu.tsx`)

**Likely Issues:**
- Background colors, text colors, hover states

#### 21. Input (`src/components/ui/input.tsx`)

**Likely Issues:**
- Background colors, border colors, focus states

#### 22. Dialog (`src/components/ui/dialog.tsx`)

**Likely Issues:**
- Background colors, overlay colors

#### 23. Sheet (`src/components/ui/sheet.tsx`)

**Likely Issues:**
- Background colors, overlay colors

### Portable Text Components

#### 24. Portable Text Editor (`src/components/portable-text/portable-text-editor.tsx`)

**Likely Issues:**
- Text colors, link colors

### Search Components

#### 25. Blog Search (`src/app/(frontend)/blog/_components/blog-search.tsx`)

**Status:** Partially implemented
- Has `dark:text-gray-400` variant

#### 26. Project Search (`src/app/(frontend)/projects/_components/project-search.tsx`)

**Status:** Partially implemented
- Has `dark:text-gray-400` variants

## Implementation Priority

### High Priority (Core Navigation & Layout)

1. Navbar
2. Footer
3. Button component
4. Heading component
5. Container backgrounds

### Medium Priority (Content Blocks)

6. Hero block
7. All other page builder blocks
8. Shared components

### Low Priority (Secondary UI)

9. UI components (dialogs, sheets, etc.)
10. Search components (already partially done)
11. Portable text components

## Estimated Work

### Component Updates Needed

- **25+ components** requiring dark mode variants
- **50+ CSS classes** to update with `dark:` prefixes
- **10+ color variables** may need dark equivalents

### Pattern Analysis

Most components follow these patterns needing updates:
- Background colors: `bg-white` → `dark:bg-gray-900`
- Text colors: `text-gray-900` → `dark:text-gray-100`
- Border colors: `border-gray-200` → `dark:border-gray-700`
- Hover states: `hover:bg-gray-50` → `dark:hover:bg-gray-800`

## Next Steps

1. Enable dark mode in Tailwind config
2. Create theme context and toggle
3. Update high-priority components
4. Test and iterate on remaining components
5. Update documentation

## Notes

- Some components may require design decisions for dark mode appearance
- Color contrast ratios must be maintained for accessibility
- Consider using CSS custom properties for theme colors where appropriate