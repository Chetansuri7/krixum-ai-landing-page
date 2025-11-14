import { SectionHeader } from "~/components/ui/section-header";

export function HighlightsSection() {
  return (
    <section id="highlights" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          title="See how Krixum saves time and money"
          description="Real queries. Real savings. Every day."
        />

        <div className="grid gap-6 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Use Case 1 - Taxi Comparison */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-square w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="grid-taxi" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid-taxi)" />
                </svg>
              </div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">"Taxi to airport"</h3>
                <span className="text-xs font-semibold bg-green-500/20 text-green-600 px-2 py-1 rounded-full">Saved ₹300</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="line-through opacity-50">Before: Check 4 apps manually (8 min)</span><br/>
                <span className="font-medium text-foreground">With Krixum: One search, instant comparison (30 sec)</span>
              </p>
              <div className="text-xs text-primary font-medium">Found Rapido for ₹180 vs Uber ₹480</div>
            </div>
          </div>

          {/* Use Case 2 - Home Services */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-square w-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
                  <circle cx="50" cy="30" r="1.5" fill="currentColor" opacity="0.4"/>
                  <circle cx="80" cy="25" r="1" fill="currentColor" opacity="0.5"/>
                  <circle cx="30" cy="60" r="1.5" fill="currentColor" opacity="0.3"/>
                  <circle cx="70" cy="70" r="2" fill="currentColor" opacity="0.4"/>
                </svg>
              </div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">"Need plumber today"</h3>
                <span className="text-xs font-semibold bg-blue-500/20 text-blue-600 px-2 py-1 rounded-full">Protected</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="line-through opacity-50">Before: Google random numbers, call 5 people, hope for best</span><br/>
                <span className="font-medium text-foreground">With Krixum: Compare verified providers, book with escrow</span>
              </p>
              <div className="text-xs text-primary font-medium">Payment held until work confirmed</div>
            </div>
          </div>

          {/* Use Case 3 - Quick Commerce */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="aspect-square w-full bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-950/20 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                  <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                </svg>
              </div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">"Paper clips delivered fast"</h3>
                <span className="text-xs font-semibold bg-purple-500/20 text-purple-600 px-2 py-1 rounded-full">Saved 5 min</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="line-through opacity-50">Before: Check Blinkit, Zepto, Swiggy, BBNow separately</span><br/>
                <span className="font-medium text-foreground">With Krixum: See all results, prices, delivery times instantly</span>
              </p>
              <div className="text-xs text-primary font-medium">Coming soon: Direct ordering through Krixum</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
