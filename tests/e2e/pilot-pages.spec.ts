import { test, expect } from '@playwright/test'

const PILOT_PAGES = ['home', 'about', 'services']

PILOT_PAGES.forEach((slug) => {
  test(`${slug} page loads from MDX`, async ({ page }) => {
    await page.goto(`http://localhost:3000/${slug}`)

    // Check that the page loads without errors
    await expect(page).toHaveURL(`http://localhost:3000/${slug}`)

    // Check that the page has content (basic smoke test)
    const bodyText = await page.locator('body').textContent()
    expect(bodyText?.length).toBeGreaterThan(100)

    // Take a visual snapshot for comparison
    await expect(page).toHaveScreenshot(`${slug}-mdx.png`)
  })
})