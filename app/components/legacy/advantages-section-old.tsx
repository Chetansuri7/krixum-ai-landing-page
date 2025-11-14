import { Link } from "react-router";

import { SectionHeader } from "~/components/ui/section-header";

export function AdvantagesSection() {
  const advantages = [
    {
      title: "Time Savings",
      subtitle: "Stop App-Hopping",
      description:
        "Average user wastes 15 minutes comparing services across apps. With Krixum, compare everything in under 30 seconds.",
      metric: "15 min",
      metricLabel: "Time Saved",
      color: "from-blue-500 to-cyan-500",
      bgColor:
        "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Cost Savings",
      subtitle: "Always Find Best Price",
      description:
        "Never overpay again. We show all options with transparent pricing. Users save ₹200-500 per booking on average.",
      metric: "₹400",
      metricLabel: "Avg. Saved",
      color: "from-emerald-500 to-teal-500",
      bgColor:
        "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Trust & Safety",
      subtitle: "Guaranteed Service",
      description:
        "Payment held in escrow until service confirmed. Bad service? Full refund or free replacement. Every booking protected.",
      metric: "100%",
      metricLabel: "Protected",
      color: "from-purple-500 to-pink-500",
      bgColor:
        "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Unified Experience",
      subtitle: "One App, Everything",
      description:
        "From taxis to plumbers to groceries - manage all your local services in one place. Single payment method, one history.",
      metric: "10+",
      metricLabel: "Categories",
      color: "from-orange-500 to-red-500",
      bgColor:
        "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="advantages"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8"
    >
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          title="Why choose Krixum?"
          description="Save time, save money, and book with confidence - all in one platform."
        />

        {/* Main Advantages Grid - 4 in a row for web */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 lg:p-8">
                {/* Content */}
                <div className="space-y-3 lg:space-y-4">
                  {/* Title with inline icon */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${advantage.color} flex items-center justify-center`}>
                      <div className="w-4 h-4 text-white">
                        {advantage.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {advantage.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {advantage.description}
                  </p>

                  {/* Metric */}
                  <div className="flex items-baseline gap-2 pt-2">
                    <span
                      className={`text-xl font-bold bg-gradient-to-r ${advantage.color} bg-clip-text text-transparent`}
                    >
                      {advantage.metric}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {advantage.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">
                  Ready to experience the difference?
                </div>
                <div className="text-sm text-muted-foreground">
                  Join thousands of satisfied users
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/benefits"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                View full advantage report
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/70"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
