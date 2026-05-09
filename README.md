# agranadosb · Portfolio

Personal portfolio and CV for Alejandro Granados — CTO, Staff AI Engineer, and Software Architect based in Valencia, Spain.

Built with **React 19 · TypeScript · Tailwind v4 · Vite + SWC · Biome**, following hexagonal architecture and SOLID principles.

## Pages

- `/` — Portfolio (hero, about, skills, experience, education, honors, contact)
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

Hexagonal architecture (Ports & Adapters) with strict layer separation:

```
src/
  domain/         # Pure types
  application/    # Use cases + port interfaces
  infrastructure/ # Port implementations (StaticProfileRepository, theme adapters)
  ui/             # Presenters, hooks, components, screens
```

All portfolio content lives in `src/infrastructure/profile/StaticProfileRepository.ts`.

## License

See [LICENSE](LICENSE).
