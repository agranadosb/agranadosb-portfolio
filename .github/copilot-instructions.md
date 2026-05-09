# Portfolio — Copilot instructions

## Project

Personal portfolio and CV for Alejandro Granados — CTO, Staff AI Engineer, and Software Architect based in Valencia, Spain.

Two pages:
- **`/`** — Portfolio: hero, about, skills, experience, education, honors, contact
- **`/cv`** — Print-optimized CV (A4, always light mode, downloadable as PDF)

Stack: React 19 · TypeScript · Tailwind v4 · Vite + SWC · Biome. No backend — all content is static data in `StaticProfileRepository`.

## Commands

```bash
npm run dev          # dev server (localhost:5173)
npm run build        # tsc -b && vite build
npm run lint         # biome lint (read-only)
npm run lint:fix     # biome check --write (auto-fix)
npm run format       # biome format --write
```

Always run `npm run build` and `npm run lint` after any change.

## Architecture

Hexagonal architecture (Ports & Adapters) with strict layer separation.

```
src/
  domain/           # Pure types. No imports from other layers.
  application/
    ports/          # Interfaces (ProfileRepository, ThemeListener, ThemeRepository)
    usecases/       # One class per use case. Depends only on ports.
  infrastructure/   # Implements ports. Only place with side effects / external deps.
    profile/        # StaticProfileRepository — all content lives here
    theme/          # BrowserThemeListener, LocalStorageThemeRepository
  ui/
    context/        # AppContext (React Context) + createAppContextValue (composition root)
    presenters/     # Stateless classes wrapping use cases with explicit method names
    hooks/          # One hook per presenter. Thin React coordinators.
    components/     # Dumb UI components grouped by feature (about/, nav/, job/, ...)
    screens/        # Page-level compositions
```

### Dependency rule

`domain` ← `application` ← `infrastructure`
`domain` ← `application` ← `ui`

Infrastructure and UI never import from each other.

## SOLID

**S — Single Responsibility.** Each class has exactly one reason to change. Use cases execute one operation. Presenters wrap one use case. Repositories own one data source.

**O — Open/Closed.** Add features by creating new files (use case + presenter + hook), never by modifying existing ones. `ProfileRepository` is extended with new methods, not replaced.

**L — Liskov Substitution.** Any implementation of a port must be a valid substitute. `StaticProfileRepository` is interchangeable with a future `ApiProfileRepository` as long as it satisfies the interface.

**I — Interface Segregation.** Ports are narrow and focused: `ThemeListener`, `ThemeRepository`, and `ProfileRepository` are three separate interfaces — no class is forced to implement methods it doesn't need.

**D — Dependency Inversion.** Use cases depend on port interfaces, never on concrete implementations. Infrastructure implements ports; it is never imported by application or domain. Composition root (`createAppContextValue`) is the only place where abstractions are bound to implementations.

## Adding a new data feature — checklist

Follow this exact sequence every time:

1. **Domain** — add type to `src/domain/profile/` and export from `index.ts`
2. **Port** — add method to `src/application/ports/ProfileRepository.ts`
3. **Use case** — new file in `src/application/usecases/Get<Feature>UseCase.ts`
4. **Repository** — implement the method in `StaticProfileRepository.ts` (content goes here)
5. **Presenter** — new file in `src/ui/presenters/<Feature>Presenter.ts`
6. **Hook** — new file in `src/ui/hooks/use<Feature>Presenter.ts`
7. **Wire** — add to `AppContextValue` in `AppContext.tsx` and instantiate in `createAppContextValue.ts`
8. **UI** — consume via hook in the screen; pass data as props to dumb components

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
- Presenters are singletons: instantiated once in `createAppContextValue`, never inside hooks or components

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

Hooks only coordinate React state/effects with a presenter from context. No `useMemo`/`useRef` needed — presenters are stable singletons.

```ts
// ui/hooks/useAboutPresenter.ts
export function useAboutPresenter(): About {
  const { aboutPresenter } = useAppContext();
  return aboutPresenter.getAbout();
}
```

## Component conventions

- Dumb components live in `src/ui/components/<feature>/` — one file per component
- Screens live in `src/ui/screens/<section>/` — compose hooks + components
- Screens call hooks; components receive plain props
- No hardcoded content in components or screens — all text/data comes from the domain through the presenter stack

## Content

All portfolio content (bio, jobs, skills, education, honors, profile) lives exclusively in:

```
src/infrastructure/profile/StaticProfileRepository.ts
```

Never hardcode content in UI files.

## Styling

- Tailwind v4 via `@tailwindcss/vite`
- Custom semantic tokens defined in `src/index.css` under `@theme`:
  `surface-base`, `surface-raised`, `surface-overlay`, `ink-primary`, `ink-secondary`, `ink-muted`, `accent`, `border`
- Use custom tokens for all portfolio UI. Raw Tailwind palette colors (gray-*, blue-*) are reserved for the CV page only (always light mode, print-optimized)
- Biome requires `"css": { "parser": { "tailwindDirectives": true } }` in `biome.json` for `@theme` to parse correctly

## Theme

Two-mode system: `light` | `dark` | `system`.

- System preference detected via `BrowserThemeListener` (media query)
- User override persisted in `LocalStorageThemeRepository` (key: `theme-mode`)
- Applied before React hydration via inline `<script>` in `index.html` to avoid flash
- CSS variables swap via `:root.light` / `:root.dark` classes; default (no class) = dark

## Build

- Two entry points: `index.html` (portfolio) and `cv.html` (CV/print)
- Vendor chunk (`react`, `react-dom`) split manually for better caching
- `target: "esnext"` for modern output
- Assets in `public/`: `favicon.png` (32×32, for `<link rel="icon">`), `icon.webp` (256×256, for nav logo), `me.webp` (avatar photo)
- Images converted to WebP for size. Raw source assets live in `static/` (not served)

## Toolchain

| Tool | Version | Config |
|---|---|---|
| TypeScript | ~5.8 | `tsconfig.app.json` — strict, erasableSyntaxOnly |
| Vite + SWC | ~7 | `vite.config.ts` |
| Tailwind | v4 | via `@tailwindcss/vite` plugin, config in `src/index.css` |
| Biome | ~2 | `biome.json` — 2 spaces, double quotes, trailing commas, 100 col |
