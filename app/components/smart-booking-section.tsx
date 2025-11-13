import { X, Check } from "lucide-react";
import { SectionHeader } from "~/components/ui/section-header";

export function SmartBookingSection() {
  return (
    <section id="smart-booking" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8">
      <div className="w-full">
        <SectionHeader
          badge="Smart Booking"
          title="Stop juggling apps. Start booking smarter."
          description="Search once, compare clearly, and book with protection — all in one place."
          className="mb-4"
        />

        <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Old Way */}
            <div className="bg-red-50 dark:bg-red-950/10 border border-red-200/70 dark:border-red-900/40 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-red-100 text-red-700 border border-red-200 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">The Old Way</h4>
                  <p className="text-sm text-muted-foreground">App juggling nightmare</p>
                </div>
              </div>

              <ul className="space-y-2.5 flex-1">
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚕</span>
                    <div>
                      <div className="font-medium text-sm">Open Ola — check price</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">2 min</div>
                </li>
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚗</span>
                    <div>
                      <div className="font-medium text-sm">Open Uber — check price</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">2 min</div>
                </li>
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏍️</span>
                    <div>
                      <div className="font-medium text-sm">Open Rapido — check price</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">2 min</div>
                </li>
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🛺</span>
                    <div>
                      <div className="font-medium text-sm">Open Namma Yatri — check price</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">2 min</div>
                </li>
              </ul>
            </div>

            {/* With Krixum */}
            <div className="bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-200/70 dark:border-emerald-900/40 rounded-2xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">With Krixum</h4>
                  <p className="text-sm text-muted-foreground">Simple, fast, done</p>
                </div>
              </div>

              <ul className="space-y-2.5">
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-sm">Rapido (bike)</div>
                      <div className="text-xs text-muted-foreground">2 min away</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">₹180</div>
                </li>
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-sm">Namma Yatri</div>
                      <div className="text-xs text-muted-foreground">4 min away</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">₹420</div>
                </li>
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-sm">Ola</div>
                      <div className="text-xs text-muted-foreground">5 min away</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">₹450</div>
                </li>
                <li className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium text-sm">Uber</div>
                      <div className="text-xs text-muted-foreground">3 min away</div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">₹480</div>
                </li>
              </ul>

              <div className="mt-4 bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl px-4 py-2.5 text-center font-semibold">
                🎯 One app. All services. Zero hassle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
