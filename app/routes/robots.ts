import type { LoaderFunctionArgs } from "react-router";

import { siteMeta } from "~/lib/site-metadata";

export async function loader({}: LoaderFunctionArgs) {
  const sitemapUrl = new URL("sitemap.xml", siteMeta.siteUrl).toString();
  const body = `# Robots.txt for ${siteMeta.name}
# Welcome, bots! We're happy to have you index our content.

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_*
Disallow: /tmp*
Disallow: /admin/
Disallow: /*.json$
Disallow: /*?*utm_*

# Crawl rate
Crawl-delay: 1

# Sitemap location
Sitemap: ${sitemapUrl}

# Specific bot rules
User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
