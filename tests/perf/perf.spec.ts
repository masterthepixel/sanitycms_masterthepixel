import { test, expect, devices } from '@playwright/test'

// Emulate a mid-range mobile device (Moto G4-like conditions via viewport/UA)
const mobile = {
  viewport: { width: 412, height: 915 },
  userAgent:
    'Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36',
  isMobile: true,
}

test.describe('Production performance (approx)', () => {
  test('collect core timing metrics on / (mobile)', async ({ page }) => {
    await page.setViewportSize(mobile.viewport)
    await page.setUserAgent(mobile.userAgent)

    // Navigate to production site and wait for load
    await page.goto('https://www.masterthepixel.io', { waitUntil: 'load' })

    // Give a short extra settle time for LCP / long tasks to finish
    await page.waitForTimeout(1200)

    const metrics = await page.evaluate(() => {
      const perf = (window.performance as any)
      const nav = perf.getEntriesByType('navigation')[0] || {}
      const paints = perf.getEntriesByType('paint') || []
      const fcp = paints.find((p: any) => p.name === 'first-contentful-paint')?.startTime ?? null

      const lcpEntries = perf.getEntriesByType('largest-contentful-paint') || []
      const lcpEntry = lcpEntries[lcpEntries.length - 1] || null
      const lcp = lcpEntry ? (lcpEntry.renderTime || lcpEntry.loadTime || lcpEntry.startTime) : null

      const layoutShifts = perf.getEntriesByType('layout-shift') || []
      const cls = layoutShifts.reduce((sum: number, s: any) => sum + (s.hadRecentInput ? 0 : s.value), 0)

      const longTasks = perf.getEntriesByType('longtask') || []
      const tbt = longTasks.reduce((acc: number, t: any) => acc + Math.max(0, t.duration - 50), 0)

      return {
        fcp: Math.round(fcp),
        lcp: lcp ? Math.round(lcp) : null,
        cls: Math.round(cls * 1000) / 1000,
        tbt: Math.round(tbt),
        longTasks: longTasks.length,
        domContentLoaded: Math.round(nav.domContentLoadedEventStart || 0),
        loadEvent: Math.round(nav.loadEventStart || 0),
      }
    })

    console.log('perf-metrics', metrics)

    // Basic sanity assertions so test fails if something is grossly wrong
    expect(metrics.fcp).toBeGreaterThan(0)
    expect(metrics.loadEvent).toBeGreaterThan(0)
  })
})
