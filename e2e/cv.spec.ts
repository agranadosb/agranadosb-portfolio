import { expect, test } from "@playwright/test";
import { PDFDict, PDFDocument, PDFName, PDFString } from "pdf-lib";
import { CONTENT as EN } from "../src/api/profile/en";
import { CONTENT as ES } from "../src/api/profile/es";
import { CV } from "../src/config/site";
import { cvDocument, cvMetadata, cvSourceHash } from "./cv/document";

const CVS = [
  { language: "en", home: "/", content: EN },
  { language: "es", home: "/es/", content: ES },
] as const;

const text = (value: unknown) => (value instanceof PDFString ? value.decodeText() : undefined);

for (const { language, content } of CVS) {
  test(`the ${language} CV is served, tagged, described and up to date`, async ({ request }) => {
    const response = await request.get(`/${CV[language].path}`);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toBe("application/pdf");

    const pdf = await PDFDocument.load(await response.body(), { updateMetadata: false });
    const metadata = cvMetadata(content, language);
    expect(pdf.getTitle()).toBe(metadata.title);
    expect(pdf.getAuthor()).toBe(metadata.author);
    expect(pdf.getPageCount()).toBeLessThanOrEqual(2);
    expect(text(pdf.catalog.lookup(PDFName.of("Lang")))).toBe(language);
    expect(pdf.catalog.has(PDFName.of("StructTreeRoot"))).toBe(true);
    expect(pdf.catalog.has(PDFName.of("Outlines"))).toBe(true);

    const info = pdf.context.lookup(pdf.context.trailerInfo.Info, PDFDict);
    expect(
      text(info.lookup(PDFName.of("CvSource"))),
      "the CV is stale: run CV_PDF=1 npx playwright test e2e/cv-pdf.spec.ts",
    ).toBe(cvSourceHash(cvDocument(content, language)));
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
