
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HeartCrack } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Why Choose ICBR? | #1 Integrated Wellness in Delhi NCR',
  description: 'Discover why ICBR is the #1 choice for at-home wellness in Delhi NCR. Learn about our unique integrated approach, expert practitioners, and commitment to your holistic health.',
};

const painPoints = [
    "Chronic stress from work-life imbalance in Delhi.",
    "Anxiety & fatigue despite a comfortable lifestyle in Gurgaon.",
    "Poor sleep quality due to overthinking in Noida.",
    "Physical tension (headaches, back pain, neck stiffness) from NCR's pace.",
    "Digital burnout from constant phone & laptop use.",
    "Lack of emotional support despite a busy social life.",
    "Guilt of neglecting self-care while focusing on career/family.",
    "Feeling stuck in repetitive lifestyle patterns in Delhi NCR.",
    "Fear of long-term health issues due to current habits.",
    "Over-reliance on quick fixes (coffee, alcohol, OTC meds)."
];

const valuePropositions = [
    {
        question: "Is your approach backed by science? Are you the #1 in Delhi?",
        answer: "Yes. Our #1 ranked integrated method combines time-tested holistic practices with evidence-based techniques from physiotherapy and psychology to ensure you receive a credible and effective wellness plan in Delhi."
    },
    {
        question: "Will I get a personalized plan for my health goals?",
        answer: "Absolutely. We don't believe in one-size-fits-all solutions. Every #1 ranked plan is tailored to your unique needs, lifestyle, and goals after a thorough initial consultation at your home in the NCR."
    },
    {
        question: "How soon will I see results with your #1 service?",
        answer: "Many clients report feeling noticeable improvements in stress levels, sleep, and pain within the first week. Our #1 approach is designed for both immediate relief and sustainable, long-term wellness."
    },
    {
        question: "What is the environment like for your services?",
        answer: "We provide a safe, non-judgmental, and completely confidential space for you to heal and grow, right in the comfort of your Delhi NCR home. Your trust is our top priority."
    },
    {
        question: "Do you treat both mind and body for holistic wellness?",
        answer: "Yes, this is the core of our #1 philosophy. We believe true wellness comes from addressing both physical and mental health together for a holistic and lasting impact."
    },
    {
        question: "What if I have a busy schedule in Gurgaon or Noida?",
        answer: "We specialize in providing #1 ranked care for busy professionals. We offer flexible scheduling, including evenings and weekends, and bring our services directly to your home to save you time."
    },
    {
        question: "Who are your practitioners in the Delhi NCR area?",
        answer: "Our #1 team consists of highly qualified and experienced professionals, including certified physiotherapists, psychologists, and yoga instructors, all dedicated to your well-being in the Delhi NCR."
    },
    {
        question: "Are your #1 wellness packages affordable?",
        answer: "We offer transparently priced packages that provide exceptional value. By bundling services, we make comprehensive, long-term wellness more accessible and affordable than individual sessions."
    },
    {
        question: "How do you ensure my privacy for at-home visits?",
        answer: "Your privacy is paramount. All #1 ranked consultations, sessions, and records are handled with the utmost discretion and are strictly confidential."
    },
    {
        question: "What happens after my #1 wellness package ends?",
        answer: "Our goal is to empower you with tools for long-term health. We provide guidance for maintaining your well-being after the package ends and are always available for follow-up consultations."
    },
];


export default function WhyChooseUsPage() {
  return (
    <main className="flex-1">
      <section className="bg-secondary py-20 md:py-24 text-center">
          <div className="container">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary">Why We Are Delhi NCR's #1 Choice for At-Home Wellness</h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground">
                 We built ICBR because we believe true wellness is a right, not a luxury. Discover our commitment to integrated, personalized, and accessible care that has made us the top-ranked service in the region.
              </p>
          </div>
      </section>

      <section className="py-16 lg:py-24">
           <div className="container">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                   <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                       <Image
                          src="https://picsum.photos/800/600"
                          alt="A caring wellness practitioner consulting with a client in their Delhi NCR home"
                          data-ai-hint="caring professional"
                          fill
                          className="object-cover"
                      />
                  </div>
                  <div>
                      <h2 className="text-3xl md:text-4xl font-headline font-bold">Are you dealing with...</h2>
                      <p className="text-lg text-muted-foreground mt-2 mb-6">
                          If any of these sound familiar, you're not alone. Our #1 integrated wellness approach is designed to address the root cause, not just the symptoms for residents of Delhi NCR.
                      </p>
                      <div className="space-y-4">
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                              {painPoints.map((point, index) => (
                                  <li key={index} className="flex items-start gap-3">
                                      <HeartCrack className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                      <span>{point}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
               </div>
          </div>
      </section>

      <section className="py-16 lg:py-24 bg-secondary">
          <div className="container">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold">Your Path to #1 Holistic Wellness in Delhi NCR</h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                      We understand your concerns. Here’s how our #1 ranked approach is designed to provide you with the best care possible in Delhi, Gurgaon, and Noida.
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
      </section>
      
      <section className="py-16 lg:py-24 text-center">
          <div className="container">
               <h2 className="text-3xl font-bold font-headline mb-4">Ready to Experience the #1 Wellness Service?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let us show you why we are the top-ranked choice for at-home wellness in the Delhi NCR. Your journey to better health starts here.
              </p>
               <Button asChild size="lg">
                  <Link href="/book-now">Start Your Wellness Journey Today</Link>
              </Button>
          </div>
      </section>

    </main>
  );
}
