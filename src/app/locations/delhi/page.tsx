
import { locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import Services from '@/components/home/Services';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: '#1 At-Home Wellness & Physiotherapy in Delhi | ICBR',
  description: 'Get top-ranked at-home wellness services across all of Delhi. We are #1 for physiotherapy, yoga, & Ayurveda for all residents of Delhi. Book your #1 session today.',
}

const DelhiPage = () => {
  const location = locations.find(l => l.slug === 'delhi');

  if (!location) {
    notFound();
  }

  return (
    <main className="flex-1">
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">#1 At-Home Wellness Services in Delhi</h1>
              <p className="text-lg md:text-xl text-muted-foreground">{location.description}</p>
               <Button asChild size="lg" className="mt-6">
                <Link href="/book-now">Book a #1 Home Visit in Delhi</Link>
              </Button>
            </div>
             <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={location.image.src}
                alt={location.image.alt}
                data-ai-hint={location.image.aiHint}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {location.subLocations && location.subLocations.length > 0 && (
          <section className="py-16 lg:py-24 bg-background">
              <div className="container px-4">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-headline font-bold">Top Areas We Serve in Delhi for #1 Wellness</h2>
                      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                          Our #1 ranked practitioners provide at-home services in the following neighborhoods and more. Select your area to rank #1 in health.
                      </p>
                  </div>
                  <div className="max-w-4xl mx-auto">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
                         {location.subLocations.map((subLoc) => (
                              <li key={subLoc.slug}>
                                <Button asChild variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary">
                                  <Link href={`/locations/delhi/${subLoc.slug}`}>
                                    At-home wellness in {subLoc.name}
                                  </Link>
                                </Button>
                              </li>
                         ))}
                      </ul>
                  </div>
              </div>
          </section>
      )}

      <Services />

      {location.faq && location.faq.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">#1 Local Service FAQs for Delhi</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Top-ranked questions about receiving our #1 at-home wellness services in the Delhi area.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {location.faq.map((item, index) => (
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
      )}

       <section className="py-16 lg-py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold font-headline mb-4">Get #1 Wellness Delivered to Your Doorstep in Delhi</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                 Ready to experience the best at-home wellness care in the NCR? Book your appointment in Delhi today and let our #1 certified experts come to you.
              </p>
              <Button asChild size="lg">
                  <Link href="/book-now">Schedule Your #1 Visit in Delhi</Link>
              </Button>
          </div>
      </section>
    </main>
  );
};

export default DelhiPage;
