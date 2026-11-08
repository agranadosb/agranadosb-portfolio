import type { Language } from "@/lib/i18n/Language";

export const SITE_URL = "https://portfolio.agranadosb.com/";

// Each language's CV: a PDF rendered from the profile copy by e2e/cv-pdf.spec.ts, served from public/.
export const CV: Record<Language, { path: string; fileName: string }> = {
  en: { path: "alejandro-granados-cv.pdf", fileName: "Alejandro-Granados-CV.pdf" },
  es: { path: "alejandro-granados-cv-es.pdf", fileName: "Alejandro-Granados-CV-ES.pdf" },
};
