import type { SiteContent } from './content-types';

export const siteContent: SiteContent = {
  hero: {
    title: "Search once. Book anything.",
    subtitle: "All Services. One Platform. Guaranteed.",
    headline: "Search once. Book anything.",
    description: "Compare taxis, home services, quick commerce, and local providers in one place. Book with payment protection. AI-powered or traditional search.",
    primaryCTA: "Start Searching",
    secondaryCTA: "See How It Works",
    trustCount: "100,000+",
    trustMessage: "successful bookings"
  },
  models: [
    {
      name: "Taxis & Rides",
      provider: "4+ Providers",
      description: "Compare Ola, Uber, Rapido, Namma Yatri in real time and book with protection.",
      icon: "🚗",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Home Services",
      provider: "100+ Providers",
      description: "Plumbers, electricians, cleaners - verified local providers with platform guarantee.",
      icon: "🔧",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Quick Commerce",
      provider: "5+ Apps",
      description: "Compare delivery times and availability across Blinkit, Zepto, Swiggy Instamart, and more.",
      icon: "🛒",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Food Delivery",
      provider: "3+ Apps",
      description: "Find restaurants, compare delivery times and offers across Zomato, Swiggy, and more.",
      icon: "🍕",
      color: "from-green-400 to-emerald-500"
    }
  ],
  features: [
    {
      title: "Compare All Options Instantly",
      description: "Search once and see prices, ratings, and availability from all providers - big brands and local heroes - side by side.",
      icon: "🔍"
    },
    {
      title: "Book with Confidence",
      description: "Escrow payments, service guarantees, and full recourse. Your money is held until service is confirmed complete.",
      icon: "🛡️"
    },
    {
      title: "Traditional or Conversational",
      description: "Use our app to browse and book, OR just tell AI what you need. Same platform, your choice of interface.",
      icon: "🤖"
    }
  ],
  pricing: [
    {
      name: "For Users",
      price: "₹0",
      period: "forever",
      description: "Free to search and book. Always.",
      features: [
        "Unlimited searches",
        "Compare all providers",
        "Booking protection",
        "No hidden fees",
        "No subscription needed"
      ],
      cta: "Start Searching",
      popular: true
    },
    {
      name: "For Large Brands",
      price: "Placement-based",
      period: "contact us",
      description: "Discovery partnership model",
      features: [
        "Featured listings",
        "Performance ads",
        "Analytics dashboard",
        "No transaction fees",
        "Reach qualified users",
        "Pay per click/redirect"
      ],
      cta: "Partner with Us",
      popular: false
    },
    {
      name: "For Local Providers",
      price: "Pay per booking",
      period: "or subscription",
      description: "Full platform infrastructure",
      features: [
        "Full booking infrastructure",
        "Payment processing",
        "Customer protection",
        "10-20% commission or ₹50-200/day",
        "Verified provider badge",
        "Get discovered by thousands"
      ],
      cta: "Join Platform",
      popular: false
    }
  ],
  dataTools: {
    title: "How Krixum Works",
    description: "Three ways we connect you with service providers — all with one goal: save you time and effort.",
    tools: [
      {
        name: "Discovery Partners",
        description: "Browse products on partner apps like Blinkit, Zepto. We show results, you order through their app.",
        icon: "🔗"
      },
      {
        name: "Booking Partners",
        description: "Compare options from Ola, Uber, Rapido and more. Book through us with escrow protection.",
        icon: "🎯"
      },
      {
        name: "Platform Providers",
        description: "Local plumbers, electricians, tutors get full support - listing, booking, payments, guarantees.",
        icon: "🏆"
      }
    ]
  },
  faq: [
    {
      question: "How does Krixum work?",
      answer: "Krixum connects you with local service providers through three models: Discovery (redirect to brand apps like Blinkit), Booking (book taxis with escrow protection), and Platform (full infrastructure for local providers like plumbers). You search once, compare all options, and book with guarantee."
    },
    {
      question: "Is booking through Krixum safe?",
      answer: "Yes. For Platform and Booking partners, we hold your payment in escrow until service is confirmed complete. If there's an issue, you get a full refund or free replacement. For Discovery partners, you book through their secure apps."
    },
    {
      question: "Do I pay extra fees to use Krixum?",
      answer: "No. Krixum is free for users. You pay providers directly or via their app. We earn through provider partnerships or small booking fees — not by charging you more."
    },
    {
      question: "What cities is Krixum available in?",
      answer: "We’re rolling out categories like taxis and home services first. More categories and cities will expand based on demand — join the waitlist to be notified when we launch in your city."
    },
    {
      question: "How is this different from JustDial or Urban Company?",
      answer: "Unlike JustDial (just phone numbers with no booking), we handle full transactions. Unlike Urban Company (single category with high commissions), we cover all local services with fair pricing. We're the only platform with escrow protection across categories."
    },
    {
      question: "Can I use AI to search and book?",
      answer: "Yes! Krixum is built API-first with MCP compatibility. You can use our app OR integrate with AI assistants like ChatGPT and Claude to search and book conversationally. Just ask AI what you need, and it handles the rest."
    },
    {
      question: "What if the provider doesn't show up or does bad work?",
      answer: "For Platform bookings, your payment is held until you confirm service completion. Bad service = instant refund or free replacement. For partner bookings, we mediate disputes and ensure resolution. You're always protected."
    },
    {
      question: "How do you make money if it's free for users?",
      answer: "We earn through: (1) Placement fees and ads from large brands, (2) Small booking fees (₹10-50) or commissions (2-5%) from partner bookings, (3) Subscriptions or commissions (10-20%) from local providers using our full platform. Fair for everyone."
    }
  ]
};
export const pricingPlans = [
  {
    name: "For Users",
    price: "₹0",
    yearlyPrice: "₹0",
    period: "forever",
    description: "Free to search and book. Always.",
    icon: "🎉",
    features: [
      "Unlimited searches",
      "Compare all providers",
      "Booking protection",
      "No hidden fees",
      "No subscription needed",
      "No app switching",
      "AI-powered search available"
    ],
    cta: "Start Searching",
    popular: true,
    badge: "Always Free"
  },
  {
    name: "For Large Brands",
    price: "Placement-based",
    yearlyPrice: "Custom",
    period: "contact us",
    description: "Discovery partnership model",
    icon: "🔗",
    features: [
      "Featured listings",
      "Performance ads",
      "Analytics dashboard",
      "No transaction fees",
      "Reach qualified users",
      "Pay per click/redirect"
    ],
    cta: "Partner with Us",
    popular: false,
    badge: null
  },
  {
    name: "For Local Providers",
    price: "Pay per booking",
    yearlyPrice: "₹50-200/day",
    period: "or subscription",
    description: "Full platform infrastructure",
    icon: "🏆",
    features: [
      "Full booking infrastructure",
      "Payment processing",
      "Customer protection",
      "10-20% commission or daily sub",
      "Verified provider badge",
      "Get discovered by thousands"
    ],
    cta: "Join Platform",
    popular: false,
    badge: null
  },
  // {
  //   name: "Enterprise",
  //   price: "Custom",
  //   yearlyPrice: "Custom",
  //   period: "contact us",
  //   description: "For large organizations",
  //   icon: "🚀",
  //   features: [
  //     "Higher limits",
  //     "Priority support",
  //     "SLAs",
  //     "Success manager (CSM)",
  //     "Custom integrations",
  //     "Advanced security"
  //   ],
  //   cta: "Contact us",
  //   popular: false,
  //   badge: null
  // }
];
