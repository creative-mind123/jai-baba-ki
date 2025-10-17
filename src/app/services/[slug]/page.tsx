
import { servicesList, Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { locations } from '@/lib/locations';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = servicesList.find(s => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `#1 ${service.title} at Home in Delhi NCR | Top-Ranked Service`,
    description: `Get the best, top-ranked at-home ${service.title} in Delhi, Gurgaon, & Noida. ${service.description}`,
  }
}

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }))
}

const ServicePage = ({ params }: { params: { slug:string } }) => {
  const service = servicesList.find(s => s.slug === params.slug);
  const delhiData = locations.find(l => l.slug === 'delhi');
  const noidaData = locations.find(l => l.slug === 'noida');
  const gurgaonData = locations.find(l => l.slug === 'gurgaon');

  if (!service) {
    notFound();
  }

  return (
    <main className="flex-1">
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">#1 {service.title} at Home in Delhi NCR</h1>
              <p className="text-lg md:text-xl text-muted-foreground">{service.longDescription}</p>
               <Button asChild size="lg" className="mt-6">
                <Link href="/book-now">Book Top-Ranked {service.title}</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                data-ai-hint={service.image.aiHint}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
          <div className="container grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold font-headline mb-6">Why Choose Delhi NCR's #1 At-Home {service.title}?</h2>
                  <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-4">
                      <p>Receive top-ranked, professional {service.title} care without the hassle of travel. Our certified practitioners bring their #1 expertise directly to your home, ensuring a comfortable, private, and personalized session tailored to your specific health needs.</p>
                      <p>Whether you're in Delhi, Gurgaon, Noida, Faridabad, or Ghaziabad, we provide a seamless and effective wellness experience, helping you achieve your health goals faster with the best team in the NCR.</p>
                  </div>
              </div>
              <div className="md:col-span-1">
                  <Card>
                      <CardContent className="p-6">
                         <h3 className="text-xl font-bold mb-4">What's Included in the #1 Service?</h3>
                         <ul className="space-y-3">
                              <li className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                  <span>Top-Ranked, Certified & Vetted Practitioner Visit</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                  <span>#1 Personalized Assessment and Treatment Plan</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                  <span>All Necessary Equipment and Materials</span>
                              </li>
                               <li className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                  <span>Best Service Across Delhi, Gurgaon, Noida & NCR</span>
                              </li>
                         </ul>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>

      {service.slug === 'home-physiotherapy-delhi-ncr' && (delhiData?.subLocations || noidaData?.subLocations || gurgaonData?.subLocations) && (
          <section className="py-16 lg:py-24 bg-secondary">
              <div className="container px-4">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-headline font-bold">Find #1 Physiotherapy in Your Delhi NCR Neighborhood</h2>
                      <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                          We provide top-ranked, expert physiotherapy services directly to your home in the following areas.
                      </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                     {delhiData?.subLocations && (
                         <div className="max-w-md">
                             <h3 className="text-xl font-bold mb-4 text-center">Delhi</h3>
                               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                 {delhiData.subLocations.map((subLoc) => (
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
                     )}
                     {gurgaonData?.subLocations && (
                         <div className="max-w-md">
                             <h3 className="text-xl font-bold mb-4 text-center">Gurgaon</h3>
                               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                 {gurgaonData.subLocations.map((subLoc) => (
                                      <li key={subLoc.slug}>
                                        <Button asChild variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary">
                                          <Link href={`/locations/gurgaon/${subLoc.slug}`}>
                                            At-home wellness in {subLoc.name}
                                          </Link>
                                        </Button>
                                      </li>
                                 ))}
                              </ul>
                         </div>
                     )}
                     {noidaData?.subLocations && (
                         <div className="max-w-md">
                             <h3 className="text-xl font-bold mb-4 text-center">Noida</h3>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                 {noidaData.subLocations.map((subLoc) => (
                                      <li key={subLoc.slug}>
                                        <Button asChild variant="link" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary">
                                          <Link href={`/locations/noida/${subLoc.slug}`}>
                                            At-home wellness in {subLoc.name}
                                          </Link>
                                        </Button>
                                      </li>
                                 ))}
                              </ul>
                         </div>
                     )}
                  </div>
              </div>
          </section>
      )}

      {service.youtubeVideoId && (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Watch Our #1 Delhi NCR Expert Explain</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Learn more about {service.title} from one of our top-ranked, experienced practitioners.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
               <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                  <iframe
                      src={`https://www.youtube.com/embed/${service.youtubeVideoId}?rel=0&showinfo=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                  ></iframe>
               </div>
            </div>
          </div>
        </section>
      )}

      {service.faq && service.faq.length > 0 && (
        <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Your #1 Questions Answered</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Find top answers to common questions about our at-home {service.title} service in the Delhi NCR region.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {service.faq.map((item, index) => (
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
      
      <section className="py-16 lg:py-24 text-center bg-secondary">
          <div className="container">
              <h2 className="text-3xl font-bold font-headline mb-4">Ready to Experience Delhi NCR's #1 At-Home {service.title}?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Booking is simple. Schedule your top-ranked at-home {service.title} session in Delhi, Noida, or Gurgaon today and let our #1 experts bring wellness to you.
              </p>
              <Button asChild size="lg">
                  <Link href="/book-now">Book Your #1 Session Now</Link>
              </Button>
          </div>
      </section>

    </main>
  );
};

export default ServicePage;
