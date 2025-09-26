import type { Route } from "./+types/faq";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { FAQSection } from "~/components/faq-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { faqData, type FaqItem } from "~/lib/faq-data";

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
        <main className="flex-1 bg-primary-foreground">
          <FAQSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
