import { useState } from "react";
import { Play, Pause } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Build & deploy your agent",
    description:
      "Train an agent on your business data, configure the actions it can take, then deploy it for your customers.",
    videoSrc:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/build-and-deploy.webm",
    poster:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/build-and-deploy-thumbnail.png",
  },
  {
    id: 2,
    title: "Agent solves your customers' problems",
    description:
      "The agent will answer questions and access external systems to gather data and take actions.",
    videoSrc:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/agent-responds.webm",
    poster:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/video-thumbnail.png",
  },
  {
    id: 3,
    title: "Refine & optimize",
    description: "This ensures your agent is improving over time.",
    videoSrc:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/refine-and-optimize.webm",
    poster:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/video-thumbnail.png",
  },
  {
    id: 4,
    title: "Route complex issues to a human",
    description:
      "Seamlessly escalate certain queries to human agents when the AI agent is unable to solve the problem or when issues require human review.",
    videoSrc:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/route-complex-issues.webm",
    poster:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/video-thumbnail.png",
  },
  {
    id: 5,
    title: "Review analytics & insights",
    description:
      "Since the agent is talking with customers all day, it's able to gather important insights and analytics about your customers & business.",
    videoSrc:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/how-it-works/review-analytics.webm",
    poster:
      "https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/video-thumbnail.png",
  },
];

import { SectionHeader } from "~/components/ui/section-header";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-16">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          badge="How it works"
          title="An end-to-end solution for conversational AI"
          description="With Krixum, your customers can effortlessly find answers, resolve issues, and take meaningful actions through seamless and engaging AI-driven conversations."
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
                      <span
                        className={`font-medium text-base lg:text-lg transition-colors duration-300 ${
                          activeStep === step.id
                            ? "bg-gradient-to-r from-[#FB923C] to-[#F472B6] bg-clip-text text-transparent"
                            : "text-zinc-400"
                        }`}
                      >
                        {step.id.toString().padStart(2, "0")}.
                      </span>
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

          {/* Desktop Video */}
          <div className="hidden lg:block">
            <div className="relative my-8 lg:my-12 aspect-[0.939] w-full">
              <div className="absolute inset-0 flex aspect-[0.939] w-full items-center justify-center">
                <div className="aspect-[0.939] w-full rounded-2xl p-3">
                  <div className="group relative aspect-[0.939] w-full overflow-hidden rounded-3xl">
                    <div
                      className="aspect-[0.939] w-full rounded-3xl bg-gradient-to-br from-orange-400 via-pink-400 to-fuchsia-400 flex items-center justify-center"
                    >
                      <span className="text-white font-semibold text-base lg:text-lg">Gradient Placeholder (Video)</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="absolute bottom-4 left-4 rounded-full bg-black/25 p-2 opacity-90 transition-opacity lg:p-3 group-hover:opacity-100"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      <svg
                        aria-label="video progress"
                        role="img"
                        className="-rotate-90 absolute top-0 left-0 h-full w-full"
                        viewBox="0 0 32 32"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="14.8"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.3"
                          strokeDasharray="94.2"
                          strokeDashoffset="42.7197"
                          className="opacity-90"
                        />
                      </svg>
                      {isPlaying ? (
                        <Pause className="relative h-4 w-4 lg:h-6 lg:w-6 text-white fill-white" />
                      ) : (
                        <Play className="relative h-4 w-4 lg:h-6 lg:w-6 text-white fill-white" />
                      )}
                    </button>
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
                  className="w-full rounded-3xl border bg-background shadow-sm"
                >
                  <div className="aspect-[0.939] w-full rounded-3xl bg-background p-3 sm:p-4">
                    <div className="group relative aspect-[0.939] w-full overflow-hidden rounded-3xl">
                      <div
                        className="aspect-[0.939] w-full rounded-3xl bg-gradient-to-br from-orange-400 via-pink-400 to-fuchsia-400 flex items-center justify-center"
                      >
                        <span className="text-white font-semibold text-sm sm:text-base lg:text-lg">Gradient Placeholder (Video)</span>
                      </div>
                      <button
                        type="button"
                        className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-full bg-black/25 p-2 opacity-90 transition-opacity group-hover:opacity-100"
                        aria-label="Play video"
                      >
                        <svg
                          aria-label="video progress"
                          role="img"
                          className="-rotate-90 absolute top-0 left-0 h-full w-full"
                          viewBox="0 0 32 32"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="14.8"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.3"
                            strokeDasharray="94.2"
                            strokeDashoffset="94.2"
                            className="opacity-90"
                          />
                        </svg>
                        <Play className="relative h-4 w-4 text-white fill-white" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-xl sm:text-2xl bg-gradient-to-r from-[#FB923C] to-[#F472B6] bg-clip-text text-transparent">
                        {step.id.toString().padStart(2, "0")}.
                      </span>
                      <h3 className="font-semibold text-lg text-foreground leading-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
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
