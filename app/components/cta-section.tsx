

export function CtaSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-12"
    >
      <div className="w-full">
        <div className="rounded-2xl border border-border bg-muted p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to level up local bookings?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">
                Search once. Compare clearly. Book with protection.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                Start Searching
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-background"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
