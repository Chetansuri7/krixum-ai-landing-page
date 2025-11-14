export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqData: FaqItem[] = [
  {
    id: "q1",
    question: "What is Krixum?",
    answer:
      "Krixum is a search, compare, and book platform for local services. One search shows options from big brands and verified local providers, and you can book with payment protection where available.",
  },
  {
    id: "q2",
    question: "How does booking work on Krixum?",
    answer:
      "We support three integration models: Discovery (we redirect you to the partner app), Booking (you book through Krixum with partner fulfillment), and Platform (full listing + payments + escrow for local providers).",
  },
  {
    id: "q3",
    question: "Is Krixum free for users?",
    answer:
      "Yes. You pay providers directly or via their app. We earn through provider partnerships, placements, or small booking fees in some categories — not by charging you more.",
  },
  {
    id: "q4",
    question: "How are my payments protected?",
    answer:
      "For Platform and Booking partners, your payment is held in escrow until you confirm service completion. If there's an issue, we provide a refund or a replacement provider.",
  },
  {
    id: "q5",
    question: "Do I need multiple apps installed?",
    answer:
      "No. You can compare and manage everything in Krixum. For Discovery partners you finish checkout in their app or website — we’ll deep-link you there.",
  },
  {
    id: "q6",
    question: "Which categories and cities are supported?",
    answer:
      "We’re rolling out categories like Taxis & Rides and Home Services first, with Quick Commerce and Food Delivery planned. Availability will expand based on demand — join the waitlist to be notified.",
  },
  {
    id: "q7",
    question: "Can I use AI to search and book?",
    answer:
      "Yes. Krixum is API-first and MCP-compatible, so assistants like ChatGPT or Claude can search, compare, and book through Krixum on your behalf.",
  },
  {
    id: "q8",
    question: "What if the provider doesn’t show up or quality is poor?",
    answer:
      "For Platform/Booking partners we mediate, and your escrow is refunded if service fails. For Discovery partners, we help coordinate with the partner’s support and policies.",
  },
  {
    id: "q9",
    question: "Are prices the same as provider apps?",
    answer:
      "You typically pay the same price you’d see on the provider’s app. Our goal is transparent comparison, not adding hidden markups for users.",
  },
  {
    id: "q10",
    question: "I’m a service provider — how do I partner?",
    answer:
      "We offer Discovery, Booking, and Platform integrations depending on your category and scale. Contact us to discuss APIs and onboarding.",
  },
];
