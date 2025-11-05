
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <pattern
                id="hero-grid"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 4 0 L 0 0 0 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Conversations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12">
              Access ChatGPT, Claude, Gemini, and Llama in one unified interface.
              <br className="hidden sm:block" />
              Switch models instantly, preserve context, and maintain complete
              privacy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-16">
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-2xl hover:shadow-3xl hover:scale-105 group cursor-pointer"
              >
                Start Free Trial
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              <button
                onClick={() => {
                  const element = document.getElementById('pricing');
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-foreground bg-background/50 backdrop-blur-sm border border-border rounded-xl hover:bg-background/80 transition-all duration-200 shadow-lg hover:shadow-xl group cursor-pointer"
              >
                View Pricing
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
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
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-background"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-background"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-background"></div>
                </div>
                <span>50,000+ users worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Column - Product Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
            {/* Browser Window */}
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-lg px-3 py-1 text-xs text-muted-foreground">
                    krixum.com
                  </div>
                </div>
              </div>

              {/* Chat Interface Preview */}
              <div className="w-full aspect-auto sm:aspect-[5/4] lg:aspect-[3/3] bg-gradient-to-br from-background to-muted/20 p-4 sm:p-6 flex flex-col justify-start lg:justify-center items-center min-h-[500px] sm:min-h-[600px]">
                {/* Title */}
                <div className="text-center space-y-1 mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    Choose your AI model
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Select from 25+ leading AI models
                  </p>
                </div>

                {/* Model Selector Interface */}
                <div className="w-full max-w-xs sm:max-w-sm space-y-3 px-2 sm:px-0">
                  {/* Input Field */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="w-full p-2.5 sm:p-3 pr-9 sm:pr-10 bg-background border border-border rounded-lg sm:rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-xs sm:text-sm"
                      disabled
                    />
                    <div className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-md flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Model Dropdown */}
                  <div className="relative">
                    <button className="w-full flex items-center justify-between p-2.5 sm:p-3 bg-background border border-border rounded-lg sm:rounded-xl hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary rounded-full flex items-center justify-center">
                          <svg
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-foreground">
                          GPT-5
                        </span>
                      </div>
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground"
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

                    {/* Dropdown Menu */}
                    <div
                      className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-xl z-10 overflow-hidden max-h-[60vh] sm:max-h-[calc(100vh-200px)] overflow-y-auto"
                      role="listbox"
                    >
                      {/* GPT-5 */}
                      <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer border-l-2 border-primary">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-primary-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground text-sm">
                            GPT-5
                          </div>
                          <div className="text-xs text-muted-foreground">
                            OpenAI's latest model
                          </div>
                        </div>
                      </div>

                      {/* Claude Sonnet 4.0 */}
                      <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground text-sm">
                            Claude Sonnet 4.0
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Anthropic's reasoning model
                          </div>
                        </div>
                      </div>

                      {/* Gemini Pro 2.5 */}
                      <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground text-sm">
                            Gemini Pro 2.5
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Google's multimodal AI
                          </div>
                        </div>
                      </div>

                      {/* DeepSeek V3 */}
                      <div className="flex items-center gap-3 p-2.5 hover:bg-accent transition-colors cursor-pointer">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground text-sm">
                            DeepSeek V3
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Advanced reasoning model
                          </div>
                        </div>
                      </div>

                      {/* More Models */}
                      <div className="border-t border-border p-2.5 bg-muted/20">
                        <div className="text-center">
                          <span className="text-xs text-muted-foreground">
                            + 21 more models available
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-4 space-y-1">
                  <p className="text-xs text-muted-foreground text-center">
                    Quick start:
                  </p>
                  <div className="flex gap-2 justify-center">
                    <button className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors cursor-pointer" aria-label="Quick start: Write code">
                      Write code
                    </button>
                    <button className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors cursor-pointer" aria-label="Quick start: Analyze data">
                      Analyze data
                    </button>
                    <button className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors cursor-pointer" aria-label="Quick start: Creative writing">
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
    </section>
  );
}
