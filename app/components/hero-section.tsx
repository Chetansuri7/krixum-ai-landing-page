import { Sparkles, ArrowRight, Search, ShieldCheck, LayoutGrid, TrendingUp, Clock, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[100px] opacity-30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              <span>The Future of Service Search</span>
            </div>

            {/* Headline */}
            <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              One Search. <br />
              <span className="bg-gradient-to-r from-primary via-orange-500 to-amber-500 bg-clip-text text-transparent">
                All Options.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-pretty text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Stop switching apps. Krixum finds the best prices for rides, services, and delivery across all providers in seconds. Save time and money with every search.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-white bg-gradient-to-r from-primary to-orange-600 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-105 hover:from-primary/90 hover:to-orange-600/90 transition-all duration-200"
              >
                Start Searching
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-foreground bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
              >
                See How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span>Verified Providers</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual/Mockup */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Main Card */}
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-orange-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    <Search className="w-3 h-3" />
                    <span>Krixum Search</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold">Ride to Airport</h3>
                <p className="text-white/80 text-sm">Finding best options...</p>
              </div>

              {/* Results List */}
              <div className="p-4 space-y-3 bg-gray-50/50 min-h-[300px]">
                {/* Best Option */}
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-primary/20 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
                  <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">BEST PRICE</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-sm">NY</div>
                      <div>
                        <div className="font-bold text-gray-900">Namma Yatri</div>
                        <div className="text-xs text-gray-500">Auto • 3 min away</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-primary">₹440</div>
                    </div>
                  </div>
                </div>

                {/* Other Options */}
                <div className="bg-white p-3 rounded-xl border border-gray-100 opacity-75 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-bold text-xs">O</div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Ola</div>
                      <div className="text-xs text-gray-500">Mini • 5 min</div>
                    </div>
                  </div>
                  <div className="font-bold text-gray-700">₹450</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-100 opacity-75 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-xs">U</div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Uber</div>
                      <div className="text-xs text-gray-500">Go • 4 min</div>
                    </div>
                  </div>
                  <div className="font-bold text-gray-700">₹480</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-gray-100 opacity-75 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-xs">R</div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">Rapido</div>
                      <div className="text-xs text-gray-500">Cab • 8 min</div>
                    </div>
                  </div>
                  <div className="font-bold text-gray-700">₹460</div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-4 bg-white border-t border-gray-100">
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors">
                  Book Namma Yatri for ₹440
                </button>
              </div>
            </div>

            {/* Background Blob behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-3xl -z-10 transform scale-90"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
