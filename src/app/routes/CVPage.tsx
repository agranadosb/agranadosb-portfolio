import { useEffect } from "react";
import { CV } from "@/features/cv/components/CV";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STRINGS: Record<Language, { backToPortfolio: string; downloadAsPDF: string }> = {
  en: {
    backToPortfolio: "← Back to portfolio",
    downloadAsPDF: "Download as PDF",
  },
  es: {
    backToPortfolio: "← Volver al portfolio",
    downloadAsPDF: "Descargar como PDF",
  },
};

export function CVPage() {
  const { language } = useLanguage();
  const strings = STRINGS[language];

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") === "auto") {
      window.print();
    }
  }, []);

  return (
    <div style={{ colorScheme: "light" }} className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="print:hidden fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-gray-50 border-b border-gray-200 px-6 py-3">
        <a href="/" className="text-sm text-blue-600 hover:underline">
          {strings.backToPortfolio}
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors cursor-pointer"
        >
          {strings.downloadAsPDF}
        </button>
      </div>

      <CV />
    </div>
  );
}
