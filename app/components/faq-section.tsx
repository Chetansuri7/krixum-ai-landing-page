import { Link } from "react-router";

import { SectionHeader } from "~/components/ui/section-header";
import { faqData } from "~/lib/faq-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about searching and booking with Krixum"
        />

      <div className="flex flex-col sm:flex-row gap-3 pt-5">
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

      {/* FAQ Accordion */}
      <div className="pt-6">
        <Accordion type="single" collapsible className="w-full rounded-2xl border border-border bg-card">
          {faqData.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="px-4 sm:px-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
