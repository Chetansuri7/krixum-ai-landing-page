import type { Route } from "./+types/faq";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { FAQSection } from "~/components/faq-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { faqData } from "~/lib/faq-data";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "faq");

const pageTitle = pageDetails ? `${pageDetails.title} – ${siteMeta.name}` : `FAQ – ${siteMeta.name}`;

const pageDescription =
  "Answers to common questions about searching, comparing, and booking services with Krixum — integration models, payment protection, categories, cities, and partnerships.";


export default function FAQPage() {
  const faqStructuredData = faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/faq", siteMeta.siteUrl).toString()}
        keywords={["krixum faq", "local services booking", "escrow protection", "compare providers", "partner integrations"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "FAQ", url: `${siteMeta.siteUrl}/faq` }
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
        additionalJsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqStructuredData,
          },
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-background">
          <FAQSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
