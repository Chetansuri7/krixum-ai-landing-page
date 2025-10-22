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
  "Explore every workflow that Krixum AI unlocks: collaborative chat workspaces, reusable prompt libraries, and governance controls that let enterprises move fast without sacrificing safety.";

// SEO now handled by EnhancedSEO component

export default function FeaturesPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/features", siteMeta.siteUrl).toString()}
        keywords={["AI platform features", "AI workspace capabilities", "Krixum features", "multi-model AI features", "ChatGPT Claude features"]}
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
            "@type": "SoftwareApplication",
            name: "Krixum AI Features",
            description: pageDescription,
            featureList: [
              "Multi-model AI access",
              "Collaborative chat workspaces", 
              "Reusable prompt libraries",
              "Enterprise governance controls",
              "Real-time model switching",
              "Secure data handling"
            ],
            applicationCategory: "BusinessApplication"
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
