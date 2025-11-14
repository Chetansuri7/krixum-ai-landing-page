import { SectionHeader } from "~/components/ui/section-header";

export function SmartBookingSection() {
  return (
    <section id="smart-booking" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="w-full">
        <SectionHeader
          title="Stop juggling apps. Start booking smarter."
          description="Search once, compare clearly, and book with protection — all in one place."
          className="mb-4"
        />

        <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Old Way */}
            <div className="rounded-2xl border border-border p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">The old way</h4>
                <span className="px-2 py-1 rounded-full border border-border text-xs text-muted-foreground">9 min wasted</span>
              </div>

              <ul className="space-y-2.5 flex-1">
                {[
                  "Open Ola — check price",
                  "Open Uber — check price",
                  "Open Rapido — check price",
                  "Open Namma Yatri — check price",
                ].map((text) => (
                  <li key={text} className="flex items-center justify-between p-2.5 rounded-lg bg-background border border-border">
                    <div className="flex items-center gap-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-muted-foreground/40"></span>
                      <div className="font-medium text-sm">{text}</div>
                    </div>
                    <div className="text-xs font-medium text-muted-foreground">2 min</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Krixum */}
            <div className="rounded-2xl border border-border p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-lg">With Krixum</h4>
                <span className="px-2 py-1 rounded-full border border-border text-xs text-muted-foreground">30 sec total</span>
              </div>

              <ul className="space-y-2.5">
                {[
                  { title: "Rapido (bike)", eta: "2 min away", price: "₹380", best: true },
                  { title: "Namma Yatri", eta: "4 min away", price: "₹420" },
                  { title: "Ola", eta: "5 min away", price: "₹450" },
                  { title: "Uber", eta: "3 min away", price: "₹480" },
                ].map((item) => (
                  <li key={item.title} className="flex items-center justify-between p-2.5 rounded-lg bg-background border border-border">
                    <div>
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.eta}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.best && (
                        <span className="text-xs font-semibold text-primary">Best priced</span>
                      )}
                      <div className="text-sm font-semibold">{item.price}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-center text-sm text-muted-foreground">
                One app. All services. Zero hassle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
