import { test, expect } from '@playwright/test'

test('home page loads and shows #home', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/masterthepixel/i)
  await expect(page.locator('#home')).toBeVisible()
})
