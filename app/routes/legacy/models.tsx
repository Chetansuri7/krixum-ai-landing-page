import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { ModelsSection } from "~/components/legacy/models-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "models");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Models – ${siteMeta.name}`;

const pageDescription =
  "Browse Krixum's service categories like taxis, home services, and quick commerce, and see what's planned next.";


export default function ModelsPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/models", siteMeta.siteUrl).toString()}
        keywords={["krixum categories", "service categories", "taxis rides", "home services", "quick commerce"]}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Categories", url: `${siteMeta.siteUrl}/models` }
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
          <ModelsSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
