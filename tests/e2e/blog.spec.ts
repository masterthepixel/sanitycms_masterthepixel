import { test, expect } from '@playwright/test'

test('blog listing page loads', async ({ page }) => {
  await page.goto('/blog')
  await expect(page).toHaveTitle(/blog/i)
  // Check that posts are displayed
  const postCards = page.locator('article[role="link"]')
  await expect(postCards.first()).toBeVisible()
  // categories toolbar should include post categories (derived from content)
  const growthLink = page.locator('a:has-text("Growth")').first()
  await expect(growthLink).toBeVisible()
  await expect(growthLink).toHaveAttribute('href', '/blog/category/growth')
  const croLink = page.locator('a:has-text("CRO")').first()
  await expect(croLink).toBeVisible()
  await expect(croLink).toHaveAttribute('href', '/blog/category/cro')
  // post card should show author avatar (rounded)
  await expect(page.locator('article[role="link"] img[alt="James Rea"]').first()).toBeVisible()
})

test('blog post page loads', async ({ page }) => {
  // Use one of the sample posts
  await page.goto('/blog/how-we-increased-revenue-by-300-with-one-simple-hack')
  await expect(page.locator('h1')).toContainText('How We Increased Revenue by 300%')
  // Check that MDX content is rendered - look for content within the main article area
  const mainContent = page.locator('.col-span-12.xl\\:col-span-7.xl\\:pl-10.xl\\:border-l.xl\\:border-dashed')
  await expect(mainContent.locator('h2')).toContainText('Lorem Ipsume Dolor Simit')
  // video should render as PlayVideo trigger (not raw JSON)
  await expect(page.locator('button[aria-label="Play video"]')).toBeVisible()
  // Table of contents should be present and link to headings (including h4)
  await expect(page.locator('a[href="#lorem-ipsume-dolor-simit"]').first()).toHaveAttribute('href', '#lorem-ipsume-dolor-simit')
  await expect(page.locator('a[href="#dolor-rutrum-sit-vitae-euismod"]').first()).toHaveAttribute('href', '#dolor-rutrum-sit-vitae-euismod')
  // the target heading exists and contains the expected text
  await expect(page.locator('#dolor-rutrum-sit-vitae-euismod')).toHaveText(/Dolor rutrum sit, vitae euismod/)
  // category pill should be visible near the top of the post
  await expect(page.locator('text=Growth')).toBeVisible()
})