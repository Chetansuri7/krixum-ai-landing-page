import type { Route } from "./+types/highlights";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { HighlightsSection } from "~/components/highlights-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "highlights");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Real Examples – ${siteMeta.name}`;

const pageDescription =
  "See real-world examples of how Krixum simplifies everyday tasks: compare the old multi-app workflow versus the new streamlined Krixum experience for rides, home services, and bookings.";


export default function HighlightsPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/highlights", siteMeta.siteUrl).toString()}
        keywords={["krixum examples", "before and after", "app comparison", "simplified booking", "real use cases"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Real Examples", url: `${siteMeta.siteUrl}/highlights` }
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
          <HighlightsSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
