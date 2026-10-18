import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "@/app/routes/HomePage";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "@/index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  </StrictMode>,
);
