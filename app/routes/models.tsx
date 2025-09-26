import type { Route } from "./+types/models";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { ModelsSection } from "~/components/models-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";

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
        <main className="flex-1 bg-primary-foreground">
          <ModelsSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
