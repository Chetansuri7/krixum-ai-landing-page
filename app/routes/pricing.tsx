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
  "Krixum pricing for providers and partners. Learn about booking partnerships, platform provider models, and how we work with service providers.";

// SEO now handled by EnhancedSEO component

export default function PricingPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/pricing", siteMeta.siteUrl).toString()}
        keywords={["krixum pricing", "provider partnerships", "booking platform pricing", "service provider fees", "platform commission"]}
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
            name: "Krixum Booking Platform",
            description: pageDescription,
            provider: {
              "@type": "Organization",
              name: siteMeta.name,
              url: siteMeta.siteUrl
            },
            serviceType: "Service Aggregation Platform",
            areaServed: {
              "@type": "City",
              name: "Bangalore",
              addressCountry: "IN"
            }
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
