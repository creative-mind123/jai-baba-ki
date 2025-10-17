
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';
import BookingArea from '@/components/booking/BookingArea';

export const metadata: Metadata = {
  title: 'Book #1 At-Home Wellness Service in Delhi NCR | ICBR',
  description: 'Stop waiting and start healing. Book the best at-home physiotherapy, yoga, or ayurveda session in Delhi, Gurgaon & Noida today. Get top-ranked care delivered to you.',
};

export default function BookNowPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
             <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary">Book The #1 At-Home Wellness Service in Delhi NCR</h1>
             <p className="text-lg text-muted-foreground">
              Tired of traffic and waiting rooms? Get the best, personalized care from top-ranked practitioners delivered to your doorstep. Your path to wellness in Delhi, Gurgaon, and Noida is just a few clicks away.
             </p>
              <Card className="bg-secondary/50 border-secondary">
                <CardContent className="p-6">
                   <h2 className="text-xl font-bold mb-4">Why Choose Delhi NCR's Best At-Home Wellness?</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <span><span className="font-semibold">Ultimate Convenience:</span> Save time and energy. We bring top-ranked healing to your home, anywhere in Delhi NCR.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <span><span className="font-semibold">Personalized For You:</span> Receive one-on-one attention and a treatment plan tailored for the best results.</span>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <span><span className="font-semibold">Comfort & Privacy:</span> Heal in the comfort of your own space, where you can relax and focus on your wellness journey.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <span><span className="font-semibold">Delhi's Top Practitioners:</span> Our certified and experienced team is dedicated to providing the highest quality of care in the NCR.</span>
                        </li>
                    </ul>
                </CardContent>
              </Card>
              <p className="text-center text-muted-foreground font-medium pt-4">
                Fill out the form to secure your appointment. Our team will call you to confirm your booking.
              </p>
          </div>
          <div>
            <BookingArea />
          </div>
        </div>
      </div>
    </main>
  );
}
