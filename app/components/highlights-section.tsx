import { SectionHeader } from "~/components/ui/section-header";

export function HighlightsSection() {
  return (
    <section id="highlights" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          badge="Highlights"
          title="The complete platform for AI support agents"
          description="Krixum is designed for building AI support agents that solve your customers' hardest problems while improving business outcomes."
        />
        
        <div className="grid gap-6 pt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Purpose-built for LLMs */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-square w-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">Purpose-built for LLMs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced language models with sophisticated reasoning capabilities for handling complex queries and delivering intelligent responses.
              </p>
            </div>
          </div>

          {/* Designed for simplicity */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">Designed for simplicity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Intuitive interface that makes AI accessible to everyone. Create, manage, and deploy AI agents without technical expertise.
              </p>
            </div>
          </div>

          {/* Engineered for security */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">Engineered for security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade security with end-to-end encryption, compliance standards, and robust data protection protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}