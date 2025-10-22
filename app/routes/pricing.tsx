import type { Route } from "./+types/pricing";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { PricingSection } from "~/components/pricing-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "pricing");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Pricing – ${siteMeta.name}`;

const pageDescription =
  "Flexible pricing for teams of every size. Compare Free, Hobby, Standard, and Enterprise plans, including AI credits, security controls, and collaboration seats.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/pricing", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "krixum pricing, ai platform pricing, chatgpt claude pricing" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
  ];
}

export const links: Route.LinksFunction = () => {
  const canonicalUrl = new URL("/pricing", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

export default function PricingPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/pricing", siteMeta.siteUrl).toString()}
        keywords={["krixum pricing", "ai platform pricing", "chatgpt claude pricing", "ai workspace pricing", "enterprise ai pricing"]}
        pageType="pricing"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Pricing", url: `${siteMeta.siteUrl}/pricing` }
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
        additionalJsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Krixum AI Platform",
            description: pageDescription,
            provider: {
              "@type": "Organization",
              name: siteMeta.name,
              url: siteMeta.siteUrl
            },
            offers: [
              {
                "@type": "Offer",
                name: "Free Plan",
                price: "0",
                priceCurrency: "USD",
                description: "Basic AI access with limited credits"
              },
              {
                "@type": "Offer", 
                name: "Hobby Plan",
                price: "9",
                priceCurrency: "USD",
                description: "Enhanced AI access for individual users"
              },
              {
                "@type": "Offer",
                name: "Standard Plan", 
                price: "29",
                priceCurrency: "USD",
                description: "Professional AI workspace for teams"
              },
              {
                "@type": "Offer",
                name: "Enterprise Plan",
                price: "99",
                priceCurrency: "USD", 
                description: "Advanced AI platform with enterprise features"
              }
            ]
          }
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-primary-foreground">
          <PricingSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
