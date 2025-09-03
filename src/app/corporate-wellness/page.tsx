
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, Smile, UserMinus, HeartHandshake, Leaf, Wind, ShieldCheck, Waves } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Wellness Programs in Delhi NCR | ICBR',
  description: 'Boost productivity and employee morale with our unique, natural, and side-effect-free corporate wellness programs in Delhi, Gurgaon, and Noida.',
};

const benefits = [
    {
        icon: TrendingUp,
        title: 'Boost Productivity',
        description: 'A healthy, focused team is a productive team. Our programs are designed to reduce burnout and enhance mental clarity.'
    },
    {
        icon: Smile,
        title: 'Improve Morale',
        description: 'Show your employees you value their well-being. A positive work environment helps attract and retain top talent.'
    },
    {
        icon: UserMinus,
        title: 'Reduce Absenteeism',
        description: 'Proactive wellness programs help reduce stress-related illnesses, leading to fewer sick days and a more reliable workforce.'
    },
    {
        icon: HeartHandshake,
        title: 'Enhance Company Culture',
        description: 'Foster a supportive and energetic company culture centered around holistic health and mutual respect.'
    },
]

const services = [
    {
        icon: Waves,
        title: 'On-site Yoga & Meditation',
        description: 'Guided sessions to de-stress, improve focus, and increase flexibility right in your office.'
    },
    {
        icon: Leaf,
        title: 'Stress Management Workshops',
        description: 'Learn natural techniques from Ayurveda and Naturopathy to build resilience and mental clarity.'
    },
     {
        icon: ShieldCheck,
        title: 'Ergonomic Assessments',
        description: 'Our physiotherapists provide assessments and exercises to prevent workplace injuries like back and neck pain.'
    },
    {
        icon: Wind,
        title: 'Mindfulness & Breathwork',
        description: 'Equip your team with simple, powerful tools to calm the nervous system and enhance employee presence.'
    },
]

export default function CorporateWellnessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 flex items-center text-center bg-secondary/50">
             <Image
                src="/wellness.png"
                alt="A diverse group of office employees participating in a yoga and wellness session"
                data-ai-hint="corporate wellness"
                fill
                className="object-cover object-center -z-10 brightness-[.7]"
                priority
            />
            <div className="container text-white px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold drop-shadow-lg">
                    Invest in Your Team's Well-being, Invest in Your Success.
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl drop-shadow-md">
                   Elevate your workplace with our unique, side-effect-free corporate wellness programs. Designed to nurture your team's health and drive your company's growth in Delhi NCR.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="#contact">Request a Custom Plan</Link>
                </Button>
            </div>
        </section>
        
        <section className="py-16 lg:py-24 bg-background">
            <div className="container px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Why Holistic Wellness is a Business Imperative</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Move beyond generic perks. Our natural, integrated approach delivers tangible returns for your business and your people by fostering a healthier, more engaged workforce.
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
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Corporate Wellness Solutions</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We don't offer quick fixes. We build sustainable wellness habits with time-tested, natural therapies customized for the corporate environment.
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
                    <p className="text-muted-foreground">We also offer on-site therapeutic massage, nutrition workshops, and more. All programs are fully customizable to fit your company's needs.</p>
                </div>
            </div>
        </section>

        <section id="contact" className="py-16 lg:py-24 bg-background">
            <div className="container text-center">
                <h2 className="text-3xl font-bold font-headline mb-4">Ready to Build a Healthier, Happier Team?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                    Let's create a custom corporate wellness program for your organization in Delhi, Gurgaon, or Noida. Contact us today for a complimentary consultation and tailored proposal.
                </p>
                <Button asChild size="lg">
                    <Link href="/book-now?service=corporate-wellness">Get a Free Consultation</Link>
                </Button>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
