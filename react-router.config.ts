import { renameSync, rmSync } from "node:fs";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";

const config: Config = {
  appDirectory: "src/app",
  ssr: false,
  prerender: ["/", "/es", "/404", "/es/404"],
  buildEnd: ({ reactRouterConfig }) => {
    // Cloudflare serves the 404.html nearest to an unknown path, but /404 and /es/404 are
    // pre-rendered as 404/index.html.
    const client = join(reactRouterConfig.buildDirectory, "client");
    for (const directory of [client, join(client, "es")]) {
      renameSync(join(directory, "404", "index.html"), join(directory, "404.html"));
      rmSync(join(directory, "404"), { recursive: true });
    }
  },
};

export default config;
