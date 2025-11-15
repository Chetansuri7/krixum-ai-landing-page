type Step = {
  text: string;
  time?: string;
  icon?: string;
};

type ComparisonProps = {
  before: {
    title: string;
    steps: Step[];
    total?: string;
    result?: string;
  };
  after: {
    title: string;
    steps: Step[];
    total?: string;
    result?: string;
  };
};

// Old vs New comparison cards styled to match the reference design
export function OldNewComparison({ before, after }: ComparisonProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Old Way */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
        <div className="p-3 bg-destructive/5 border-b border-destructive/20">
          <h3 className="text-center text-base font-semibold leading-tight text-destructive">{before.title}</h3>
        </div>

        <ul role="list" className="p-4 space-y-3">
          {before.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <img src="/icons/x-circle.svg" alt="Cross icon" className="mt-1 w-6 h-6 flex-shrink-0" />
              <p className="paragraph-33 text-sm text-foreground/90 flex-1">{step.text}</p>
              {step.time && (
                <span className="text-sm font-semibold text-destructive/70 border border-destructive/30 rounded-md px-2.5 py-1">{step.time}</span>
              )}
            </li>
          ))}
        </ul>

      </div>

      {/* New Way - Enhanced */}
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-2 border-green-300 dark:border-green-700 rounded-2xl overflow-hidden flex flex-col shadow-lg">
        <div className="p-3 bg-green-100 dark:bg-green-900/50 border-b-2 border-green-300 dark:border-green-700">
          <h3 className="text-center text-base font-bold leading-tight text-green-700 dark:text-green-400">{after.title}</h3>
        </div>

        <ul role="list" className="p-4 space-y-3">
          {after.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <img src="/icons/check-circle.svg" alt="Tick icon" className="mt-1 w-6 h-6 flex-shrink-0" />
              <p className="paragraph-33 text-sm font-medium text-foreground/90 flex-1">{step.text}</p>
              {step.time && (
                <span className="text-sm font-bold text-green-700 dark:text-green-400 bg-white dark:bg-green-950/50 border-2 border-green-400 dark:border-green-600 rounded-md px-2.5 py-1">{step.time}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OldNewComparison;
