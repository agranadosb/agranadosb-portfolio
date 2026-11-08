import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "@/index.css";

const APPLY_STORED_THEME = `try {
  const theme = localStorage.getItem("theme-mode");
  if (theme === "light" || theme === "dark") document.documentElement.classList.add(theme);
} catch {
  console.warn("Unable to access localStorage, theme preference will not be applied.");
}`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: it must run before React loads, or the stored theme flashes in */}
        <script dangerouslySetInnerHTML={{ __html: APPLY_STORED_THEME }} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}
