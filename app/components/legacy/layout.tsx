import { Header } from "../header";
import { HeroSection } from "../hero-section";
import { ModelsSection } from "../models-section";
import { FeaturesSection } from "../features-section";
import { AdvantagesSection } from "../advantages-section";
import { HighlightsSection } from "../highlights-section";
import { HowItWorksSection } from "../how-it-works-section";
import { PricingSection } from "../pricing-section";
import { SecuritySection } from "./security-section";
import { TestimonialsSection } from "./testimonials-section";
import { FAQSection } from "../faq-section";
import { CtaSection } from "../cta-section";
import { FooterSection } from "../footer-section";

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ModelsSection />
        <FeaturesSection />
        <AdvantagesSection />
        <HighlightsSection />
        <HowItWorksSection />
        <PricingSection />
        <SecuritySection />
        <TestimonialsSection />
        <FAQSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
