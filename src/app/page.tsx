import Header from '@/components/common/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Packages from '@/components/home/Packages';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/common/Footer';

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
