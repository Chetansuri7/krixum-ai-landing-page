const badges = [
  {
    alt: "SOC 2 Type II Compliant",
    title: "SOC 2",
    subtitle: "Type II",
    color: "from-blue-500 to-blue-600"
  },
  {
    alt: "GDPR Compliant",
    title: "GDPR",
    subtitle: "Compliant",
    color: "from-green-500 to-green-600"
  },
];

const features = [
  {
    title: "Your data stays yours",
    description:
      "Your data is only accessible to your AI agent and is never used to train models.",
    icon: "database",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Data encryption",
    description:
      "All data is encrypted at rest and in transit. We use industry-standard encryption algorithms.",
    icon: "lock",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Secure integrations",
    description:
      "We use verified variables to ensure users can access only their own data in your systems.",
    icon: "cube",
    color: "from-orange-500 to-red-500"
  },
];

import { SectionHeader } from "~/components/ui/section-header";

export function SecuritySection() {
  return (
    <section id="security" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col items-start gap-6 lg:flex-row">
          <div className="flex w-full flex-1 flex-col items-start gap-4">
            <SectionHeader
              title="Enterprise-grade security & privacy"
              description="We take security and compliance seriously. Krixum is SOC 2 Type II and GDPR compliant, trusted by thousands of businesses to build secure and compliant AI Agents."
            />
            <div className="flex flex-row gap-3 sm:gap-4 pt-4">
              {badges.map((badge) => (
                <div
                  key={badge.alt}
                  className={`aspect-square w-[60px] sm:w-[75px] md:w-[100px] bg-gradient-to-br ${badge.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className="text-center">
                    <div className="font-bold text-xs sm:text-sm">{badge.title}</div>
                    <div className="text-xs opacity-90">{badge.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex-1 rounded-3xl border border-zinc-200 bg-background flex flex-col gap-0 shadow-sm">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`relative flex w-full flex-col gap-3 overflow-hidden border-border ${idx < features.length - 1 ? "border-b" : ""} p-6 sm:p-8 group hover:bg-muted/20 transition-colors`}
              >
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="w-4/5 sm:w-3/5 lg:w-[70%] text-muted-foreground leading-relaxed">{feature.description}</p>
                
                {/* Custom Icon Illustrations */}
                <div className="absolute -bottom-3 sm:-bottom-6 right-2 sm:right-4 lg:right-8 w-[80px] sm:w-[100px] lg:w-[132px] h-auto">
                  {feature.icon === "database" && (
                    <div className={`w-full aspect-square bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <svg className="w-1/2 h-1/2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    </div>
                  )}
                  {feature.icon === "lock" && (
                    <div className={`w-full aspect-square bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <svg className="w-1/2 h-1/2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <circle cx="12" cy="16" r="1"></circle>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                  )}
                  {feature.icon === "cube" && (
                    <div className={`w-full aspect-square bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      <svg className="w-1/2 h-1/2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
