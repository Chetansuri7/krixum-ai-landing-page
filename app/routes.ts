import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("search", "routes/search.tsx"),
  route("sitemap.xml", "routes/sitemap.ts"),
  route("robots.txt", "routes/robots.ts"),
  route("humans.txt", "routes/humans.ts"),
  route("privacy", "routes/privacy.tsx"),
  route("terms", "routes/terms.tsx"),
  route("features", "routes/features.tsx"),
  route("models", "routes/models.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("benefits", "routes/benefits.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
