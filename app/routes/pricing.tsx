import type { Route } from "./+types/pricing";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { PricingSection } from "~/components/pricing-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";

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
