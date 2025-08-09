import { Card } from "~/components/ui/card";
import { SectionHeader } from "~/components/ui/section-header";
import { Button } from "~/components/ui/button";

const faqData = [
  {
    id: "q1",
    question: "What is Krixum AI?",
    answer:
      "A unified chat interface to interact with multiple top AI models like OpenAI GPT, Google Gemini, and Anthropic Claude — all in one place.",
  },
  {
    id: "q2",
    question:
      "How is Krixum AI different from using ChatGPT or Gemini directly?",
    answer:
      "Unlike using ChatGPT or Gemini directly, Krixum AI lets you switch models instantly, compare responses side-by-side, and keep all chats in one unified history.",
  },
  {
    id: "q3",
    question: "Which AI models can I access through Krixum AI?",
    answer:
      "Access leading models like GPT‑4o, GPT‑4 Turbo, Gemini 1.5 Pro, Claude 3 Opus & Sonnet — with more added regularly.",
  },
  {
    id: "q4",
    question: "How do I choose or switch between models in Krixum AI?",
    answer:
      "Use the model selector in the chat interface to choose or switch AI models anytime during a conversation.",
  },
  {
    id: "q5",
    question: "Is Krixum AI free to use?",
    answer:
      "Yes. We offer a free tier with limited usage, plus paid plans for higher limits and premium models. See our Pricing page for details.",
  },
  {
    id: "q6",
    question:
      "How is my conversation data handled by Krixum AI? Is it private?",
    answer:
      "Your prompts are sent securely to the AI provider you choose. We store your chat history only for your account and never use it to train models.",
  },
  {
    id: "q7",
    question: "Can I compare responses from different models in Krixum AI?",
    answer:
      "Yes. You can send a prompt to multiple models at once and compare their responses side‑by‑side.",
  },
  {
    id: "q8",
    question: "What should I do if I encounter an error with Krixum AI?",
    answer:
      "Refresh the page or try another model. If issues persist, check our status page or contact support with details.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about Krixum AI"
        />

      {/* FAQ Grid */}
      <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {faqData.map((faq) => (
          <Card
            key={faq.id}
            className="group bg-background rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
          >
            <div className="p-6 sm:p-8 flex flex-col h-full">
              <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors mb-4">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {faq.answer}
              </p>
            </div>
          </Card>
        ))}

        {/* Special Contact Block */}
        <Card className="group bg-background rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
          <div className="p-6 sm:p-8 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                Where can I ask more questions?
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              You're welcome to join our forum and share your thoughts! If you
              prefer a private conversation, feel free to email us directly.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="rounded-xl">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forum.cursor.com/"
                >
                  Our Forum
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl">
                <a href="mailto:hi@cursor.com">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
