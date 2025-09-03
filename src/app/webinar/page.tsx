
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const experts = [
    {
        name: 'Dr. Rahul Dev',
        title: 'Ayurveda Specialist',
        description: 'Focuses on identifying root-cause imbalances through Ayurvedic principles to manage chronic pain.',
        image: 'https://picsum.photos/100/100?random=1'
    },
    {
        name: 'Dr. Sheekha Yadav',
        title: 'Naturopathy Expert',
        description: 'Utilizes natural therapies and dietary changes to reduce inflammation and support the body\'s healing.',
        image: 'https://picsum.photos/100/100?random=2'
    },
    {
        name: 'Dr. Raj',
        title: 'Lead Physiotherapist',
        description: 'Specializes in corrective exercises and mobility training for long-term pain relief and functional improvement.',
        image: 'https://picsum.photos/100/100?random=3'
    }
];

const webinarFaq = [
    {
        question: "What kind of pain does this webinar address?",
        answer: "This webinar is designed for individuals suffering from chronic musculoskeletal pain, such as persistent back pain, neck pain, joint stiffness from arthritis, or ongoing muscle aches. The principles discussed can be applied to many forms of long-term discomfort."
    },
    {
        question: "Is this for me if I've already tried physiotherapy?",
        answer: "Yes, definitely. This webinar explores an integrated approach. While physiotherapy is a key component, you will learn how combining it with Ayurvedic and Naturopathic principles can enhance results and address underlying issues that a single therapy might not cover."
    },
    {
        question: "Will I get a specific treatment plan for my condition?",
        answer: "This webinar provides knowledge, techniques, and a framework for understanding integrated pain management. While it does not provide a specific diagnosis or treatment plan, you will gain actionable insights to apply and will understand how to seek a personalized plan from our experts."
    },
    {
        question: "Are the techniques discussed safe to try at home?",
        answer: "The experts focus on safe, foundational techniques. However, it is always recommended to consult with a qualified practitioner before starting any new exercise or health regimen, especially if you have a pre-existing medical condition. This webinar is for educational purposes."
    }
];


export default function WebinarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-16">
        <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary">Free Webinar: An Integrated Approach to Pain-Free Living</h1>
                <p className="text-lg md:text-xl text-muted-foreground mt-4">
                    Tired of temporary fixes and recurring pain? Watch our expert panel of doctors from Ayurveda, Naturopathy, and Physiotherapy as they reveal how a combined approach can lead to lasting relief.
                </p>
            </div>

            <Card className="max-w-4xl mx-auto mb-12 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                    <div className="aspect-w-16 aspect-h-9">
                         <Image
                            src="https://picsum.photos/800/450"
                            alt="A collage of wellness practices like yoga and ayurveda"
                            data-ai-hint="wellness workshop"
                            fill
                            className="object-cover"
                        />
                         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Button size="lg" variant="secondary" className="text-lg h-14 w-14 rounded-full p-0">
                                <PlayCircle className="w-10 h-10" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                     <div>
                        <h2 className="text-2xl font-bold mb-4">Are You Tired Of...</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>Pain that keeps coming back, no matter what you try?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>Relying on painkillers that only offer temporary relief?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>Feeling confused by conflicting medical advice?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>Missing out on daily activities because of your pain?</span>
                            </li>
                        </ul>
                    </div>

                     <div>
                        <h2 className="text-2xl font-bold mb-4">In This Webinar, You Will Learn:</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>The root causes of chronic pain from three expert perspectives.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>Simple, effective physiotherapy exercises for lasting relief.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>How Ayurvedic principles can identify and correct bodily imbalances.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                                <span>The role of diet and natural therapies in managing inflammation.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-8">
                     <div>
                        <h2 className="text-2xl font-bold mb-4">Meet Your Expert Panel</h2>
                        <div className="space-y-4">
                            {experts.map(expert => (
                                <div key={expert.name} className="flex items-start gap-4 p-4 border rounded-lg bg-secondary/30">
                                    <Avatar className="w-16 h-16 border-2 border-primary">
                                        <AvatarImage src={expert.image} alt={expert.name} />
                                        <AvatarFallback>{expert.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-bold text-lg">{expert.name}</h3>
                                        <p className="text-primary font-semibold">{expert.title}</p>
                                        <p className="text-sm text-muted-foreground mt-1">{expert.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle as="h2" className="text-2xl">Get Free Access Now!</CardTitle>
                            <CardDescription>Click the button below to watch the full webinar recording instantly.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button className="w-full" size="lg">
                                <PlayCircle className="mr-2" /> Watch The Webinar
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">Common Questions</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Answers to common questions about our integrated approach to pain management.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {webinarFaq.map((item, index) => (
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
