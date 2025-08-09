import { SectionHeader } from "~/components/ui/section-header";
import { Badge } from "~/components/ui/badge";
import { Sparkles, Crown, Rocket, ChevronRight } from "lucide-react";

// Company Logo Components
function OpenAILogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-black dark:bg-white rounded-lg flex items-center justify-center`}
    >
      <span className="text-white dark:text-black font-bold text-sm">AI</span>
    </div>
  );
}

function GoogleLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">G</span>
    </div>
  );
}

function AnthropicLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">A</span>
    </div>
  );
}

function MetaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">M</span>
    </div>
  );
}

function DeepSeekLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">DS</span>
    </div>
  );
}

function QwenLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center`}
    >
      <span className="text-white font-bold text-sm">Q</span>
    </div>
  );
}

function GenericLogo({
  className = "w-8 h-8",
  name,
}: {
  className?: string;
  name: string;
}) {
  return (
    <div
      className={`${className} bg-muted border border-border rounded-lg flex items-center justify-center`}
    >
      <span className="text-muted-foreground font-bold text-sm">
        {name.charAt(0)}
      </span>
    </div>
  );
}

export function ModelsSection() {
  const companies = [
    {
      name: "OpenAI",
      logo: OpenAILogo,
      description: "Leading AI research company",
      models: [
        "GPT-5, 5-mini, 5-nano",
        "GPT-4.1, 4.1-mini",
        "GPT-4o, 4o-mini",
        "o3, o3-mini, o1-pro",
      ],
      hasMore: true,
    },
    {
      name: "Google",
      logo: GoogleLogo,
      description: "Advanced multimodal AI models",
      models: [
        "Gemini 2.5 Pro, Flash",
        "Gemini 2.0 Flash, Flash-Lite",
        "Gemini 1.5 Pro, Flash, Flash-8B",
        "Gemini Live, Native Audio",
      ],
      hasMore: true,
    },
    {
      name: "Anthropic",
      logo: AnthropicLogo,
      description: "Constitutional AI and safety-focused models",
      models: [
        "Claude Sonnet 4.0, 3.5",
        "Claude Haiku 3.5, 3.0",
        "Claude Opus 3.5, 3.0",
        "Claude Computer Use",
      ],
      hasMore: true,
    },
    {
      name: "DeepSeek",
      logo: DeepSeekLogo,
      description: "Advanced reasoning and coding models",
      models: [
        "DeepSeek V3, R1",
        "DeepSeek Coder V2, V1",
        "DeepSeek Math, Reasoning",
        "DeepSeek Chat, API",
      ],
      hasMore: true,
    },
    {
      name: "Qwen",
      logo: QwenLogo,
      description: "Multilingual and reasoning-focused models",
      models: [
        "Qwen3 235B, 30B, 7B",
        "Qwen3 Coder 480B, 32B",
        "Qwen3 Thinking, Instruct",
        "Qwen3 0.6B, Mini",
      ],
      hasMore: true,
    },
    {
      name: "Meta",
      logo: MetaLogo,
      description: "Open-source AI models",
      models: [
        "Llama 3.3, 3.1, 3.0",
        "Llama Guard 3, 2",
        "Llama Code, Instruct",
        "Llama Vision, Multimodal",
      ],
      hasMore: true,
    },
  ];

  return (
    <section
      id="models"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8"
    >
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          badge="AI Models"
          title="Access all leading AI models"
          description="Switch between the best AI models seamlessly. No vendor lock-in, just the power of choice."
        />

        {/* Company Model Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => {
            const LogoComponent = company.logo;
            return (
              <div
                key={company.name}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Company Header */}
                <div className="p-6 border-b border-border bg-muted/20">
                  <div className="flex items-center gap-4">
                    <LogoComponent className="w-12 h-12" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {company.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simple Model List */}
                <div className="p-6">
                  <div className="space-y-2">
                    {company.models.map((model) => (
                      <div
                        key={model}
                        className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer py-1"
                      >
                        {model}
                      </div>
                    ))}
                    {company.hasMore && (
                      <div className="text-sm text-muted-foreground italic pt-1">
                        ...and more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Rocket className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">75+</span>
              </div>
              <p className="text-muted-foreground">AI Models Available</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  Instant
                </span>
              </div>
              <p className="text-muted-foreground">Model Switching</p>
            </div>

            <div className="text-center md:text-right space-y-2">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Crown className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">Zero</span>
              </div>
              <p className="text-muted-foreground">Vendor Lock-in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
