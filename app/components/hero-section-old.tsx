
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
              Search once.
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Book anything.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12">
              Compare taxis, home services, quick commerce, and local providers in one place.
              <br className="hidden sm:block" />
              Book with payment protection. AI-powered or traditional search.
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
                <span>100,000+ successful bookings</span>
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

              {/* Search & Booking Interface Preview */}
              <div className="w-full aspect-auto sm:aspect-[5/4] lg:aspect-[3/3] bg-gradient-to-br from-background to-muted/20 p-4 sm:p-6 flex flex-col justify-start lg:justify-center items-center min-h-[500px] sm:min-h-[600px]">
                {/* Title */}
                <div className="text-center space-y-1 mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    Search and compare instantly
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    One search. All providers. Best prices.
                  </p>
                </div>

                {/* Search Interface */}
                <div className="w-full max-w-xs sm:max-w-sm space-y-3 px-2 sm:px-0">
                  {/* Search Input */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="I need a taxi to the airport..."
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
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="space-y-2">
                    {/* Result 1 - Rapido (Cheapest) */}
                    <div className="flex items-center gap-3 p-2.5 bg-background border border-primary/30 rounded-lg sm:rounded-xl hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">R</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground text-xs sm:text-sm">Rapido</span>
                          <span className="text-xs bg-green-500/20 text-green-600 px-1.5 py-0.5 rounded">Best Price</span>
                        </div>
                        <div className="text-xs text-muted-foreground">2 min away</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground text-sm">₹180</div>
                        <div className="text-xs text-green-600">Save ₹300</div>
                      </div>
                    </div>

                    {/* Result 2 - Namma Yatri */}
                    <div className="flex items-center gap-3 p-2.5 bg-background border border-border rounded-lg sm:rounded-xl hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">N</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground text-xs sm:text-sm">Namma Yatri</div>
                        <div className="text-xs text-muted-foreground">4 min away</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground text-sm">₹420</div>
                      </div>
                    </div>

                    {/* Result 3 - Ola */}
                    <div className="flex items-center gap-3 p-2.5 bg-background border border-border rounded-lg sm:rounded-xl hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">O</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground text-xs sm:text-sm">Ola</div>
                        <div className="text-xs text-muted-foreground">5 min away</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground text-sm">₹450</div>
                      </div>
                    </div>

                    {/* Result 4 - Uber */}
                    <div className="flex items-center gap-3 p-2.5 bg-background border border-border rounded-lg sm:rounded-xl hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">U</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground text-xs sm:text-sm">Uber</div>
                        <div className="text-xs text-muted-foreground">3 min away</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground text-sm">₹480</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Protection Badge */}
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>All bookings protected with escrow</span>
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
