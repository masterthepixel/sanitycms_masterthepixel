import { test, expect } from '@playwright/test'

test('services page loads and shows Our Services', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('/services');
  await expect(page).toHaveTitle(/Services|masterthepixel/i);
  await expect(page.locator('text=Our Services')).toBeVisible();
  expect(errors).toHaveLength(0);
});

test('service detail page loads without console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('/services/data-visualization');
  await expect(page).toHaveTitle(/Data Visualization|masterthepixel/i);
  await expect(page.locator('text=Data Visualization')).toBeVisible();
  expect(errors).toHaveLength(0);
});