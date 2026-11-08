import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.tsx", { id: "home-en" }),
  route("es", "routes/HomePage.tsx", { id: "home-es" }),
  route("*", "routes/NotFoundPage.tsx"),
] satisfies RouteConfig;
