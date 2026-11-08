import { expect, test } from "@playwright/test";

const SECTION_TITLES = ["Mi metodología y dónde la aplico", "Experiencia", "Formación", "Contacto"];

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("the served HTML shows every section", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1, name: /Alejandro Granados/ })).toBeVisible();
    for (const name of SECTION_TITLES) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
    }
    await expect(
      page.getByRole("heading", { level: 4, name: "Lucha contra incendios" }),
    ).toBeVisible();
    await expect(page.getByRole("table")).toContainText("Data Mesh (Data as a Product)");
    await expect(page.getByRole("heading", { level: 4, name: "CTO" })).toBeVisible();
    await expect(page.getByText("Análisis Matemático")).toBeVisible();
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
    jobTitle: "CTO",
    worksFor: { "@type": "Organization", name: "Heligráfics" },
    address: { addressLocality: "Valencia", addressCountry: "ES" },
    alumniOf: { name: "Universitat Politècnica de València" },
  });
  expect(person.knowsAbout).toContain("Gestión del dato");
  expect(person.sameAs).toEqual([
    "https://www.linkedin.com/in/alejandro-granados-ba%C3%B1uls-011010148/",
    "https://github.com/agranadosb",
  ]);
});

test("the rail and the page can be walked with the keyboard", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("button", { name: /^Cambiar a tema/ })).toBeVisible();

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
    "Metodología",
    "Experiencia",
    "Formación",
    "Contacto",
    "LinkedIn",
    "GitHub",
  ]) {
    expect(reached.some((name) => name.includes(target))).toBe(true);
  }
  expect(reached.some((name) => name.startsWith("Cambiar a tema"))).toBe(true);
  expect(reached.some((name) => name.startsWith("Ver cómo resuelvo cada ámbito"))).toBe(true);

  const focusRing = await page.evaluate(() => {
    const style = getComputedStyle(document.activeElement as Element);
    return { style: style.outlineStyle, width: Number.parseFloat(style.outlineWidth) };
  });
  expect(focusRing).toEqual({ style: "solid", width: 3 });

  await page.getByRole("link", { name: "Experiencia" }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#experiencia$/);
});

test("the chosen theme is saved and applied before React loads", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");

  await page.getByRole("button", { name: "Cambiar a tema oscuro" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.route("**/assets/**/*.js", (route) => route.abort());
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("the hidden rail leaves buttons to show it and to change the theme", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Ocultar menú" }).click();

  await expect(page.getByRole("navigation", { name: "Secciones" })).toHaveCount(0);
  await expect(page.getByRole("button", { name: /^Cambiar a tema/ })).toBeVisible();
  await page.getByRole("button", { name: "Mostrar menú" }).click();
  await expect(page.getByRole("navigation", { name: "Secciones" })).toBeVisible();
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
  const response = await page.goto("/no-existe");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Ningún adaptador responde a esta dirección.",
  );
  await expect(page.getByRole("link", { name: /Volver al inicio/ })).toHaveAttribute("href", "/");
});
