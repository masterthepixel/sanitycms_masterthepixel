import { test, expect } from '@playwright/test'

test.describe('Projects pages', () => {
  test('projects list loads and shows project cards', async ({ page }) => {
    await page.goto('/projects')
    await expect(page).toHaveTitle(/projects/i)

    // three migrated projects should be visible in the grid
    await expect(page.locator('article[aria-label="Horizon Systems"]')).toBeVisible()
    await expect(page.locator('article[aria-label="Orbital Wireless"]')).toBeVisible()
    await expect(page.locator('article[aria-label="Apex Dynamics"]')).toBeVisible()
  })

  test('project detail renders frontmatter (client, year, tags) and hero image', async ({ page }) => {
    await page.goto('/projects/orbital-wireless')

    // frontmatter rendered in header
    await expect(page.locator('text=Orbital Wireless')).toBeVisible()
    await expect(page.locator('text=Orbital Wireless').first()).toBeVisible() // title/client
    await expect(page.locator('text=2024')).toBeVisible()
    await expect(page.locator('text=telecom')).toBeVisible()

    // hero image (next/image) should be present — match by alt text or next/image URL
    const heroByAlt = page.locator('img[alt*="Lorem ipsum"]')
    const heroByNextImage = page.locator('img[src*="/_next/image"]')
    await expect(heroByAlt.first().or(heroByNextImage.first())).toBeVisible()
  })
})
