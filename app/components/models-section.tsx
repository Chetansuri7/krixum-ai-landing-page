import { SectionHeader } from "~/components/ui/section-header";
import { Sparkles, Crown, Rocket } from "lucide-react";

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



export function ModelsSection() {
  const providers = [
    {
      name: "OpenAI",
      logo: OpenAILogo,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Anthropic",
      logo: AnthropicLogo,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Google",
      logo: GoogleLogo,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Meta",
      logo: MetaLogo,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "DeepSeek",
      logo: DeepSeekLogo,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Qwen",
      logo: QwenLogo,
      color: "from-pink-500 to-purple-600"
    },
  ];

  return (
    <section
      id="models"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8"
    >
      <div className="flex flex-col gap-8 w-full">
        <SectionHeader
          badge="AI Providers"
          title="Top AI providers in one app"
          description="Access the world's leading AI models without switching platforms. One interface, endless possibilities."
        />

        {/* Minimal Provider Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {providers.map((provider, index) => {
            const LogoComponent = provider.logo;
            return (
              <div
                key={provider.name}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${provider.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <LogoComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {provider.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
