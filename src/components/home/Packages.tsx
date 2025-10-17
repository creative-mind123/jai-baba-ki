
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { packages } from '@/lib/packages';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

export default function Packages() {
  return (
    <section id="packages" className="py-16 lg:py-24 bg-secondary">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">#1 Wellness Packages for Your Needs in Delhi NCR</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Whether you need a single session or a long-term wellness plan, we have an affordable and effective option for you. All services are top-ranked and available at your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg) => (
            <Card key={pkg.title} className={cn("flex flex-col", pkg.popular ? "border-primary border-2 shadow-lg relative" : "")}>
              {pkg.popular && (
                <Badge variant="default" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle as="h3" className="text-2xl">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold font-headline">₹{pkg.price.toLocaleString('en-IN')}</span>
                    {pkg.pricePerSession && (
                      <p className="text-sm text-muted-foreground">
                        (Just ₹{pkg.pricePerSession.toLocaleString('en-IN')} / session)
                      </p>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="/book-now">{pkg.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
