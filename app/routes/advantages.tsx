import type { Route } from "./+types/advantages";
import { Link } from "react-router";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { SectionHeader } from "~/components/ui/section-header";

const pageDetails = marketingSections.find((section) => section.id === "advantages");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Advantages – ${siteMeta.name}`;

const pageDescription =
  "Understand the ROI of giving every team access to a unified AI workspace. Learn how organizations reduce costs, ship faster, and protect their data with Krixum AI.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/advantages", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "krixum advantages, ai workspace roi, ai governance" },
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
  const canonicalUrl = new URL("/advantages", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

const outcomes = [
  {
    title: "50% faster experimentation",
    detail:
      "Centralize prompts, model settings, and learnings so teams build on each other’s discoveries. Krixum’s shared workspace and governance reduce duplicated effort across regions and business units.",
  },
  {
    title: "40% reduction in tooling costs",
    detail:
      "Replace fragmented pilot projects with a single platform that covers ideation, automation, and analytics. With clear usage controls you only pay for the value you create.",
  },
  {
    title: "Enterprise-grade compliance",
    detail:
      "Ship AI experiences with automated audit logs, least-privilege permissions, and data retention policies tailored to your regulatory landscape.",
  },
];

const metrics = [
  {
    label: "Governance",
    body:
      "Map every conversation, workflow, and automation to a reviewer. Krixum’s activity timeline shows who approved which prompts, when sensitive data was accessed, and how exceptions were resolved.",
  },
  {
    label: "Enablement",
    body:
      "Launch AI playbooks with embedded tutorials, certification paths, and success metrics. Internal champions can share best practices across teams to accelerate adoption.",
  },
  {
    label: "Security",
    body:
      "SAML/SSO, SCIM provisioning, customer-managed keys, and granular data retention ensure that only the right people can view sensitive conversations.",
  },
];

const caseStudies = [
  {
    company: "Atlas Financial",
    quote:
      "\"We consolidated four experimental copilots into one Krixum workspace. Our risk team finally has visibility into prompts while product teams iterate faster than ever.\"",
    result: "29% increase in new product launches without increasing headcount",
  },
  {
    company: "Northwind Manufacturing",
    quote:
      "\"Compliance sign-off used to take months. With automated reviewers and policy templates we now certify new AI automations in a week.\"",
    result: "Saved 400+ hours per quarter across operations and quality assurance",
  },
];

export default function AdvantagesPage() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="bg-primary-foreground border-b border-border/40">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold">Why Krixum</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Deliver AI outcomes with confidence
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Krixum AI is more than a chat interface. It is a platform for orchestrating cross-functional AI programs with measurable ROI, airtight governance, and transparent analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to={{ pathname: "/", search: "?section=advantages" }}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Explore homepage advantages
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                >
                  Request a business case
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
            <SectionHeader
              badge="Outcomes"
              title="Results teams see after standardizing on Krixum"
              description="These are the most common improvements reported by our customers across industries."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {outcomes.map((item) => (
                <article key={item.title} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-muted/60">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 space-y-10">
              <SectionHeader
                badge="Centers of Excellence"
                title="Build a sustainable AI operating model"
                description="Give every stakeholder visibility into performance, risks, and opportunities."
              />
              <div className="grid gap-6 md:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground">{metric.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{metric.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-6">
            <SectionHeader
              badge="Customer Stories"
              title="Trusted by teams shipping mission-critical AI experiences"
              description="Hear how organizations use Krixum AI to scale responsibly."
            />
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <figure key={study.company} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm">
                  <blockquote className="text-lg text-foreground leading-relaxed">{study.quote}</blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{study.company}</span>
                    <span className="mx-2 text-muted-foreground/60">•</span>
                    {study.result}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="bg-primary-foreground">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
              <div className="rounded-3xl border border-border/60 bg-background/90 p-10 shadow-xl">
                <SectionHeader
                  badge="Next Steps"
                  title="Ready to align your AI roadmap?"
                  description="We'll help you measure ROI, set success metrics, and train every team on responsible usage."
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/pricing"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Review plan comparisons
                  </Link>
                  <Link
                    to="/features"
                    className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                  >
                    Explore platform features
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
