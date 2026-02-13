import { test, expect } from '@playwright/test'

test('blog listing page loads', async ({ page }) => {
  await page.goto('/blog')
  await expect(page).toHaveTitle(/blog/i)
  // Check that posts are displayed
  const postCards = page.locator('article[role="link"]')
  await expect(postCards.first()).toBeVisible()
})

test('blog post page loads', async ({ page }) => {
  // Use one of the sample posts
  await page.goto('/blog/how-we-increased-revenue-by-300-with-one-simple-hack')
  await expect(page.locator('h1')).toContainText('How We Increased Revenue by 300%')
  // Check that MDX content is rendered - look for content within the main article area
  const mainContent = page.locator('.col-span-12.xl\\:col-span-7.xl\\:pl-10.xl\\:border-l.xl\\:border-dashed')
  await expect(mainContent.locator('h2')).toContainText('Lorem Ipsume Dolor Simit')
})