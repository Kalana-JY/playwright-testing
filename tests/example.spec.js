// @ts-check
import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// Feature 2: Fixtures (Setup) - Runs before every test to ensure isolation
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

// Feature 1: Assertions - Verifying expected outcomes
test('verify inventory page loads and items can be added', async ({ page }) => {
  // Assert the URL changed successfully
  await expect(page).toHaveURL(/.*inventory.html/);
  
  // Assert the header is visible and correct
  const title = page.locator('.title');
  await expect(title).toHaveText('Items'); //Products
  
  // Interact and assert state change
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});
