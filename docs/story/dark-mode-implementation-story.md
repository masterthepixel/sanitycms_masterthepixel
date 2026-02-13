# Dark Mode Implementation Story

**Project:** masterthepixel - Next.js + Sanity CMS Marketing Template
**Goal:** Complete dark mode implementation across all site elements
**Timeline:** 2-3 weeks
**Status:** Ready for implementation

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Phase 1: Foundation Setup](#phase-1-foundation-setup)
3. [Phase 2: Theme Management System](#phase-2-theme-management-system)
4. [Phase 3: Core Component Updates](#phase-3-core-component-updates)
5. [Phase 4: Page Builder Blocks](#phase-4-page-builder-blocks)
6. [Phase 5: UI Components & Polish](#phase-5-ui-components--polish)
7. [Phase 6: Testing & Validation](#phase-6-testing--validation)
8. [Implementation Checklist](#implementation-checklist)

---

## Executive Summary

**Current Status**: ⚠️ **PARTIALLY IMPLEMENTED** - Core infrastructure complete, but major component gaps exist

**Completion Level**: ~30% - Foundation and theme system working, but most UI components lack dark variants

**Key Findings from QA Audit**:
- ✅ **Foundation & Theme System**: Fully functional
- ⚠️ **Core Components**: Partially complete (4/5 components)
- ❌ **Page Builder Blocks**: Only 3/11 blocks implemented
- ❌ **UI Components**: 0/7 components have dark variants
- ❌ **Testing**: No dark mode tests implemented

**Critical Gaps**:
- 8/11 page builder blocks missing dark variants
- All UI components (dialog, sheet, navigation menu, input, etc.) lack dark mode support
- No testing or validation implemented
- Theme toggle incomplete (missing system option)

**Recommendation**: Implementation is not production-ready. Complete Phase 4 and 5 before deployment.

---

## Phase 1: Foundation Setup

### Step 1.1: Enable Tailwind Dark Mode

**File:** `tailwind.config.ts`

```typescript
// Before
const config: Config = {
  // ... existing config
}

// After
const config: Config = {
  // ... existing config
  darkMode: 'class', // Add this line
}
```

**What this enables:**
- `dark:` prefix for all Tailwind classes
- Class-based theme switching on `<html>` element
- Automatic dark mode detection in components

### Step 1.2: Update CSS Variables

**File:** `src/app/(frontend)/globals.css`

```css
/* Add to existing CSS */
:root {
  /* Light theme (default) */
  --color-background: #ffffff;
  --color-foreground: #111827;
  --color-primary: #1d4ed8;
  --color-border: #e5e7eb;
  --color-muted: #f9fafb;
}

.dark {
  /* Dark theme */
  --color-background: #111827;
  --color-foreground: #ffffff;
  --color-primary: #2563eb;
  --color-border: #374151;
  --color-muted: #1f2937;
}

/* Update pattern backgrounds */
.pattern-bg {
  background-color: var(--color-background);
  /* ... existing pattern code */
}

.pattern-bg--2 {
  background-color: var(--color-background);
  /* ... existing pattern code */
}
```

### Step 1.3: Verify Search Components

**Files:**
- `src/app/(frontend)/blog/_components/blog-search.tsx`
- `src/app/(frontend)/projects/_components/project-search.tsx`

These already have `dark:text-gray-400` variants and will work once dark mode is enabled.

---

## Phase 2: Theme Management System

### Step 2.1: Create Theme Context

**File:** `src/components/shared/theme-provider.tsx` (new)

```typescript
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: Theme
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  actualTheme: 'light',
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'masterthepixel-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  const [actualTheme, setActualTheme] = useState<Theme>('light')

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      setActualTheme(systemTheme)
      return
    }

    root.classList.add(theme)
    setActualTheme(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
    actualTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
```

### Step 2.2: Add Theme Provider to Layout

**File:** `src/app/(frontend)/layout.tsx`

```typescript
// Add import
import { ThemeProvider } from '@/components/shared/theme-provider'

// Wrap children with ThemeProvider
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // ... existing code ...

  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" storageKey="masterthepixel-theme">
          <ClientLayout settings={settings} navigationSettings={navigationSettings}>
            {children}
          </ClientLayout>
        </ThemeProvider>
        {/* ... existing code ... */}
      </body>
    </html>
  )
}
```

### Step 2.3: Create Theme Toggle Component

**File:** `src/components/shared/theme-toggle.tsx` (new)

```typescript
'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="w-9 h-9 p-0"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

### Step 2.4: Add Toggle to Navigation

**File:** `src/components/global/navbar.tsx`

```typescript
// Add import
import { ThemeToggle } from '@/components/shared/theme-toggle'

// Add to navbar (adjust positioning as needed)
<div className="flex items-center gap-4">
  {/* Existing navbar items */}
  <ThemeToggle />
</div>
```

---

## Phase 3: Core Component Updates

### Step 3.1: Update Button Component

**File:** `src/components/ui/button.tsx`

```typescript
const buttonVariants = cva(
  "px-4 md:px-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs decoration-transparent md:text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-white bg-blue-700 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500",
        secondary: "text-white bg-black hover:bg-blue-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100",
        tertiary: "text-black hover:text-white border border-gray-300/80 hover:border-blue-500 bg-gray-200 hover:bg-blue-600 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700",
        outline: "text-black border border-gray-300/80 hover:border-black hover:bg-black backdrop-blur hover:text-white dark:text-gray-100 dark:border-gray-600 dark:hover:border-gray-400 dark:hover:bg-gray-800",
        underline: "xl:px-0 mb-2 underline underline-offset-[10px] decoration-gray-800 dark:decoration-gray-200",
      },
      // ... rest unchanged
    },
  }
)
```

### Step 3.2: Update Heading Component

**File:** `src/components/shared/heading.tsx`

```typescript
const headingVariants = cva(
  'font-semibold antialiased text-gray-900 dark:text-gray-100 tracking-tighter leading-normal',
  // ... rest unchanged
)
```

### Step 3.3: Update Navbar Component

**File:** `src/components/global/navbar.tsx`

```typescript
// Update all hardcoded colors
<div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-100 dark:border-gray-800">
  {/* ... */}
  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
    {/* ... */}
    <div className="hover:bg-gray-50 dark:hover:bg-gray-800">
      {/* ... */}
    </div>
  </div>
</div>
```

### Step 3.4: Update Footer Component

**File:** `src/components/global/footer.tsx`

```typescript
// Update all hardcoded colors
<div className="border-t border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900">
  {/* ... */}
  <div className="hover:bg-gray-50 dark:hover:bg-gray-800">
    {/* ... */}
  </div>
  {/* Update gradients */}
  <div className="from-white dark:from-gray-900 to-transparent">
    {/* ... */}
  </div>
</div>
```

### Step 3.5: Update Container Component

**File:** `src/components/global/container.tsx`

```typescript
// Add dark variants to pattern classes if used
<div className={cn(
  paddingTopStyles,
  paddingBottomStyles,
  containerVariants({ variant, className }),
  "pattern-bg dark:pattern-bg--2" // Example if needed
)}>
  {children}
</div>
```

---

## Phase 4: Page Builder Blocks

### Step 4.1: Hero Block

**File:** `src/components/page-builder/blocks/hero-block.tsx`

```typescript
// Update all text and background colors
<div className="border-b border-gray-200/60 dark:border-gray-700/60">
  <p className="text-gray-600 dark:text-gray-300">
    {/* ... */}
  </p>
  {/* Dark overlay already handles dark mode */}
</div>
```

### Step 4.2: Feature Cards Block

**File:** `src/components/page-builder/blocks/feature-cards-block.tsx`

```typescript
// Update card styling
<div className="border border-gray-200/70 dark:border-gray-700/70 bg-white dark:bg-gray-900 p-8 md:p-10">
  <p className="text-gray-500 dark:text-gray-400">
    {/* ... */}
  </p>
  <div className="text-green-600 dark:text-green-400">
    {/* ... */}
  </div>
</div>

// Update section backgrounds
<div className="border-y border-gray-200/40 dark:border-gray-700/40 from-white dark:from-gray-900 to-transparent">
  {/* ... */}
</div>
```

### Step 4.3: Testimonial Block

**File:** `src/components/page-builder/blocks/testimonial-block.tsx`

```typescript
// Update card styling
<div className="bg-white dark:bg-gray-900 border border-gray-200/70 dark:border-gray-700/70">
  <p className="text-gray-500 dark:text-gray-400">
    {/* ... */}
  </p>
</div>
```

### Step 4.4: Services Block

**File:** `src/components/page-builder/blocks/services-block.tsx`

```typescript
// Update section styling
<div className="border-t border-gray-200/60 dark:border-gray-700/60">
  <p className="text-neutral-500 dark:text-gray-400">
    {/* ... */}
  </p>
</div>
```

### Step 4.5: Logo Block

**File:** `src/components/page-builder/blocks/logo-block.tsx`

```typescript
// Update all background and border colors
<div className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900">
  <div className="border-x border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
    {/* ... */}
    <div className="text-gray-500 dark:text-gray-400">
      {/* ... */}
    </div>
    <div className="from-slate-50 dark:from-gray-900 via-slate-50 dark:via-gray-900 to-transparent">
      {/* ... */}
    </div>
  </div>
</div>
```

### Step 4.6: Call-to-Action Block

**File:** `src/components/page-builder/blocks/call-to-action-block.tsx`

```typescript
// Update text colors
<div className="border-t border-gray-200/60 dark:border-gray-700/60">
  <p className="text-gray-600 dark:text-gray-300">
    {/* ... */}
  </p>
</div>
```

### Step 4.7: Form Block

**File:** `src/components/page-builder/blocks/form-block.tsx`

```typescript
// Update text colors
<div>
  <p className="text-gray-600 dark:text-gray-300">
    {/* ... */}
  </p>
  {/* Form inputs will inherit from global input styles */}
</div>
```

### Step 4.8: Header Block

**File:** `src/components/page-builder/blocks/header-block.tsx`

```typescript
// Update text colors
<div>
  <p className="text-gray-600 dark:text-gray-300">
    {/* ... */}
  </p>
</div>
```

### Step 4.9: Media Block

**File:** `src/components/page-builder/blocks/media-block.tsx`

```typescript
// Dark overlays already handle dark mode appropriately
// May need border color updates if present
<div className="border-gray-200 dark:border-gray-700">
  {/* ... */}
</div>
```

### Step 4.10: Portable Text Block

**File:** `src/components/page-builder/blocks/portable-text-block.tsx`

```typescript
// Update text colors
<div>
  <p className="text-gray-600 dark:text-gray-300">
    {/* ... */}
  </p>
</div>
```

### Step 4.11: Freeform Block

**File:** `src/components/page-builder/blocks/freeform-block.tsx`

```typescript
// Uses pattern-bg classes which we've updated
// May need additional color updates based on content
```

---

## Phase 5: UI Components & Polish

### Step 5.1: Update Dialog Component

**File:** `src/components/ui/dialog.tsx`

```typescript
// Update overlay and content backgrounds
<div className="fixed inset-0 z-50 bg-black/80 dark:bg-black/90">
  <div className="bg-white dark:bg-gray-900">
    {/* ... */}
    <button className="text-black dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
      {/* ... */}
    </button>
  </div>
</div>
```

### Step 5.2: Update Sheet Component

**File:** `src/components/ui/sheet.tsx`

```typescript
// Similar updates to dialog
<div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/80">
  <div className="bg-white dark:bg-gray-900">
    {/* ... */}
  </div>
</div>
```

### Step 5.3: Update Navigation Menu

**File:** `src/components/ui/navigation-menu.tsx`

```typescript
// Update all background and text colors
<div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
  {/* ... */}
  <div className="hover:bg-gray-50 dark:hover:bg-gray-800">
    {/* ... */}
  </div>
</div>
```

### Step 5.4: Update Input Component

**File:** `src/components/ui/input.tsx`

```typescript
// Update background, border, and focus colors
<input
  className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400"
  // ...
/>
```

### Step 5.5: Update Portable Text Components

**File:** `src/components/portable-text/portable-text-editor.tsx`

```typescript
// Update text and link colors
<div className="text-gray-900 dark:text-gray-100">
  <a className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
    {/* ... */}
  </a>
</div>
```

### Step 5.6: Update Slide-out Menu

**File:** `src/components/global/slide-out-menu.tsx`

```typescript
// Update all background and text colors
<div className="bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700">
  {/* ... */}
  <div className="text-black dark:text-gray-100 hover:text-black dark:hover:text-gray-100">
    {/* ... */}
  </div>
  <p className="text-gray-400 dark:text-gray-500">
    {/* ... */}
  </p>
  <p className="text-gray-500 dark:text-gray-400">
    {/* ... */}
  </p>
  <div className="hover:text-black dark:hover:text-gray-100">
    {/* ... */}
  </div>
  <div className="from-white dark:from-gray-900 via-white dark:via-gray-900 to-transparent">
    {/* ... */}
  </div>
</div>
```

### Step 5.7: Update Shared Components

**Files:**
- `src/components/shared/animated-text.tsx`
- `src/components/shared/animated-underline.tsx`
- `src/components/shared/site-logo.tsx`

```typescript
// Update text colors in each component
<div className="text-gray-900 dark:text-gray-100">
  {/* ... */}
</div>
```

---

## Phase 6: Testing & Validation

### Step 6.1: Component Testing

Test each updated component in both light and dark modes:
- Visual appearance
- Color contrast ratios
- Interactive states (hover, focus, active)
- Layout consistency

### Step 6.2: Page Testing

Test complete pages:
- Homepage
- Blog pages
- Project pages
- About/Services pages
- Theme switching functionality

### Step 6.3: Cross-browser Testing

Verify in:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

### Step 6.4: Accessibility Testing

Ensure:
- WCAG AA compliance in both themes
- Keyboard navigation works
- Screen reader compatibility
- Focus indicators visible

### Step 6.5: Performance Testing

Check:
- No layout shifts during theme switching
- CSS bundle size impact
- Initial page load performance

---

## Implementation Checklist

### Phase 1: Foundation ✅
- [x] Enable Tailwind dark mode
- [x] Update CSS variables
- [x] Verify search components work

### Phase 2: Theme Management ⚠️
- [x] Create theme provider
- [x] Add to layout
- [x] Create theme toggle
- [x] Add to navigation
- [ ] **MISSING**: Add system option to theme toggle
- [ ] **MISSING**: Implement actualTheme tracking in provider

### Phase 3: Core Components ⚠️
- [x] Button component
- [x] Heading component
- [x] Navbar component
- [x] Footer component
- [x] Container component

### Phase 4: Page Builder Blocks ❌ (Major Gaps)
- [x] Hero block
- [x] Feature cards block
- [x] Testimonial block
- [ ] Services block
- [ ] Logo block
- [ ] Call-to-action block
- [ ] Form block
- [ ] Header block
- [ ] Media block
- [ ] Portable text block
- [ ] Freeform block

### Phase 5: UI Components ❌ (Not Implemented)
- [ ] Dialog component
- [ ] Sheet component
- [ ] Navigation menu
- [ ] Input component
- [ ] Portable text components
- [ ] Slide-out menu
- [ ] Shared components

### Phase 6: Testing ❌ (Not Implemented)
- [ ] Component testing
- [ ] Page testing
- [ ] Cross-browser testing
- [ ] Accessibility testing
- [ ] Performance testing

---

## Success Metrics

**Current Status**: ❌ **NOT ACHIEVED** - Implementation incomplete

- ❌ **Theme Switching**: Partially working (light/dark only, missing system option)
- ❌ **Visual Consistency**: Only ~30% of components properly styled in both themes
- ❌ **Accessibility**: Not tested for dark theme compliance
- ❌ **Performance**: Not tested for theme switching impact
- ❌ **Persistence**: User preferences saved but system option incomplete
- ❌ **System Integration**: System preference detection works but toggle doesn't expose it

**Required for Success**:
- Complete all missing component dark variants (8 page builder blocks, 7 UI components)
- Implement comprehensive testing suite
- Add system option to theme toggle
- Verify accessibility compliance in both themes
- Test performance impact of theme switching

---

## Rollback Plan

If issues arise:
1. Remove `darkMode: 'class'` from Tailwind config
2. Remove ThemeProvider from layout
3. Remove theme toggle from navigation
4. All components will revert to light mode styling

---

## Maintenance Notes

- **Adding New Components**: Always include dark mode variants
- **Color Updates**: Update both light and dark variants together
- **Testing**: Test theme switching for all new features
- **Documentation**: Keep this guide updated with new patterns

---

*This implementation story provides a complete roadmap for dark mode support. Follow the phases sequentially for a smooth rollout, and test thoroughly at each step.*</content>
<parameter name="filePath">/home/mastethepixel/GitHub/sanitycms_masterthepixel/docs/dark-mode-implementation-story.md