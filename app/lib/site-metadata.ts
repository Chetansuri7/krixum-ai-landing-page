import { brandInfo } from "./brand-info";

export const SITE_URL = "https://krixum.com" as const;

export const siteMeta = {
  name: brandInfo.brandName,
  tagline: "Search once. Book anything.",
  title: "Krixum - AI powered service booking app",
  description:
    "Search, compare, and book local services in one place. See all options side-by-side and book with payment protection — no more app hopping.",
  keywords: [
    "Krixum",
    "local services",
    "compare and book",
    "service aggregator",
    "taxis and rides",
    "home services",
    "quick commerce",
    "unified booking",
    "escrow protection",
    "AI booking API",
  ],
  siteUrl: SITE_URL,
  locale: "en_US",
  twitterHandle: "@krixumai",
  contactEmail: brandInfo.supportEmail,
  policyEmail: brandInfo.policyEmail,
  supportPhone: brandInfo.supportPhone,
  companyName: brandInfo.companyName,
  logoPath: "/logo.svg",
  socialImagePath: "/logo.svg", // Using existing logo until og-image.png is created
  // Used for Google Sitelinks Search Box; must accept a "q" param
  siteSearchPath: "/search?q=",
} as const;

export type MarketingSection = {
  id: string;
  path: string;
  title: string;
  description: string;
  sectionId: string;
};

export const marketingSections: MarketingSection[] = [
  {
    id: "advantages",
    path: "/benefits",
    title: "Benefits",
    description: "Why Krixum saves time and reduces hassle across categories.",
    sectionId: "benefits",
  },
  {
    id: "overview",
    path: "/",
    title: "Overview",
    description: "What Krixum does and where it works.",
    sectionId: "overview",
  },
  {
    id: "highlights",
    path: "/",
    title: "Real Examples",
    description: "See how Krixum compares old vs new flows.",
    sectionId: "highlights",
  },
  {
    id: "how-it-works",
    path: "/",
    title: "How it works",
    description: "From search to booking with protection.",
    sectionId: "how-it-works",
  },
  {
    id: "faq",
    path: "/faq",
    title: "FAQ",
    description: "Answers about booking, protection, and partnerships.",
    sectionId: "faq",
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact",
    description: "Reach out for demos, partnerships, or support.",
    sectionId: "contact",
  },
];
