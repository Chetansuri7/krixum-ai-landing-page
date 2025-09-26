import type { Route } from "./+types/pricing";
import { Link } from "react-router";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { pricingPlans } from "~/lib/content-data";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { SectionHeader } from "~/components/ui/section-header";

const pageDetails = marketingSections.find((section) => section.id === "pricing");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Pricing – ${siteMeta.name}`;

const pageDescription =
  "Flexible pricing for teams of every size. Compare Free, Hobby, Standard, and Enterprise plans, including AI credits, security controls, and collaboration seats.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/pricing", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "krixum pricing, ai platform pricing, chatgpt claude pricing" },
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
  const canonicalUrl = new URL("/pricing", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

const enterpriseBenefits = [
  "Dedicated onboarding and migration support",
  "24/7 priority response with shared Slack channel",
  "Custom legal, procurement, and security reviews",
  "Private model hosting and regional data residency",
  "Advanced analytics APIs and data export",
];

const billingQuestions = [
  {
    question: "Can I change plans later?",
    answer:
      "Absolutely. Upgrade or downgrade at any time and your remaining credits will be prorated automatically. Seat counts scale instantly so new teammates can log in right away.",
  },
  {
    question: "Do you offer discounts for education and startups?",
    answer:
      "Yes. Qualified startups, nonprofits, and educational institutions receive preferred pricing. Contact our team and we will tailor a plan to your needs.",
  },
  {
    question: "How does usage-based billing work?",
    answer:
      "Each plan includes a monthly bundle of AI message credits. You can set soft and hard limits, monitor spend in real time, and purchase top-ups without upgrading your plan.",
  },
];

export default function PricingPage() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="bg-primary-foreground border-b border-border/40">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold">Pricing</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Pricing that scales with your ambition
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Start with a generous free tier, expand with per-seat plans, and unlock enterprise governance when you need it. Every plan includes privacy by default and the ability to switch between top AI models.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to={{ pathname: "/", search: "?section=pricing" }}
                  preventScrollReset
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  See pricing on the homepage
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
            <SectionHeader
              badge="Plans"
              title="Choose the plan that matches your pace"
              description="Transparent pricing, generous usage, and the control you expect from an enterprise platform."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex h-full flex-col rounded-3xl border bg-card/80 p-6 shadow-sm ${
                    plan.popular ? "border-primary shadow-xl" : "border-border"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                    {plan.badge ? (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                    {plan.yearlyPrice ? `${plan.yearlyPrice} when billed annually` : "Billed monthly"}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`mt-auto inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border text-foreground hover:bg-muted/70"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-muted/60">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 space-y-10">
              <SectionHeader
                badge="Enterprise"
                title="Everything large organizations need to deploy AI responsibly"
                description="Dedicated sandboxes, advanced controls, and white-glove support."
              />
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">What’s included</h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {enterpriseBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">Rollout Timeline</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Most enterprises launch production use cases within four weeks. We help scope success metrics, run security reviews, train internal champions, and integrate Krixum AI into your toolchain.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Need tighter deadlines? Our deployment engineers can run parallel workstreams so your teams see value in days, not months.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Schedule a rollout planning call
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-8">
            <SectionHeader
              badge="Billing & Usage"
              title="Frequently asked billing questions"
              description="Everything you need to know about payments, usage, and contracts."
            />
            <div className="space-y-6">
              {billingQuestions.map((item) => (
                <article
                  key={item.question}
                  className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-primary-foreground">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
              <div className="rounded-3xl border border-border/60 bg-background/90 p-10 shadow-xl">
                <SectionHeader
                  badge="Start for Free"
                  title="Launch your first AI workspace today"
                  description="Sign up in minutes, invite collaborators, and explore every feature with guided tours."
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://chat.krixum.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Start free trial
                  </a>
                  <Link
                    to="/features"
                    className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                  >
                    Dive into features
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
