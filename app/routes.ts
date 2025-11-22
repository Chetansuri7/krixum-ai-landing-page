import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("search", "routes/search.tsx"),
  route("sitemap.xml", "routes/sitemap.ts"),
  route("robots.txt", "routes/robots.ts"),
  route("humans.txt", "routes/humans.ts"),
  route("privacy", "routes/privacy.tsx"),
  route("terms", "routes/terms.tsx"),
  route("benefits", "routes/benefits.tsx"),
  route("overview", "routes/overview.tsx"),
  route("highlights", "routes/highlights.tsx"),
  route("how-it-works", "routes/how-it-works.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),
  route("careers", "routes/careers.tsx"),
] satisfies RouteConfig;
