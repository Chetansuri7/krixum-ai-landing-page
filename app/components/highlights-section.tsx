import { SectionHeader } from "~/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Check, X, Clock, Search, Zap, Shield, AlertCircle, Smartphone, Car, Home, Wrench, ShoppingCart, Utensils, Package, Hammer, Scissors, Truck, Sparkles, ArrowRight } from "lucide-react";

export function HighlightsSection() {
  const useCases = [
    {
      id: "ride",
      label: "Ride to Airport",
      icon: <Car className="w-4 h-4" />,
      oldWay: {
        title: "App Hopping",
        steps: [
          { app: "Ola", action: "Check price", time: "2m", status: "₹450", color: "text-yellow-600 bg-yellow-50" },
          { app: "Uber", action: "Check price", time: "2m", status: "₹480", color: "text-black bg-gray-100" },
          { app: "Rapido", action: "Check price", time: "2m", status: "No Cabs", color: "text-blue-600 bg-blue-50" },
          { app: "Namma Yatri", action: "Check price", time: "2m", status: "₹440", color: "text-orange-600 bg-orange-50" },
        ],
        total: "9 min wasted",
        result: "Mental fatigue",
      },
      newWay: {
        query: "Ride to airport",
        results: [
          { provider: "Namma Yatri", detail: "Auto • 3 min", price: "₹440", best: true, logo: "NY" },
          { provider: "Ola", detail: "Mini • 5 min", price: "₹450", best: false, logo: "O" },
          { provider: "Uber", detail: "Go • 4 min", price: "₹480", best: false, logo: "U" },
          { provider: "Rapido", detail: "Cab • 8 min", price: "₹460", best: false, logo: "R" },
        ],
        time: "30 sec total",
        summary: "Best price found instantly",
      },
    },
    {
      id: "plumber",
      label: "Find Plumber",
      icon: <Zap className="w-4 h-4" />,
      oldWay: {
        title: "Manual Hunt",
        steps: [
          { app: "Google", action: "Call 5 numbers", time: "15m", status: "No Answer", color: "text-blue-600 bg-blue-50" },
          { app: "JustDial", action: "Scroll listings", time: "5m", status: "Unverified", color: "text-orange-600 bg-orange-50" },
          { app: "WhatsApp", action: "Message groups", time: "10m", status: "Waiting...", color: "text-green-600 bg-green-50" },
          { app: "Friends", action: "Ask referral", time: "5m", status: "No luck", color: "text-purple-600 bg-purple-50" },
        ],
        total: "35 min wasted",
        result: "Uncertainty",
      },
      newWay: {
        query: "Plumber near me",
        results: [
          { provider: "Ramesh Services", detail: "4.9★ • Verified", price: "₹500", best: true, logo: "RS" },
          { provider: "City Plumbers", detail: "4.7★ • 500+ jobs", price: "₹550", best: false, logo: "CP" },
          { provider: "QuickFix", detail: "4.5★ • Available", price: "₹450", best: false, logo: "QF" },
        ],
        time: "1 min total",
        summary: "Verified pros booked",
      },
    },
    {
      id: "groceries",
      label: "Groceries",
      icon: <Shield className="w-4 h-4" />,
      oldWay: {
        title: "Stock Checking",
        steps: [
          { app: "Zepto", action: "Check items", time: "2m", status: "Out of Stock", color: "text-purple-600 bg-purple-50" },
          { app: "Blinkit", action: "Check items", time: "2m", status: "High Fee", color: "text-yellow-600 bg-yellow-50" },
          { app: "Swiggy", action: "Check items", time: "2m", status: "30m ETA", color: "text-orange-600 bg-orange-50" },
          { app: "BigBasket", action: "Check items", time: "1m", status: "Tomorrow", color: "text-green-600 bg-green-50" },
        ],
        total: "7 min wasted",
        result: "Frustration",
      },
      newWay: {
        query: "Milk and bread",
        results: [
          { provider: "Blinkit", detail: "12 mins", price: "₹85", best: true, logo: "B" },
          { provider: "Zepto", detail: "Unavailable", price: "-", best: false, logo: "Z" },
          { provider: "Swiggy", detail: "25 mins", price: "₹90", best: false, logo: "S" },
        ],
        time: "30 sec total",
        summary: "Fastest delivery found",
      },
    },
  ];

  const services = [
    { icon: <Car className="w-5 h-5" />, label: "Rides", color: "bg-blue-100 text-blue-600" },
    { icon: <Utensils className="w-5 h-5" />, label: "Food", color: "bg-orange-100 text-orange-600" },
    { icon: <ShoppingCart className="w-5 h-5" />, label: "Grocery", color: "bg-green-100 text-green-600" },
    { icon: <Package className="w-5 h-5" />, label: "Courier", color: "bg-yellow-100 text-yellow-600" },
    { icon: <Wrench className="w-5 h-5" />, label: "Plumber", color: "bg-red-100 text-red-600" },
    { icon: <Hammer className="w-5 h-5" />, label: "Carpenter", color: "bg-amber-100 text-amber-600" },
    { icon: <Zap className="w-5 h-5" />, label: "Electrician", color: "bg-indigo-100 text-indigo-600" },
    { icon: <Scissors className="w-5 h-5" />, label: "Salon", color: "bg-pink-100 text-pink-600" },
    { icon: <Home className="w-5 h-5" />, label: "Cleaning", color: "bg-teal-100 text-teal-600" },
    { icon: <Truck className="w-5 h-5" />, label: "Movers", color: "bg-cyan-100 text-cyan-600" },
    { icon: <Sparkles className="w-5 h-5" />, label: "Pest Control", color: "bg-violet-100 text-violet-600" },
    { icon: <Shield className="w-5 h-5" />, label: "Insurance", color: "bg-emerald-100 text-emerald-600" },
  ];

  return (
    <section id="highlights" className="relative py-16 lg:py-20 overflow-hidden bg-background">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          title="Why Switch to Krixum?"
          description="Experience the difference between chaos and clarity."
          className="mb-10"
        />

        <Tabs defaultValue="ride" className="w-full max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-lg grid-cols-3 h-16 p-1.5 bg-white/80 backdrop-blur-md rounded-full border border-border/50 shadow-sm">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="rounded-full text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    {useCase.icon}
                    <span className="hidden sm:inline">{useCase.label}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id} className="mt-0 animate-fade-in focus-visible:outline-none">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-stretch">

                {/* The Old Way */}
                <div className="relative group h-full">
                  <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-sm overflow-hidden flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:bg-gray-50/50 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">The Old Way</h3>
                        <p className="text-sm text-muted-foreground font-medium mt-1">{useCase.oldWay.title}</p>
                      </div>
                    </div>

                    <div className="space-y-3 relative z-10 flex-1 pr-1">
                      {useCase.oldWay.steps.map((step, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 shadow-sm opacity-75 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${step.color}`}>
                              {step.app[0]}
                            </div>
                            <div>
                              <div className="font-medium text-sm text-foreground">{step.app}</div>
                              <div className="text-xs text-muted-foreground">{step.action}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-red-500">{step.status}</div>
                            <div className="text-[10px] text-muted-foreground">{step.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-red-600">
                      <div className="flex items-center gap-2 font-semibold">
                        <Clock className="w-4 h-4" />
                        {useCase.oldWay.total}
                      </div>
                      <span className="text-sm font-medium bg-red-50 px-3 py-1 rounded-full">
                        {useCase.oldWay.result}
                      </span>
                    </div>
                  </div>
                </div>

                {/* The Krixum Way */}
                <div className="relative group h-full">
                  <div className="relative bg-white border border-primary/20 rounded-3xl p-8 shadow-xl overflow-hidden flex flex-col transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:bg-orange-50/30 h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">With Krixum</h3>
                        <p className="text-sm text-primary font-bold mt-1">One Search. Done.</p>
                      </div>
                    </div>

                    <div className="space-y-6 relative z-10 flex-1 pr-1">
                      {/* Search Bar */}
                      <div className="relative shadow-sm">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                          <Search className="h-4 w-4 text-primary" />
                        </div>
                        <input
                          type="text"
                          readOnly
                          value={useCase.newWay.query}
                          className="w-full py-3 pl-10 pr-4 text-sm font-medium bg-white border-2 border-primary/20 rounded-xl text-foreground focus:outline-none focus:border-primary"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-3">
                        {useCase.newWay.results.map((result, i) => (
                          <div
                            key={i}
                            className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${result.best
                              ? "bg-primary/5 border-primary shadow-md scale-[1.02] z-10"
                              : "bg-gray-50 border-transparent opacity-60 hover:opacity-100"
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${result.best ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                                {result.logo}
                              </div>
                              <div>
                                <div className="font-semibold text-sm text-foreground">{result.provider}</div>
                                <div className="text-xs text-muted-foreground">{result.detail}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`font-bold text-sm ${result.best ? 'text-primary' : 'text-foreground'}`}>{result.price}</div>
                              {result.best && (
                                <div className="text-[10px] font-bold text-white bg-green-500 px-2 py-0.5 rounded-full inline-block mt-0.5 shadow-sm">
                                  BEST
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-primary/10 flex items-center justify-between text-primary">
                      <div className="flex items-center gap-2 font-bold">
                        <Clock className="w-4 h-4" />
                        {useCase.newWay.time}
                      </div>
                      <span className="text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">
                        {useCase.newWay.summary}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Services Grid */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Everything you need. One place.</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From rides to repairs, Krixum connects you with the best providers instantly.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
              >
                <div className={`p-1.5 rounded-full ${service.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <span className="font-semibold text-sm text-foreground">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
