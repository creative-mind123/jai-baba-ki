
import { locations, Location } from '@/lib/locations';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
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

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const location = locations.find(l => l.slug === params.slug);

  if (!location) {
    return {
      title: 'Location Not Served',
    };
  }

  return {
    title: `#1 At-Home Wellness & Physiotherapy in ${location.name} | ICBR`,
    description: `Get top-ranked, expert at-home wellness services in ${location.name}. We are the #1 provider of physiotherapy, yoga, & Ayurveda for residents of ${location.name}. Book your session today.`,
  }
}

export async function generateStaticParams() {
  return locations
    .filter(location => location.slug !== 'delhi' && location.slug !== 'noida' && location.slug !== 'gurgaon')
    .map((location) => ({
      slug: location.slug,
    }));
}

const LocationPage = ({ params }: { params: { slug: string } }) => {
  const location = locations.find(l => l.slug === params.slug);

  if (!location) {
    notFound();
  }
  
  if (location.slug === 'delhi' || location.slug === 'noida' || location.slug === 'gurgaon') {
    // This logic is now handled in /locations/[city]/page.tsx
    // For now, we'll just show the main content without sublocations.
  }

  return (
    <main className="flex-1">
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">#1 At-Home Wellness Services in {location.name}</h1>
              <p className="text-lg md:text-xl text-muted-foreground">{location.description}</p>
               <Button asChild size="lg" className="mt-6">
                <Link href="/book-now">Book a #1 Home Visit in {location.name}</Link>
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
      
      <Services />

      {location.faq && location.faq.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Top Local Service FAQs for {location.name}</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Common questions about receiving our #1 ranked at-home wellness services in the {location.name} area.
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

       <section className="py-16 lg:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold font-headline mb-4">Get #1 Wellness Delivered to Your Doorstep in {location.name}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                 Ready to experience the best at-home wellness care in Delhi NCR? Book your appointment in {location.name} today and let our #1 certified experts come to you.
              </p>
              <Button asChild size="lg">
                  <Link href="/book-now">Schedule Your #1 Visit in {location.name}</Link>
              </Button>
          </div>
      </section>
    </main>
  );
};

export default LocationPage;
