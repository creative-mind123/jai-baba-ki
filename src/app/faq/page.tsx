
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FAQ from '@/components/home/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - #1 At-Home Wellness in Delhi NCR | ICBR',
  description: 'Find answers to common questions about our #1 ranked at-home wellness services in Delhi, Gurgaon, Noida, and the entire NCR. Learn about our top-ranked services, booking process, and practitioners.',
};

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
