import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BookingForm from '@/components/booking/BookingForm';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Book Your At-Home Wellness Service in Delhi NCR | WellnessHub',
  description: 'Stop waiting and start healing. Book your personalized at-home physiotherapy, yoga, or ayurveda session in Delhi, Gurgaon, Noida & NCR today.',
};

export default function BookNowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6">
               <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Stop Waiting, Start Healing.</h1>
               <p className="text-lg text-muted-foreground">
                Tired of traffic, waiting rooms, and generic treatments? Get expert, personalized care delivered right to your doorstep. Your path to wellness in Delhi NCR is just a few clicks away.
               </p>
                <Card className="bg-secondary/50 border-secondary">
                  <CardContent className="p-6">
                     <h2 className="text-xl font-bold mb-4">Why Choose At-Home Wellness?</h2>
                      <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                              <span><span className="font-semibold">Ultimate Convenience:</span> Save time and energy. We bring the healing to your home, anywhere in Delhi NCR.</span>
                          </li>
                           <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                              <span><span className="font-semibold">Personalized For You:</span> Receive one-on-one attention and a treatment plan tailored to your specific needs and goals.</span>
                          </li>
                           <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                              <span><span className="font-semibold">Comfort & Privacy:</span> Heal in the comfort and privacy of your own space, where you can truly relax and focus.</span>
                          </li>
                          <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                              <span><span className="font-semibold">Trusted Practitioners:</span> Our certified and experienced team is dedicated to providing the highest quality of care.</span>
                          </li>
                      </ul>
                  </CardContent>
                </Card>
                <p className="text-center text-muted-foreground font-medium pt-4">
                  Fill out the form to secure your appointment. Our team will call you to confirm.
                </p>
            </div>
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}