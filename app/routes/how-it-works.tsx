import type { Route } from "./+types/how-it-works";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { HowItWorksSection } from "~/components/how-it-works-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "how-it-works");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `How it Works – ${siteMeta.name}`;

const pageDescription =
  "Learn how Krixum works in 4 simple steps: search for what you need, compare all available options, book with one click, and track your service with secure payment protection.";


export default function HowItWorksPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/how-it-works", siteMeta.siteUrl).toString()}
        keywords={["how krixum works", "search compare book", "booking process", "service workflow", "secure payments"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "How it Works", url: `${siteMeta.siteUrl}/how-it-works` }
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-background">
          <HowItWorksSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
