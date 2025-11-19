import { SectionHeader } from "~/components/ui/section-header";
import { Search, Scale, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search",
    description: "Type what you need. We understand your intent instantly.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-blue-100 text-blue-600",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    title: "Compare",
    description: "See all options side-by-side. Best price & ETA.",
    icon: <Scale className="w-8 h-8" />,
    color: "bg-purple-100 text-purple-600",
    borderColor: "border-purple-200"
  },
  {
    id: 3,
    title: "Book",
    description: "One click to book or connect with the provider.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    color: "bg-green-100 text-green-600",
    borderColor: "border-green-200"
  },
  {
    id: 4,
    title: "Done",
    description: "Track status and pay securely only when satisfied.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-orange-100 text-orange-600",
    borderColor: "border-orange-200"
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-16 lg:py-20 overflow-hidden bg-background">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          title="From search to done in seconds"
          description="Krixum simplifies the chaos of modern services into one smooth flow."
          className="mb-10 lg:mb-16"
        />

        {/* Desktop Horizontal Flow */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Step Number/Icon Container */}
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-2xl ${step.color} border-4 ${step.borderColor} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 bg-white relative z-10`}>
                    <div className="transform scale-90">{step.icon}</div>
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-foreground text-white flex items-center justify-center font-bold text-xs border-4 border-white">
                      {step.id}
                    </div>
                  </div>

                  {/* Arrow between steps (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 -right-4 text-gray-400">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}

                  <div className="mt-6 space-y-2 px-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative max-w-md mx-auto">
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-100"></div>

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.id} className="relative flex gap-8">
                <div className={`relative z-10 w-16 h-16 shrink-0 rounded-2xl ${step.color} border-2 ${step.borderColor} flex items-center justify-center shadow-sm bg-white`}>
                  <div className="transform scale-75">{step.icon}</div>
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                    <span className="text-xs font-bold bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">Step {step.id}</span>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
