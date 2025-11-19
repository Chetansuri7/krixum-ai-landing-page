import type { Route } from "./+types/contact";
import type { FormEvent } from "react";
import { useState } from "react";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { SectionHeader } from "~/components/ui/section-header";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "contact");

const pageTitle = pageDetails ? `${pageDetails.title} – ${siteMeta.name}` : `Contact – ${siteMeta.name}`;

const pageDescription =
  "Get in touch with the Krixum team. Reach out for demos, partnerships, provider integrations, or customer support.";


const queryTypes = [
  "Sales",
  "Support",
  "Billing",
];

export default function ContactPage() {
  const [formState, setFormState] = useState<{ status: "idle" | "submitting" | "success" | "error"; message?: string }>({
    status: "idle",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ status: "submitting" });

    // Simulate async submission
    setTimeout(() => {
      setFormState({ status: "success", message: "Thanks! We'll be in touch within one business day." });
    }, 800);
  };

  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/contact", siteMeta.siteUrl).toString()}
        keywords={["krixum contact", "provider partnerships", "booking platform demo", "service integration", "customer support"]}
        pageType="contact"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Contact", url: `${siteMeta.siteUrl}/contact` }
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
        additionalJsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: siteMeta.name,
              url: siteMeta.siteUrl,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English"
              }
            }
          }
        ]}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-background">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Contact our team</h1>
              <p className="text-muted-foreground">Get in touch and we'll get back to you within 24 hours.</p>
            </header>

            <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name <span className="text-primary ml-1" aria-label="required">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-primary ml-1" aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="queryType" className="block text-sm font-medium text-foreground mb-2">
                  Query Type <span className="text-primary ml-1" aria-label="required">*</span>
                </label>
                <select
                  id="queryType"
                  name="queryType"
                  required
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select a query type</option>
                  {queryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="query" className="block text-sm font-medium text-foreground mb-2">
                  Your Query <span className="text-primary ml-1" aria-label="required">*</span>
                </label>
                <textarea
                  id="query"
                  name="query"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-vertical"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={formState.status === "submitting" || formState.status === "success"}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {formState.status === "submitting" ? "Sending..." : formState.status === "success" ? "Message sent!" : "Submit"}
                  <span className="ml-2" aria-hidden="true">→</span>
                </button>
              </div>

              {formState.message && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700">{formState.message}</p>
                </div>
              )}
            </form>
          </div>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
