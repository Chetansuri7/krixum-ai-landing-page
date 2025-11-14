import type { Route } from "./+types/advantages";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { AdvantagesSection } from "~/components/advantages-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "advantages");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Advantages – ${siteMeta.name}`;

const pageDescription =
  "Understand why Krixum reduces app juggling, speeds up bookings, and protects every transaction with escrow.";


export default function AdvantagesPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/advantages", siteMeta.siteUrl).toString()}
        keywords={["krixum advantages", "save time", "app fatigue", "escrow protection", "local services"]}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Advantages", url: `${siteMeta.siteUrl}/advantages` }
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-primary-foreground">
          <AdvantagesSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
