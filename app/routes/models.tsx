import type { Route } from "./+types/models";
import { Link } from "react-router";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { SectionHeader } from "~/components/ui/section-header";
import { siteContent } from "~/lib/content-data";

const pageDetails = marketingSections.find((section) => section.id === "models");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Models – ${siteMeta.name}`;

const pageDescription =
  "Switch between ChatGPT, Claude, Gemini, and Llama without losing context. Learn how Krixum AI keeps conversations grounded while giving teams access to the best model for every task.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/models", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "multi model ai, chatgpt claude gemini, llama workspace" },
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
  const canonicalUrl = new URL("/models", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

const evaluationMetrics = [
  {
    name: "Response Quality",
    description:
      "Benchmark models using side-by-side comparisons and rubric scoring. Quickly see which vendor delivers the tone, accuracy, and depth that your audience expects.",
  },
  {
    name: "Latency & Throughput",
    description:
      "Track end-to-end latency, streaming performance, and concurrency. Set guardrails that automatically switch to backup models when SLAs slip.",
  },
  {
    name: "Cost Transparency",
    description:
      "Monitor spend per model, per workspace, and per teammate. Allocate budgets and set alerts so experiments never surprise finance."
  },
];

const deploymentPatterns = [
  {
    title: "Creative Ideation",
    body:
      "Marketing teams pair GPT-4o with Claude 3.5 Sonnet to generate campaign messaging, iterate on visuals, and fact-check claims. The conversation stays in one thread, making approvals painless.",
  },
  {
    title: "Analytical Reasoning",
    body:
      "Analysts lean on Gemini 1.5 Pro for multi-modal data review and use GPT-4 Turbo for SQL suggestions. Krixum keeps data redacted while still returning relevant results.",
  },
  {
    title: "Code Generation",
    body:
      "Engineers toggle between GPT-4o and Claude Opus to evaluate architectural decisions, generate tests, and refactor services. Workflows sync with Git providers so prompts map to pull requests.",
  },
  {
    title: "Knowledge Retrieval",
    body:
      "Operations teams use Llama 3 and GPT-4o mini with retrieval augmented generation for policy lookups, SOP drafting, and compliance audits. Sources are cited automatically for auditors.",
  },
];

export default function ModelsPage() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="bg-primary-foreground border-b border-border/40">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold">
                Model Library
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                The best AI model for every moment
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Krixum AI abstracts the complexity of managing multiple vendors. Access state-of-the-art models, evaluate them with live production data, and route responses through the engine that matches your criteria.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  View model access by plan
                </Link>
                <Link
                  to={{ pathname: "/", search: "?section=models" }}
                  preventScrollReset
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                >
                  Preview the home showcase
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-10">
            <SectionHeader
              badge="Supported Providers"
              title="Choose from a growing catalogue of leading AI models"
              description="Mix and match premium and open models without rewriting code or migrating data."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {siteContent.models.map((model) => (
                <article
                  key={model.name}
                  className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden>
                      {model.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {model.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{model.provider}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {model.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                    <span>{model.color.replace("from-", "").replace(" to-", " → ")}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-muted/60">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 space-y-10">
              <SectionHeader
                badge="Evaluation"
                title="Make data-driven decisions about model fit"
                description="Every experiment is measurable. Run live comparisons, track success metrics, and automate fallbacks."
              />
              <div className="grid gap-6 md:grid-cols-3">
                {evaluationMetrics.map((metric) => (
                  <div key={metric.name} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground">{metric.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 space-y-6">
            <SectionHeader
              badge="In Production"
              title="Where teams rely on Krixum's multi-model routing"
              description="From ideation to regulated industries, adaptive routing means every prompt hits the right engine."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {deploymentPatterns.map((pattern) => (
                <article key={pattern.title} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-foreground">{pattern.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pattern.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-primary-foreground">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 space-y-8 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold">Governance</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
                Unified security, observability, and compliance
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Centralize audit logs, review controls, and model usage policies without sacrificing speed. Krixum AI integrates with industry standards like SOC 2, GDPR, and HIPAA to keep your cloud footprint compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/advantages"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  See platform advantages
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/70"
                >
                  Request vendor security package
                </Link>
              </div>
            </div>
          </section>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
