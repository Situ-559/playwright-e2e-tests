
import { test, expect } from '@playwright/test';

test('Verify application title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});
