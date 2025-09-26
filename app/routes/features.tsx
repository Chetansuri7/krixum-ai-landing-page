import type { Route } from "./+types/features";
import { Link } from "react-router";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { siteMeta, marketingSections } from "~/lib/site-metadata";
import { SectionHeader } from "~/components/ui/section-header";
import { siteContent } from "~/lib/content-data";

const pageDetails = marketingSections.find((section) => section.id === "features");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Features – ${siteMeta.name}`;

const pageDescription =
  "Explore every workflow that Krixum AI unlocks: collaborative chat workspaces, reusable prompt libraries, and governance controls that let enterprises move fast without sacrificing safety.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/features", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "AI platform features, AI workspace capabilities, Krixum features" },
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
  const canonicalUrl = new URL("/features", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

const collaborationHighlights = [
  {
    title: "Team Spaces",
    description:
      "Spin up shared workspaces for product, marketing, and support. Each space keeps prompts, files, and AI preferences tailored to the team so everyone starts from a high-quality baseline.",
  },
  {
    title: "Reusable Playbooks",
    description:
      "Turn winning AI conversations into structured playbooks. Document intent, guardrails, and sample outputs to help new teammates see what ‘good’ looks like before they ever send a prompt.",
  },
  {
    title: "Lifecycle Governance",
    description:
      "Set review workflows, retention policies, and granular access controls. Krixum adapts to your compliance posture without slowing down experimentation or shipping velocity.",
  },
];

const automationHighlights = [
  {
    title: "Chain Prompts into Pipelines",
    description:
      "Drag-and-drop responses into a canvas to create automated flows that hand tasks between models. Trigger them on demand or on schedules and monitor latency, costs, and accuracy in real time.",
  },
  {
    title: "Enterprise Knowledge Graph",
    description:
      "Connect knowledge bases, product docs, and CRM systems. Our semantic index keeps every answer grounded in the freshest context and flags hallucinations before they hit the end user.",
  },
  {
    title: "Observability & Analytics",
    description:
      "Dashboards surface which prompts, models, or workflows are driving the most value. Drill into attribution, cost centers, and satisfaction ratings with a single click.",
  },
];

export default function FeaturesPage() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="bg-primary-foreground border-b border-border/40">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold">
                Product Overview
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                One Workspace for every AI-powered workflow
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Krixum AI centralizes conversations, automations, and governance in a single, enterprise-ready workspace. From individual makers to global teams, everyone collaborates with the same intelligent guardrails and context-aware tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to={{ pathname: "/", search: "?section=features" }}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Preview the home experience
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                >
                  Compare plans
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-12">
            <SectionHeader
              badge="Core Features"
              title="Everything teams need to launch AI initiatives"
              description="Ship production-ready assistants, copilots, and automations with the same platform that powers your experiments."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {siteContent.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl" aria-hidden>
                    {feature.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-muted/50">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
              <SectionHeader
                badge="Collaboration"
                title="Designed for cross-functional velocity"
                description="Every feature in Krixum AI reduces handoffs by keeping teams aligned on sources of truth, workflow status, and governance."
              />
              <div className="grid gap-6 md:grid-cols-3">
                {collaborationHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
            <SectionHeader
              badge="Automation"
              title="Scale from prototype to production"
              description="Automate repetitive tasks, connect AI to business systems, and monitor performance without building a custom stack."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {automationHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex h-full flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary-foreground">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
              <div className="rounded-3xl border border-border/60 bg-background/90 p-10 shadow-xl">
                <SectionHeader
                  badge="Use Cases"
                  title="Bring every customer journey to life"
                  description="See how leading teams use Krixum AI to accelerate development, marketing, and customer support."
                />
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="rounded-2xl bg-muted/60 p-6">
                    <h3 className="text-lg font-semibold text-foreground">Product Development</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      Iterate on product specs, benchmark ideas against competitor strategies, and generate prototypes faster. Engineering, product, and design teams share prompts and context in dedicated spaces that keep every decision auditable.
                    </p>
                  </article>
                  <article className="rounded-2xl bg-muted/60 p-6">
                    <h3 className="text-lg font-semibold text-foreground">Revenue Teams</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      Empower sellers with battlecards, objection handling flows, and personalized outreach that reflects live CRM data. Marketing can publish approved assets that automatically route through AI for localization and tone adjustments.
                    </p>
                  </article>
                  <article className="rounded-2xl bg-muted/60 p-6">
                    <h3 className="text-lg font-semibold text-foreground">Customer Support</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      Deploy AI agents that escalate intelligently, summarize cases, and keep humans in the loop for sensitive topics. Monitor deflection rates and CSAT to identify exactly where automation is delivering impact.
                    </p>
                  </article>
                  <article className="rounded-2xl bg-muted/60 p-6">
                    <h3 className="text-lg font-semibold text-foreground">Operations & Analytics</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      Use secure automations to reconcile reports, maintain compliance records, and alert stakeholders when anomalies appear. Role-based permissions ensure that sensitive data never leaves approved workspaces.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
            <div className="rounded-3xl border border-border bg-card/80 p-10 shadow-lg">
              <div className="flex flex-col gap-6">
                <SectionHeader
                  badge="Next Steps"
                  title="Ready to orchestrate every AI workflow?"
                  description="Launch Krixum AI across your org in days, not months. We migrate historical conversations, integrate with your identity provider, and deliver enablement playbooks for every team."
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                  >
                    Talk to the team
                  </Link>
                  <Link
                    to="/models"
                    className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                  >
                    Explore supported models
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
