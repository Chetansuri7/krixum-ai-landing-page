import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("sitemap.xml", "routes/sitemap.ts"),
  route("robots.txt", "routes/robots.ts"),
  route("features", "routes/features.tsx"),
  route("models", "routes/models.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("advantages", "routes/advantages.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
