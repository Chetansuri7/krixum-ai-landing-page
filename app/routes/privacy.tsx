import type { Route } from "./+types/privacy";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { siteMeta } from "~/lib/site-metadata";

const title = `Privacy Policy – ${siteMeta.name}`;
const description = `Read the privacy policy for ${siteMeta.name}.`;
const canonicalUrl = new URL("/privacy", siteMeta.siteUrl).toString();

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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 prose">
        <h1>Privacy Policy</h1>
        <p>We respect your privacy and are committed to protecting your personal information. This policy describes what we collect, how we use it, and your rights.</p>
        <h2>Information We Collect</h2>
        <p>Account details you provide and technical information like device and usage metadata necessary to operate the service.</p>
        <h2>How We Use Information</h2>
        <p>To provide and improve the product, secure the platform, and communicate with you. We do not sell personal data.</p>
        <h2>Contact</h2>
        <p>Questions? Email {siteMeta.contactEmail}.</p>
      </main>
      <FooterSection />
    </div>
  );
}

