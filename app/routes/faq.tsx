import type { Route } from "./+types/faq";
import { Link } from "react-router";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { faqData } from "~/lib/faq-data";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { SectionHeader } from "~/components/ui/section-header";

const pageDetails = marketingSections.find((section) => section.id === "faq");

const pageTitle = pageDetails ? `${pageDetails.title} – ${siteMeta.name}` : `FAQ – ${siteMeta.name}`;

const pageDescription =
  "Answers to the most common questions about Krixum AI. Learn how data is handled, which models we support, how pricing works, and how to onboard your team.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/faq", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "krixum faq, ai platform questions, ai chat privacy" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
  ];
}

export const links: Route.LinksFunction = () => {
  const canonicalUrl = new URL("/faq", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

const onboardingSteps = [
  {
    title: "Create your workspace",
    description:
      "Sign up with email or SSO, invite teammates, and choose a launch template tailored to your function (product, marketing, support, operations).",
  },
  {
    title: "Connect data sources",
    description:
      "Bring in documents, knowledge bases, and integrations with CRMs or task managers. Role-based controls ensure only approved users can reference sensitive content.",
  },
  {
    title: "Launch with confidence",
    description:
      "Guided tours, office hours, and success metrics help your team adopt AI workflows responsibly. Track impact in the analytics dashboard from day one.",
  },
];

const supportChannels = [
  {
    label: "Help Center",
    description: "Browse product tutorials, API references, and troubleshooting guides maintained by our documentation team.",
    action: { label: "Visit docs", href: "https://docs.krixum.ai" },
  },
  {
    label: "Community Forum",
    description: "Share feedback, vote on feature requests, and learn from other builders shipping with Krixum AI.",
    action: { label: "Join the community", href: "https://community.krixum.ai" },
  },
  {
    label: "Priority Support",
    description: "Enterprise plans receive a shared Slack channel and a dedicated success manager for strategic guidance.",
    action: { label: "Contact sales", href: "/contact" },
  },
];

function FaqStructuredData() {
  const entries = faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const payload = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

export default function FAQPage() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <FaqStructuredData />
        <main className="flex-1">
          <section className="bg-primary-foreground border-b border-border/40">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold">FAQ</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Answers to everything teams ask about Krixum AI
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We gathered the most common questions from product, engineering, and security leaders evaluating Krixum AI. Still curious? Reach out and we will help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to={{ pathname: "/", search: "?section=faq" }}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  View quick answers on the homepage
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                >
                  Contact support
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 space-y-8">
            <SectionHeader
              badge="Top Questions"
              title="General"
              description="Straightforward answers for decision-makers comparing AI platforms."
            />
            <div className="space-y-6">
              {faqData.map((item) => (
                <article key={item.id} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-foreground">{item.question}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-muted/60">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-8">
              <SectionHeader
                badge="Onboarding"
                title="Launch timeline"
                description="What it looks like to go live with Krixum AI."
              />
              <div className="grid gap-6 md:grid-cols-3">
                {onboardingSteps.map((step) => (
                  <div key={step.title} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-8">
            <SectionHeader
              badge="Support"
              title="We're here when you need us"
              description="Different support options for every plan level."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {supportChannels.map((channel) => (
                <div key={channel.label} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">{channel.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{channel.description}</p>
                  <Link
                    to={channel.action.href}
                    className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    {channel.action.label}
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
