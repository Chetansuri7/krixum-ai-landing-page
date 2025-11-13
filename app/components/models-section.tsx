import { Link } from "react-router";
import { SectionHeader } from "~/components/ui/section-header";

type Category = {
  name: string;
  status: "Live" | "Soon" | "Phase 2";
  model: "Booking Partner" | "Platform Provider" | "Discovery Partner";
  description: string;
  actions: string[];
  providers: string[];
};

function CategoryCard({ item }: { item: Category }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
            {item.model}
          </div>
          <h3 className="mt-2 text-xl font-bold text-foreground">{item.name}</h3>
        </div>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-muted text-foreground/80">
          {item.status}
        </span>
      </div>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>

      <ul className="mt-4 space-y-2">
        {item.actions.map((a) => (
          <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>{a}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.providers.map((p) => (
          <span key={p} className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ModelsSection() {
  const live: Category[] = [
    {
      name: "Rides & Taxis",
      status: "Live",
      model: "Booking Partner",
      description:
        "Compare ETAs and options from multiple ride apps in one view. Book instantly through the partner flow.",
      actions: [
        "See ETAs side‑by‑side",
        "Choose bike, auto, or cab",
        "Book in seconds",
      ],
      providers: ["Ola", "Uber", "Rapido", "Namma Yatri"],
    },
    {
      name: "Home Services",
      status: "Live",
      model: "Platform Provider",
      description:
        "Verified local professionals with escrow protection. No exposed phone numbers, clear communication in‑app.",
      actions: [
        "Browse verified pros",
        "Upfront details and slots",
        "Escrow‑backed booking",
      ],
      providers: ["Urban Company", "Local verified"],
    },
  ];

  const coming: Category[] = [
    {
      name: "Quick Commerce",
      status: "Soon",
      model: "Discovery Partner",
      description:
        "See delivery times and availability across quick‑commerce apps. Tap to complete the order on your preferred app.",
      actions: [
        "One search for items",
        "Compare delivery times",
        "Tap to continue in app",
      ],
      providers: ["Blinkit", "Zepto", "Swiggy Instamart"],
    },
    {
      name: "Food Delivery",
      status: "Phase 2",
      model: "Discovery Partner",
      description:
        "Find restaurants, compare delivery times and charges, then order on the partner app.",
      actions: [
        "See restaurants in one place",
        "Compare delivery estimates",
        "Order via partner app",
      ],
      providers: ["Swiggy", "Zomato"],
    },
  ];

  return (
    <section id="categories" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          badge="Service Categories"
          title="All your local needs in one place"
          description="We go deep, category by category — starting in Bangalore. Compare options in one view and book with protection where available."
        />

        {/* Live Today */}
        <div className="space-y-4">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Live today</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {live.map((item) => (
              <CategoryCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Coming Next */}
        <div className="space-y-4">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Coming next</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coming.map((item) => (
              <CategoryCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href="https://chat.krixum.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-sm"
          >
            Start searching
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <button
            onClick={() => {
              const element = document.getElementById('how-it-works');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/70"
          >
            See how it works
          </button>
        </div>

        {/* City note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Starting in Bangalore</span> — more cities coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
