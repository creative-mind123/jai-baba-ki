
import Header from '@/components/common/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Packages from '@/components/home/Packages';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/common/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '#1 At-Home Wellness & Physiotherapy in Delhi NCR | ICBR',
  description: 'Top-rated at-home wellness services in Delhi, Gurgaon, Noida. Get the best physiotherapy, yoga, and Ayurveda care at your doorstep. Book a home visit today and rank your health #1.',
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Packages />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
