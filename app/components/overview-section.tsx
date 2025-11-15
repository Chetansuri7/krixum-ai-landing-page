import { SectionHeader } from "~/components/ui/section-header";

export function OverviewSection() {
  return (
    <section id="overview" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          title="See what one AI booking agent unlocks"
          description="Krixum’s agentic platform orchestrates rides, deliveries, and local services end to end while you review the outcomes."
        />

        {/* Two cards with images, inline within Overview */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="flex-1 p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Let the AI agent surface the best ride in seconds
                </h3>

                <div className="space-y-4">
                  {[
                    "One request triggers Uber, Ola, Rapido, and Namma Yatri at once.",
                    "See fares, surge multipliers, ETAs, and safety scores update together.",
                    "Use smart filters for payment type, comfort level, or provider reputation.",
                    "Tap approve and the agent completes the booking in your chosen app.",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="mt-1.5 flex-shrink-0" aria-hidden="true">
                        <defs>
                          <linearGradient id={`overview_bullet_1_${i}`} x1="0" y1="6" x2="12" y2="6" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="var(--chart-1)" />
                          </linearGradient>
                        </defs>
                        <circle cx="6" cy="6" r="6" fill={`url(#overview_bullet_1_${i})`} />
                      </svg>
                      <p className="text-base sm:text-lg text-foreground/80">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="https://chat.krixum.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm"
                  >
                    <span>Launch the AI agent</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3 2.5a1 1 0 0 1 1.52-.85l12.5 9a1 1 0 0 1 0 1.7l-12.5 9A1 1 0 0 1 3 20.5z" />
                      <path d="M20 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z" />
                    </svg>
                  </a>
                </div>
              </div>

              <figure className="md:w-[40%] lg:w-[38%] flex items-center justify-center p-8 bg-muted/30">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-w-[520px] lg:max-w-[600px]"
                  src="/ai-ride-agent.svg"
                  alt="AI agent surfacing the best ride options"
                  width={500}
                  height={500}
                  title="AI Ride Agent"
                />
              </figure>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="flex-1 p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  AI matchmaker for home-service providers
                </h3>

                <div className="space-y-4">
                  {[
                    "Describe the job once—your agent pulls quotes from every connected marketplace.",
                    "Compare pricing, slots, and ratings in one AI-curated view.",
                    "Approve and auto-fill the partner handoff without retyping details.",
                    "Let the agent track follow-ups, visits, and completion in one timeline.",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="mt-1.5 flex-shrink-0" aria-hidden="true">
                        <defs>
                          <linearGradient id={`overview_bullet_2_${i}`} x1="0" y1="6" x2="12" y2="6" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="var(--chart-1)" />
                          </linearGradient>
                        </defs>
                        <circle cx="6" cy="6" r="6" fill={`url(#overview_bullet_2_${i})`} />
                      </svg>
                      <p className="text-base sm:text-lg text-foreground/80">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href="https://chat.krixum.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-fit px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium shadow-sm"
                  >
                    <span>Launch the AI agent</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3 2.5a1 1 0 0 1 1.52-.85l12.5 9a1 1 0 0 1 0 1.7l-12.5 9A1 1 0 0 1 3 20.5z" />
                      <path d="M20 5a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1z" />
                    </svg>
                  </a>
                </div>
              </div>

              <figure className="md:w-[40%] lg:w-[38%] flex items-center justify-center p-8 bg-muted/30">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-w-[520px] lg:max-w-[600px]"
                  src="/home-service-matchmaker.svg"
                  alt="AI matchmaker for home-service providers"
                  width={600}
                  height={600}
                  title="Home Service Matchmaker"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
