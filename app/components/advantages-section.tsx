import { Link } from "react-router";

import { SectionHeader } from "~/components/ui/section-header";

export function AdvantagesSection() {
  return (
    <section
      id="benefits"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-12 lg:py-16"
    >
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          title="Why choose Krixum's AI agents?"
          description="Let an agentic platform plan, compare, and book every service while you stay focused on what matters."
        />

        {/* Main Feature Box */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:items-stretch p-8 md:p-12">
            {/* Image Side */}
            <div className="order-2 md:order-1">
              <div className="w-full h-full mx-auto md:max-w-sm lg:max-w-md">
                <div className="rounded-2xl bg-card border border-foreground/20 overflow-hidden">
                  {/* Mock browser header */}
                  <div className="flex items-center gap-3 px-4 py-2 border-b border-foreground/20 bg-muted/40">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400/80 dark:bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-400/80 dark:bg-yellow-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-green-400/80 dark:bg-green-500/80"></span>
                    </div>
                    <div className="flex-1">
                      <div className="h-8 rounded-md bg-background border border-foreground/15 px-3 flex items-center text-muted-foreground text-sm">
                        krixum.com
                      </div>
                    </div>
                  </div>

                  {/* Mock content area */}
                  <div className="p-4 md:p-6 bg-background">
                    <div className="relative h-[360px] md:h-[420px] w-full">
                      <img
                        src="/usability-testing-pana.svg"
                        alt="Usability testing illustration"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 md:order-2 flex h-full flex-col gap-6 md:justify-between">
              <div className="md:hidden">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  One AI platform for every service booking
                </h3>
              </div>

              <div className="hidden md:block">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  One AI platform for every service booking
                </h3>
              </div>

              <ul className="space-y-5">
                {[
                  "One AI platform for every service.",
                  "One request, every provider surfaced instantly.",
                  "AI compares prices, ETAs, and ratings side by side.",
                  "Confirm the best option in seconds—no app juggling.",
                  "Rides, deliveries, services—one agentic flow.",
                  "Every booking tracked automatically in one timeline.",
                ].map((text, index) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                        <circle cx="11.5" cy="11.5654" r="11.5" fill={`url(#paint0_linear_theme_1_${index})`} />
                        <path d="M9.8691 13.3085C9.9575 13.1999 10.001 13.1367 10.054 13.0832C11.6625 11.4732 13.2695 9.86212 14.8851 8.25966C15.0215 8.12427 15.2064 8.00504 15.3898 7.95654C15.7328 7.86561 16.0733 8.05354 16.2441 8.36777C16.4103 8.67341 16.3633 9.02552 16.1102 9.29075C15.9011 9.50949 15.6838 9.72016 15.4701 9.93436C13.8252 11.5793 12.1803 13.2241 10.5354 14.8685C10.0873 15.3166 9.67813 15.3171 9.23256 14.8716C8.46164 14.1007 7.68769 13.3318 6.9198 12.5578C6.44998 12.0844 6.63791 11.3534 7.27091 11.1857C7.58867 11.1013 7.84935 11.218 8.07365 11.4439C8.62482 11.9981 9.17951 12.5487 9.73017 13.1034C9.77867 13.1519 9.80898 13.2186 9.86859 13.309L9.8691 13.3085Z" fill="white" />
                        <defs>
                          <linearGradient id={`paint0_linear_theme_1_${index}`} x1="0" y1="11.5654" x2="23" y2="11.5654" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--primary)" />
                            <stop offset="1" stopColor="var(--chart-1)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-foreground/80">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to="https://chat.krixum.com/"
                  className="global_btn inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <span>Try the AI Agent</span>
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="global_btn_icon inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                  </svg>
                  <span>Talk with an Expert</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
