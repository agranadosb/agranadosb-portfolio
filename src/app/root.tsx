import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@/index.css";

const APPLY_STORED_THEME = `try {
  const theme = localStorage.getItem("theme-mode");
  if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
} catch {}`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
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
  return <Outlet />;
}
