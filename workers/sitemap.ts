import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import routes from "../app/routes";

interface RouteInfo {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

function getPath(route: any, prefix = ""): string {
  const path = route.path ?? (route.index ? "" : null);
  if (path === null) {
    return "";
  }
  return prefix + "/" + path;
}

const appRoutes: RouteInfo[] = routes
  .map((route) => {
    const path = getPath(route);
    return {
      path,
      changefreq: "daily" as const,
      priority: 1.0,
    };
  })
  .filter((route) => route.path !== "");

export async function generateSitemap(): Promise<string> {
  const stream = new SitemapStream({ hostname: "https://krixum.ai" });
  const sitemap = await streamToPromise(
    Readable.from(appRoutes).pipe(stream)
  ).then((data) => data.toString());
  return sitemap;
}

export default {
    async fetch(request: any, env: any, ctx: any) {
        const sitemap = await generateSitemap();
        return new Response(sitemap, {
            headers: {
                "Content-Type": "application/xml",
            },
        });
    }
}