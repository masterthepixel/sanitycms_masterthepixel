import { test, expect } from '@playwright/test'

test('home page loads and shows #home', async ({ page }) => {
  await page.goto('/')
  // accept both `masterthepixel` and `Master the Pixel` title variants
  await expect(page).toHaveTitle(/masterthepixel|Master the Pixel/i)
  await expect(page.locator('#home')).toBeVisible()
  // LatestPosts should render recent blog entries on the homepage
  await expect(page.locator('article:has-text("Sample Post")').first()).toBeVisible()
})

test('navbar Services drop contains individual service links (slide-out menu)', async ({ page }) => {
  await page.goto('/')
  // Open the slide-out menu and expand the "Our Services" group
  await page.getByRole('button', { name: 'Open menu' }).click()
  await page.getByText('Our Services').click()

  // The collapsible should list service detail items (buttons that navigate)
  await expect(page.getByRole('button', { name: /Data visualization/i })).toBeVisible()
  await expect(page.getByRole('button', { name: /Business intelligence/i })).toBeVisible()
  await expect(page.getByRole('button', { name: /Big data-consulting|Big data consulting/i })).toBeVisible()

  // Sanity check: click Data visualization and verify navigation
  await page.getByRole('button', { name: /Data visualization/i }).click()
  await expect(page).toHaveURL(/\/services\/data-visualization/)
})
