import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { SectionHeader } from "./ui/section-header";
import { Rocket, Lock, TrendingUp, Zap } from "lucide-react";

export function AdvantagesSection() {
  const advantages = [
    {
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: "No Vendor Lock-in",
      description:
        "Switch between AI models freely without being tied to a single provider. Your data and conversations remain portable.",
      badge: "100% Freedom",
      badgeColor: "bg-orange-100 text-orange-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-500" />,
      title: "Cost Optimization",
      description:
        "Use the most cost-effective model for each task. Save up to 70% on AI costs by choosing the right model.",
      badge: "Up to 70% Savings",
      badgeColor: "bg-amber-100 text-amber-600",
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-500" />,
      title: "Peak Performance",
      description:
        "Get optimal results by leveraging each model’s strengths.",
      badge: "Peak Performance",
      badgeColor: "bg-pink-100 text-pink-600",
    },
    {
      icon: <Rocket className="w-6 h-6 text-red-500" />,
      title: "Always Updated",
      description:
        "Stay ahead with the latest AI capabilities without changing platforms.",
      badge: "Always Updated",
      badgeColor: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section id="advantages" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-16">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          badge="Advantages"
          title="Why choose Krixum AI?"
          description="Experience the freedom and flexibility of a truly unified AI platform."
        />
        
        <div className="grid gap-6 pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv, idx) => (
            <Card
              key={idx}
              className="hover:shadow-lg transition-all duration-300 rounded-3xl h-full"
            >
              <CardHeader className="flex flex-col items-start space-y-3 p-6">
                <div className="p-3 rounded-full bg-muted">{adv.icon}</div>
                <CardTitle className="text-lg font-semibold">{adv.title}</CardTitle>
                <Badge className={adv.badgeColor}>{adv.badge}</Badge>
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <p className="text-muted-foreground leading-relaxed">{adv.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}