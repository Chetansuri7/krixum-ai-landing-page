import { SectionHeader } from "~/components/ui/section-header";
import { X, Check } from "lucide-react";

export function HighlightsSection() {
  const useCases = [
    {
      query: "I need a taxi to the airport",
      before: {
        title: "The old way",
        steps: [
          { text: "Open Ola, check price", time: "2 min", icon: "🚕" },
          { text: "Open Uber, check price", time: "2 min", icon: "🚗" },
          { text: "Open Rapido, check price", time: "2 min", icon: "🏍️" },
          { text: "Open Namma Yatri, check", time: "2 min", icon: "🛺" },
          { text: "Remember prices, compare", time: "1 min", icon: "🤔" },
        ],
        total: "9 min wasted",
        result: "Confused & frustrated",
        color: "red",
      },
      after: {
        title: "With Krixum",
        steps: [
          { text: "Search once", time: "5 sec", icon: "🔍" },
          { text: "See all 4 options", time: "5 sec", icon: "📊" },
          { text: "Pick and book", time: "20 sec", icon: "✅" },
        ],
        total: "30 sec total",
        result: "Done. Easy.",
        color: "green",
      },
    },
    {
      query: "I need a plumber today",
      before: {
        title: "The old way",
        steps: [
          { text: "Google random numbers", time: "3 min", icon: "🔍" },
          { text: "Call 5 people, 2 don't answer", time: "10 min", icon: "📞" },
          { text: "Get 3 different quotes", time: "5 min", icon: "💭" },
          { text: "Pick one, hope for best", time: "2 min", icon: "🎲" },
        ],
        total: "20 min wasted",
        result: "No guarantee",
        color: "red",
      },
      after: {
        title: "With Krixum",
        steps: [
          { text: "Search verified plumbers", time: "10 sec", icon: "🔍" },
          { text: "Compare ratings & prices", time: "20 sec", icon: "⭐" },
          { text: "Book with escrow", time: "30 sec", icon: "🛡️" },
        ],
        total: "1 min total",
        result: "100% protected",
        color: "green",
      },
    },
    {
      query: "Quick groceries delivered",
      before: {
        title: "The old way",
        steps: [
          { text: "Check App 1", time: "2 min", icon: "🛒" },
          { text: "Check App 2", time: "2 min", icon: "⚡" },
          { text: "Check App 3", time: "2 min", icon: "🍕" },
          { text: "Check App 4", time: "1 min", icon: "🏪" },
        ],
        total: "7 min wasted",
        result: "Finally ordered",
        color: "red",
      },
      after: {
        title: "With Krixum",
        steps: [
          { text: "One search", time: "5 sec", icon: "🔍" },
          { text: "Compare options & ETAs", time: "10 sec", icon: "📊" },
          { text: "Order instantly", time: "15 sec", icon: "✅" },
        ],
        total: "30 sec total",
        result: "Ordered. Done.",
        color: "green",
      },
    },
  ];

  return (
    <section id="highlights" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
      <div className="flex flex-col gap-12 w-full">
        <SectionHeader
          badge="Real Examples"
          title="Stop wasting time. Start booking smarter."
          description="See how Krixum eliminates the hassle of app juggling."
        />

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Query Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
                  <span className="text-lg">💭</span>
                  <span className="font-semibold text-base">"{useCase.query}"</span>
                </div>
              </div>

              {/* Comparison Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* BEFORE */}
                <div className="relative">
                  <div className="bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col">
                    {/* Header */}
                    <div className="p-4 bg-red-50 dark:bg-red-950/10 border-b border-red-200/70 dark:border-red-900/40 text-red-700 dark:text-red-300">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold flex items-center gap-2">
                          <X className="w-4 h-4" />
                          {useCase.before.title}
                        </h3>
                        <div className="bg-white/60 dark:bg-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
                          {useCase.before.total}
                        </div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="p-4 space-y-2.5 flex-1">
                      {useCase.before.steps.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="flex items-center gap-3 p-2.5 bg-muted/50 rounded-xl"
                        >
                          <span className="text-xl">{step.icon}</span>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">{step.text}</div>
                          </div>
                          <div className="text-xs font-semibold text-muted-foreground bg-background px-2 py-1 rounded-md">
                            {step.time}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-red-50 dark:bg-red-950/10 border-t border-red-200/70 dark:border-red-900/40">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Result:</span>
                        <span className="text-sm font-semibold text-red-600 dark:text-red-400">{useCase.before.result}</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating X badge */}
                  <div className="absolute -top-3 -right-3 w-9 h-9 bg-red-100 text-red-700 border border-red-200 rounded-full flex items-center justify-center shadow-md">
                    <X className="w-5 h-5" />
                  </div>
                </div>

                {/* AFTER */}
                <div className="relative">
                  <div className="bg-card border border-border rounded-3xl overflow-hidden h-full flex flex-col">
                    {/* Header */}
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/10 border-b border-emerald-200/70 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-semibold flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          {useCase.after.title}
                        </h3>
                        <div className="bg-white/60 dark:bg-white/10 px-2 py-0.5 rounded-full text-xs font-medium">
                          {useCase.after.total}
                        </div>
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="p-4 space-y-2.5 flex-1">
                      {useCase.after.steps.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="flex items-center gap-3 p-2.5 bg-muted/50 rounded-xl"
                        >
                          <span className="text-xl">{step.icon}</span>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">{step.text}</div>
                          </div>
                          <div className="text-xs font-semibold text-muted-foreground bg-background px-2 py-1 rounded-md">
                            {step.time}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/10 border-t border-emerald-200 dark:border-emerald-900/30 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Result:</span>
                        <span className="text-sm font-semibold text-emerald-700">{useCase.after.result}</span>
                      </div>
                      {/* No extra highlight chip to keep equal heights */}
                    </div>
                  </div>

                  {/* Floating Check badge */}
                  <div className="absolute -top-3 -right-3 w-9 h-9 bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full flex items-center justify-center shadow-md">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Removed connecting arrow for cleaner layout */}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-muted rounded-2xl border border-border">
            <div className="text-3xl font-bold text-primary mb-1.5">30 sec</div>
            <div className="text-sm text-muted-foreground">Average booking time</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-2xl border border-border">
            <div className="text-3xl font-bold text-primary mb-1.5">1 app</div>
            <div className="text-sm text-muted-foreground">For all your services</div>
          </div>
          <div className="text-center p-6 bg-muted rounded-2xl border border-border">
            <div className="text-3xl font-bold text-primary mb-1.5">100%</div>
            <div className="text-sm text-muted-foreground">Bookings protected with escrow</div>
          </div>
        </div>
      </div>
    </section>
  );
}
