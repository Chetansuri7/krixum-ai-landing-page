

export function CtaSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-6 sm:p-8 lg:p-12">
          {/* Enhanced Background Pattern */}
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern id="cta-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <pattern id="cta-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white" opacity="0.4"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#cta-grid)" />
              <rect width="100" height="100" fill="url(#cta-dots)" />
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute top-20 right-16 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-16 left-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-10 right-10 w-8 h-8 bg-white/10 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-medium">Join Early Access</span>
              </div>
            </div>

            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Ready to stop wasting time?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
              Join thousands of Bangalore residents who search, compare, and book
              local services in seconds. Save time and energy, and book with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Start Searching
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% free for users</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Payment protection on every booking</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No app switching</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
