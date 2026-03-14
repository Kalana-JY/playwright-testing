import { test as base, expect } from '@playwright/test';

// Create custom fixture
const test = base.extend({
  myPage: async ({ page }, use) => {
    await page.goto('https://playwright.dev/');
    await use(page);
  },
});

test('Fixture Test 1', async ({ myPage }) => {
  await expect(myPage).toHaveTitle(/Playwright/);
});

test('Fixture Test 2', async ({ myPage }) => {
  await expect(myPage.getByText('Get started')).toBeVisible();
});