# agranadosb-portfolio

Personal portfolio built with **React + TypeScript + Vite + Tailwind CSS**, running inside a VS Code devcontainer.

## Requirements

- [Docker](https://www.docker.com/)
- [VS Code](https://code.visualstudio.com/) with the **Dev Containers** extension

## Getting started

1. Open this folder in VS Code.
2. Run the command **Dev Containers: Reopen in Container**.
3. The first build installs Node 20 and runs `npm ci` automatically.
4. Once attached, start the dev server:

   \`\`\`bash
   npm run dev
   \`\`\`

   The app will be available at http://localhost:5173.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the Vite dev server            |
| `npm run build`    | Type-check and build for production  |
| `npm run preview`  | Preview the production build         |
| `npm run lint`     | Run Biome linter                     |
| `npm run lint:fix` | Run Biome linter with auto-fix       |
| `npm run format`   | Format the codebase with Biome       |
| `npm run check`    | Run Biome lint + format check        |

## Stack

- React 19
- TypeScript 5.8
- Vite 7
- Tailwind CSS 4
- Biome (lint + format)
- React Router DOM

## License

See [LICENSE](LICENSE).
