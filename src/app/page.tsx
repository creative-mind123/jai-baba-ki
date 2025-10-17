
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Packages from '@/components/home/Packages';
import FAQ from '@/components/home/FAQ';
import { Metadata } from 'next';
import TestimonialsWrapper from '@/components/home/TestimonialsWrapper';

export const metadata: Metadata = {
  title: '#1 At-Home Wellness & Physiotherapy in Delhi NCR | ICBR',
  description: 'Top-ranked at-home wellness services in Delhi, Gurgaon, Noida. Get the best physiotherapy, yoga, and Ayurveda care at your doorstep. Book a home visit today and rank your health #1.',
};

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <Packages />
      <TestimonialsWrapper />
      <FAQ />
    </main>
  );
}
