
import { locations } from '@/lib/locations';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import Services from '@/components/home/Services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  params: { slug: string }
}

const gurgaonData = locations.find(l => l.slug === 'gurgaon');
const subLocations = gurgaonData?.subLocations || [];

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const subLocation = subLocations.find(l => l.slug === params.slug);

  if (!subLocation) {
    return {
      title: 'Area Not Served',
    };
  }

  return {
    title: `#1 Doctor Visit at Home in ${subLocation.name}, Gurgaon | ICBR`,
    description: `Get top-ranked doctor visits and #1 at-home wellness services in ${subLocation.name}. We are the best provider of physiotherapy & yoga for residents of ${subLocation.name}, Gurgaon. Book today.`,
  }
}

export async function generateStaticParams() {
  return subLocations.map((location) => ({
    slug: location.slug,
  }))
}

const GurgaonSubLocationPage = ({ params }: { params: { slug: string } }) => {
  const subLocation = subLocations.find(l => l.slug === params.slug);

  if (!subLocation || !gurgaonData) {
    notFound();
  }

  return (
    <main className="flex-1">
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-primary font-semibold">Gurgaon / {subLocation.name}</p>
              <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">#1 Doctor Visit at Home in {subLocation.name}</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                  Get top-ranked, professional, compassionate care from #1 certified practitioners in {subLocation.name}. We bring a range of best-in-class wellness services, including physiotherapy and expert consultations, right to your doorstep.
              </p>
               <Button asChild size="lg" className="mt-6">
                <Link href="/book-now">Book a #1 Home Visit in {subLocation.name}</Link>
              </Button>
            </div>
             <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={gurgaonData.image.src}
                alt={`#1 At-home wellness services in ${subLocation.name}, Gurgaon`}
                data-ai-hint={gurgaonData.image.aiHint}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Services />

       <section className="py-16 lg:py-24 text-center bg-background">
          <div className="container">
              <h2 className="text-3xl font-bold font-headline mb-4">Get #1 Wellness Delivered to Your Doorstep in {subLocation.name}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                 Ready to experience the best at-home wellness care in Gurgaon? Book your appointment in {subLocation.name} today and let our #1 certified experts come to you.
              </p>
              <Button asChild size="lg">
                  <Link href="/book-now">Schedule Your #1 Visit in {subLocation.name}</Link>
              </Button>
          </div>
      </section>
    </main>
  );
};

export default GurgaonSubLocationPage;
