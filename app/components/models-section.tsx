import { Link } from "react-router";

import { SectionHeader } from "~/components/ui/section-header";
import { Badge } from "~/components/ui/badge";
import { Sparkles, Crown, Rocket, Zap, Globe, Users } from "lucide-react";

// Company Logo Components
function OpenAILogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-black dark:bg-white rounded-lg flex items-center justify-center`}
    >
      <span className="text-white dark:text-black font-bold text-sm">AI</span>
    </div>
  );
}

function GoogleLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">G</span>
    </div>
  );
}

function AnthropicLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">A</span>
    </div>
  );
}

function MetaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">M</span>
    </div>
  );
}

function DeepSeekLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">DS</span>
    </div>
  );
}

function QwenLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">Q</span>
    </div>
  );
}



export function ModelsSection() {
  const providers = [
    {
      name: "OpenAI",
      logo: OpenAILogo,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Anthropic",
      logo: AnthropicLogo,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Google",
      logo: GoogleLogo,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Meta",
      logo: MetaLogo,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "DeepSeek",
      logo: DeepSeekLogo,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Qwen",
      logo: QwenLogo,
      color: "from-pink-500 to-purple-600"
    },
  ];

  return (
    <section
      id="models"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-6 sm:py-7 lg:py-8"
    >
      {/* White Card Container */}
      <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 w-full shadow-lg">
        <div className="grid lg:grid-cols-2 gap-7 lg:gap-8 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-6">
              {/* Badge */}
              <Badge variant="secondary" className="w-fit">
                <div className="mr-2 size-2 rounded-full bg-gradient-to-r from-[#FB923C] via-[#F472B6] to-[#E879F9]"></div>
                AI Providers
              </Badge>
              
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Top AI providers
                <br />
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  in one app
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access the world's leading AI models without switching platforms. One interface, endless possibilities.
              </p>
              
              {/* Feature Points */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">25+ AI Models</span> - Choose from leading providers
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Instant Switching</span> - Switch models in one chat
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Compare Responses</span> - Side-by-side comparisons
                  </p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://chat.krixum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  Get started
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <Link
                  to="/models"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/70"
                >
                  View supported models
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Static Logo Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {providers.map((provider, index) => {
                const LogoComponent = provider.logo;
                return (
                  <div
                    key={provider.name}
                    className="group bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:bg-background/80 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${provider.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <LogoComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {provider.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Additional Info */}
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">25+ AI models</span> from leading providers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
