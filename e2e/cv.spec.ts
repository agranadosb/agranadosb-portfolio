import { expect, test } from "@playwright/test";
import { PDFDocument, PDFName, PDFString } from "pdf-lib";
import { CONTENT as EN } from "../src/api/profile/en";
import { CONTENT as ES } from "../src/api/profile/es";
import { CV } from "../src/config/site";

const CVS = [
  { language: "en", home: "/", content: EN },
  { language: "es", home: "/es/", content: ES },
] as const;

const text = (value: unknown) => (value instanceof PDFString ? value.decodeText() : undefined);

for (const { language, content } of CVS) {
  test(`the build renders the ${language} CV from the copy, tagged and described`, async ({
    request,
  }) => {
    const response = await request.get(`/${CV[language].path}`);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/pdf");

    const pdf = await PDFDocument.load(await response.body(), { updateMetadata: false });
    expect(pdf.getAuthor()).toBe(content.profile.name);
    expect(pdf.getTitle()).toMatch(new RegExp(`^${content.profile.name} · `));
    expect(pdf.getSubject()).toContain(content.profile.role);
    expect(pdf.getKeywords()).toContain(content.stack[0].tools[0]);
    expect(pdf.getPageCount()).toBeLessThanOrEqual(2);
    expect(text(pdf.catalog.lookup(PDFName.of("Lang")))).toBe(language);
    expect(pdf.catalog.has(PDFName.of("StructTreeRoot"))).toBe(true);
    expect(pdf.catalog.has(PDFName.of("Outlines"))).toBe(true);
  });
}

test("each page offers the CV of its language", async ({ page }) => {
  for (const { language, home } of CVS) {
    await page.goto(home);

    const links = page.locator(`a[href="/${CV[language].path}"]`);
    await expect(links).toHaveCount(2);
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute("download", CV[language].fileName);
    }
  }
});

// The old CV page was in English: its links now open the English PDF.
test("old CV links open the English CV", async ({ request }) => {
  for (const path of ["/cv.html", "/cv", "/cv/"]) {
    const redirect = await request.get(path, { maxRedirects: 0 });
    expect(redirect.status()).toBe(301);
    expect(redirect.headers().location).toMatch(new RegExp(`/${CV.en.path}$`));

    const response = await request.get(path);
    expect(response.headers()["content-type"]).toBe("application/pdf");
  }
});
