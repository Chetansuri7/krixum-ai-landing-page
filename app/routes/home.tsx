import type { Route } from "./+types/home";
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

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Krixum AI - Unify ChatGPT, Claude, Gemini in One App" },
    { name: "description", content: "Access all top AI models in one unified chat interface. Switch between OpenAI, Anthropic, Google, Meta, and more without losing context. Your data stays private." },
    { name: "keywords", content: "AI chat, ChatGPT, Claude, Gemini, unified AI, multi-model chat, privacy-focused AI, no vendor lock-in" },
    { name: "author", content: "Krixum AI" },
    { name: "robots", content: "index, follow" },
    
    // Open Graph tags
    { property: "og:title", content: "Krixum AI - Unify All AI Models in One App" },
    { property: "og:description", content: "Access ChatGPT, Claude, Gemini, Llama, and more in one unified, privacy-focused chat interface. No vendor lock-in, total privacy." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://krixum.ai" },
    { property: "og:image", content: "https://krixum.ai/og-image.png" },
    { property: "og:site_name", content: "Krixum AI" },
    
    // Twitter Card tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Krixum AI - Unify All AI Models in One App" },
    { name: "twitter:description", content: "Access ChatGPT, Claude, Gemini, Llama, and more in one unified, privacy-focused chat interface." },
    { name: "twitter:image", content: "https://krixum.ai/twitter-image.png" },
    
    // Additional SEO tags
    { name: "theme-color", content: "#000000" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ];
}

export default function Home() {
  return (
    <ContentProvider>
      <div className="relative flex min-h-[86.1vh] flex-col justify-between overflow-x-clip scroll-smooth bg-background md:overflow-y-visible">
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
