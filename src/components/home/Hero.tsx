import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[70vh] min-h-[500px] md:h-[85vh] md:min-h-[600px] flex items-center">
      <Image
        src="/my-hero-image.jpg"
        alt="A person doing yoga on a home balcony with mountains and greenery at sunrise"
        data-ai-hint="wellness landscape"
        fill
        className="object-cover object-center -z-10 brightness-50"
        priority
      />
      <div className="container text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
          Integrated Wellness, Delivered to Your Delhi NCR Home
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl drop-shadow-md">
          Discover a holistic path to health with our expert at-home services in Ayurveda, Physiotherapy, Yoga, and more, across Delhi, Gurgaon, Noida, and the entire NCR.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/book-now">Book a Consultation</Link>
        </Button>
      </div>
    </section>
  );
}
