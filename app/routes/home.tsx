import type { Route } from "./+types/home";
import { useSearchParams } from "react-router";

import { Header } from "~/components/header";
import { HeroSection } from "~/components/hero-section";
import { HighlightsSection } from "~/components/highlights-section";
import { ModelsSection } from "~/components/models-section";
import { FeaturesSection } from "~/components/features-section";
import { PricingSection } from "~/components/pricing-section";
import { AdvantagesSection } from "~/components/advantages-section";
import { CtaSection } from "~/components/cta-section";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { FAQSection } from "~/components/faq-section";
import { useScrollToSection } from "~/hooks/use-scroll-to-section";
import { siteMeta } from "~/lib/site-metadata";

export function meta(args: Route.MetaArgs) {
  const pathname = args.location?.pathname ?? "/";
  const canonicalUrl = new URL(pathname || "/", siteMeta.siteUrl).toString();
  const socialImage = new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString();

  return [
    { title: siteMeta.title },
    { name: "description", content: siteMeta.description },
    { name: "keywords", content: siteMeta.keywords.join(", ") },
    { name: "author", content: siteMeta.name },
    {
      name: "robots",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    { name: "application-name", content: siteMeta.name },
    { property: "og:title", content: siteMeta.title },
    { property: "og:description", content: siteMeta.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: socialImage },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: siteMeta.title },
    { name: "twitter:description", content: siteMeta.description },
    { name: "twitter:image", content: socialImage },
    { name: "twitter:creator", content: siteMeta.twitterHandle },
    { name: "theme-color", content: "#050816" },
  ];
}

export const links: Route.LinksFunction = (args) => {
  const pathname = args?.location?.pathname ?? "/";
  const canonicalUrl = new URL(pathname || "/", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

type HomePageProps = {
  focusSectionId?: string;
};

export function HomePage({ focusSectionId }: HomePageProps) {
  const [searchParams] = useSearchParams();
  const sectionFromQuery = searchParams.get("section") ?? undefined;
  const targetSection = focusSectionId ?? sectionFromQuery;

  useScrollToSection(targetSection);

  return (
    <ContentProvider>
      <div className="relative flex min-h-[86.1vh] flex-col justify-between overflow-x-hidden scroll-smooth bg-background md:overflow-y-visible">
        <Header />
        <main className="isolate flex flex-col gap-8 bg-primary-foreground">
          <HeroSection />
          <FeaturesSection />
          <ModelsSection />

          <HighlightsSection />
          {/* <HowItWorksSection /> */}
          <AdvantagesSection />
          <PricingSection />
          <FAQSection />
          {/* <TestimonialsSection /> */}
          {/* <SecuritySection /> */}
          <CtaSection />
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}

export default function Home() {
  return <HomePage />;
}
