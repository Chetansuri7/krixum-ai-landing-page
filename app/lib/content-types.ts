export interface HeroContent {
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  trustCount: string;
  trustMessage: string;
}

export interface ModelContent {
  name: string;
  provider: string;
  description: string;
  icon: string;
  color: string;
}

export interface FeatureContent {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  hero: HeroContent;
  models: ModelContent[];
  features: FeatureContent[];
  pricing: PricingPlan[];
  dataTools: {
    title: string;
    description: string;
    tools: Array<{
      name: string;
      description: string;
      icon: string;
    }>;
  };
  faq: FAQItem[];
}