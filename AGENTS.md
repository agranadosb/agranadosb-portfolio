# Portfolio — Agent instructions

## Project

Personal portfolio and CV for Alejandro Granados — CTO, Staff AI Engineer, and Software Architect based in Valencia, Spain.

Two pages, both bilingual (English / Spanish):
- **`/`** — Portfolio: hero, about, skills, experience, education, honors, contact
- **`/cv`** (`cv.html`) — Print-optimized CV (A4, always light mode, downloadable as PDF)

Stack: React 19 · TypeScript · Tailwind v4 · Vite + SWC · Biome. No backend — all content is static data under `src/infrastructure/`, deployed as static assets to Cloudflare Workers.

## Commands

```bash
npm run dev                   # dev server (localhost:5173)
npm run build                 # tsc -b && vite build
npm run preview               # build + wrangler dev (local Workers runtime)
npm run lint                  # biome lint (read-only)
npm run lint:fix              # biome check --write (auto-fix)
npm run format                # biome format --write
npm run check                 # biome lint + format check
npm run deploy                # build + wrangler deploy (Cloudflare)
npm run sync-ai-instructions  # regenerate AGENTS.md and .github/copilot-instructions.md from this file
```

Always run `npm run build` and `npm run lint` after any change.

`AGENTS.md` and `.github/copilot-instructions.md` are generated from this file — never edit them by hand. After editing this file, run `npm run sync-ai-instructions`.

## Architecture

Hexagonal architecture (Ports & Adapters) with strict layer separation.

```
src/
  domain/           # Pure types. No imports from other layers.
    profile/        # Profile, About, Job, Education, SkillCategory
    language/       # Language ("en" | "es"), UIStrings
    theme/          # ThemeMode
  application/
    ports/          # Interfaces (ProfileRepository, UIStringsRepository, LanguageRepository,
                    #   ThemeListener, ThemeRepository)
    usecases/       # One class per use case. Depends only on ports.
  infrastructure/   # Implements ports. Only place with side effects / external deps.
    profile/        # StaticProfileRepository + data/{en,es}.ts (portfolio content)
    language/       # StaticUIStringsRepository + strings/{en,es}.ts (UI text),
                    #   LocalStorageLanguageRepository, detectBrowserLanguage
    theme/          # BrowserThemeListener, LocalStorageThemeRepository
  ui/
    context/        # AppContext (React Context) + createAppContextValue (composition root)
    presenters/     # Stateless classes wrapping use cases with explicit method names
    hooks/          # One hook per presenter. Thin React coordinators.
    components/     # Dumb UI components grouped by feature (about/, nav/, job/, ...)
    screens/        # Page-level compositions
  utils/            # Framework-agnostic DOM helpers (FocusTrap)
```

Entry points: `src/main.tsx` (portfolio → `App`) and `src/cv-main.tsx` (CV → `CVPage`). Both wrap the tree in `AppProvider`.

### Dependency rule

`domain` ← `application` ← `infrastructure`
`domain` ← `application` ← `ui`

Infrastructure and UI never import from each other. The only exception is the composition root `ui/context/createAppContextValue.ts`, which instantiates the infrastructure adapters.

## SOLID

**S — Single Responsibility.** Each class has exactly one reason to change. Use cases execute one operation. Presenters wrap one use case. Repositories own one data source.

**O — Open/Closed.** Add features by creating new files (use case + presenter + hook), never by modifying existing ones. `ProfileRepository` is extended with new methods, not replaced.

**L — Liskov Substitution.** Any implementation of a port must be a valid substitute. `StaticProfileRepository` is interchangeable with a future `ApiProfileRepository` as long as it satisfies the interface.

**I — Interface Segregation.** Ports are narrow and focused: `ProfileRepository`, `UIStringsRepository`, `LanguageRepository`, `ThemeListener`, and `ThemeRepository` are separate interfaces — no class is forced to implement methods it doesn't need.

**D — Dependency Inversion.** Use cases depend on port interfaces, never on concrete implementations. Infrastructure implements ports; it is never imported by application or domain. Composition root (`createAppContextValue`) is the only place where abstractions are bound to implementations.

## Adding a new data feature — checklist

Follow this exact sequence every time:

1. **Domain** — add type to `src/domain/profile/` and export from `index.ts`
2. **Port** — add method to `src/application/ports/ProfileRepository.ts`
3. **Use case** — new file in `src/application/usecases/Get<Feature>UseCase.ts`
4. **Content** — add the data to **both** `src/infrastructure/profile/data/en.ts` and `data/es.ts` (same export name in each)
5. **Repository** — implement the method in `StaticProfileRepository.ts` (reads `DATA[this.language].<EXPORT>`)
6. **Presenter** — new file in `src/ui/presenters/<Feature>Presenter.ts`
7. **Hook** — new file in `src/ui/hooks/use<Feature>Presenter.ts`
8. **Wire** — add to `AppContextValue` in `AppContext.tsx` and instantiate in `createAppContextValue.ts`
9. **UI** — consume via hook in the screen; pass data as props to dumb components

## Adding UI text — checklist

Labels, buttons, section titles, and CV headings are not portfolio content — they are UI strings.

1. **Domain** — add the key to `UIStrings` in `src/domain/language/UIStrings.ts`
2. **Strings** — add the translation to **both** `src/infrastructure/language/strings/en.ts` and `es.ts` (both are typed as `UIStrings`, so `tsc` fails if one is missing)
3. **UI** — read it with `useUIStringsPresenter()` in the screen and pass it down as a prop

## Class conventions

`erasableSyntaxOnly: true` is set in tsconfig — parameter properties are forbidden.

```ts
// WRONG
class Foo {
  constructor(private readonly bar: Bar) {}
}

// CORRECT
class Foo {
  private readonly bar: Bar;
  constructor(bar: Bar) {
    this.bar = bar;
  }
}
```

No enums with runtime values (use string unions or `as const` objects instead).

## Presenter pattern

- Stateless classes — no `useState`, no side effects
- Method names are explicit and describe intent (`resolveInitialMode`, `getAbout`, ...)
- One presenter per feature domain
- Presenters are instantiated only in `createAppContextValue`, never inside hooks or components
- `AppProvider` memoizes the context value per language: presenters are stable until the language changes, and then the whole graph (repositories, use cases, presenters) is rebuilt for the new language

```ts
// ui/presenters/AboutPresenter.ts
export class AboutPresenter {
  private readonly useCase: GetAboutUseCase;
  constructor(useCase: GetAboutUseCase) {
    this.useCase = useCase;
  }
  getAbout(): About {
    return this.useCase.execute();
  }
}
```

## Hook pattern

Hooks only coordinate React state/effects with a presenter from context. No `useMemo`/`useRef` needed — presenters come from the memoized context value.

```ts
// ui/hooks/useAboutPresenter.ts
export function useAboutPresenter(): About {
  const { aboutPresenter } = useAppContext();
  return aboutPresenter.getAbout();
}
```

Hooks that hold pure UI state with no domain logic (e.g. `useMobileMenuPresenter`) may skip the presenter.

## Component conventions

- Dumb components live in `src/ui/components/<feature>/` — one file per component
- Screens live in `src/ui/screens/<section>/` — compose hooks + components
- Screens call hooks; components receive plain props
- No hardcoded content in components or screens — all text/data comes from the domain through the presenter stack

## Content

Portfolio content (profile, bio, stats, jobs, skills, education, honors) lives in:

```
src/infrastructure/profile/data/en.ts
src/infrastructure/profile/data/es.ts
```

Both files export the same names (`PROFILE`, `ABOUT`, `JOBS`, `EDUCATION`, `STACK`, `HONORS`) and must stay in sync — same entries, same order. The Spanish `PROFILE` spreads `PROFILE_EN` and overrides only what is translated.

UI strings live in `src/infrastructure/language/strings/{en,es}.ts` (see "Adding UI text").

Never hardcode content or UI text in UI files.

## Language

Two languages: `en` | `es`.

- Initial language: stored preference (`LocalStorageLanguageRepository`, key: `language`), else `navigator.language` via `detectBrowserLanguage` (`es*` → `es`, anything else → `en`)
- `AppProvider` holds the current language in React state. `LanguagePresenter.setLanguage` persists it and updates that state, which rebuilds the context value
- `StaticProfileRepository` receives the language in its constructor; `UIStringsPresenter.getUIStrings(language)` receives it as an argument
- The CV page shares the same preference (same `AppProvider` and storage key)

## Styling

- Tailwind v4 via `@tailwindcss/vite`
- Custom semantic tokens defined in `src/index.css` under `@theme`:
  `surface-base`, `surface-raised`, `surface-overlay`, `ink-primary`, `ink-secondary`, `ink-muted`, `accent`, `border`
- Use custom tokens for all portfolio UI. Raw Tailwind palette colors (gray-*, blue-*) are reserved for the CV page only (always light mode, print-optimized)
- Biome requires `"css": { "parser": { "tailwindDirectives": true } }` in `biome.json` for `@theme` to parse correctly

## Theme

Three modes: `light` | `dark` | `system` (`system` is the default when nothing is stored).

- System preference detected via `BrowserThemeListener` (media query, live updates)
- Explicit choice persisted in `LocalStorageThemeRepository` (key: `theme-mode`); `system` clears the key
- The toggle flips the effective theme to an explicit `light` or `dark` — there is no UI path back to `system` once toggled
- Applied before React hydration via inline `<script>` in `index.html` to avoid flash
- CSS variables in `index.css`: dark by default, light via `@media (prefers-color-scheme: light)`, and the `:root.light` / `:root.dark` classes override the media query

## CV page

- Uses the same `AppProvider` and hooks as the portfolio; no theme toggle, always light (`colorScheme: "light"` + raw Tailwind palette)
- `HIGHLIGHTS_BY_INDEX` in `CV.tsx` caps how many highlights each job shows (most recent jobs show more) to keep it to print length
- `?print=auto` triggers `window.print()` on load — the hero's "Download CV" button links to `/cv.html?print=auto`

## Build

- Two entry points: `index.html` (portfolio) and `cv.html` (CV/print)
- Vendor chunk (`react`, `react-dom`) split manually for better caching
- `target: "esnext"` for modern output
- `@` alias resolves to `src/`
- Assets in `public/`: `favicon.png` (32×32, for `<link rel="icon">`), `icon.webp` (256×256, for nav logo), `me.webp` (avatar photo)
- Images converted to WebP for size. Raw source assets live in `static/` (not served)

## Deploy

- Cloudflare Workers serving static assets, via `@cloudflare/vite-plugin` (in `vite.config.ts`) and `wrangler.jsonc`
- `wrangler.jsonc` uses `not_found_handling: "single-page-application"` — there is no Worker script
- `npm run preview` runs the build in the local Workers runtime; `npm run deploy` builds and publishes

## Toolchain

| Tool | Version | Config |
|---|---|---|
| TypeScript | ~5.8 | `tsconfig.app.json` — strict, erasableSyntaxOnly |
| Vite + SWC | ~7 | `vite.config.ts` |
| Tailwind | v4 | via `@tailwindcss/vite` plugin, config in `src/index.css` |
| Biome | ~2 | `biome.json` — 2 spaces, double quotes, trailing commas, 100 col |
| Wrangler | ~4 | `wrangler.jsonc` — Cloudflare Workers static assets |
