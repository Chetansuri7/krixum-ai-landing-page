import { ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contact" className="relative py-16 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] opacity-40 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] opacity-30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-x-2 sm:inset-x-6 top-4 bottom-4 rounded-[3rem] bg-gradient-to-b from-black/10 via-primary/5 to-transparent blur-3xl opacity-70 -z-10"></div>
        <div className="relative z-10 rounded-3xl bg-white border border-gray-100 ring-1 ring-black/5 overflow-hidden">
          {/* Decorative top gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-orange-500 to-amber-500"></div>

          <div className="px-6 py-12 sm:px-16 sm:py-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Ready to simplify your life?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Stop searching. <br className="hidden sm:block" /> Start finding.
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Join thousands of users who save time and money by comparing every ride, service, and delivery in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-white bg-gradient-to-r from-primary to-orange-600 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-105 hover:from-primary/90 hover:to-orange-600/90 transition-all duration-200"
              >
                Start Searching
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-foreground bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200"
              >
                Partner with Us
              </a>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              No credit card required for users. Free forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
