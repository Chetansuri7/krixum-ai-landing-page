import { SectionHeader } from "~/components/ui/section-header";
import { siteContent } from "~/lib/content-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Everything you need to know about using Krixum to search, compare, and book services"
      />

      {/* FAQ Accordion */}
      <div className="pt-6">
        <div className="ms-card p-6 sm:p-8">
          <Accordion type="multiple" defaultValue={["item-0", "item-2", "item-4"]} className="w-full">
            {siteContent.faq.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-4 sm:px-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
