"use client"

import * as React from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'dark' | 'light'
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
  actualTheme: 'light',
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'siteengine-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [actualTheme, setActualTheme] = React.useState<'dark' | 'light'>('light')

  // Synchronously apply theme to document before paint where possible
  React.useLayoutEffect(() => {
    try {
      const persisted = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null
      if (persisted === 'light' || persisted === 'dark' || persisted === 'system') {
        setThemeState(persisted as Theme)
      }
    } catch (e) {
      // ignore
    }

    const root = window.document.documentElement
    const applyTheme = (t: Theme) => {
      root.classList.remove('light', 'dark')

      if (t === 'system') {
        const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const computed = systemIsDark ? 'dark' : 'light'
        root.classList.add(computed)
        setActualTheme(computed)
        return
      }

      root.classList.add(t)
      setActualTheme(t)
    }

    applyTheme(theme)

    // If system theme is used, listen for changes
    let mq: MediaQueryList | null = null
    if (theme === 'system') {
      mq = window.matchMedia('(prefers-color-scheme: dark)')
      const handler = (ev: MediaQueryListEvent) => {
        const computed = ev.matches ? 'dark' : 'light'
        root.classList.remove('light', 'dark')
        root.classList.add(computed)
        setActualTheme(computed)
      }
      if (mq.addEventListener) mq.addEventListener('change', handler)
      else mq.addListener(handler)

      return () => {
        if (mq) {
          if (mq.removeEventListener) mq.removeEventListener('change', handler)
          else mq.removeListener(handler)
        }
      }
    }
  }, [theme, storageKey])

  // Persist theme when it changes (non-blocking)
  React.useEffect(() => {
    try {
      localStorage.setItem(storageKey, theme)
    } catch (e) {
      // ignore
    }
  }, [theme, storageKey])

  const value: ThemeProviderState = {
    theme,
    setTheme: (t: Theme) => setThemeState(t),
    actualTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}