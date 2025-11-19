import type { SiteContent } from './content-types';

export const siteContent: SiteContent = {
  hero: {
    title: "Consumer-Focused Search Engine That Completes Tasks",
    subtitle: "Search. Find. Done.",
    headline: "Consumer-Focused Search Engine That Completes Tasks",
    description: "Stop juggling apps. Krixum is the search engine that helps you find and finish tasks—from booking rides to hiring pros—all in one place.",
    primaryCTA: "Start Searching",
    secondaryCTA: "How It Works",
    trustCount: "Growing Fast",
    trustMessage: "searches powered daily"
  },
  models: [
    {
      name: "Taxis & Rides",
      provider: "Compare All",
      description: "See options from Uber, Ola, Rapido, and local providers in one search.",
      icon: "🚗",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Home Services",
      provider: "Local Pros",
      description: "Find and connect with plumbers, electricians, and cleaners near you.",
      icon: "🔧",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Professional Help",
      provider: "Experts",
      description: "Discover top-rated interior designers, financial advisors, and consultants.",
      icon: "💼",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Local Discovery",
      provider: "City Wide",
      description: "Search for anything you need in your city and get actionable results.",
      icon: "📍",
      color: "from-green-400 to-emerald-500"
    }
  ],
  features: [
    {
      title: "Search That Does More",
      description: "Don't just find a link. Find a result you can act on. We show you options that help you complete your task, not just read about it.",
      icon: "🚀"
    },
    {
      title: "One Interface, Many Solutions",
      description: "Whether you need a ride, a repair, or a reservation, start here. We aggregate the best options so you don't have to open ten different apps.",
      icon: "📱"
    },
    {
      title: "Trust & Transparency",
      description: "We prioritize quality results. See ratings, reviews, and clear details for every provider we list, helping you make informed decisions.",
      icon: "🛡️"
    }
  ],
  pricing: [
    {
      name: "For Users",
      price: "Free",
      period: "forever",
      description: "Search and find what you need without cost.",
      features: [
        "Unlimited searches",
        "Compare providers instantly",
        "Access to local directory",
        "Direct connection to pros",
        "No hidden platform fees"
      ],
      cta: "Start Searching",
      popular: true
    },
    {
      name: "For Providers",
      price: "Get Listed",
      period: "today",
      description: "Reach customers searching for your service.",
      features: [
        "Create your business profile",
        "Get discovered by locals",
        "Receive direct inquiries",
        "Build your online reputation",
        "Grow your customer base"
      ],
      cta: "Join Krixum",
      popular: false
    },
    {
      name: "For Partners",
      price: "Integrate",
      period: "with us",
      description: "Connect your inventory directly.",
      features: [
        "API integration support",
        "High-intent user traffic",
        "Seamless booking flow",
        "Enhanced brand visibility",
        "Strategic partnership"
      ],
      cta: "Contact Us",
      popular: false
    }
  ],
  dataTools: {
    title: "How Krixum Works",
    description: "We bridge the gap between searching for a service and actually getting it done.",
    tools: [
      {
        name: "Search",
        description: "Type what you need—'taxi to airport', 'plumber in Austin', 'best interior designer'.",
        icon: "🔍"
      },
      {
        name: "Compare",
        description: "See curated results from various providers, apps, and local businesses side-by-side.",
        icon: "⚖️"
      },
      {
        name: "Complete",
        description: "Book directly, request a quote, or get redirected to the right app to finish the job.",
        icon: "✅"
      }
    ]
  },
  faq: [
    {
      question: "What exactly is Krixum?",
      answer: "Krixum is a consumer-focused search engine designed to help you complete tasks. Unlike traditional search engines that just give you links, we show you actionable options—like ride prices, service providers, and booking availability—so you can get things done faster."
    },
    {
      question: "Is it free to use?",
      answer: "Yes, Krixum is completely free for users to search and compare options. You only pay for the actual service you book (like the taxi fare or the plumber's fee), directly to the provider."
    },
    {
      question: "Do you provide the services yourself?",
      answer: "No, we are a search and discovery platform. We connect you with the best providers—whether they are large apps like Uber/Ola or trusted local businesses. We help you find them; they provide the service."
    },
    {
      question: "Can I book everything directly on Krixum?",
      answer: "Our goal is to make every search actionable. For some services, you can book directly or request a quote within Krixum. For others, we'll seamlessly guide you to the provider's app or website to finish the transaction."
    },
    {
      question: "How do you ensure quality?",
      answer: "We aim to surface the best options for your needs. We look for rated providers and established services. For direct partners, we work to ensure they meet quality standards, giving you peace of mind."
    },
    {
      question: "I'm a business owner. How can I get listed?",
      answer: "We'd love to have you! You can join our platform to get discovered by high-intent customers in your city. Visit our 'Contact' or 'Join' section to get started."
    }
  ]
};

export const pricingPlans = [
  {
    name: "For Users",
    price: "Free",
    yearlyPrice: "Free",
    period: "forever",
    description: "Search and find what you need without cost.",
    icon: "🎉",
    features: [
      "Unlimited searches",
      "Compare providers instantly",
      "Access to local directory",
      "Direct connection to pros",
      "No hidden platform fees",
      "Save time and effort"
    ],
    cta: "Start Searching",
    popular: true,
    badge: "Always Free"
  },
  {
    name: "For Providers",
    price: "Get Listed",
    yearlyPrice: "Grow",
    period: "today",
    description: "Reach customers searching for your service.",
    icon: "🚀",
    features: [
      "Create your business profile",
      "Get discovered by locals",
      "Receive direct inquiries",
      "Build your online reputation",
      "Grow your customer base",
      "Simple onboarding"
    ],
    cta: "Join Krixum",
    popular: false,
    badge: null
  },
  {
    name: "For Partners",
    price: "Integrate",
    yearlyPrice: "Scale",
    period: "with us",
    description: "Connect your inventory directly.",
    icon: "🔗",
    features: [
      "API integration support",
      "High-intent user traffic",
      "Seamless booking flow",
      "Enhanced brand visibility",
      "Strategic partnership",
      "Data insights"
    ],
    cta: "Contact Us",
    popular: false,
    badge: null
  }
];
