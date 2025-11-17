import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge removed per request */}

            {/* Main Headline */}
            <div className="space-y-4 mx-auto lg:mx-0 max-w-[720px]">
              <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  AI-Powered Search Engine That Completes Your Tasks
                </span>
              </h1>
              {/* Clarifying text */}
              <p className="text-base sm:text-lg font-semibold text-foreground">
                One place, all providers. We find the best options in seconds.
              </p>
              <p className="text-pretty text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[720px] mx-auto lg:mx-0">
                Tell Krixum what you need. Our AI surfaces options and prices across apps, compares them side-by-side, and books with payment protection—or browse and compare yourself in one place.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">1 search</div>
                <div className="text-sm text-muted-foreground">Find all options</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">1 app</div>
                <div className="text-sm text-muted-foreground">No app switching</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border"></div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">Protected</div>
                <div className="text-sm text-muted-foreground">Payment protection</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 text-base font-semibold text-white bg-primary rounded-xl shadow-sm hover:bg-primary/90"
              >
                <span className="flex items-center gap-2">
                  Start Searching Free
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>

              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex items-center justify-center h-12 px-6 text-base font-semibold text-foreground bg-background border border-border rounded-xl hover:bg-muted"
              >
                See How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm pt-4">
              <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 border border-green-300 dark:border-green-700 px-3 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium text-green-700 dark:text-green-400">100% Free to use</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-700 px-3 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium text-blue-700 dark:text-blue-400">Payment protected</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile App Mockup (desktop only) */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Floating card - All Options */}
              <div className="absolute -top-4 -left-4 z-20 bg-green-600 text-white rounded-2xl p-4 shadow-2xl animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium opacity-90">Options found</div>
                    <div className="text-2xl font-bold">4 apps</div>
                  </div>
                </div>
              </div>

              {/* Floating card - One Search */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-primary text-primary-foreground rounded-2xl p-4 shadow-2xl animate-float hidden sm:block" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium opacity-90">One search</div>
                    <div className="text-2xl font-bold">All options</div>
                  </div>
                </div>
              </div>

              {/* Main Phone Mockup */}
              <div className="relative z-10">
                {/* Phone Frame */}
                <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-background px-6 py-3 flex items-center justify-between text-xs">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                        </svg>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                        </svg>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 py-3 border-b border-border bg-background">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-bold">Krixum</h2>
                        <div className="w-8 h-8 rounded-full bg-primary"></div>
                      </div>
                      {/* Search Bar */}
                      <div className="relative">
                        <input
                          type="text"
                          value="Taxi to airport"
                          className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border rounded-xl text-sm font-medium"
                          readOnly
                        />
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Results List */}
                    <div className="p-4 space-y-3 overflow-y-auto" style={{ maxHeight: 'calc(100% - 120px)' }}>
                      {/* Result 1 - Best Priced */}
                      <div className="relative p-4 bg-primary/10 border-2 border-primary rounded-2xl shadow-sm">
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                          BEST PRICED
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-sm">R</span>
                            </div>
                            <div>
                              <div className="font-bold text-sm">Rapido</div>
                              <div className="text-xs text-muted-foreground">Bike • 2 min away</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-primary">₹380</div>
                            <div className="text-xs text-primary font-medium">Best priced</div>
                          </div>
                        </div>
                      </div>

                      {/* Result 2 */}
                      <div className="p-4 bg-card border border-border rounded-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-sm">N</span>
                            </div>
                            <div>
                              <div className="font-bold text-sm">Namma Yatri</div>
                              <div className="text-xs text-muted-foreground">Auto • 4 min away</div>
                            </div>
                          </div>
                          <div className="text-xl font-bold">₹420</div>
                        </div>
                      </div>

                      {/* Result 3 */}
                      <div className="p-4 bg-card border border-border rounded-2xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-sm">O</span>
                            </div>
                            <div>
                              <div className="font-bold text-sm">Ola</div>
                              <div className="text-xs text-muted-foreground">Cab • 5 min away</div>
                            </div>
                          </div>
                          <div className="text-xl font-bold">₹450</div>
                        </div>
                      </div>

                      {/* Result 4 */}
                      <div className="p-4 bg-card border border-border rounded-2xl opacity-75">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-sm">U</span>
                            </div>
                            <div>
                              <div className="font-bold text-sm">Uber</div>
                              <div className="text-xs text-muted-foreground">Cab • 3 min away</div>
                            </div>
                          </div>
                          <div className="text-xl font-bold">₹480</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
