import {
  CreditCard,
  Play,
  Sparkles,
  Zap,
  Brain,
  MessageSquare,
  Star,
  Cpu,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { useHeroContent } from "~/lib/content-context";

// Custom Krixum Logo Component using theme colors
function KrixumLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 32 32" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="14" fill="url(#logoGradient)" />
        <path
          d="M12 10 L20 16 L12 22 Z"
          fill="hsl(var(--primary-foreground))"
          opacity="0.9"
        />
        <circle
          cx="22"
          cy="10"
          r="2"
          fill="hsl(var(--primary-foreground))"
          opacity="0.7"
        />
        <circle
          cx="10"
          cy="22"
          r="1.5"
          fill="hsl(var(--primary-foreground))"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

// Floating AI Model Icons using theme colors
function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* GPT Icon */}
      <div
        className="absolute top-20 left-10 animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      >
        <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center shadow-lg backdrop-blur-sm">
          <Brain className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Claude Icon */}
      <div
        className="absolute top-32 right-16 animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      >
        <div className="w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center shadow-lg backdrop-blur-sm">
          <Sparkles className="w-5 h-5 text-accent-foreground" />
        </div>
      </div>

      {/* Gemini Icon */}
      <div
        className="absolute bottom-32 left-20 animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "3s" }}
      >
        <div className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center shadow-lg backdrop-blur-sm">
          <Zap className="w-4 h-4 text-secondary-foreground" />
        </div>
      </div>

      {/* Llama Icon */}
      <div
        className="absolute bottom-20 right-12 animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3s" }}
      >
        <div className="w-14 h-14 rounded-full bg-muted/80 border border-border flex items-center justify-center shadow-lg backdrop-blur-sm">
          <MessageSquare className="w-7 h-7 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const heroContent = useHeroContent();

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Pattern using theme colors */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--secondary))_0%,transparent_50%)] opacity-5"></div>
      </div>

      {/* Gradient Orbs using theme colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-8 z-10">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3 mb-4">
              <KrixumLogo className="w-12 h-12" />
              <span className="text-2xl font-bold text-primary">Krixum AI</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                All AI Models. One Platform.
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
              <span className="text-foreground">The Future of</span>
              <br />
              <span className="text-primary">AI Conversations</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed lg:text-2xl max-w-2xl">
              Access ChatGPT, Claude, Gemini, and Llama in one unified
              interface.
              <span className="font-semibold text-foreground">
                {" "}
                Switch models instantly
              </span>
              , preserve context, and maintain complete privacy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center mt-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <Button
                  asChild
                  size="lg"
                  className="relative h-14 px-8 text-lg font-semibold bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300 rounded-xl border-0"
                >
                  <a
                    href="https://chat.krixum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Start Free Trial
                  </a>
                </Button>
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-lg font-semibold rounded-xl border-2 hover:bg-accent transition-all duration-300"
              >
                <a
                  href="#demo"
                  className="flex items-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("features")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <Play className="w-5 h-5" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                No credit card required
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {heroContent.trustCount}
                </span>{" "}
                users worldwide
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Model Selector Demo */}
          <div className="relative lg:pl-8">
            <FloatingIcons />

            {/* Main Demo Container */}
            <div className="relative group">
              {/* Glow Effect using theme colors */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Demo Interface */}
              <div className="relative bg-card/90 backdrop-blur-xl rounded-3xl border border-border shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Krixum AI
                    </span>
                  </div>
                </div>

                {/* Main Content Area - Increased Height for Full Model List */}
                <div className="p-4 sm:p-6 space-y-4 h-[580px] sm:h-[620px] flex flex-col justify-start items-center pt-6 sm:pt-8">
                  {/* Title */}
                  <div className="text-center space-y-2 px-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                      Start a conversation with our AI
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Choose your preferred AI model and begin chatting
                    </p>
                  </div>

                  {/* Model Selector Interface */}
                  <div className="relative w-full max-w-sm sm:max-w-md px-4 sm:px-0">
                    {/* Input Field */}
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full p-4 pr-12 bg-background border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        disabled
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                          <Play className="w-3 h-3 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Model Selector Buttons */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      {/* Model Dropdown Button */}
                      <div className="relative">
                        <button className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-xl hover:bg-accent transition-colors">
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-primary-foreground" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            GPT-5
                          </span>
                          <svg
                            className="w-4 h-4 text-muted-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Dropdown Menu - Full Model List Visible */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 w-80 sm:w-72 bg-card border border-border rounded-xl shadow-xl z-10 overflow-hidden animate-fade-in-scale">
                          {/* GPT-5 */}
                          <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer border-l-2 border-primary">
                            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                              <Star className="w-3.5 h-3.5 text-primary-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-foreground text-sm">
                                GPT-5
                              </div>
                              <div className="text-xs text-muted-foreground truncate">
                                OpenAI's next-generation model
                              </div>
                            </div>
                          </div>

                          {/* Gemini Pro 2.5 */}
                          <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer">
                            <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center">
                              <Zap className="w-3.5 h-3.5 text-accent-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-foreground text-sm">
                                Gemini Pro 2.5
                              </div>
                              <div className="text-xs text-muted-foreground truncate">
                                Google's advanced multimodal AI
                              </div>
                            </div>
                          </div>

                          {/* Claude Sonnet 4.0 */}
                          <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer">
                            <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center">
                              <Sparkles className="w-3.5 h-3.5 text-secondary-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-foreground text-sm">
                                Claude Sonnet 4.0
                              </div>
                              <div className="text-xs text-muted-foreground truncate">
                                Anthropic's reasoning powerhouse
                              </div>
                            </div>
                          </div>

                          {/* DeepSeek V3 */}
                          <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer">
                            <div className="w-7 h-7 bg-muted border border-border rounded-full flex items-center justify-center">
                              <Brain className="w-3.5 h-3.5 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-foreground text-sm">
                                DeepSeek V3
                              </div>
                              <div className="text-xs text-muted-foreground truncate">
                                Advanced reasoning & coding
                              </div>
                            </div>
                          </div>

                          {/* GPT-OSS-120B */}
                          <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer">
                            <div className="w-7 h-7 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center">
                              <Cpu className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-foreground text-sm">
                                GPT-OSS-120B
                              </div>
                              <div className="text-xs text-muted-foreground truncate">
                                Open-source 120B parameter model
                              </div>
                            </div>
                          </div>

                          {/* More Models */}
                          <div className="border-t border-border p-2.5">
                            <div className="text-center">
                              <span className="text-xs text-muted-foreground">
                                + 20 more cutting-edge models
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Controls - Hidden on small screens for cleaner mobile view */}
                      <button className="hidden sm:block p-2 bg-background border border-border rounded-xl hover:bg-accent transition-colors">
                        <svg
                          className="w-5 h-5 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>

                      <button className="hidden sm:block p-2 bg-background border border-border rounded-xl hover:bg-accent transition-colors">
                        <svg
                          className="w-5 h-5 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Quick Start Options */}
                    <div className="mt-4 sm:mt-6 space-y-2">
                      <p className="text-xs text-muted-foreground text-center">
                        Quick start:
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center px-2">
                        <button className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors">
                          Write code
                        </button>
                        <button className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors">
                          Analyze data
                        </button>
                        <button className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors">
                          Creative writing
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Trusted by teams at
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-80 transition-opacity">
            {[
              { name: "Microsoft", logo: "M" },
              { name: "Google", logo: "G" },
              { name: "Meta", logo: "M" },
              { name: "Netflix", logo: "N" },
              { name: "Spotify", logo: "S" },
              { name: "Uber", logo: "U" },
            ].map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/30"
              >
                <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-muted-foreground">
                    {company.logo}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
