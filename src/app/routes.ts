import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.tsx"),
  route("*", "routes/NotFoundPage.tsx"),
] satisfies RouteConfig;
