import { SectionHeader } from "~/components/ui/section-header";
import { OldNewComparison } from "~/components/old-new-comparison";

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
          title="Real booking journeys, side by side"
          description="Follow three everyday requests—rides, repairs, and groceries—and see how Krixum collapses the steps."
        />

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              {/* Query Header (left-aligned) */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-card rounded-full w-fit">
                  <span className="font-semibold text-base">"{useCase.query}"</span>
                </div>
              </div>

              {/* Old vs New stylized comparison */}
              <OldNewComparison
                before={{
                  title: useCase.before.title,
                  steps: useCase.before.steps,
                  total: useCase.before.total,
                  result: useCase.before.result,
                }}
                after={{
                  title: useCase.after.title,
                  steps: useCase.after.steps,
                  total: useCase.after.total,
                  result: useCase.after.result,
                }}
                images={{
                  old: { src: "/booking-engine.svg", alt: "Comparison illustration" },
                  newer: { src: "/booking-engine.svg", alt: "Comparison illustration" },
                }}
              />
            </div>
          ))}
        </div>

        {/* Summary Stats (left-aligned) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-muted rounded-2xl border border-border">
            <div className="text-3xl font-bold text-primary mb-1.5">30 sec</div>
            <div className="text-sm text-muted-foreground">Average booking time</div>
          </div>
          <div className="p-6 bg-muted rounded-2xl border border-border">
            <div className="text-3xl font-bold text-primary mb-1.5">1 app</div>
            <div className="text-sm text-muted-foreground">For all your services</div>
          </div>
          <div className="p-6 bg-muted rounded-2xl border border-border">
            <div className="text-3xl font-bold text-primary mb-1.5">24/7</div>
            <div className="text-sm text-muted-foreground">Provider status synced in one place</div>
          </div>
        </div>
      </div>
    </section>
  );
}
