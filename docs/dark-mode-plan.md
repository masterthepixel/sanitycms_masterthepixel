# Dark Mode Implementation Plan

## Overview

This document outlines the plan to implement dark and light mode support in the masterthepixel project, a Next.js application with Sanity CMS and Tailwind CSS.

## Current State

- Tailwind CSS is configured but dark mode is not enabled
- Some components already use `dark:` variants but they are non-functional
- No theme switching mechanism exists
- Redux is available for state management

## Implementation Plan

### Phase 1: Core Configuration

1. **Enable Dark Mode in Tailwind**
   - Add `darkMode: 'class'` to `tailwind.config.ts`
   - This enables class-based theme switching

2. **Update CSS Variables**
   - Ensure CSS custom properties support both light and dark themes
   - Add dark mode variants to existing color schemes

### Phase 2: Theme Management

1. **Create Theme Context**
   - Implement a React Context for theme state management
   - Provide theme toggle functionality
   - Include system preference detection

2. **Add Theme Persistence**
   - Store user theme preference in localStorage
   - Respect system preference as default
   - Prevent flash of unstyled content (FOUC)

### Phase 3: UI Components

1. **Theme Toggle Component**
   - Create a toggle button/switch component
   - Position in header/navigation
   - Include proper accessibility attributes

2. **Update Existing Components**
   - Review all components using `dark:` classes
   - Ensure comprehensive dark mode styling
   - Test color contrast and readability

### Phase 4: Content Management

1. **Sanity Studio Integration**
   - Consider dark mode for the Sanity Studio interface
   - Update any theme-related content schemas if needed

### Phase 5: Testing & Polish

1. **Cross-browser Testing**
   - Test theme switching across different browsers
   - Verify system preference detection
   - Check for FOUC issues

2. **Performance Optimization**
   - Ensure theme switching doesn't cause layout shifts
   - Optimize CSS bundle size

3. **Documentation Update**
   - Update README with theme switching instructions
   - Document theme customization options

## Technical Details

### Theme State Structure

```typescript
type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}
```

### Implementation Steps

1. Configure Tailwind dark mode
2. Create theme context and provider
3. Add theme toggle to layout
4. Update component styles
5. Test and refine

### Dependencies

- No additional packages needed (Tailwind already supports dark mode)
- May consider `next-themes` for simplified implementation if complexity increases

## Success Criteria

- Users can toggle between light, dark, and system themes
- Theme preference persists across sessions
- No performance impact on initial load
- All components properly styled for both themes
- Accessibility standards maintained

## Timeline

- Phase 1: 1-2 hours
- Phase 2: 2-3 hours
- Phase 3: 4-6 hours
- Phase 4: 1-2 hours
- Phase 5: 2-3 hours

Total estimated time: 10-16 hours

## Risks & Considerations

- Potential CSS bundle size increase
- Need to audit all existing styles
- System preference detection may vary by browser
- Redux integration may require additional setup