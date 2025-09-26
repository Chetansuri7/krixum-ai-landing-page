export const SITE_URL = "https://krixum.ai" as const;

export const siteMeta = {
  name: "Krixum AI",
  tagline: "Unify ChatGPT, Claude, Gemini in One App",
  title: "Krixum AI - Unify ChatGPT, Claude, Gemini in One App",
  description:
    "Access top AI models like ChatGPT, Claude, Gemini, and Llama in one private, vendor-neutral workspace. Switch models instantly, share context across conversations, and keep your data secure.",
  keywords: [
    "AI chat platform",
    "multi-model AI",
    "ChatGPT alternative",
    "Claude",
    "Gemini",
    "Llama",
    "AI workspace",
  ],
  siteUrl: SITE_URL,
  locale: "en_US",
  twitterHandle: "@krixumai",
  contactEmail: "hello@krixum.ai",
  logoPath: "/logo.svg",
  socialImagePath: "/og-image.png",
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
    id: "features",
    path: "/features",
    title: "Features",
    description: "Explore the workflows and collaboration tools available in Krixum AI.",
    sectionId: "features",
  },
  {
    id: "advantages",
    path: "/advantages",
    title: "Advantages",
    description: "Understand the ROI of consolidating every AI workflow inside one secure workspace.",
    sectionId: "advantages",
  },
  {
    id: "models",
    path: "/models",
    title: "Models",
    description: "See all of the AI models you can mix and match in real time.",
    sectionId: "models",
  },
  {
    id: "pricing",
    path: "/pricing",
    title: "Pricing",
    description: "Review every plan to find the right fit for your team.",
    sectionId: "pricing",
  },
  {
    id: "faq",
    path: "/faq",
    title: "FAQ",
    description: "Get answers to the questions we hear most often.",
    sectionId: "faq",
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact",
    description: "Reach out to our team for demos, partnerships, or support.",
    sectionId: "contact",
  },
];
