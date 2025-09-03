import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FAQ from '@/components/home/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | WellnessHub Delhi NCR',
  description: 'Find answers to common questions about our at-home wellness services in Delhi, Gurgaon, Noida, and the entire NCR. Learn about our services, booking process, and practitioners.',
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
