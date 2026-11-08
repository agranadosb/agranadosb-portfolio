import { index, type RouteConfig, route } from "@react-router/dev/routes";
// biome-ignore lint/style/noRestrictedImports: React Router loads routes.ts before the @/ alias exists.
import { CV } from "../config/site";

export default [
  index("routes/HomePage.tsx", { id: "home-en" }),
  route("es", "routes/HomePage.tsx", { id: "home-es" }),
  route(CV.en.path, "routes/CvDocument.ts", { id: "cv-en" }),
  route(CV.es.path, "routes/CvDocument.ts", { id: "cv-es" }),
  route("*", "routes/NotFoundPage.tsx"),
] satisfies RouteConfig;
