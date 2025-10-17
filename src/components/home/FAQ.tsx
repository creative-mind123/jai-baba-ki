import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/lib/faq";
import IcbrLogo from "../common/IcbrLogo";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <IcbrLogo className="h-14" />
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Find answers to common questions about our at-home wellness services in Delhi NCR.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
