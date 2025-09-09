
import { healthIssues, HealthIssue } from '@/lib/health';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { servicesList } from '@/lib/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const issue = healthIssues.find(i => i.slug === params.slug);

  if (!issue) {
    return {
      title: 'Health Issue Not Found',
    };
  }

  return {
    title: `#1 At-Home Treatment for ${issue.title} in Delhi NCR | ICBR`,
    description: `Get top-ranked relief and management for ${issue.title} with our #1 at-home wellness services in Delhi, Gurgaon & Noida. ${issue.description}`,
  }
}

export async function generateStaticParams() {
  return healthIssues.map((issue) => ({
    slug: issue.slug,
  }))
}

const HealthIssuePage = ({ params }: { params: { slug: string } }) => {
  const issue = healthIssues.find(i => i.slug === params.slug);

  if (!issue) {
    notFound();
  }

  // Suggest relevant services
  const relevantServices = issue.recommendedServiceSlugs
    ? servicesList.filter(service => issue.recommendedServiceSlugs?.includes(service.slug))
    : servicesList.filter(service => {
        const keywords = issue.title.toLowerCase().split(' ');
        return keywords.some(keyword => service.longDescription.toLowerCase().includes(keyword) || service.title.toLowerCase().includes(keyword));
      });


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">#1 At-Home Care for {issue.title} in Delhi NCR</h1>
                <p className="text-lg md:text-xl text-muted-foreground">{issue.description}</p>
                 <Button asChild size="lg" className="mt-6">
                  <Link href="/book-now">Book a #1 Personalized Session</Link>
                </Button>
              </div>
               <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                 <Image
                  src={issue.image.src}
                  alt={issue.image.alt}
                  data-ai-hint={issue.image.aiHint}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
            <div className="container">
                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">Top Recommended At-Home Services for {issue.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relevantServices.length > 0 ? relevantServices.map((service) => (
                    <Card key={service.title} className="text-center group hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <CardHeader className="items-center">
                        <div className="bg-primary/10 p-4 rounded-full">
                          <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <CardTitle as="h3" className="mt-4 text-xl">
                          <Link href={`/services/${service.slug}`} className="hover:underline">{service.title}</Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                    </Card>
                )) : (
                    <p className="text-center col-span-full text-muted-foreground">We recommend a personalized consultation to create a plan for {issue.title}.</p>
                )}
                </div>
            </div>
        </section>

        {issue.relatedIssues && issue.relatedIssues.length > 0 && (
          <section className="py-16 lg:py-24 bg-secondary">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Explore Specific Related Conditions in Delhi NCR</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  Learn more about specific conditions related to {issue.title} and how our #1 ranked team can help manage them at home.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {issue.relatedIssues.map((relatedIssue) => (
                  <Card key={relatedIssue.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">{relatedIssue.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{relatedIssue.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/health/${relatedIssue.slug}`}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {issue.youtubeVideoId && (
          <section className="py-16 lg:py-24 bg-background">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Watch Our #1 Delhi NCR Expert Explain</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  Learn more about managing {issue.title} from one of our top-ranked practitioners.
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                 <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src={`https://www.youtube.com/embed/${issue.youtubeVideoId}?rel=0&showinfo=0`}
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

        {issue.faq && issue.faq.length > 0 && (
          <section className="py-16 lg:py-24 bg-secondary">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Top Solutions & Answers for {issue.title} in Delhi NCR</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  Learn how our #1 ranked alternative treatments can help you manage {issue.title} from your home in Delhi, Gurgaon, or Noida.
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {issue.faq.map((item, index) => (
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
                <h2 className="text-3xl font-bold font-headline mb-4">Ready to Find Relief from {issue.title}? Rank Your Health #1</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Don't let {issue.title} hold you back. Our #1 team is ready to create a personalized, at-home treatment plan for you in the Delhi NCR area.
                </p>
                <Button asChild size="lg">
                    <Link href="/book-now">Book Your #1 Consultation Today</Link>
                </Button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HealthIssuePage;
