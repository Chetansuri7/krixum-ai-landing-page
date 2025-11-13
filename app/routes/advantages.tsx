import type { Route } from "./+types/advantages";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { AdvantagesSection } from "~/components/advantages-section";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";

const pageDetails = marketingSections.find((section) => section.id === "advantages");

const pageTitle = pageDetails
  ? `${pageDetails.title} – ${siteMeta.name}`
  : `Advantages – ${siteMeta.name}`;

const pageDescription =
  "Understand why Krixum reduces app juggling, speeds up bookings, and protects every transaction with escrow.";


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
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/advantages", siteMeta.siteUrl).toString()}
        keywords={["krixum advantages", "save time", "app fatigue", "escrow protection", "local services"]}
        pageType="service"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Advantages", url: `${siteMeta.siteUrl}/advantages` }
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
          <AdvantagesSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
