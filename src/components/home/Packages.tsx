
import { Check, Star, HeartCrack } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { packages } from '@/lib/packages';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const painPoints = [
    "Chronic stress from work-life imbalance.",
    "Anxiety & fatigue despite a comfortable lifestyle.",
    "Poor sleep quality due to overthinking.",
    "Physical tension (headaches, back pain, neck stiffness).",
    "Digital burnout (constant phone & laptop use).",
    "Lack of emotional support despite a busy social life.",
    "Guilt of neglecting self-care while focusing on career/family.",
    "Feeling stuck in repetitive lifestyle patterns.",
    "Fear of long-term health issues due to current habits.",
    "Over-reliance on quick fixes (coffee, alcohol, OTC meds)."
];

const valuePropositions = [
    {
        question: "Is your approach backed by science?",
        answer: "Yes. Our integrated method combines time-tested holistic practices with evidence-based techniques from physiotherapy and psychology to ensure you receive a credible and effective wellness plan."
    },
    {
        question: "Will I get a personalized plan?",
        answer: "Absolutely. We don't believe in one-size-fits-all solutions. Every plan is tailored to your unique needs, lifestyle, and goals after a thorough initial consultation."
    },
    {
        question: "How soon will I see results?",
        answer: "Many clients report feeling noticeable improvements in stress levels, sleep, and pain within the first week. Our approach is designed for both immediate relief and sustainable, long-term wellness."
    },
    {
        question: "What is the environment like?",
        answer: "We provide a safe, non-judgmental, and completely confidential space for you to heal and grow. Your comfort and trust are our top priorities."
    },
    {
        question: "Do you treat both mind and body?",
        answer: "Yes, this is the core of our philosophy. We believe true wellness comes from addressing both physical and mental health together for a holistic and lasting impact."
    },
    {
        question: "What if I have a busy schedule?",
        answer: "We specialize in providing care for busy professionals and individuals. We offer flexible scheduling, including evenings and weekends, and bring our services directly to your home to save you time."
    },
    {
        question: "Who are your practitioners?",
        answer: "Our team consists of highly qualified and experienced professionals, including certified physiotherapists, psychologists, yoga instructors, and wellness experts, all dedicated to your well-being."
    },
    {
        question: "Are your packages affordable?",
        answer: "We offer transparently priced packages that provide exceptional value. By bundling services, we make comprehensive, long-term wellness more accessible and affordable than individual sessions."
    },
    {
        question: "How do you ensure my privacy?",
        answer: "Your privacy and confidentiality are paramount. All consultations, sessions, and records are handled with the utmost discretion and are strictly confidential."
    },
    {
        question: "What happens after my package ends?",
        answer: "Our goal is to empower you with the tools for long-term health. We provide guidance for maintaining your well-being after the package ends and are always available for follow-up consultations."
    },
];


export default function Packages() {
  return (
    <section id="packages" className="py-16 lg:py-24 bg-secondary">
      <div className="container px-4">
         <div className="mb-20">
             <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Are you dealing with...</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    If any of these sound familiar, you're not alone. Our integrated wellness approach is designed to address the root cause, not just the symptoms.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {painPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <HeartCrack className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Path to Holistic Wellness</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    We understand your concerns. Here’s how our approach is designed to provide you with the best care possible.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {valuePropositions.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>


        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Wellness Packages for Your Needs in Delhi NCR</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Whether you need a single session or a long-term wellness plan, we have an affordable and effective option for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {packages.map((pkg) => (
            <Card key={pkg.title} className={cn("flex flex-col", pkg.popular ? "border-primary border-2 shadow-lg relative" : "")}>
              {pkg.popular && (
                <Badge variant="default" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle as="h3" className="text-2xl">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold font-headline">₹{pkg.price.toLocaleString('en-IN')}</span>
                    {pkg.pricePerSession && (
                      <p className="text-sm text-muted-foreground">
                        (Just ₹{pkg.pricePerSession.toLocaleString('en-IN')} / session)
                      </p>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="/book-now">{pkg.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
