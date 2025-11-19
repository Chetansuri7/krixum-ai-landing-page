import type { Route } from "./+types/home";
import { useLocation } from "react-router";

import { Header } from "~/components/header";
import { HeroSection } from "~/components/hero-section";
import { HighlightsSection } from "~/components/highlights-section";
import { OverviewSection } from "~/components/overview-section";
import { AdvantagesSection } from "~/components/advantages-section";
import { CtaSection } from "~/components/cta-section";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { FAQSection } from "~/components/faq-section";
import { HowItWorksSection } from "~/components/how-it-works-section";
import { useScrollToSection } from "~/hooks/use-scroll-to-section";
import { siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";


type HomePageProps = {
  focusSectionId?: string;
};

export function HomePage({ focusSectionId }: HomePageProps) {
  const location = useLocation();
  const rawHash = location.hash?.replace(/^#/, "");
  const sectionFromHash = rawHash ? rawHash : undefined;
  const targetSection = focusSectionId ?? sectionFromHash;

  useScrollToSection(targetSection);

  return (
    <ContentProvider>
      <EnhancedSEO
        title={siteMeta.title}
        description={siteMeta.description}
        canonical={siteMeta.siteUrl}
        keywords={[...siteMeta.keywords]}
        pageType="home"
        openGraph={{
          title: siteMeta.title,
          description: siteMeta.description,
          type: "website",
          images: [
            {
              url: siteMeta.socialImagePath,
              width: 1200,
              height: 630,
              alt: `${siteMeta.name} - ${siteMeta.tagline}`,
            },
          ],
        }}
        additionalJsonLd={[]}
      />
      <div className="relative flex min-h-[86.1vh] flex-col justify-between overflow-x-hidden scroll-smooth bg-background md:overflow-y-visible">
        <Header />
        <main className="isolate flex flex-col gap-2 bg-background">
          <HeroSection />
          <AdvantagesSection />
          <OverviewSection />
          <HighlightsSection />
          <HowItWorksSection />
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
