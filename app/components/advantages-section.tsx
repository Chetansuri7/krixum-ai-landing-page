import { Link } from "react-router";

import { SectionHeader } from "~/components/ui/section-header";

export function AdvantagesSection() {
  const advantages = [
    {
      title: "Freedom",
      subtitle: "No Vendor Lock-in",
      description:
        "Switch between AI models freely without being tied to a single provider. Your data and conversations remain portable across all platforms.",
      metric: "100%",
      metricLabel: "Freedom",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Savings",
      subtitle: "Cost Optimization",
      description:
        "Use the most cost-effective model for each task. Smart routing ensures you get the best value while maintaining quality.",
      metric: "70%",
      metricLabel: "Cost Reduction",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Performance",
      subtitle: "Peak Efficiency",
      description:
        "Get optimal results by leveraging each model's unique strengths. Our intelligent routing ensures peak performance for every query.",
      metric: "10x",
      metricLabel: "Faster Results",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Innovation",
      subtitle: "Always Current",
      description:
        "Stay ahead with the latest AI capabilities without changing platforms. Automatic updates bring you the newest models instantly.",
      metric: "24/7",
      metricLabel: "Updates",
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
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
          badge="Advantages"
          title="Why choose Krixum AI?"
          description="Experience the freedom and flexibility of a truly unified AI platform."
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
                to="/advantages"
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
