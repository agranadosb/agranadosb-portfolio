import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/HomePage.tsx"),
  route("cv", "routes/CVPage.tsx"),
] satisfies RouteConfig;
