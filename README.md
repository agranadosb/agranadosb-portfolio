# agranadosb · Portfolio

Personal portfolio and CV for Alejandro Granados — CTO, Staff AI Engineer, and Software Architect based in Valencia, Spain.

Built with **React 19 · TypeScript · Tailwind v4 · Vite + SWC · Biome**, following the Heligrafics frontend standard: a feature-based structure derived from Bulletproof React.

## Pages

- `/` — Portfolio (profile, about, skills, experience, education, honors, contact)
- `/cv` — Print-optimized CV (A4, downloadable as PDF)

## Getting started

Requires [Docker](https://www.docker.com/) and [VS Code](https://code.visualstudio.com/) with the **Dev Containers** extension.

1. Open the folder in VS Code and run **Dev Containers: Reopen in Container**.
2. Once attached, start the dev server:

   ```bash
   npm run dev
   ```

   Available at http://localhost:5173.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Biome linter |
| `npm run lint:fix` | Run Biome linter with auto-fix |
| `npm run format` | Format with Biome |
| `npm run check` | Biome lint + format check |

## Architecture

Feature-based, with imports flowing one way: shared code → features → app.

```
src/
  app/         # Shell: entry points, providers, layout and pages (routes/)
  features/    # One folder per user-facing concept (about, experience, cv, ...)
  api/         # The only data source: profile content and its types
  components/  # UI with no business concept
  lib/         # Shared capabilities: i18n, theme, focus-trap
```

Biome enforces the import boundaries, and CI runs build and lint on every pull request. All portfolio content lives in `src/api/profile/en.ts` and `es.ts`.

## License

See [LICENSE](LICENSE).
