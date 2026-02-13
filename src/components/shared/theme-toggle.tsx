'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const next = (t: typeof theme) => (t === 'light' ? 'dark' : t === 'dark' ? 'system' : 'light')

  const label = `Theme: ${theme}`

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(next(theme))}
      className="w-9 h-9 p-0 relative"
      aria-label={label}
      title={label}
    >
      {/* Light */}
      <Sun
        className={
          "h-4 w-4 transition-all " + (theme === 'light' ? 'opacity-100 scale-100' : theme === 'system' ? 'opacity-70 scale-90' : 'opacity-0 scale-75')
        }
      />

      {/* Dark */}
      <Moon
        className={
          "absolute h-4 w-4 transition-all " + (theme === 'dark' ? 'opacity-100 scale-100' : theme === 'system' ? 'opacity-70 scale-90' : 'opacity-0 scale-75')
        }
      />

      <span className="sr-only">{label}. Click to cycle theme (light → dark → system).</span>
    </Button>
  )
}