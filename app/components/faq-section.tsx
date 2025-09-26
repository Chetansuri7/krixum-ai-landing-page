import { Link } from "react-router";

import { Card } from "~/components/ui/card";
import { SectionHeader } from "~/components/ui/section-header";
import { faqData } from "~/lib/faq-data";

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about Krixum AI"
        />

      <div className="flex flex-col sm:flex-row gap-3 pt-6">
        <Link
          to="/faq"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          Browse all FAQs
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/70"
        >
          Ask something else
        </Link>
      </div>

      {/* FAQ Grid */}
      <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {faqData.map((faq) => (
          <Card
            key={faq.id}
            className="group bg-background rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer"
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
        <Card className="group bg-background rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer">
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
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-xl text-sm font-medium bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 cursor-pointer transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
