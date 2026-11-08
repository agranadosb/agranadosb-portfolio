import { test } from "@playwright/test";

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];
const THEMES = ["light", "dark"] as const;

test.skip(!process.env.SCREENSHOTS, "set SCREENSHOTS=1 to capture the page");

for (const viewport of VIEWPORTS) {
  for (const theme of THEMES) {
    test(`screenshot ${viewport.name} ${theme}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.emulateMedia({ colorScheme: theme, reducedMotion: "reduce" });
      await page.goto("/");
      await page.evaluate(() => document.fonts.ready);

      await page.screenshot({
        path: `screenshots/${viewport.name}-${theme}.png`,
        fullPage: true,
      });
    });
  }
}
