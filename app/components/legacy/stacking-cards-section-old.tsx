type CardProps = {
  title: string;
  points: string[];
  cta?: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    title: string;
  };
};

const CARDS: CardProps[] = [
  {
    title: "Stop Wasting Time on App Juggling",
    points: [
      "The old way: 9 minutes wasted checking Ola, Uber, Rapido & Namma Yatri separately",
      "With Krixum: Search once, see all 4 options in just 30 seconds",
      "Compare prices, ETAs & ratings side-by-side instantly",
      "Book the best option with one tap — no more confusion",
    ],
    cta: { label: "Try Now", href: "https://chat.krixum.com/" },
    image: {
      src: "/booking-engine.svg",
      alt: "Krixum comparison illustration",
      width: 1510,
      height: 1573,
      title: "Booking Engine",
    },
  },
  {
    title: "One API • 100+ Hotel Suppliers",
    points: [
      "Access global suppliers, GDS, bed banks & local providers",
      "< 500ms performance overhead for seamless experiences",
      "Eliminate multiple integrations — cut integration & infra costs",
      "Buy & sell globally via integrated marketplace",
    ],
    cta: { label: "Read More", href: "#" },
    image: {
      src: "/booking-engine.svg",
      alt: "Hotel suppliers illustration",
      width: 1510,
      height: 1573,
      title: "Hotel Suppliers",
    },
  },
];

export function StackingCardsSection() {
  return (
    <section id="stacking-cards" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 lg:py-20">
      <div className="ue_cards_wrapper uc-items-wrapper space-y-6">
        {CARDS.map((card, idx) => (
          <div
            key={idx}
            className="ue_stacking_card_item w-full sticky"
            style={{ top: `${80 + idx * 40}px` }}
            data-source="normal"
            data-id=""
          >
            <div className="ue_card_content bg-card border border-border rounded-2xl overflow-hidden transition-colors hover:border-primary/30">
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="ue_content_left flex-1 p-8 md:p-10 lg:p-12">
                  <div className="ue_sc_title mb-6">
                    <span className="font_big text-gradient d-inline text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {card.title}
                    </span>
                  </div>

                  <div className="ue_sc_desc mb-6">
                    <div className="main_stats space-y-4">
                      {card.points.map((text, i) => (
                        <div key={i} className="main_icon-text flex items-start gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            className="mt-1.5 flex-shrink-0"
                            aria-hidden="true"
                          >
                            <defs>
                              <linearGradient id={`bullet_grad_${idx}_${i}`} x1="0" y1="6" x2="12" y2="6" gradientUnits="userSpaceOnUse">
                                <stop stopColor="var(--primary)" />
                                <stop offset="1" stopColor="var(--chart-1)" />
                              </linearGradient>
                            </defs>
                            <circle cx="6" cy="6" r="6" fill={`url(#bullet_grad_${idx}_${i})`} />
                          </svg>
                          <p className="text-base sm:text-lg text-foreground/80">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {card.cta && (
                    <a href={card.cta.href} className="ue_sc_button uc_button none inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl border border-border bg-card hover:bg-muted transition-colors text-sm font-medium">
                      <span>{card.cta.label}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>
                  )}
                </div>

                <figure className="md:w-[40%] lg:w-[38%] flex items-center justify-center p-8 bg-muted/30">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="ue_sc_img w-full h-auto object-contain max-w-[520px] lg:max-w-[600px]"
                    src={card.image.src}
                    alt={card.image.alt}
                    width={card.image.width}
                    height={card.image.height}
                    title={card.image.title}
                  />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StackingCardsSection;
