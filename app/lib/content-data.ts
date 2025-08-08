import type { SiteContent } from './content-types';

export const siteContent: SiteContent = {
  hero: {
    title: "Unify All AI Models in One App",
    subtitle: "Access ChatGPT, Claude, Gemini, and more",
    headline: "Unify All AI Models in One App",
    description: "Switch between the world's best AI models seamlessly. No vendor lock-in, complete privacy, and the power to choose the right AI for every task.",
    primaryCTA: "Try for Free",
    secondaryCTA: "Watch Demo",
    trustCount: "9000+",
    trustMessage: "businesses worldwide"
  },
  models: [
    {
      name: "GPT-4",
      provider: "OpenAI",
      description: "Most capable GPT model, great for complex reasoning tasks",
      icon: "🤖",
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Claude 3.5",
      provider: "Anthropic", 
      description: "Excellent for analysis, writing, and coding tasks",
      icon: "🧠",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Gemini Pro",
      provider: "Google",
      description: "Powerful multimodal AI with strong reasoning capabilities",
      icon: "✨",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Llama 3",
      provider: "Meta",
      description: "Open-source model with strong performance across tasks",
      icon: "🦙",
      color: "from-blue-400 to-indigo-500"
    }
  ],
  features: [
    {
      title: "Unified Chat Interface",
      description: "Access all AI models through one clean, intuitive interface. No need to switch between different platforms.",
      icon: "💬"
    },
    {
      title: "Context Preservation",
      description: "Switch between models without losing your conversation context. Your chat history stays intact.",
      icon: "📝"
    },
    {
      title: "Privacy First",
      description: "Your conversations are private and secure. We don't store or analyze your personal data.",
      icon: "🔒"
    }
  ],
  pricing: [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out Krixum AI",
      features: [
        "Access to GPT-3.5",
        "10 conversations per day",
        "Basic chat interface",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For individuals and small teams",
      features: [
        "Access to all AI models",
        "Unlimited conversations",
        "Context preservation",
        "Priority support",
        "Advanced analytics",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Custom model fine-tuning",
        "Dedicated support",
        "SSO integration",
        "Advanced security",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ],
  dataTools: {
    title: "Powerful Data Tools",
    description: "Enhance your AI experience with built-in tools for data analysis and visualization.",
    tools: [
      {
        name: "Data Analysis",
        description: "Analyze datasets with AI-powered insights",
        icon: "📊"
      },
      {
        name: "Code Generation",
        description: "Generate and debug code across multiple languages",
        icon: "💻"
      },
      {
        name: "Document Processing",
        description: "Extract insights from PDFs, documents, and images",
        icon: "📄"
      }
    ]
  },
  faq: [
    {
      question: "How does Krixum AI work?",
      answer: "Krixum AI provides a unified interface to access multiple AI models from different providers. You can switch between models seamlessly while maintaining your conversation context."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we prioritize your privacy and security. Your conversations are encrypted and we don't store or analyze your personal data."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely! You can cancel your subscription at any time with no questions asked. Your data remains accessible during your billing period."
    }
  ]
};
export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    yearlyPrice: "$0",
    period: "forever",
    description: "Perfect for trying out Krixum AI",
    icon: "🤖",
    features: [
      "Access to fast models",
      "100 message credits/month",
      "400 KB per AI agent",
      "1 seat",
      "1 AI agent",
      "Limit of 10 links to train on",
      "Embed on unlimited websites"
    ],
    cta: "Get Started",
    popular: false,
    badge: null
  },
  {
    name: "Hobby",
    price: "$40",
    yearlyPrice: "$32",
    period: "month",
    description: "For individuals getting started",
    icon: "🧠",
    features: [
      "Access to advanced models",
      "2,000 message credits/month",
      "1 AI agent",
      "5 AI Actions per AI agent",
      "33 MB per AI agent",
      "Unlimited links to train on",
      "API access",
      "Integrations",
      "Basic analytics"
    ],
    cta: "Subscribe",
    popular: false,
    badge: null
  },
  {
    name: "Standard",
    price: "$150",
    yearlyPrice: "$120",
    period: "month",
    description: "For individuals and small teams",
    icon: "✨",
    features: [
      "12,000 message credits/month",
      "10 AI Actions per AI agent",
      "3 seats",
      "2 AI agents"
    ],
    cta: "Subscribe",
    popular: true,
    badge: "Popular"
  },
  {
    name: "Pro",
    price: "$500",
    yearlyPrice: "$400",
    period: "month",
    description: "For growing teams",
    icon: "🦙",
    features: [
      "40,000 message credits/month",
      "15 AI Actions per AI agent",
      "5+ seats",
      "3 AI agents",
      "Advanced analytics"
    ],
    cta: "Subscribe",
    popular: false,
    badge: null
  },
  {
    name: "Enterprise",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "contact us",
    description: "For large organizations",
    icon: "🚀",
    features: [
      "Higher limits",
      "Priority support",
      "SLAs",
      "Success manager (CSM)",
      "Custom integrations",
      "Advanced security"
    ],
    cta: "Contact us",
    popular: false,
    badge: null
  }
];