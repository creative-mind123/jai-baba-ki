import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesList } from '@/lib/services';
import { Button } from '../ui/button';

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our At-Home Wellness Services in Delhi NCR</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A complete suite of alternative treatments to nurture your body, mind, and spirit, delivered directly to your home in the Delhi National Capital Region.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <Card key={service.title} className="text-center group hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                <div className="bg-secondary p-4 rounded-full">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle as="h3" className="mt-4 text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button asChild variant="outline">
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
