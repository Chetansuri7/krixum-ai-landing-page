import { siteMeta } from "./site-metadata";

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article" | "product" | "service";
  jsonLd?: Record<string, any>[];
}

export function generateSEOMeta(data: SEOData & { pathname: string }) {
  const canonicalUrl = new URL(data.pathname, siteMeta.siteUrl).toString();
  const socialImage = data.ogImage 
    ? new URL(data.ogImage, siteMeta.siteUrl).toString()
    : new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString();

  const title = data.title || siteMeta.title;
  const description = data.description || siteMeta.description;
  const keywords = data.keywords?.join(", ") || siteMeta.keywords.join(", ");

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "author", content: siteMeta.name },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { name: "application-name", content: siteMeta.name },
    
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: data.type || "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: socialImage },
    { property: "og:site_name", content: siteMeta.name },
    { property: "og:locale", content: siteMeta.locale },
    
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: siteMeta.twitterHandle },
    { name: "twitter:creator", content: siteMeta.twitterHandle },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: socialImage },
    
    // Additional SEO
    { name: "theme-color", content: "#050816" },
    { name: "apple-mobile-web-app-title", content: siteMeta.name },
    { name: "application-name", content: siteMeta.name },
  ];
}

export function generateLinks(data: SEOData & { pathname: string }) {
  const canonicalUrl = new URL(data.pathname, siteMeta.siteUrl).toString();
  
  return [
    { rel: "canonical", href: data.canonical || canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
    { rel: "alternate", href: canonicalUrl, hrefLang: "en" },
  ];
}

// Enhanced breadcrumb generator
export function generateBreadcrumbs(pathname: string) {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: "Home", url: siteMeta.siteUrl }
  ];

  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path.charAt(0).toUpperCase() + path.slice(1);
    breadcrumbs.push({
      name,
      url: new URL(currentPath, siteMeta.siteUrl).toString()
    });
  });

  return breadcrumbs;
}