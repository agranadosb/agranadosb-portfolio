import { expect, test } from "@playwright/test";

const SITE = "https://portfolio.agranadosb.com/";
const SECTION_TITLES = [
  "My methodology and where I apply it",
  "Experience",
  "Education",
  "Contact",
];

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("the served HTML shows every section", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("heading", { level: 1, name: /Alejandro Granados/ })).toBeVisible();
    for (const name of SECTION_TITLES) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    }
    await expect(page.getByRole("heading", { level: 4, name: "Wildfire fighting" })).toBeVisible();
    await expect(page.getByRole("table")).toContainText("Data Mesh (Data as a Product)");
    await expect(page.getByRole("heading", { level: 4, name: "CTO" })).toBeVisible();
    await expect(page.getByText("Mathematical Analysis")).toBeVisible();
  });
});

test("the JSON-LD describes Alejandro as a schema.org Person", async ({ page }) => {
  await page.goto("/");

  const person = JSON.parse(
    (await page.locator('script[type="application/ld+json"]').textContent()) ?? "",
  );

  expect(person).toMatchObject({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alejandro Granados",
    url: SITE,
    jobTitle: "CTO",
    worksFor: { "@type": "Organization", name: "Heligráfics" },
    address: { addressLocality: "Valencia", addressCountry: "ES" },
    alumniOf: { name: "Universitat Politècnica de València" },
  });
  expect(person.knowsAbout).toContain("Data management");
  expect(person.sameAs).toEqual([
    "https://www.linkedin.com/in/alejandro-granados-ba%C3%B1uls-011010148/",
    "https://github.com/agranadosb",
  ]);
});

test("shared links show the large Open Graph image of each language", async ({ page, request }) => {
  for (const [path, image] of [
    ["/", "og.png"],
    ["/es/", "og-es.png"],
  ]) {
    await page.goto(path);

    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      `${SITE}${image}`,
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );

    const response = await request.get(`/${image}`);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("image/png");
  }
});

test("the rail and the page can be walked with the keyboard", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: /^Switch to/ })).toBeVisible();

  const reached: string[] = [];
  for (let step = 0; step < 30; step++) {
    await page.keyboard.press("Tab");
    reached.push(
      await page.evaluate(() => {
        const element = document.activeElement as HTMLElement | null;
        const text = element?.textContent?.replace(/\s+/g, " ").trim() ?? "";
        return element?.getAttribute("aria-label") ?? text;
      }),
    );
  }

  for (const target of [
    "Methodology",
    "Experience",
    "Education",
    "Contact",
    "LinkedIn",
    "GitHub",
    "Leer en español",
  ]) {
    expect(reached.some((name) => name.includes(target))).toBe(true);
  }
  expect(reached.some((name) => name.startsWith("Switch to"))).toBe(true);
  expect(reached.some((name) => name.startsWith("See how I approach each sector"))).toBe(true);

  const focusRing = await page.evaluate(() => {
    const style = getComputedStyle(document.activeElement as Element);
    return { style: style.outlineStyle, width: Number.parseFloat(style.outlineWidth) };
  });
  expect(focusRing).toEqual({ style: "solid", width: 3 });

  await page.getByRole("link", { name: "Experience" }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#experiencia$/);
});

test("on a phone the stack table fits the screen and stays a table", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const stack = page.locator("#stack");
  const { clientWidth, scrollWidth } = await stack.evaluate((box) => ({
    clientWidth: box.clientWidth,
    scrollWidth: box.scrollWidth,
  }));
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  await expect(page.getByRole("table")).toBeVisible();
  await expect(page.getByRole("rowheader", { name: "Geospatial" })).toBeVisible();
});

test("the chosen theme is saved and applied before React loads", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");

  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.route("**/assets/**/*.js", (route) => route.abort());
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("the hidden rail leaves buttons to show it and to change the theme", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Hide menu" }).click();

  await expect(page.getByRole("navigation", { name: "Sections" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Switch to/ })).toBeVisible();
  await page.getByRole("button", { name: "Show menu" }).click();
  await expect(page.getByRole("navigation", { name: "Sections" })).toBeVisible();
});

test("with reduced motion the background does not move on scroll", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  await page.mouse.wheel(0, 2000);
  await page.waitForTimeout(200);

  const offset = await page
    .locator(".hexbg")
    .evaluate((shell) => shell.style.getPropertyValue("--hexY"));
  expect(offset).toBe("");
});

test("LinkedIn and GitHub links open in a new tab", async ({ page }) => {
  await page.goto("/");

  const external = page.locator('a[href*="linkedin.com"], a[href*="github.com"]');
  await expect(external).toHaveCount(4);
  for (const link of await external.all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
});

test("old CV links redirect to the home", async ({ request }) => {
  for (const path of ["/cv.html", "/cv"]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status()).toBe(301);
    expect(response.headers().location).toMatch(/\/$/);
  }
});

test("an unknown path answers with the not-found page", async ({ page }) => {
  const response = await page.goto("/does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "No adapter answers at this address.",
  );
  await expect(page.getByRole("link", { name: /Back to home/ })).toHaveAttribute("href", "/");
});

test("each version declares the other and links to it", async ({ page }) => {
  for (const { path, canonical, language, otherHome, readInOther } of [
    {
      path: "/",
      canonical: SITE,
      language: "en",
      otherHome: "/es/",
      readInOther: "Leer en español",
    },
    {
      path: "/es/",
      canonical: `${SITE}es/`,
      language: "es",
      otherHome: "/",
      readInOther: "Read in English",
    },
  ]) {
    await page.goto(path);

    await expect(page.locator("html")).toHaveAttribute("lang", language);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
      "href",
      SITE,
    );
    await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveAttribute(
      "href",
      `${SITE}es/`,
    );
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute(
      "href",
      SITE,
    );
    await expect(page.getByRole("link", { name: readInOther })).toHaveAttribute("href", otherHome);
  }
});

test.describe("the Spanish version", () => {
  test.describe("without JavaScript", () => {
    test.use({ javaScriptEnabled: false });

    test("the served HTML shows every section in Spanish", async ({ page }) => {
      await page.goto("/es/");

      await expect(page.locator("html")).toHaveAttribute("lang", "es");
      for (const name of [
        "Mi metodología y dónde la aplico",
        "Experiencia",
        "Formación",
        "Contacto",
      ]) {
        await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
      }
      await expect(
        page.getByRole("heading", { level: 4, name: "Lucha contra incendios" }),
      ).toBeVisible();
      await expect(page.getByRole("table")).toContainText("Gestión del dato");
      await expect(page.getByText("Análisis Matemático")).toBeVisible();
    });
  });

  test("an unknown path under /es/ answers with the Spanish not-found page", async ({ page }) => {
    const response = await page.goto("/es/no-existe");

    expect(response?.status()).toBe(404);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Ningún adaptador responde a esta dirección.",
    );
    await expect(page.getByRole("link", { name: /Volver al inicio/ })).toHaveAttribute(
      "href",
      "/es/",
    );
  });
});
