import type { Route } from "./+types/models";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { ModelsSection } from "~/components/models-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "models");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Models – ${siteMeta.name}`;

const pageDescription =
  "Browse Krixum's supported service categories like taxis, home services, and quick commerce. See what's live today and what's coming next.";


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
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/models", siteMeta.siteUrl).toString()}
        keywords={["krixum categories", "service categories", "taxis rides", "home services", "quick commerce"]}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Categories", url: `${siteMeta.siteUrl}/models` }
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
      />
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
