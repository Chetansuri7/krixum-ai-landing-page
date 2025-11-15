import type { Route } from "./+types/terms";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";
import { brandInfo } from "~/lib/brand-info";
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
        <main className="flex-1 container mx-auto px-4 py-8 prose prose-slate dark:prose-invert max-w-4xl space-y-6">
          <h1>Terms of Service</h1>
          <p>
            These terms govern your use of {siteMeta.name}.
            {` ${brandInfo.companyName} (operating as ${brandInfo.brandName})`} provides the platform and related services described on the site.
          </p>
          <section>
            <h2>Use of Service</h2>
            <p>Don't misuse the platform, attempt to breach security, or disrupt the experience for others.</p>
          </section>
          <section>
            <h2>Accounts</h2>
            <p>
              Keep your credentials secure. You are responsible for all activity that occurs under your account and for honoring the cancellations, refunds, and escrow rules your booking may be subject to.
            </p>
          </section>
          <section>
            <h2>Appeals & Support</h2>
            <p>
              If you encounter issues, contact <a href={`mailto:${brandInfo.supportEmail}`}>{brandInfo.supportEmail}</a> or call <a href={`tel:${brandInfo.supportPhone}`}>{brandInfo.supportPhone}</a>.
              We aim to respond within one business day.
            </p>
          </section>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
