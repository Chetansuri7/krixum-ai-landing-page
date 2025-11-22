import type { Route } from "./+types/overview";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { OverviewSection } from "~/components/overview-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "overview");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Overview – ${siteMeta.name}`;

const pageDescription =
  "Discover how Krixum works: search once for rides, home services, and local pros, compare all options in real-time, and book instantly with verified providers.";


export default function OverviewPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/overview", siteMeta.siteUrl).toString()}
        keywords={["krixum overview", "how krixum works", "ride comparison", "local services search", "unified booking platform"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Overview", url: `${siteMeta.siteUrl}/overview` }
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
          <OverviewSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
