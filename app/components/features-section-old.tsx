import { Link } from "react-router";

import { SectionHeader } from "~/components/ui/section-header";
import {
  MessageSquare,
  FileText,
  Shield,
  Lightbulb,
  Users,
  BarChart3,
  CheckCircle,
} from "lucide-react";

export function FeaturesSection() {
  const mainFeatures = [
    {
      title: "Unified Chat Interface",
      description:
        "Access all AI models through one clean, intuitive interface. No need to switch between different platforms.",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Single login", "Consistent UI", "No context switching"],
    },
    {
      title: "Context Preservation",
      description:
        "Switch between models without losing your conversation context. Your chat history stays intact.",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      benefits: ["Seamless switching", "History intact", "No data loss"],
    },
    {
      title: "Privacy First",
      description:
        "Your conversations are private and secure. We don't store or analyze your personal data.",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      benefits: ["End-to-end encryption", "No data mining", "GDPR compliant"],
    },
  ];

  const additionalFeatures = [
    {
      title: "Smart Model Selection",
      description:
        "Get AI-powered recommendations on which model to use for your specific task.",
      icon: Lightbulb,
      stats: "95% accuracy",
    },
    {
      title: "Real-time Collaboration",
      description:
        "Share conversations and collaborate with your team across different AI models.",
      icon: Users,
      stats: "Team sync",
    },
    {
      title: "Advanced Analytics",
      description:
        "Track usage, costs, and performance to optimize your AI workflow.",
      icon: BarChart3,
      stats: "Deep insights",
    },
  ];

  return (
    <section
      id="features"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8"
    >
      <div className="flex flex-col gap-6 w-full">
        <SectionHeader
          badge="Features"
          title="Everything you need in one place"
          description="Powerful features designed to enhance your AI experience, streamline workflows, and boost productivity — all in a beautifully unified interface."
        />

        {/* Main Features - Hero Cards */}
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-3 rounded-3xl transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Title with inline icon */}
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 pt-2">
                    {feature.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More (Optional)
                  <div className="pt-4">
                    <button className="group/btn flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium cursor-pointer">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  */}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features - Compact Cards */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="space-y-3">
                  {/* Title with inline icon and stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            to="/features"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Explore all platform features
          </Link>
          <Link
            to="/advantages"
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/70"
          >
            See business outcomes
          </Link>
        </div>
      </div>
    </section>
  );
}
