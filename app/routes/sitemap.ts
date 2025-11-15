import type { LoaderFunctionArgs } from "react-router";

import { marketingSections, siteMeta } from "~/lib/site-metadata";

const priorityBySection: Record<string, { priority: string; changefreq: string }> = {
  advantages: { priority: "0.95", changefreq: "weekly" },
  overview: { priority: "0.90", changefreq: "weekly" },
  highlights: { priority: "0.85", changefreq: "weekly" },
  "how-it-works": { priority: "0.85", changefreq: "weekly" },
  faq: { priority: "0.90", changefreq: "weekly" },
  contact: { priority: "0.85", changefreq: "monthly" },
  features: { priority: "0.95", changefreq: "weekly" },
  models: { priority: "0.90", changefreq: "weekly" },
  pricing: { priority: "0.95", changefreq: "weekly" },
};

export async function loader({}: LoaderFunctionArgs) {
  const lastmod = new Date().toISOString().split("T")[0];
  const socialImage = new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString();

  // Collect unique URLs (avoid duplicate homepage sections)
  const uniqueUrls = new Map<string, { 
    loc: string; 
    changefreq: string; 
    priority: string; 
    image: string;
  }>();

  // Homepage
  uniqueUrls.set(siteMeta.siteUrl, {
    loc: siteMeta.siteUrl,
    changefreq: "daily",
    priority: "1.0",
    image: socialImage,
  });

  // Marketing sections (only add unique page URLs, not hash sections)
  marketingSections.forEach((section) => {
    // Skip hash-only sections (they're part of homepage)
    if (section.path !== "/") {
      const url = new URL(section.path, siteMeta.siteUrl).toString();
      const meta = priorityBySection[section.id] ?? {
        priority: "0.6",
        changefreq: "monthly",
      };
      
      if (!uniqueUrls.has(url)) {
        uniqueUrls.set(url, {
          loc: url,
          changefreq: meta.changefreq,
          priority: meta.priority,
          image: socialImage,
        });
      }
    }
  });

  // Important pages: about, careers
  uniqueUrls.set(new URL("/about", siteMeta.siteUrl).toString(), {
    loc: new URL("/about", siteMeta.siteUrl).toString(),
    changefreq: "monthly",
    priority: "0.8",
    image: socialImage,
  });

  uniqueUrls.set(new URL("/careers", siteMeta.siteUrl).toString(), {
    loc: new URL("/careers", siteMeta.siteUrl).toString(),
    changefreq: "monthly",
    priority: "0.7",
    image: socialImage,
  });

  // Legal pages: low priority but indexable
  uniqueUrls.set(new URL("/privacy", siteMeta.siteUrl).toString(), {
    loc: new URL("/privacy", siteMeta.siteUrl).toString(),
    changefreq: "monthly",
    priority: "0.3",
    image: socialImage,
  });

  uniqueUrls.set(new URL("/terms", siteMeta.siteUrl).toString(), {
    loc: new URL("/terms", siteMeta.siteUrl).toString(),
    changefreq: "monthly",
    priority: "0.3",
    image: socialImage,
  });

  const urlEntries = Array.from(uniqueUrls.values());

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
