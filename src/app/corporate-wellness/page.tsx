
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, Smile, UserMinus, HeartHandshake, Leaf, Wind, ShieldCheck, Waves } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Wellness Programs in Delhi, Gurgaon, Noida | ICBR',
  description: 'Ranked #1 for Corporate Wellness Programs in Delhi NCR. Boost productivity and morale with our expert-led on-site yoga, stress management, and health workshops in Gurgaon & Noida.',
};

const benefits = [
    {
        icon: TrendingUp,
        title: 'Boost Productivity',
        description: 'Our corporate wellness programs in Delhi are proven to reduce burnout and enhance mental clarity, leading to a more productive workforce.'
    },
    {
        icon: Smile,
        title: 'Improve Employee Morale',
        description: 'Show your team you value their well-being. A positive environment with our wellness services helps attract and retain top talent in Gurgaon.'
    },
    {
        icon: UserMinus,
        title: 'Reduce Absenteeism',
        description: 'Proactive wellness programs in Noida help reduce stress-related illnesses, leading to fewer sick days and a more reliable workforce.'
    },
    {
        icon: HeartHandshake,
        title: 'Enhance Company Culture',
        description: 'Foster a supportive and energetic company culture in your Delhi NCR office, centered around holistic health and mutual respect.'
    },
]

const services = [
    {
        icon: Waves,
        title: 'On-site Office Yoga',
        description: 'Guided yoga & meditation sessions in your Delhi NCR office to de-stress, improve focus, and increase flexibility.'
    },
    {
        icon: Leaf,
        title: 'Stress Management Workshops',
        description: 'Equip your team with proven techniques from Ayurveda and Naturopathy to build resilience and mental clarity in the workplace.'
    },
     {
        icon: ShieldCheck,
        title: 'Workplace Ergonomic Assessments',
        description: 'Our physiotherapists provide on-site ergonomic assessments in Gurgaon to prevent workplace injuries like back and neck pain.'
    },
    {
        icon: Wind,
        title: 'Mindfulness & Breathwork',
        description: 'Simple, powerful tools to calm the nervous system and enhance employee presence and focus in your Noida office.'
    },
]

export default function CorporateWellnessPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-20 bg-secondary">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                      <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">#1 Corporate Wellness Programs in Delhi NCR</h1>
                      <p className="text-lg md:text-xl text-muted-foreground">
                          Elevate your workplace with Delhi's top corporate wellness programs. Drive success with our on-site solutions in Gurgaon, Noida, and across the NCR.
                      </p>
                      <Button asChild size="lg" className="mt-6">
                          <Link href="/book-now?service=corporate-wellness">Request a Custom Plan for Your Team</Link>
                      </Button>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                      <Image
                          src="/corporate wellness.png"
                          alt="Top Corporate Wellness Programs in Delhi NCR"
                          data-ai-hint="corporate wellness"
                          fill
                          className="object-cover"
                      />
                  </div>
              </div>
          </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-background">
          <div className="container px-4">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Employee Wellness is a Top Priority in Delhi NCR</h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      Move beyond generic perks. Our integrated approach delivers tangible returns for your business by fostering a healthier, more engaged workforce in Delhi, Gurgaon, and Noida.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {benefits.map(benefit => (
                      <Card key={benefit.title} className="text-center border-0 shadow-none bg-transparent">
                          <CardHeader className="items-center">
                               <div className="bg-primary/10 p-4 rounded-full">
                                  <benefit.icon className="w-8 h-8 text-primary"/>
                              </div>
                              <CardTitle as="h3" className="mt-4 text-xl">{benefit.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{benefit.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
          <div className="container px-4">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Corporate Health & Wellness Solutions in Gurgaon & Noida</h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      We build sustainable wellness habits with time-tested, natural therapies customized for the modern corporate environment in Delhi NCR.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   {services.map(service => (
                      <Card key={service.title} className="bg-background/70 hover:shadow-lg transition-shadow">
                          <CardContent className="p-6 text-center">
                              <div className="flex justify-center mb-4">
                                   <div className="bg-primary/10 p-4 rounded-full">
                                      <service.icon className="w-8 h-8 text-primary"/>
                                  </div>
                              </div>
                              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                          </CardContent>
                      </Card>
                   ))}
              </div>
               <div className="text-center mt-12">
                  <p className="text-muted-foreground">We also offer on-site therapeutic massage, nutrition workshops, and more. All programs are fully customizable for your company in Delhi NCR.</p>
              </div>
          </div>
      </section>

      <section id="contact" className="py-16 lg:py-24 bg-background">
          <div className="container text-center">
              <h2 className="text-3xl font-bold font-headline mb-4">Build a Healthier, Happier Team in Delhi NCR</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's create a custom corporate wellness program for your organization in Delhi, Gurgaon, or Noida. Contact us today for a free consultation and a tailored proposal that ranks best for your needs.
              </p>
              <Button asChild size="lg">
                  <Link href="/book-now?service=corporate-wellness">Get Your Free Consultation Today</Link>
              </Button>
          </div>
      </section>

    </main>
  );
}
