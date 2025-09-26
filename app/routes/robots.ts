import type { LoaderFunctionArgs } from "react-router";

import { siteMeta } from "~/lib/site-metadata";

export async function loader({}: LoaderFunctionArgs) {
  const sitemapUrl = new URL("sitemap.xml", siteMeta.siteUrl).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
