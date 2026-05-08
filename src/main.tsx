import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";
import { CVPage } from "@/pages/CV";
import "@/index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const RootComponent = window.location.pathname === "/cv" ? CVPage : App;

createRoot(rootElement).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
);
