
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Target, CheckCircle, Building, Home, School, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';
import IcbrLogo from '@/components/common/IcbrLogo';

export const metadata: Metadata = {
  title: 'About ICBR | Integrated Holistic Wellness in Delhi NCR',
  description: 'Learn about the International Center For Bio-Remedies (ICBR), our mission, and our expert team providing holistic wellness services in Delhi NCR since 2022.',
};

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
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
                   Established in 2022, we are your trusted partner in holistic health, bringing a diverse range of natural wellness practices to your doorstep across the Delhi NCR.
                </p>
            </div>
        </section>
        
        <section className="py-16 lg:py-24 bg-background">
            <div className="container px-4">
                 <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Mission & Vision</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            ICBR was founded with a simple yet powerful mission: to make integrated, natural, and side-effect-free wellness accessible to everyone. We envision a world where holistic health is not a luxury, but a fundamental part of daily life, leading to healthier and happier communities.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full mt-1">
                                    <Target className="w-6 h-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Our Mission</h3>
                                    <p className="text-muted-foreground">To provide high-quality, personalized, and integrated wellness services at the convenience of our clients' homes, workplaces, and institutes.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full mt-1">
                                    <Users className="w-6 h-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Our Team</h3>
                                    <p className="text-muted-foreground">Our strength lies in our team of certified and experienced experts from diverse holistic practices, including Ayurveda, Physiotherapy, Yoga, and Naturopathy, all dedicated to your well-being.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                         <Image
                            src="https://picsum.photos/600/800"
                            alt="A collage representing various holistic practices"
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
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Comprehensive Wellness Solutions</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We believe in care that fits your lifestyle. That's why we deliver our expert services wherever you are in the Delhi NCR.
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
                            <h3 className="font-bold text-lg mb-2">Home-Based Services</h3>
                            <p className="text-sm text-muted-foreground">Receive personalized, one-on-one care from our experts in the comfort and privacy of your own home.</p>
                        </CardContent>
                    </Card>
                     <Card className="bg-background/70 hover:shadow-lg transition-shadow text-center">
                        <CardContent className="p-6">
                            <div className="flex justify-center mb-4">
                                 <div className="bg-primary/10 p-4 rounded-full">
                                    <Building className="w-8 h-8 text-primary"/>
                                </div>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Corporate Wellness</h3>
                            <p className="text-sm text-muted-foreground">Boost employee morale and productivity with our on-site wellness programs, workshops, and health sessions.</p>
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
                            <p className="text-sm text-muted-foreground">We partner with educational and other institutions to promote a culture of health and well-being among students and staff.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section id="contact" className="py-16 lg:py-24">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">Join Us on the Path to Wellness</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Whether you're an individual seeking personal care or an organization looking to foster a healthy environment, ICBR is here to help. Contact us to learn more about our services in Delhi NCR.
                </p>
                <div className="flex flex-col items-center gap-4">
                    <Button asChild size="lg">
                        <Link href="/book-now">Start Your Wellness Journey</Link>
                    </Button>
                    <a href="https://wa.me/917042788829" target="_blank" rel="noopener noreferrer" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                        or Call / WhatsApp us at: <span className="font-bold">+91 70427 88829</span>
                    </a>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
