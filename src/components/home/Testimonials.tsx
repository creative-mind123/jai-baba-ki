import { testimonials } from '@/lib/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Trusted by People Across Delhi NCR
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            See what our clients have to say about our personalized at-home wellness services.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={`Profile picture of ${testimonial.name}`}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location} - {testimonial.service}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-yellow-500 mb-2">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <blockquote className="italic text-muted-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
