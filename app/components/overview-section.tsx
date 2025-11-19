import { SectionHeader } from "~/components/ui/section-header";
import { ArrowRight } from "lucide-react";

export function OverviewSection() {
  return (
    <section id="overview" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-10 lg:py-14">
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          title="How Krixum Works"
          description="We bridge the gap between searching for a service and actually getting it done."
        />

        {/* Two cards with images, inline within Overview */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="ms-card">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="flex-1 p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Search once, see every ride option
                </h3>

                <div className="space-y-4">
                  {[
                    "Type 'ride to airport' and see results from Uber, Ola, Rapido, and more.",
                    "Compare fares, surge pricing, and ETAs side-by-side in real time.",
                    "Filter by price, comfort, or speed to find exactly what you need.",
                    "Book directly or get deep-linked to the provider app to finish.",
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
                    <span>Start Searching</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <figure className="md:w-[40%] lg:w-[38%] flex items-center justify-center p-8 bg-muted/30 ms-card__media">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-w-[520px] lg:max-w-[600px]"
                  src="/ai-ride-agent.svg"
                  alt="Comparing ride options"
                  width={500}
                  height={500}
                  title="Ride Comparison"
                />
              </figure>
            </div>
          </div>

          {/* Card 2 */}
          <div className="ms-card">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="flex-1 p-8 md:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Find and book trusted local pros
                </h3>

                <div className="space-y-4">
                  {[
                    "Search for 'plumber', 'cleaner', or 'electrician' in your area.",
                    "See verified providers with real ratings and transparent pricing.",
                    "Request quotes or book instantly with platform protection.",
                    "We handle the details so you can get the job done without the hassle.",
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
                    <span>Start Searching</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <figure className="md:w-[40%] lg:w-[38%] flex items-center justify-center p-8 bg-muted/30 ms-card__media">
                <img
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-w-[520px] lg:max-w-[600px]"
                  src="/home-service-matchmaker.svg"
                  alt="Finding local professionals"
                  width={600}
                  height={600}
                  title="Local Pros"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
