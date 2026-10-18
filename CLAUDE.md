# Portfolio — Claude working guide

## Project

Personal portfolio and CV for Alejandro Granados — CTO, Staff AI Engineer, and Software Architect based in Valencia, Spain.

Two pages, both in English and Spanish:
- **`/`** — Portfolio: profile, about, skills, experience, education, honors, contact
- **`/cv`** (`cv.html`) — Print-optimized CV (A4, always light mode, downloadable as PDF)

Stack: React 19 · TypeScript · Tailwind v4 · Vite + SWC · Biome. No backend: content is static and the site is deployed as static assets to Cloudflare Workers.

## Commands

```bash
npm run dev                   # dev server (localhost:5173)
npm run build                 # tsc -b && vite build
npm run lint                  # biome lint, including the import rules
npm run check                 # biome lint + format check
npm run format                # biome format --write
npm run preview               # build + wrangler dev (local Workers runtime)
npm run deploy                # build + wrangler deploy (Cloudflare)
```

Node only exists inside the devcontainer (`.devcontainer/`): run every command there. Always run `npm run build` and `npm run lint` after any change. CI runs both only on PRs ready for review: drafts skip it, and marking a PR ready triggers it.

## Architecture

The [Heligrafics frontend standard](https://github.com/heligrafics/docs/blob/main/engineering/frontend/README.md): features, not hexagonal layers. Business rules live in backends; this front presents information and collects actions.

Every folder has a closed definition. If something doesn't fit the sentence, it doesn't go there.

| Folder | What goes in |
|---|---|
| `src/app/` | The shell: entry points, global providers, the layout (navigation) and the pages in `routes/`. The only place that composes features. |
| `src/features/<concept>/` | One user-facing concept with one objective, named in the product's words (`experience`, `cv`). Its public contract is the component at its root, named after it (`features/education/Education.tsx`), with its hook next to it. Everything else is internal and lives in `components/`, each component's hook next to it. |
| `src/api/` | The only data source, one module per domain. `api/profile` exposes the content and its types; the day there is a backend, only this module changes. |
| `src/components/` | UI that knows no business concept (`SectionTitle`, `SocialLinks`). |
| `src/lib/` | One shared capability per module, named after it (`i18n`, `theme`, `focus-trap`). |

Rules:
- Imports flow shared code (`api`, `components`, `lib`) → features → `app`. A feature imports only its own folder and shared code: never another feature, never `app`.
- `app` imports a feature only through its contract (`import { Education } from "@/features/education/Education"`), never its `components/` or its hooks, so a feature can reorganize itself without touching anyone else.
- When one feature must trigger another, the page wires them with a callback: `profile` exposes `onContact`, and `HomePage` opens `contact`.
- Code starts inside its feature. It moves to `components/` or `lib/` only when a second consumer needs it and it knows no business concept.
- No generic names (`utils`, `helpers`, `common`, `misc`, `types`) for folders or files.
- Absolute imports with `@/` everywhere: relative imports are rejected, so the import rules stay checkable.

Biome enforces the import rules (`overrides` in `biome.json` with `noRestrictedImports`), and they fail `npm run lint`. The `src/app/**` override rejects anything below a feature's root (`@/features/*/*/**`) and its root hooks (`@/features/*/use*`). **A new feature needs its own override**: copy an existing block and change the folder name in `includes` and in the `!@/features/<name>/**` exception. Without it, nothing checks the new feature.

## Content and text

- Portfolio content (profile, bio, jobs, skills, education, honors) lives in `src/api/profile/`. What doesn't depend on language is written once: each job's role, company, location and period live in `jobs.ts`. The translated text lives in `en.ts` and `es.ts`, which export the same names; job texts are keyed by the job's `id`, so `tsc` fails if a job is missing a translation.
- UI text lives in the hook of the component that shows it, as a `Record<Language, {...}>` constant, so `tsc` fails if a language is missing.
- No content or text hardcoded in components; asset paths are the only literals.

## Language and theme

- Language: stored preference (`language` in localStorage), else `navigator.language`. `LanguageProvider` holds it; features read it with `useLanguage()`.
- Theme: `light`, `dark` or `system` (the default). The inline script in `index.html` applies a stored theme before React loads, to avoid a flash. The toggle always sets an explicit theme; nothing in the UI goes back to `system`.
- In `src/index.css`, no class follows the system through `prefers-color-scheme`, and `:root.light` / `:root.dark` override it.

## Styling

- Semantic tokens in `src/index.css` under `@theme` (`surface-*`, `ink-*`, `accent`, `border`) for all portfolio UI.
- Raw Tailwind palette colors (`gray-*`, `blue-*`) only on the CV, which is always light and print-optimized.
- `HIGHLIGHTS_BY_INDEX` in the CV caps how many highlights each job shows, so the CV fits its print length. `?print=auto` opens the print dialog on load.

## TypeScript

`erasableSyntaxOnly: true` is set: no parameter properties (assign fields in the constructor body) and no enums with runtime values (use string unions or `as const`).

## What the tools impose

- Biome does not merge `noRestrictedImports` options across overrides: the last matching override wins. That is why every feature override repeats the relative-import patterns.
- Biome needs `"css": { "parser": { "tailwindDirectives": true } }` for `@theme` to parse.
- The `node_modules` in the repo folder is installed from the devcontainer (Linux binaries); it does not run on macOS.

## How we work

- One issue per task, with Objetivo, Criterio de entrega and Notas de diseño. A branch per task and a PR that closes it (`Closes #N`).
- Conventional Commits.
- What Claude writes on GitHub ends with the Claude Code attribution line.
