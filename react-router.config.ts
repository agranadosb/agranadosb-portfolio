import { readdirSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";

const config: Config = {
  appDirectory: "src/app",
  ssr: false,
  // Every static route (both homes and both CVs) and the not-found page of each language.
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), "/404", "/es/404"],
  buildEnd: ({ reactRouterConfig }) => {
    // Cloudflare serves the 404.html nearest to an unknown path, but /404 and /es/404 are
    // pre-rendered as 404/index.html.
    const client = join(reactRouterConfig.buildDirectory, "client");
    for (const directory of [client, join(client, "es")]) {
      renameSync(join(directory, "404", "index.html"), join(directory, "404.html"));
      rmSync(join(directory, "404"), { recursive: true });
    }
    // Pre-rendering the CVs also writes the .data file that client navigations would ask for; a
    // link to a PDF is never a client navigation.
    for (const file of readdirSync(client)) {
      if (file.endsWith(".pdf.data")) rmSync(join(client, file));
    }
  },
};

export default config;
