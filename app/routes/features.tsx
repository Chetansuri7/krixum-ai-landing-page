import type { Route } from "./+types/features";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { FeaturesSection } from "~/components/features-section";
import { siteMeta, marketingSections } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "features");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Features – ${siteMeta.name}`;

const pageDescription =
  "Explore how Krixum helps you search once, compare all options, and book with payment protection — across taxis, home services, and more.";

// SEO now handled by EnhancedSEO component

export default function FeaturesPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/features", siteMeta.siteUrl).toString()}
        keywords={["krixum features", "search and book", "compare providers", "escrow protection", "local services"]}
        pageType="features"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Features", url: `${siteMeta.siteUrl}/features` }
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
        additionalJsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Krixum Features",
            description: pageDescription,
            featureList: [
              "Search once, compare all",
              "Side-by-side providers",
              "Escrow payment protection",
              "Verified local providers",
              "Partner integrations",
              "AI or traditional booking"
            ],
            applicationCategory: "TravelReservationPlatform"
          }
        ]}
      />
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
