import { Link } from "react-router";
import { SectionHeader } from "~/components/ui/section-header";

export function FeaturesSection() {
  const pillars = [
    {
      label: "Search",
      title: "One search. All options.",
      body:
        "See big brands and verified local providers together with real‑time availability.",
      bullets: [
        "All providers in one place",
        "Live ETAs and availability",
        "Ratings and reviews at a glance",
      ],
    },
    {
      label: "Compare",
      title: "Clear, side‑by‑side choices.",
      body:
        "Decide faster with transparent information — no juggling between multiple apps.",
      bullets: [
        "Side‑by‑side options",
        "Coverage across categories",
        "No app switching",
      ],
    },
    {
      label: "Book",
      title: "Protected from start to finish.",
      body:
        "Payments held in escrow until you confirm service completion. Help when you need it.",
      bullets: [
        "Escrow‑backed payments",
        "Verified providers",
        "Issue resolution support",
      ],
    },
  ];

  const capabilities = [
    {
      title: "Big brands + local pros",
      description: "Find Ola, Uber, Urban Company and trusted local providers together.",
    },
    {
      title: "Real‑time ETAs",
      description: "Stay informed with up‑to‑date provider availability.",
    },
    {
      title: "Escrow protection",
      description: "Payment released only after you confirm service completion.",
    },
    {
      title: "One profile, one history",
      description: "All your bookings in one place across categories.",
    },
    {
      title: "Use app or ask AI",
      description: "Browse traditionally or book via AI (MCP‑compatible).",
    },
    {
      title: "Fast support",
      description: "Help when you need it and simple issue resolution.",
    },
  ];

  return (
    <section
      id="features"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-12 lg:py-16"
    >
      <div className="flex flex-col gap-12 w-full">
        <SectionHeader
          title="What Krixum does for you"
          description="Search once, compare clearly, and book with protection — without app juggling."
        />

        {/* Three Pillars */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {pillars.map((item, index) => (
            <div
              key={item.title}
              className="relative bg-card border border-border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                {item.label}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{item.body}</p>
              <ul className="space-y-2">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What You Can Do */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{cap.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-8">
          <div className="relative bg-muted/50 border border-border rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Ready to stop wasting time on multiple apps?
                </h3>
                <p className="text-lg text-muted-foreground">
                  Join thousands who've already switched to smarter booking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/features"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all"
                >
                  Explore Features
                </Link>
                <Link
                  to="/benefits"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-border px-6 py-3 text-sm font-semibold text-foreground bg-background hover:bg-accent transition-all"
                >
                  See Benefits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
