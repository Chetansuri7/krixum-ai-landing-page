import { Link } from "react-router";

import { SectionHeader } from "~/components/ui/section-header";
import { faqData } from "~/lib/faq-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Everything you need to know about letting Krixum’s agent handle the booking loop"
        />

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
