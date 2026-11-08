# agranadosb · Portfolio

Personal portfolio of Alejandro Granados — CTO and software architect based in Valencia, Spain: data architecture and AI in production.

Built with **React 19 · TypeScript · React Router v8 · Vite · Biome**, pre-rendered to static HTML and following the Heligrafics frontend standard: a feature-based structure derived from Bulletproof React.

## Page

`/` — one page in Spanish: cover, methodology and work areas, technology stack, experience, education and contact. Every word is in the served HTML, readable without JavaScript.

## Getting started

Requires [Docker](https://www.docker.com/) and [VS Code](https://code.visualstudio.com/) with the **Dev Containers** extension.

1. Open the folder in VS Code and run **Dev Containers: Reopen in Container**.
2. Once attached, start the dev server:

   ```bash
   ./scripts/localdev/start.sh
   ```

   Available at http://localhost:5173.

## Scripts

| Command | Description |
|---|---|
| `./scripts/localdev/start.sh` | Start the dev server from the repo root, wherever it's called from |
| `npm run dev` | Start the React Router dev server |
| `npm run build` | Type-check and pre-render the site into `build/client` |
| `npm run preview` | Serve the production build with wrangler |
| `npm run test:e2e` | Run the Playwright end-to-end checks |
| `npm run lint` | Run Biome linter |
| `npm run lint:fix` | Run Biome linter with auto-fix |
| `npm run format` | Format with Biome |
| `npm run check` | Biome lint + format check |

## Architecture

Feature-based, with imports flowing one way: shared code → features → app.

```
src/
  app/         # Shell: HTML document, routes, layout (rail, hexagon background) and pages
  features/    # One folder per section (profile, methodology, areas, stack, experience, ...)
  api/         # The only data source: the approved content and its types
  components/  # UI with no business concept
  lib/         # Shared capabilities: i18n, theme
  config/      # Site configuration
```

Biome enforces the import boundaries, and CI runs build and lint on pull requests ready for review (not on drafts). All the content lives in `src/api/profile/es.ts`.

## License

See [LICENSE](LICENSE).
