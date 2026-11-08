import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.tsx", { id: "home-es" }),
  route("en", "routes/HomePage.tsx", { id: "home-en" }),
  route("*", "routes/NotFoundPage.tsx"),
] satisfies RouteConfig;
