import { SectionHeader } from "~/components/ui/section-header";

type ComparisonStep = {
  action: string;
  time: string;
};

type ComparisonData = {
  scenario: string;
  oldWay: {
    title: string;
    totalTime: string;
    steps: ComparisonStep[];
    result: string;
  };
  krixumWay: {
    title: string;
    totalTime: string;
    steps: ComparisonStep[];
    result: string;
  };
};

const COMPARISON: ComparisonData = {
  scenario: '"I need a taxi to the airport"',
  oldWay: {
    title: "The old way",
    totalTime: "9 min wasted",
    steps: [
      { action: "Open Ola, check price", time: "2 min" },
      { action: "Open Uber, check price", time: "2 min" },
      { action: "Open Rapido, check price", time: "2 min" },
      { action: "Open Namma Yatri, check", time: "2 min" },
      { action: "Remember prices, compare", time: "1 min" },
    ],
    result: "Confused & frustrated",
  },
  krixumWay: {
    title: "With Krixum",
    totalTime: "30 sec total",
    steps: [
      { action: "Search once", time: "5 sec" },
      { action: "See all 4 options", time: "5 sec" },
      { action: "Pick and book", time: "20 sec" },
    ],
    result: "Done. Easy.",
  },
};

export function StackingExamplesSection() {
  return (
    <section id="detailed-examples" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 lg:py-20">
      <div className="flex flex-col gap-12 w-full">
        <SectionHeader
          title="Stop wasting time. Start booking smarter."
          description="See how Krixum eliminates the hassle of app juggling."
        />

        {/* Scenario Title */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {COMPARISON.scenario}
          </h3>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* The Old Way */}
          <div className="bg-destructive/5 border-2 border-destructive/20 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl sm:text-2xl font-bold text-destructive">{COMPARISON.oldWay.title}</h4>
              <div className="bg-destructive/10 text-destructive px-4 py-2 rounded-xl font-bold text-sm">
                {COMPARISON.oldWay.totalTime}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {COMPARISON.oldWay.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-background/50 rounded-xl p-4 border border-destructive/10"
                >
                  <span className="text-foreground/80 text-sm sm:text-base">{step.action}</span>
                  <span className="text-destructive font-semibold text-sm ml-2">{step.time}</span>
                </div>
              ))}
            </div>

            <div className="bg-destructive/10 rounded-xl p-4 border-l-4 border-destructive">
              <p className="text-sm font-medium text-muted-foreground">Result:</p>
              <p className="text-lg font-bold text-destructive mt-1">{COMPARISON.oldWay.result}</p>
            </div>
          </div>

          {/* With Krixum */}
          <div className="bg-primary/5 border-2 border-primary/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>

            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl sm:text-2xl font-bold text-primary">{COMPARISON.krixumWay.title}</h4>
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl font-bold text-sm">
                {COMPARISON.krixumWay.totalTime}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {COMPARISON.krixumWay.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between bg-background/50 rounded-xl p-4 border border-primary/20"
                >
                  <span className="text-foreground/80 text-sm sm:text-base">{step.action}</span>
                  <span className="text-primary font-semibold text-sm ml-2">{step.time}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-xl p-4 border-l-4 border-primary">
              <p className="text-sm font-medium text-muted-foreground">Result:</p>
              <p className="text-lg font-bold text-primary mt-1">{COMPARISON.krixumWay.result}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StackingExamplesSection;
