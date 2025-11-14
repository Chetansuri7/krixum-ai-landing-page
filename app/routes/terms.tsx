import type { Route } from "./+types/terms";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";
import { siteMeta } from "~/lib/site-metadata";

const title = `Terms of Service – ${siteMeta.name}`;
const description = `Read the terms of service for ${siteMeta.name}. Understand your rights and responsibilities when using our platform.`;
const canonicalUrl = new URL("/terms", siteMeta.siteUrl).toString();

export default function TermsPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={title}
        description={description}
        canonical={canonicalUrl}
        keywords={["krixum terms", "terms of service", "user agreement", "service terms", "legal terms"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Terms of Service", url: canonicalUrl }
        ]}
        openGraph={{
          title,
          description,
          type: "website",
        }}
        additionalJsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms of Service",
            description,
            url: canonicalUrl,
            publisher: {
              "@type": "Organization",
              name: siteMeta.name,
              url: siteMeta.siteUrl
            },
            datePublished: "2024-01-01",
            dateModified: new Date().toISOString().split('T')[0],
          }
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 prose prose-slate dark:prose-invert max-w-4xl">
          <h1>Terms of Service</h1>
          <p>These terms govern your use of {siteMeta.name}. By using the service, you agree to them.</p>
          <h2>Use of Service</h2>
          <p>Don't misuse, attempt to breach, or disrupt the service. Respect the rights of others.</p>
          <h2>Accounts</h2>
          <p>Keep your credentials secure. You are responsible for activity under your account.</p>
          <h2>Contact</h2>
          <p>Questions? Email {siteMeta.contactEmail}.</p>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}

