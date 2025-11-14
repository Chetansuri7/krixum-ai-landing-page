import type { Route } from "./+types/privacy";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";
import { siteMeta } from "~/lib/site-metadata";

const title = `Privacy Policy – ${siteMeta.name}`;
const description = `Read the privacy policy for ${siteMeta.name}. Learn how we collect, use, and protect your personal information.`;
const canonicalUrl = new URL("/privacy", siteMeta.siteUrl).toString();

export default function PrivacyPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={title}
        description={description}
        canonical={canonicalUrl}
        keywords={["krixum privacy policy", "data protection", "user privacy", "information security"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Privacy Policy", url: canonicalUrl }
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
            name: "Privacy Policy",
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
          <h1>Privacy Policy</h1>
          <p>We respect your privacy and are committed to protecting your personal information. This policy describes what we collect, how we use it, and your rights.</p>
          <h2>Information We Collect</h2>
          <p>Account details you provide and technical information like device and usage metadata necessary to operate the service.</p>
          <h2>How We Use Information</h2>
          <p>To provide and improve the product, secure the platform, and communicate with you. We do not sell personal data.</p>
          <h2>Contact</h2>
          <p>Questions? Email {siteMeta.contactEmail}.</p>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}

