import { Link } from "react-router";
import { SectionHeader } from "~/components/ui/section-header";

type Pillar = {
  label: string;
  title: string;
  body: string;
  bullets: string[];
};

type Category = {
  name: string;
  status: "Live" | "Soon" | "Phase 2";
  model: "Booking Partner" | "Platform Provider" | "Discovery Partner";
  description: string;
  bullets: string[];
  providers: string[];
};

function PillarCard({ item }: { item: Pillar }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="mb-2 inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
        {item.label}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-1.5">{item.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{item.body}</p>
      <ul className="space-y-1.5">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CategoryCard({ item }: { item: Category }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 h-full">
      <div className="flex items-start justify-between">
        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
          {item.model}
        </div>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-muted text-foreground/80">
          {item.status}
        </span>
      </div>
      <h4 className="mt-2 text-base font-bold text-foreground">{item.name}</h4>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      <ul className="mt-3 space-y-1.5">
        {item.bullets.map((b) => (
          <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.providers.map((p) => (
          <span key={p} className="text-xs px-2 py-1 rounded-full border border-border text-muted-foreground">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OverviewSection() {
  const pillars: Pillar[] = [
    {
      label: "Search",
      title: "One search. All options.",
      body: "See big brands and verified local providers together with real‑time availability.",
      bullets: ["All providers in one place", "Live ETAs and availability"],
    },
    {
      label: "Compare",
      title: "Clear, side‑by‑side choices.",
      body: "Decide faster with transparent information — no app switching.",
      bullets: ["Side‑by‑side options", "Coverage across categories"],
    },
    {
      label: "Book",
      title: "Protected from start to finish.",
      body: "Payments held in escrow until you confirm service completion.",
      bullets: ["Escrow‑backed payments", "Verified providers"],
    },
  ];

  const capabilities: string[] = [
    "Side‑by‑side options",
    "Real‑time ETAs",
    "Escrow protection",
    "Verified providers",
    "Use app or ask AI",
    "One profile & history",
  ];

  const categories: Category[] = [
    {
      name: "Rides & Taxis",
      status: "Live",
      model: "Booking Partner",
      description:
        "Compare ETAs and options from multiple ride apps in one view. Book instantly through the partner flow.",
      bullets: ["See ETAs side‑by‑side", "Choose bike, auto, or cab"],
      providers: ["Ola", "Uber", "Rapido", "Namma Yatri"],
    },
    {
      name: "Home Services",
      status: "Live",
      model: "Platform Provider",
      description:
        "Verified local professionals with escrow protection. No exposed phone numbers, clear communication in‑app.",
      bullets: ["Browse verified pros", "Escrow‑backed booking"],
      providers: ["Urban Company", "Local verified"],
    },
  ];

  return (
    <section id="overview" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          badge="Overview"
          title="What Krixum does — and where it works"
          description="Search once, compare clearly, and book with protection. We go deep, category by category — starting in Bangalore."
        />

        {/* One Search — full row */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="mb-2 inline-flex items-center gap-2 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
            Search
          </div>
          <h3 className="text-xl font-bold text-foreground mb-1.5">{pillars[0].title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{pillars[0].body}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {pillars[0].bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities — single row on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {capabilities.map((c) => (
            <div key={c} className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-sm font-medium text-foreground">{c}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Categories only */}
        <div className="space-y-4">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Live today in Bangalore</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.filter((c) => c.status === "Live").map((c) => (
              <CategoryCard key={c.name} item={c} />
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-3">
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
              const el = document.getElementById('how-it-works');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/70"
          >
            See how it works
          </button>
        </div>

        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Starting in Bangalore</span> — more cities coming soon
        </div>
      </div>
    </section>
  );
}
