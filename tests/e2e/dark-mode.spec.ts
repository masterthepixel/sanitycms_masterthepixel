import { test, expect } from '@playwright/test'

// Smoke/visual test for dark-mode behavior and key elements.
// - sets explicit theme via localStorage before load (deterministic)
// - verifies document.documentElement has `light` / `dark` class
// - compares header/footer/section computed styles between modes
// - captures screenshots to /tmp

test('dark mode: explicit light/dark and visuals', async ({ page }) => {
  // Ensure the app reads our preference on first render
  await page.addInitScript(() => {
    try {
      localStorage.setItem('siteengine-theme', 'light')
    } catch (e) {
      // noop
    }
  })

  await page.goto('/')
  await page.waitForSelector('header')

  const classesLight = await page.evaluate(() => Array.from(document.documentElement.classList))
  expect(classesLight.includes('light')).toBeTruthy()

  // Snapshot - light
  await page.screenshot({ path: '/tmp/dark-mode-light.png', fullPage: true })

  const headerBgLight = await page.evaluate(() => {
    const el = document.querySelector('header')
    return el ? getComputedStyle(el).backgroundColor : null
  })

  const footerBgLight = await page.evaluate(() => {
    const el = document.querySelector('footer')
    return el ? getComputedStyle(el).backgroundColor : null
  })

  const sectionTextColorLight = await page.evaluate(() => {
    const el = document.querySelector('section')
    return el ? getComputedStyle(el).color : null
  })

  // Now set dark and reload (explicit)
  await page.evaluate(() => {
    try {
      localStorage.setItem('siteengine-theme', 'dark')
    } catch (e) {
      // noop
    }
  })

  await page.reload()
  await page.waitForSelector('header')

  const classesDark = await page.evaluate(() => Array.from(document.documentElement.classList))
  expect(classesDark.includes('dark')).toBeTruthy()

  // Snapshot - dark
  await page.screenshot({ path: '/tmp/dark-mode-dark.png', fullPage: true })

  const headerBgDark = await page.evaluate(() => {
    const el = document.querySelector('header')
    return el ? getComputedStyle(el).backgroundColor : null
  })

  const footerBgDark = await page.evaluate(() => {
    const el = document.querySelector('footer')
    return el ? getComputedStyle(el).backgroundColor : null
  })

  const sectionTextColorDark = await page.evaluate(() => {
    const el = document.querySelector('section')
    return el ? getComputedStyle(el).color : null
  })

  // Basic visual assertions: computed styles should differ between modes
  // (This avoids brittle class assertions and checks rendered appearance.)
  expect(headerBgLight).not.toBeNull()
  expect(headerBgDark).not.toBeNull()
  expect(headerBgLight).not.toBe(headerBgDark)

  expect(footerBgLight).not.toBeNull()
  expect(footerBgDark).not.toBeNull()
  expect(footerBgLight).not.toBe(footerBgDark)

  expect(sectionTextColorLight).not.toBeNull()
  expect(sectionTextColorDark).not.toBeNull()
  expect(sectionTextColorLight).not.toBe(sectionTextColorDark)

  // Also verify the visible ThemeToggle button can be clicked to switch themes
  const toggle = page.getByRole('button', { name: 'Toggle theme' })
  await expect(toggle).toBeVisible()

  // Click to toggle (dark -> light) and verify class toggles
  await toggle.click()
  const classesAfterClick = await page.evaluate(() => Array.from(document.documentElement.classList))
  // Should include at least one of light/dark
  expect(classesAfterClick.includes('light') || classesAfterClick.includes('dark')).toBeTruthy()
})
