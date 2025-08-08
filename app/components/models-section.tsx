import { SectionHeader } from "~/components/ui/section-header";
import { Badge } from "~/components/ui/badge";

export function ModelsSection() {
  const models = [
    {
      name: "GPT-4",
      provider: "OpenAI",
      description: "Most capable GPT model, great for complex reasoning tasks",
      icon: "🤖",
      color: "from-green-400 to-blue-500"
    },
    {
      name: "Claude 3.5",
      provider: "Anthropic", 
      description: "Excellent for analysis, writing, and coding tasks",
      icon: "🧠",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Gemini Pro",
      provider: "Google",
      description: "Powerful multimodal AI with strong reasoning capabilities",
      icon: "✨",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Llama 3",
      provider: "Meta",
      description: "Open-source model with strong performance across tasks",
      icon: "🦙",
      color: "from-blue-400 to-indigo-500"
    }
  ]

  return (
    <section id="models" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-16">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          badge="AI Models"
          title="Access all leading AI models"
          description="Switch between the best AI models seamlessly. No vendor lock-in, just the power of choice."
        />
        
        <div className="grid gap-6 pt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => (
            <div key={model.name} className="relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-background transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
              <div className="h-32 w-full bg-muted flex items-center justify-center">
                <span className="text-4xl">{model.icon}</span>
              </div>
              <div className="space-y-3 p-6">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg text-foreground">{model.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {model.provider}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}