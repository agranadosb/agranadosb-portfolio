import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "@/ui/context/AppContext";
import { CVPage } from "@/ui/screens/cv/CV";
import "@/index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider>
      <CVPage />
    </AppProvider>
  </StrictMode>,
);
