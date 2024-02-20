import { test, expect } from "@playwright/test";

test.describe("header", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });
  test("main navigation", async ({ page }) => {
    const getNav = await page.locator("nav.navbar");
    const getNavLinks = await getNav.getByRole("link");

    expect(getNavLinks).toBeTruthy();
  });
});

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const getLink = await page.getByRole("link", { name: /docs/i });
  await expect(getLink).toBeTruthy();

  await getLink.click();

  await expect(page).toHaveURL(/docs/i);
});
