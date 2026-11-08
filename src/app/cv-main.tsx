import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CVPage } from "@/app/routes/CVPage";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "@/index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <CVPage />
    </LanguageProvider>
  </StrictMode>,
);
