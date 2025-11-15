import type { Route } from "./+types/about";
import { Link } from "react-router";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { SectionHeader } from "~/components/ui/section-header";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";
import { ContentProvider } from "~/lib/content-context";
import { brandInfo } from "~/lib/brand-info";
import { siteMeta } from "~/lib/site-metadata";

const canonicalUrl = new URL("/about", siteMeta.siteUrl).toString();
const pageTitle = `About ${siteMeta.name}`;
const pageDescription = "Meet the team, mission, and trust commitments that power Krixum AI.";

const heroHighlights = [
  {
    title: "Agentic discovery",
    copy: "Describe what you need once and our AI agent runs parallel searches across rides, deliveries, and local services so every viable option appears together.",
  },
  {
    title: "Human standards",
    copy: "Product, policy, and operations experts at Pixum Labs monitor fairness, partner quality, and policy alignment so the agent stays helpful and safe.",
  },
  {
    title: "Protected bookings",
    copy: "Every booking is wrapped with escrow-level safeguards, payment assurances, and proactive support so you never have to chase confirmations.",
  },
];

const operations = [
  {
    title: "Share your intent",
    detail: "Use chat, mobile, or voice to explain what you need—whether it is a ride, delivery, or home service—and our agent structures the ask for every partner it connects to.",
  },
  {
    title: "Compare & confirm",
    detail: "We show smart filters, surge catches, safety signals, and provider ratings side-by-side, so you approve the option that fits your moment.",
  },
  {
    title: "Book with oversight",
    detail: "The agent finalizes the reservation, tracks status, and notifies you, while our ops team watches for hiccups and steps in when needed.",
  },
  {
    title: "Partner-first integrations",
    detail: "We align with marketplaces, fleets, and service teams to keep inventory fresh, pricing transparent, and handoffs seamless for every booking type.",
  },
];

const privacyHighlights = [
  {
    title: "Scope & accountability",
    items: [
      "Applies to everything Krixum AI directly powers—the website, apps, chat experiences, and any integrations where Pixum Labs acts as the data controller.",
      "Third-party marketplaces maintain their own notices; we link to them whenever we share your data for fulfillment.",
    ],
  },
  {
    title: "Information we collect",
    items: [
      "Personal identifiers (name, email, phone, profile picture, payment details) you submit when you sign up or book a service.",
      "Booking data such as searches, provider choices, itineraries, ratings, and feedback you give the agent.",
      "Device, usage, and location metadata automatically captured through cookies, analytics, and platform logs for security and performance.",
    ],
  },
  {
    title: "Use & sharing",
    items: [
      "We operate the AI booking loop, personalize your experience, and keep you updated about confirmations and service milestones.",
      "We share only what is required with trusted partners (rides, home services, analytics, and payment vendors) and never sell your data.",
      "Lawful requests and policy enforcement are handled transparently, with a focus on necessity and minimal disclosure.",
    ],
  },
  {
    title: "Retention, cookies & control",
    items: [
      "Data stays with us only as long as needed for operations or compliance, protected by encryption and access monitoring.",
      "Cookies remember preferences, speed up loads, and can be disabled from your browser at any time; disabling them may limit features.",
      `Reach out via ${brandInfo.policyEmail} for privacy-specific requests, or ${brandInfo.supportEmail} for general updates.`,
    ],
  },
];

const contactDetails = [
  {
    label: "Support & feedback",
    value: brandInfo.supportEmail,
    href: `mailto:${brandInfo.supportEmail}`,
  },
  {
    label: "Privacy & policy",
    value: brandInfo.policyEmail,
    href: `mailto:${brandInfo.policyEmail}`,
  },
  {
    label: "Phone",
    value: brandInfo.supportPhone,
    href: `tel:${brandInfo.supportPhone}`,
  },
];

export default function AboutPage() {
  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonicalUrl}
        keywords={["krixum about", "company story", "ai booking agent"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "About", url: canonicalUrl },
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          url: canonicalUrl,
          type: "website",
          images: [
            {
              url: siteMeta.socialImagePath,
              width: 1200,
              height: 630,
              alt: `${siteMeta.name} brand overview`,
            },
          ],
        }}
        additionalJsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            description: pageDescription,
            url: canonicalUrl,
            mainEntity: {
              "@type": "Organization",
              name: siteMeta.name,
              url: siteMeta.siteUrl,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: brandInfo.supportEmail,
                  contactType: "customer support",
                  availableLanguage: "English",
                },
                {
                  "@type": "ContactPoint",
                  email: brandInfo.policyEmail,
                  contactType: "privacy requests",
                  availableLanguage: "English",
                },
              ],
            },
          },
        ]}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 py-16 space-y-16 sm:px-6 lg:px-8 text-foreground">
            <section id="about" className="space-y-6">
              <SectionHeader
                title={`About ${siteMeta.name}`}
                description={
                  `${siteMeta.name} (built by ${brandInfo.companyName}) is rewriting how you discover and book local services with one AI agent overseeing search, comparison, and fulfillment.`
                }
                centered
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {heroHighlights.map((highlight) => (
                  <article
                    key={highlight.title}
                    className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                    <p className="text-sm text-foreground/80">{highlight.copy}</p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="operations-heading" className="space-y-6">
              <SectionHeader
                title="How the AI booking loop works"
                description="We orchestrate each booking, keep you informed, and partner with marketplaces so the agent feels like the best teammate in the city."
                centered={false}
                className="max-w-3xl"
              />
              <div className="grid gap-6 md:grid-cols-2">
                {operations.map((step) => (
                  <article
                    key={step.title}
                    className="rounded-3xl border border-border bg-card p-6"
                  >
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-base text-foreground/80">{step.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="privacy-heading" className="space-y-6">
              <SectionHeader
                title="Policy & trust"
                description="This page summarizes the same commitments spelled out in our full privacy policy, which is kept current with every service expansion."
                centered={false}
                className="max-w-3xl"
              />
              <div className="grid gap-6 lg:grid-cols-2">
                {privacyHighlights.map((highlight) => (
                  <article
                    key={highlight.title}
                    className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                    <ul className="space-y-2 text-sm text-foreground/80 list-disc pl-5">
                      {highlight.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to="/privacy"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  View the full privacy policy
                  <span aria-hidden="true">→</span>
                </Link>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Last updated March 2025
                </p>
              </div>
            </section>

            <section aria-labelledby="team-heading" className="space-y-6">
              <SectionHeader
                title="The team behind the agent"
                description="A small, multidisciplinary crew at Pixum Labs keeps the AI reliable, transparent, and grounded in real-world service ops."
                centered={false}
                className="max-w-3xl"
              />
              <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
                <div className="space-y-4 text-foreground/80">
                  <p>
                    {brandInfo.brandName} teams fuse product design, data science, and policy research to make sure every booking is instant yet accountable. We obsess over service-level data so you never wonder where your ride, delivery, or repair stand.
                  </p>
                  <p>
                    We build in public, learn from every interaction, and welcome feedback from partners and customers alike. If you want to explore partnerships, API access, or provider integrations, the conversation always starts with a single message.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Talk to our team
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="space-y-4 rounded-3xl border border-border bg-card p-6 text-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Operating entity</p>
                  <p className="text-base font-semibold text-foreground">{brandInfo.companyName}</p>
                  {contactDetails.map((contact) => (
                    <div key={contact.label} className="space-y-1">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">{contact.label}</p>
                      <a
                        href={contact.href}
                        className="text-base font-medium text-foreground/90 hover:text-foreground"
                      >
                        {contact.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
