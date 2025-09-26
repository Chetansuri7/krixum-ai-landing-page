export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    id: "q1",
    question: "What is Krixum AI?",
    answer:
      "A unified chat interface to interact with multiple top AI models like OpenAI GPT, Google Gemini, and Anthropic Claude — all in one place.",
  },
  {
    id: "q2",
    question: "How is Krixum AI different from using ChatGPT or Gemini directly?",
    answer:
      "Unlike using ChatGPT or Gemini directly, Krixum AI lets you switch models instantly, compare responses side-by-side, and keep all chats in one unified history.",
  },
  {
    id: "q3",
    question: "Which AI models can I access through Krixum AI?",
    answer:
      "Access leading models like GPT-4o, GPT-4 Turbo, Gemini 1.5 Pro, Claude 3 Opus & Sonnet — with more added regularly.",
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
    question: "How is my conversation data handled by Krixum AI? Is it private?",
    answer:
      "Your prompts are sent securely to the AI provider you choose. We store your chat history only for your account and never use it to train models.",
  },
  {
    id: "q7",
    question: "Can I compare responses from different models in Krixum AI?",
    answer:
      "Yes. You can send a prompt to multiple models at once and compare their responses side-by-side.",
  },
  {
    id: "q8",
    question: "What should I do if I encounter an error with Krixum AI?",
    answer:
      "Refresh the page or try another model. If issues persist, check our status page or contact support with details.",
  },
];
