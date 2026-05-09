import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/ui/App";
import { AppProvider } from "@/ui/context/AppContext";
import { createAppContextValue } from "@/ui/context/createAppContextValue";
import "@/index.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider value={createAppContextValue()}>
      <App />
    </AppProvider>
  </StrictMode>,
);
