import { writeFileSync } from "node:fs";
import { test } from "@playwright/test";
import { PDFDict, PDFDocument, PDFName, PDFString } from "pdf-lib";
import { CONTENT as EN } from "../src/api/profile/en";
import { CONTENT as ES } from "../src/api/profile/es";
import { CV, SITE_URL } from "../src/config/site";
import { cvDocument, cvMetadata, cvSourceHash } from "./cv/document";

// Renders the CV of each language into public/: a tagged PDF (accessible, with bookmarks) whose
// metadata and fingerprint pdf-lib writes afterwards. The page reuses the site's fonts: it loads
// the home and swaps its body for the CV.

test.skip(!process.env.CV_PDF, "set CV_PDF=1 to render the CV PDFs into public/");

const CVS = [
  { language: "en", content: EN },
  { language: "es", content: ES },
] as const;

for (const { language, content } of CVS) {
  test(`render the CV in ${language}`, async ({ page }) => {
    const html = cvDocument(content, language);
    const metadata = cvMetadata(content, language);

    await page.route("**/assets/**/*.js", (route) => route.abort());
    await page.goto("/");
    await page.evaluate(
      async ({ language, title, html }) => {
        document.documentElement.lang = language;
        document.documentElement.dataset.theme = "light";
        document.title = title;
        document.body.innerHTML = html;
        document.body.getBoundingClientRect();
        await document.fonts.ready;
      },
      { language, title: metadata.title, html },
    );

    const pdf = await PDFDocument.load(
      await page.pdf({ preferCSSPageSize: true, tagged: true, outline: true }),
    );
    pdf.setTitle(metadata.title, { showInWindowTitleBar: true });
    pdf.setAuthor(metadata.author);
    pdf.setSubject(metadata.subject);
    // pdf-lib joins keywords with spaces; one comma-separated entry keeps them apart.
    pdf.setKeywords([metadata.keywords]);
    pdf.setLanguage(language);
    pdf.setCreator(SITE_URL);
    pdf.context
      .lookup(pdf.context.trailerInfo.Info, PDFDict)
      .set(PDFName.of("CvSource"), PDFString.of(cvSourceHash(html)));

    writeFileSync(`public/${CV[language].path}`, await pdf.save());
  });
}
