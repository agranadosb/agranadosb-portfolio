# Portfolio — Claude working guide

## Project

Personal portfolio of Alejandro Granados (portfolio.agranadosb.com) — CTO and software architect in Valencia, Spain. One page, in Spanish (`/`) and English (`/en/`), aimed at recruiters and AI screening tools: the served HTML must show all the content without JavaScript.

Stack: React 19 · TypeScript · React Router v8 (framework mode, pre-rendered) · Vite · plain CSS · Biome. No backend: content is static and the site is deployed as static assets to Cloudflare Workers.

## Commands

```bash
./scripts/localdev/start.sh   # dev server (localhost:5173), from the repo root wherever it's called from
npm run dev                   # dev server (localhost:5173)
npm run build                 # tsc -b && react-router build (pre-renders the HTML into build/client)
npm run lint                  # biome lint, including the import rules
npm run check                 # biome lint + format check
npm run format                # biome format --write
npm run test:e2e              # build, serve with wrangler and run the Playwright checks
npm run preview               # build + wrangler dev (local Workers runtime)
npm run deploy                # build + wrangler deploy (Cloudflare)
```

Node 22 only exists inside the devcontainer (`.devcontainer/`): run every command there. Always run `npm run build` and `npm run lint` after any change. CI runs both only on PRs ready for review: drafts skip it, and marking a PR ready triggers it. `SCREENSHOTS=1 npx playwright test e2e/screenshots.spec.ts` captures the page at 1440 and 390 px in both themes. `OG_IMAGE=1 npx playwright test e2e/og-image.spec.ts` renders `public/og.png` and `public/og-en.png` (the image shown when each version is shared) from the profile copy: run it again when the name, role or headline change.

## Architecture

The [Heligrafics frontend standard](https://github.com/heligrafics/docs/blob/main/engineering/frontend/README.md): features, not hexagonal layers. Business rules live in backends; this front presents information and collects actions.

Every folder has a closed definition. If something doesn't fit the sentence, it doesn't go there.

| Folder | What goes in |
|---|---|
| `src/app/` | The shell: `root.tsx` (the HTML document), `routes.ts`, the layout (rail, hexagon background) and the pages in `routes/`. The only place that composes features. |
| `src/features/<concept>/` | One section of the page with one objective, named in the product's words (`experience`, `methodology`). Its public contract is the component at its root, named after it (`features/education/Education.tsx`), with its hook and stylesheet next to it. Everything else is internal and lives in `components/`. |
| `src/api/` | The only data source, one module per domain. `api/profile` exposes the content and its types; the day there is a backend, only this module changes. |
| `src/components/` | UI that knows no business concept (`SectionHeader`, `NetworkIcon`). |
| `src/lib/` | One shared capability per module, named after it (`i18n`, `theme`). |
| `src/config/` | Site configuration (`SITE_URL`). |

Rules:
- Imports flow shared code (`api`, `components`, `config`, `lib`) → features → `app`. A feature imports only its own folder and shared code: never another feature, never `app`.
- `app` imports a feature only through its contract (`import { Education } from "@/features/education/Education"`), never its `components/` or its hooks, so a feature can reorganize itself without touching anyone else.
- When a feature must show another inside its own UI, it leaves a slot that the page fills: `Methodology` receives `Areas` and `Stack` as `children` in `HomePage`.
- Code starts inside its feature. It moves to `components/` or `lib/` only when a second consumer needs it and it knows no business concept.
- No generic names (`utils`, `helpers`, `common`, `misc`, `types`) for folders or files.
- Absolute imports with `@/` everywhere: relative imports are rejected, so the import rules stay checkable.

Biome enforces the import rules (`overrides` in `biome.json` with `noRestrictedImports`), and they fail `npm run lint`. The `src/app/**` override rejects anything below a feature's root (`@/features/*/*/**`) and its root hooks (`@/features/*/use*`). **A new feature needs its own override**: copy an existing block and change the folder name in `includes` and in the `!@/features/<name>/**` exception. Without it, nothing checks the new feature.

## Content and text

- The approved copy lives in `src/api/profile/es.ts`, typed by `ProfileContent`; `en.ts` is its English translation. Change both together, and the English follows the Spanish, never the other way around. Use the copy as it is: never invent or rewrite content, and never name internal projects or clients. Tools only appear in the stack table, never tied to a project.
- Content still to be confirmed is modelled, not faked: the contact email can be `null`, and the page then shows a visible placeholder.
- UI text (labels, headings, captions) lives in the hook of the component that shows it, as a `Record<Language, {...}>` constant.
- Spanish is the default language, at `/`; every other language lives under its code (`/en/`). `LANGUAGE_HOME` in `lib/i18n` gives each language's home, and `useLanguage()` reads the language from the route (`meta` functions read it from `location`), so one page component serves every language and `root.tsx` sets `<html lang>`. Each home declares all versions with `hreflang` (`x-default` is the Spanish one), with its own canonical, `og:locale` and Open Graph image, and the rail links to the other language.
- Adding a language means adding it to `Language` and `LANGUAGE_HOME`, writing its `api/profile` module and translations wherever `tsc` asks, adding its route in `routes.ts`, its home and its `404` to `prerender`, its directory to the 404 rename in `buildEnd`, and its Open Graph image.

## Pre-rendered HTML

- `react-router build` renders every route to HTML (`ssr: false` + `prerender`), and React hydrates it. Nothing may read `window`, `document` or `localStorage` while rendering, or the client render will not match the HTML: read them in effects.
- The theme button renders both icons and CSS shows the right one; its label starts generic and becomes specific after mount. That keeps the HTML identical whatever theme the visitor has.
- `public/_redirects` sends the old CV URLs (`/cv.html`, `/cv`) to the home with a 301.
- Unknown paths get the not-found page with a 404, in their language: `routes/NotFoundPage.tsx` is the catch-all route, pre-rendered at `/404` and `/en/404` and moved to `404.html` and `en/404.html` in `buildEnd`. Cloudflare serves the `404.html` nearest to the requested path (`not_found_handling: "404-page"`), so `/en/anything` gets the English one. The page takes its language from the same path, so hydration matches the file Cloudflare chose.

## Theme

- `light` or `dark`, following the system until the visitor chooses. The choice is stored as `theme-mode` and applied as `data-theme` on `<html>` by the inline script in `root.tsx`, before the first paint.
- In `src/index.css`, `prefers-color-scheme` sets the default tokens and `[data-theme]` overrides them.

## Styling

- Plain CSS: the prototype's tokens and rules. Global tokens and shared classes in `src/index.css`; each component's rules in a stylesheet next to it, imported by the component. No Tailwind.
- Tokens keep the design spec's names (`--ground`, `--panel`, `--ink`, `--muted`, `--line`, `--accent`, `--accentText`, `--onAccent`, `--hexLine`, `--hlColor`, `--hlBg`), plus `--accentEdge` for the edge of amber fills.
- Amber is never text on the light theme: text and lines use `--accentText`; `--accent` is only a fill, with `--onAccent` text on it.
- A meaningful amber fill (a badge, the email card, the hexagon core) has a `--accentEdge` border: `--ink` on the light theme, the fill itself on the dark one.
- Never colour alone: the focus ring is the global `:focus-visible` (3 px, `--accentText`), rail items draw a box on hover, and links inside a paragraph are underlined. Links that are components (cards, buttons, chips) carry a class and their own cue.
- Every animation is CSS or SVG and has a `prefers-reduced-motion` rule that leaves only colour changes. The parallax checks the same media query in JS.

## What the tools impose

- React Router v8 needs Node 22.22+ and React 19.2.7+. `.node-version` makes Cloudflare Workers Builds use Node 22.
- `react-router build` may install packages it is missing (it added `isbot`) and prune devDependencies while doing it. If the build fails with a missing module, run `npm install` and build again.
- React Router pre-renders `/404` and `/en/404` as `404/index.html`; `buildEnd` in `react-router.config.ts` runs after pre-rendering and renames them. That config is typed `const config: Config`, not `satisfies Config`: with `buildEnd`, the inferred type cannot be named and `tsc -b` fails (TS2742).
- Biome does not merge `noRestrictedImports` options across overrides: the last matching override wins. That is why every override repeats the relative-import patterns.
- A leftover `.wrangler/deploy/config.json` (from the old Cloudflare Vite plugin) makes wrangler serve `dist/` instead of `build/client`. Delete it.
- `wrangler dev` breaks (500) if `build/` is rebuilt under it, which `npm run test:e2e` does. Restart it.
- The `node_modules` in the repo folder is installed from the devcontainer (Linux binaries); it does not run on macOS.

## How we work

- One issue per task, with Objetivo, Criterio de entrega and Notas de diseño. A branch per task and a PR that closes it (`Closes #N`).
- Conventional Commits.
- What Claude writes on GitHub ends with the Claude Code attribution line.
- The redesign brief (spec, approved copy, prototype) lives in `docs/rediseno/`, which git ignores: it holds internal notes and the repo is public.
