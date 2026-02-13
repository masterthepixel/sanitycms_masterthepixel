import React from 'react'
import { useTheme } from './theme-provider'

export default function ThemeSwitcher() {
  const { theme, setTheme, actualTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={actualTheme === 'dark'}
          onChange={() => setTheme(actualTheme === 'dark' ? 'light' : 'dark')}
          className="sr-only peer"
        />
        <div className="w-12 h-6 bg-gray-200 peer-checked:bg-gray-700 rounded-full peer-focus:ring-2 peer-focus:ring-blue-500 transition-colors dark:bg-gray-700">
          <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${actualTheme === 'dark' ? 'translate-x-6' : ''}`}></div>
        </div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-100">{actualTheme === 'dark' ? 'Dark' : 'Light'}</span>
      </label>
    </div>
  )
}
