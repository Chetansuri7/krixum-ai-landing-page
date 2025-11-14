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
  images?: {
    old?: { src: string; alt?: string };
    newer?: { src: string; alt?: string };
  };
};

// Old vs New comparison cards styled to match the reference design
export function OldNewComparison({ before, after, images }: ComparisonProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* Old Way */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
        <div className="p-2 bg-destructive/5 border-b border-destructive/20">
          <h3 className="text-center text-base font-semibold leading-tight">{before.title}</h3>
        </div>

        <ul role="list" className="p-3 space-y-2">
          {before.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <img src="/icons/x-circle.svg" alt="Cross icon" className="mt-1 w-6 h-6" />
              <p className="paragraph-33 text-sm text-foreground/90 flex-1">{step.text}</p>
              {step.time && (
                <span className="text-xs text-muted-foreground border border-border rounded-md px-2 py-0.5">{step.time}</span>
              )}
            </li>
          ))}
        </ul>

        {images?.old?.src && (
          <div className="px-3 pt-0 pb-3">
            <img
              src={images.old.src}
              alt={images.old.alt || "Old journey illustration"}
              className="block h-40 w-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* New Way */}
      <div className="relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col">
        <div className="p-2 bg-green-50 border-b border-green-200">
          <h3 className="text-center text-base font-semibold leading-tight">{after.title}</h3>
        </div>

        <ul role="list" className="p-3 space-y-2">
          {after.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <img src="/icons/check-circle.svg" alt="Tick icon" className="mt-1 w-6 h-6" />
              <p className="paragraph-33 text-sm text-foreground/90 flex-1">{step.text}</p>
              {step.time && (
                <span className="text-xs text-muted-foreground border border-border rounded-md px-2 py-0.5">{step.time}</span>
              )}
            </li>
          ))}
        </ul>

        {images?.newer?.src && (
          <div className="px-3 pt-0 pb-3">
            <img
              src={images.newer.src}
              alt={images.newer.alt || "New journey illustration"}
              className="block h-40 w-auto object-contain mx-auto"
              loading="lazy"
            />
          </div>
        )}

        {/* (shape removed for cleaner, tighter layout) */}
      </div>
    </div>
  );
}

export default OldNewComparison;
