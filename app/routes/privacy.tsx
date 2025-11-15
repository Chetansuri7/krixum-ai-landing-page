import type { Route } from "./+types/privacy";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";
import { brandInfo } from "~/lib/brand-info";
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
        <main className="flex-1 container mx-auto px-4 py-8 prose prose-slate dark:prose-invert max-w-4xl space-y-6">
          <h1>Privacy Policy</h1>
          <p>
            {brandInfo.companyName} (operating as {brandInfo.brandName}) is committed to protecting your personal information.
            This privacy policy explains how we collect, use, disclose, and safeguard the information you entrust to us when you use our website, apps, and services.
          </p>

          <section>
            <h2>Scope</h2>
            <p>
              This policy applies to all interactions with {brandInfo.brandName} across web, mobile, chat, or partner touchpoints.
              It does not cover the practices of third-party providers who have their own privacy notices.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <ul>
              <li>Personal identifiers (name, email, phone) you submit to create an account or place a booking.</li>
              <li>Transactional data such as searches, bookings, preferences, and feedback you provide.</li>
              <li>Device, usage, and location metadata collected automatically to keep the service secure and performant.</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Information</h2>
            <p>
              We use your information to search, compare, and reserve services on your behalf, to maintain your booking history, to improve the Krixum experience, and to communicate important updates.
              We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2>Sharing & Disclosure</h2>
            <p>
              We share information with trusted partners to fulfill bookings, with analytics providers to improve the product, and if required by law enforcement.
              Any such sharing is limited to what is necessary for the intended purpose.
            </p>
          </section>

          <section>
            <h2>Your Choices</h2>
            <p>
              You can manage notifications, update your profile, and request deletion through the app or by contacting us. We retain data only as long as needed for operations or compliance.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>We protect your data with industry-standard controls and monitor access to keep your information safe.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For general support, email <a href={`mailto:${brandInfo.supportEmail}`}>{brandInfo.supportEmail}</a> or call <a href={`tel:${brandInfo.supportPhone}`}>{brandInfo.supportPhone}</a>.
              For privacy-specific questions, please write to <a href={`mailto:${brandInfo.policyEmail}`}>{brandInfo.policyEmail}</a>.
            </p>
          </section>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
