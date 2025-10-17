
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Target, CheckCircle, Building, Home, School, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';
import IcbrLogo from '@/components/common/IcbrLogo';

export const metadata: Metadata = {
  title: 'About ICBR | #1 Holistic Wellness Center in Delhi NCR',
  description: 'Learn about the International Center For Bio-Remedies (ICBR), our mission, and our expert team providing top-ranked holistic wellness services in Delhi NCR since 2022.',
};

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <section className="bg-secondary py-20 md:py-32 flex items-center text-center">
          <div className="container px-4">
              <div className="flex justify-center mb-4">
                <IcbrLogo className="h-14" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary">
                  About The International Center For Bio-Remedies
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground">
                 Established in 2022, we are Delhi NCR's #1 trusted partner in holistic health, bringing a diverse range of natural wellness practices to your doorstep.
              </p>
          </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4">
               <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mission: #1 Wellness in Delhi NCR</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                          ICBR was founded with a powerful mission: to make integrated, natural, and side-effect-free wellness accessible to everyone in the Delhi NCR. We are working to be the #1 choice for holistic health.
                      </p>
                      <div className="space-y-4">
                          <div className="flex items-start gap-4">
                              <div className="bg-primary/10 p-3 rounded-full mt-1">
                                  <Target className="w-6 h-6 text-primary"/>
                              </div>
                              <div>
                                  <h3 className="font-bold text-xl">Our Mission</h3>
                                  <p className="text-muted-foreground">To provide the highest quality, personalized, and integrated wellness services in Delhi, Gurgaon, and Noida, right at our clients' homes.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="bg-primary/10 p-3 rounded-full mt-1">
                                  <Users className="w-6 h-6 text-primary"/>
                              </div>
                              <div>
                                  <h3 className="font-bold text-xl">Our Expert Team</h3>
                                  <p className="text-muted-foreground">Our strength is our team of certified experts from Ayurveda, Physiotherapy, Yoga, and Naturopathy, dedicated to making us the #1 wellness provider in the NCR.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                       <Image
                          src="https://picsum.photos/600/800"
                          alt="A collage of holistic health practices offered in Delhi NCR"
                          data-ai-hint="holistic health"
                          fill
                          className="object-cover"
                      />
                  </div>
               </div>
          </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
          <div className="container px-4">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">Top-Ranked Wellness Solutions in Delhi NCR</h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      We deliver our expert wellness services wherever you are in the Delhi NCR, because top-ranked care should fit your lifestyle.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   <Card className="bg-background/70 hover:shadow-lg transition-shadow text-center">
                      <CardContent className="p-6">
                          <div className="flex justify-center mb-4">
                              <div className="bg-primary/10 p-4 rounded-full">
                                  <Home className="w-8 h-8 text-primary"/>
                              </div>
                          </div>
                          <h3 className="font-bold text-lg mb-2">#1 At-Home Services</h3>
                          <p className="text-sm text-muted-foreground">Receive personalized care from our experts in the comfort and privacy of your home in Delhi, Gurgaon, or Noida.</p>
                      </CardContent>
                  </Card>
                   <Card className="bg-background/70 hover:shadow-lg transition-shadow text-center">
                      <CardContent className="p-6">
                          <div className="flex justify-center mb-4">
                               <div className="bg-primary/10 p-4 rounded-full">
                                  <Building className="w-8 h-8 text-primary"/>
                              </div>
                          </div>
                          <h3 className="font-bold text-lg mb-2">Corporate Wellness Programs</h3>
                          <p className="text-sm text-muted-foreground">Boost employee productivity with our on-site wellness programs, workshops, and health sessions for companies in Delhi NCR.</p>
                      </CardContent>
                  </Card>
                   <Card className="bg-background/70 hover:shadow-lg transition-shadow text-center">
                      <CardContent className="p-6">
                          <div className="flex justify-center mb-4">
                               <div className="bg-primary/10 p-4 rounded-full">
                                  <School className="w-8 h-8 text-primary"/>
                              </div>
                          </div>
                          <h3 className="font-bold text-lg mb-2">Institute-Based Services</h3>
                          <p className="text-sm text-muted-foreground">We partner with institutions across the NCR to promote a culture of health and well-being among students and staff.</p>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>

      <section id="contact" className="py-16 lg:py-24">
          <div className="container text-center">
              <h2 className="text-3xl font-bold font-headline mb-4">Join Us on the Path to #1 Wellness</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Whether you're an individual seeking personal care or a company in Delhi NCR, ICBR is here to help. Contact us to learn more about our top-ranked services.
              </p>
              <div className="flex flex-col items-center gap-4">
                  <Button asChild size="lg">
                      <Link href="/book-now">Start Your Wellness Journey Today</Link>
                  </Button>
                  <a href="https://wa.me/917042788829" target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                      or Call / WhatsApp us at: <span className="font-bold">+91 70427 88829</span>
                  </a>
              </div>
          </div>
      </section>

    </main>
  );
}
