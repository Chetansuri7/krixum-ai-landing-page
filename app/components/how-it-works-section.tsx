import { useState } from "react";
import { Play, Pause } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search once, see all options",
    description:
      "Enter what you need - a taxi, plumber, or groceries. We instantly show you all available providers with real-time pricing, ratings, and availability.",
    icon: "🔍",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 2,
    title: "Compare and choose",
    description:
      "See side-by-side comparisons of all providers - big brands like Ola, Uber AND local verified providers. Transparent pricing, no surprises.",
    icon: "⚖️",
    color: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    title: "Book with protection",
    description:
      "For platform bookings, your payment is held in escrow until service is confirmed. For partner bookings, we facilitate and protect your transaction.",
    icon: "🛡️",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: 4,
    title: "Service delivered, you confirm",
    description:
      "Provider completes the service. You confirm completion through the app. Only then is payment released. Bad service? Full refund or free replacement.",
    icon: "✅",
    color: "from-orange-400 to-red-500"
  },
];

import { SectionHeader } from "~/components/ui/section-header";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="how-it-works" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          title="Every booking finishes in five focused steps"
          description="From the first prompt to the final confirmation, Krixum handles comparison, handoff, and tracking in one flow."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Desktop Interactive Steps */}
          <div className="hidden self-center lg:block">
            <div className="flex items-center justify-start">
              <div className="flex w-full max-w-[530px] flex-col gap-2">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full rounded-3xl p-6 text-left transition-all duration-300 ${
                      activeStep === step.id
                        ? "border border-zinc-200 bg-background opacity-100 shadow-sm"
                        : "bg-transparent opacity-60"
                    }`}
                  >
                    <div className="flex items-start gap-3 lg:gap-4">
                      <span className="text-2xl">{step.icon}</span>
                      <div className="flex-1">
                        <h3
                          className={`font-medium text-base lg:text-lg transition-colors duration-300 ${
                            activeStep === step.id
                              ? "text-foreground"
                              : "text-zinc-400"
                          }`}
                        >
                          {step.title}
                        </h3>
                        {activeStep === step.id && (
                          <p className="text-muted-foreground mt-2 text-sm lg:text-base">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Visual */}
          <div className="hidden lg:block">
            <div className="relative my-8 lg:my-12 aspect-[0.939] w-full">
              <div className="absolute inset-0 flex aspect-[0.939] w-full items-center justify-center">
                <div className="aspect-[0.939] w-full rounded-2xl p-3">
                  <div className="group relative aspect-[0.939] w-full overflow-hidden rounded-3xl">
                    <div className={`aspect-[0.939] w-full rounded-3xl bg-gradient-to-br ${steps.find(s => s.id === activeStep)?.color || 'from-orange-400 to-pink-500'} flex items-center justify-center relative overflow-hidden transition-all duration-500`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <defs>
                            <pattern id="dots-hiw" width="10" height="10" patternUnits="userSpaceOnUse">
                              <circle cx="5" cy="5" r="1" fill="white" opacity="0.3"/>
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill="url(#dots-hiw)" />
                        </svg>
                      </div>
                      {/* Icon Display */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-9xl mb-6 animate-float">
                            {steps.find(s => s.id === activeStep)?.icon}
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 max-w-md mx-auto">
                            <span className="text-white font-semibold text-lg block mb-2">
                              Step {activeStep}
                            </span>
                            <span className="text-white/90 text-sm">
                              {steps.find(s => s.id === activeStep)?.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile and Tablet Cards */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="w-full rounded-3xl border bg-background shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[0.939] w-full rounded-3xl bg-background p-3 sm:p-4">
                    <div className="group relative aspect-[0.939] w-full overflow-hidden rounded-3xl">
                      <div className={`aspect-[0.939] w-full rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center relative overflow-hidden`}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <svg className="w-full h-full" viewBox="0 0 100 100">
                            <defs>
                              <pattern id={`dots-mobile-${step.id}`} width="8" height="8" patternUnits="userSpaceOnUse">
                                <circle cx="4" cy="4" r="0.8" fill="white" opacity="0.4"/>
                              </pattern>
                            </defs>
                            <rect width="100" height="100" fill={`url(#dots-mobile-${step.id})`} />
                          </svg>
                        </div>
                        {/* Icon Display */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-7xl mb-4">
                              {step.icon}
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                              <span className="text-white font-medium text-sm">
                                Step {step.id}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <h3 className="font-semibold text-lg text-foreground leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
