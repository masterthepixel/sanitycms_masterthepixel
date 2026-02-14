import { test, expect } from '@playwright/test'

test('home page loads and shows #home', async ({ page }) => {
  await page.goto('/')
  // accept both `masterthepixel` and `Master the Pixel` title variants
  await expect(page).toHaveTitle(/masterthepixel|Master the Pixel/i)
  await expect(page.locator('#home')).toBeVisible()
  // LatestPosts should render recent blog entries on the homepage
  await expect(page.locator('article:has-text("Sample Post")').first()).toBeVisible()
})
