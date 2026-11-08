import { renameSync, rmSync } from "node:fs";
import { join } from "node:path";
import type { Config } from "@react-router/dev/config";

const config: Config = {
  appDirectory: "src/app",
  ssr: false,
  prerender: ["/", "/404"],
  buildEnd: ({ reactRouterConfig }) => {
    // Cloudflare serves 404.html for unknown paths, but /404 is pre-rendered as 404/index.html.
    const client = join(reactRouterConfig.buildDirectory, "client");
    renameSync(join(client, "404", "index.html"), join(client, "404.html"));
    rmSync(join(client, "404"), { recursive: true });
  },
};

export default config;
