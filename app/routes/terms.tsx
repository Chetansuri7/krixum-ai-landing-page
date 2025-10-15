import type { Route } from "./+types/terms";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { siteMeta } from "~/lib/site-metadata";

const title = `Terms of Service – ${siteMeta.name}`;
const description = `Read the terms of service for ${siteMeta.name}.`;
const canonicalUrl = new URL("/terms", siteMeta.siteUrl).toString();

export function meta({}: Route.MetaArgs) {
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
  ];
}

export const links: Route.LinksFunction = () => {
  return [{ rel: "canonical", href: canonicalUrl }];
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 prose">
        <h1>Terms of Service</h1>
        <p>These terms govern your use of {siteMeta.name}. By using the service, you agree to them.</p>
        <h2>Use of Service</h2>
        <p>Don’t misuse, attempt to breach, or disrupt the service. Respect the rights of others.</p>
        <h2>Accounts</h2>
        <p>Keep your credentials secure. You are responsible for activity under your account.</p>
        <h2>Contact</h2>
        <p>Questions? Email {siteMeta.contactEmail}.</p>
      </main>
      <FooterSection />
    </div>
  );
}

