import { Link } from "react-router";
import { SectionHeader } from "~/components/ui/section-header";
import { Check, X, Search, Clock, Shield, Sparkles } from "lucide-react";

export function PricingSection() {
  const userBenefits = [
    "Unlimited searches across all categories",
    "Real-time availability and comparisons",
    "Payment protection on every booking",
    "24/7 customer support",
    "No hidden fees, ever",
    "One platform for all your services",
  ];

  const partnerTiers = [
    {
      name: "Discovery Partner",
      icon: "🔍",
      tagline: "Get discovered",
      price: "₹999",
      period: "month",
      description: "List your service and get redirects to your platform",
      color: "blue",
      features: [
        "Platform listing",
        "Real-time pricing API",
        "Redirect to your app/website",
        "Basic analytics",
        "Logo & branding",
      ],
      revenue: "Pay-per-click or flat fee",
    },
    {
      name: "Booking Partner",
      icon: "✅",
      tagline: "Accept bookings",
      price: "₹2,499",
      period: "month",
      popular: true,
      description: "Accept direct bookings with escrow protection",
      color: "green",
      features: [
        "Everything in Discovery +",
        "Direct booking integration",
        "Escrow payment handling",
        "Booking management dashboard",
        "Priority placement",
        "Advanced analytics",
      ],
      revenue: "5% commission per booking",
    },
    {
      name: "Platform Provider",
      icon: "🚀",
      tagline: "Full integration",
      price: "Custom",
      period: "contact us",
      description: "White-label marketplace infrastructure",
      color: "purple",
      features: [
        "Everything in Booking +",
        "Custom marketplace build",
        "Your branding",
        "Advanced escrow features",
        "Custom integrations",
        "Dedicated support",
      ],
      revenue: "Monthly SaaS + setup fee",
    },
  ];

  return (
    <section
      id="pricing"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-12 lg:py-16"
    >
      <div className="flex flex-col gap-12 w-full">
        <SectionHeader
          title="Free for users. Fair for partners."
          description="Users never pay. Partners only pay when they get value."
        />

        {/* Hero Section - Free for Users */}
        <div className="relative overflow-hidden rounded-3xl bg-green-600 p-8 lg:p-12 text-white shadow-lg">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Main message */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">For All Users</span>
              </div>

              <div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-3">
                  ₹0 Forever
                </h3>
                <p className="text-xl text-white/90">
                  Search, compare, and book anything. Completely free. No credit card required.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                  <Search className="w-5 h-5 mb-2" />
                  <div className="text-sm font-medium mb-1">One Search</div>
                  <div className="text-lg font-bold">All Options</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                  <Clock className="w-5 h-5 mb-2" />
                  <div className="text-sm font-medium mb-1">Quick</div>
                  <div className="text-lg font-bold">30 seconds</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3">
                  <Shield className="w-5 h-5 mb-2" />
                  <div className="text-sm font-medium mb-1">Safe</div>
                  <div className="text-lg font-bold">Protected</div>
                </div>
              </div>

              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Start Searching Free
              </a>
            </div>

            {/* Right side - Benefits list */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-6 h-6" />
                What you get for free:
              </h4>
              <ul className="space-y-3">
                {userBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pain Point Comparison */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-center mb-8">
            Stop juggling apps. Start booking smarter.
          </h3>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* The Problem */}
            <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">The Old Way</h4>
                  <p className="text-sm text-muted-foreground">App juggling nightmare</p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">📱</span>
                  <div>
                    <div className="font-medium text-sm">Download multiple apps</div>
                    <div className="text-xs text-muted-foreground">4-5 apps for one service</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <div className="font-medium text-sm">Switch between apps</div>
                    <div className="text-xs text-muted-foreground">Open, check, remember, repeat</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">🤔</span>
                  <div>
                    <div className="font-medium text-sm">Compare mentally</div>
                    <div className="text-xs text-muted-foreground">Try to remember all prices</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">😓</span>
                  <div>
                    <div className="font-medium text-sm">Waste 10-15 minutes</div>
                    <div className="text-xs text-muted-foreground">Every. Single. Time.</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-900/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">With Krixum</h4>
                  <p className="text-sm text-muted-foreground">Simple, fast, done</p>
                </div>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <div className="font-medium text-sm">Search once</div>
                    <div className="text-xs text-muted-foreground">Type what you need</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-medium text-sm">See all options instantly</div>
                    <div className="text-xs text-muted-foreground">Side-by-side comparison</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-medium text-sm">Book directly</div>
                    <div className="text-xs text-muted-foreground">One tap, done</div>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white dark:bg-card rounded-lg">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="font-medium text-sm">Complete in 30 seconds</div>
                    <div className="text-xs text-muted-foreground">Save 10+ minutes</div>
                  </div>
                </li>
              </ul>

              <div className="mt-4 bg-green-600 text-white rounded-xl px-4 py-3 text-center font-bold">
                🎯 One app. All services. Zero hassle.
              </div>
            </div>
          </div>
        </div>

        {/* Partner Pricing */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">For Service Partners</h3>
            <p className="text-muted-foreground text-lg">
              Reach 100,000+ users. Only pay when you get results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {partnerTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-card border-2 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  tier.popular
                    ? "border-primary shadow-lg"
                    : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-bold">
                    ⭐ Most Popular
                  </div>
                )}

                <div className={`bg-${tier.color}-600 p-6 ${tier.popular ? "" : ""} text-white`}>
                  <div className="text-4xl mb-3">{tier.icon}</div>
                  <h4 className="text-2xl font-bold mb-1">{tier.name}</h4>
                  <p className="text-sm text-white/80 mb-4">{tier.tagline}</p>

                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">
                      {tier.price === "Custom" ? "Custom" : tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-sm text-white/80">/{tier.period}</span>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>

                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-1">Revenue model:</div>
                    <div className="text-sm font-semibold">{tier.revenue}</div>
                  </div>

                  <a
                    href="https://chat.krixum.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                      tier.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border hover:bg-muted"
                    }`}
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            View detailed pricing
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
          >
            Become a partner
          </Link>
        </div>
      </div>
    </section>
  );
}
