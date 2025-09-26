import type { Route } from "./+types/features";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { FeaturesSection } from "~/components/features-section";
import { siteMeta, marketingSections } from "~/lib/site-metadata";

const pageDetails = marketingSections.find((section) => section.id === "features");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Features – ${siteMeta.name}`;

const pageDescription =
  "Explore every workflow that Krixum AI unlocks: collaborative chat workspaces, reusable prompt libraries, and governance controls that let enterprises move fast without sacrificing safety.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/features", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "AI platform features, AI workspace capabilities, Krixum features" },
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
  const canonicalUrl = new URL("/features", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

export default function FeaturesPage() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-primary-foreground">
          <FeaturesSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
