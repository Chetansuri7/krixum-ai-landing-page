import type { LoaderFunctionArgs } from "react-router";

import { marketingSections, siteMeta } from "~/lib/site-metadata";

const priorityBySection: Record<string, { priority: string; changefreq: string }> = {
  features: { priority: "0.95", changefreq: "weekly" },
  pricing: { priority: "0.95", changefreq: "weekly" },
  models: { priority: "0.90", changefreq: "weekly" },
  faq: { priority: "0.85", changefreq: "weekly" },
  contact: { priority: "0.80", changefreq: "monthly" },
  advantages: { priority: "0.75", changefreq: "monthly" },
};

export async function loader({}: LoaderFunctionArgs) {
  const lastmod = new Date().toISOString().split("T")[0];
  const socialImage = new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString();

  const urlEntries = [
    {
      loc: siteMeta.siteUrl,
      changefreq: "daily",
      priority: "1.0",
      image: socialImage,
    },
    // Legal pages: low priority but indexable
    {
      loc: new URL("/privacy", siteMeta.siteUrl).toString(),
      changefreq: "monthly",
      priority: "0.3",
      image: socialImage,
    },
    {
      loc: new URL("/terms", siteMeta.siteUrl).toString(),
      changefreq: "monthly",
      priority: "0.3",
      image: socialImage,
    },
    ...marketingSections.map((section) => {
      const meta = priorityBySection[section.id] ?? {
        priority: "0.6",
        changefreq: "monthly",
      };

      return {
        loc: new URL(section.path, siteMeta.siteUrl).toString(),
        changefreq: meta.changefreq,
        priority: meta.priority,
        image: socialImage,
      };
    }),
  ];

  const urlset = urlEntries
    .map((entry) => {
      return `    <url>\n      <loc>${entry.loc}</loc>\n      <lastmod>${lastmod}</lastmod>\n      <changefreq>${entry.changefreq}</changefreq>\n      <priority>${entry.priority}</priority>\n      <image:image>\n        <image:loc>${entry.image}</image:loc>\n      </image:image>\n    </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urlset}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
