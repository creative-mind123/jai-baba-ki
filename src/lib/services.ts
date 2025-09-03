
import {
  Leaf,
  Flower2,
  Droplets,
  HeartPulse,
  BrainCircuit,
  Sparkles,
  PersonStanding,
  Crosshair,
  Hand,
  Laptop,
  Salad,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FAQItem } from './faq';

export type Service = {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: {
    src: string;
    alt: string;
    aiHint: string;
  };
  faq: FAQItem[];
  youtubeVideoId?: string;
};

export const servicesList: Service[] = [
  {
    icon: Leaf,
    title: 'Ayurveda Consultation',
    slug: 'ayurveda-consultation-delhi-ncr',
    description: 'Ancient wisdom for modern ailments. At-home consultations in Delhi, Gurgaon, and Noida.',
    longDescription: 'Our Ayurveda experts in Delhi NCR provide personalized at-home consultations to address your unique health concerns. We create holistic treatment plans combining diet, lifestyle, and herbal remedies to restore your natural balance and help you find relief from chronic issues.',
    image: {
      src: 'https://picsum.photos/600/400?random=51',
      alt: 'An Ayurvedic doctor providing a consultation to a patient at their home in Delhi NCR.',
      aiHint: 'ayurveda doctor'
    },
    faq: [
        { question: 'What happens in a first Ayurveda consultation?', answer: 'Your first session involves a detailed assessment (Prakriti analysis) of your health history, lifestyle, and dosha (body constitution). Our expert will then create a personalized wellness plan for you, available anywhere in Delhi, Gurgaon, Noida, or the wider NCR.' },
        { question: 'Is Ayurvedic treatment effective for stress and digestion?', answer: 'Yes, Ayurveda is highly effective for managing stress, improving digestion, and treating many chronic lifestyle diseases. Our treatments are natural and aim for long-term wellness.' }
    ]
  },
  {
    icon: Flower2,
    title: 'Naturopathy',
    slug: 'naturopathy-at-home-ncr',
    description: 'Harnessing nature\'s power to heal and restore balance. Available across the NCR.',
    longDescription: 'Experience the healing power of nature with our at-home Naturopathy services across Delhi and NCR. We focus on natural therapies like hydrotherapy, mud therapy, and nutrition counseling to detoxify your body, boost immunity, and manage chronic conditions.',
    image: {
      src: 'https://picsum.photos/600/400?random=52',
      alt: 'A display of natural herbs and remedies used in Naturopathy in an NCR home.',
      aiHint: 'naturopathy treatment'
    },
     faq: [
        { question: 'What conditions can Naturopathy help with?', answer: 'Naturopathy is effective for a wide range of chronic conditions, including digestive issues (like IBS), allergies, skin problems (like eczema), and stress-related ailments, with at-home service in the entire Delhi NCR region.' },
        { question: 'What does a naturopathy home session include?', answer: 'A session may include dietary and lifestyle advice, hydrotherapy, or mud therapy application, depending on your specific health needs. Our practitioner brings all necessary equipment to your home.' }
    ]
  },
  {
    icon: Droplets,
    title: 'Homeopathy',
    slug: 'homeopathy-doctor-delhi',
    description: 'Gentle, non-invasive remedies for long-term wellness from a home-visit doctor in Delhi.',
    longDescription: 'Our qualified homeopathy doctors in Delhi offer gentle, individualized, and effective treatments for a wide range of chronic and acute conditions. We provide remedies that stimulate the body\'s own healing abilities for lasting wellness without side effects.',
    image: {
      src: 'https://picsum.photos/600/400?random=53',
      alt: 'Homeopathic pills and liquid dilutions being prepared by a doctor in Delhi.',
      aiHint: 'homeopathy medicine'
    },
     faq: [
        { question: 'How long does homeopathic treatment take to show results?', answer: 'The timeline varies depending on the individual and the chronicity of the condition. Our Delhi-based doctors focus on gradual, deep-seated, long-term healing rather than temporary quick fixes.' },
        { question: 'Are homeopathic remedies safe for children and elderly?', answer: 'Yes, homeopathic remedies are made from natural substances and are highly diluted, making them extremely safe and ideal for all age groups, from children to the elderly, when prescribed by a qualified practitioner.' }
    ]
  },
  {
    icon: HeartPulse,
    title: 'Physiotherapy',
    slug: 'home-physiotherapy-delhi-ncr',
    description: 'Expert home-visit physiotherapy in Delhi NCR for pain relief, mobility, and post-surgery rehabilitation.',
    longDescription: 'Get expert physiotherapy care in the comfort of your home in Delhi NCR. Our certified physiotherapists specialize in post-surgery rehab, stroke recovery, sports injuries, arthritis, and chronic pain management, using advanced techniques for a speedy recovery.',
    image: {
      src: 'https://picsum.photos/600/400?random=54',
      alt: 'A physiotherapist assisting a patient with mobility exercises in their Delhi NCR home.',
      aiHint: 'physiotherapy exercise'
    },
    youtubeVideoId: 'dO7p0c2vY6I',
    faq: [
        { question: 'Do you provide physiotherapy for back pain at home?', answer: 'Yes, back pain is one of the most common conditions we treat. Our physiotherapists create custom exercise plans for back and neck pain relief. We serve all of Delhi & NCR.' },
        { question: 'What kind of equipment do you bring for a home physiotherapy session?', answer: 'Our physiotherapists bring all necessary portable equipment, such as resistance bands, therapeutic balls, IFT, TENS, and ultrasound units, to conduct a complete and professional session at your home.' }
    ]
  },
  {
    icon: BrainCircuit,
    title: 'Mental Counseling',
    slug: 'mental-counseling-ncr',
    description: 'Confidential support for your mental and emotional well-being at home in Delhi NCR.',
    longDescription: 'We provide confidential and compassionate mental health counseling services at your home or online in the Delhi NCR region. Our licensed therapists help you navigate challenges like stress, anxiety, depression, and relationship issues in a safe and supportive environment.',
    image: {
      src: 'https://picsum.photos/600/400?random=55',
      alt: 'A compassionate counselor providing a mental health session.',
      aiHint: 'therapy session'
    },
     faq: [
        { question: 'Is at-home counseling as effective as visiting a clinic?', answer: 'Yes, for many people, being in a familiar and private environment makes it easier to open up. Our NCR-based counselors ensure a professional, confidential, and effective session.' },
        { question: 'How do you ensure my privacy during a counseling session?', answer: 'Client confidentiality is our highest priority. All conversations and records are kept private, and our therapists adhere to strict ethical guidelines to protect your information.' }
    ]
  },
  {
    icon: Sparkles,
    title: 'Reiki Healing',
    slug: 'reiki-healing-delhi',
    description: 'Energy healing to reduce stress, anxiety and promote relaxation, available across Delhi.',
    longDescription: 'Discover deep relaxation and stress relief with our at-home Reiki healing sessions in Delhi. Our certified Reiki masters channel universal life force energy to clear emotional blockages, balance your chakras, and promote emotional and physical healing.',
    image: {
      src: 'https://picsum.photos/600/400?random=56',
      alt: 'A Reiki master performing energy healing on a client in a serene room in Delhi.',
      aiHint: 'reiki therapy'
    },
     faq: [
        { question: 'What does a Reiki session feel like?', answer: 'Clients often report feeling a gentle warmth, deep relaxation, and a sense of peace and lightness during and after the session. It\'s a non-invasive and profoundly calming experience.' },
        { question: 'How can Reiki help with my anxiety?', answer: 'Reiki helps calm the nervous system and clear energetic blockages caused by stress and anxiety. Regular sessions in Delhi can lead to a more balanced and peaceful state of mind.' }
    ]
  },
  {
    icon: PersonStanding,
    title: 'Yoga at Home',
    slug: 'private-yoga-instructor-ncr',
    description: 'Personalized one-on-one yoga sessions for flexibility, strength, and peace in Delhi NCR.',
    longDescription: 'Our certified private yoga instructors in NCR create personalized yoga routines tailored to your body type, fitness level, and health goals. Whether you want to manage weight, reduce stress, or improve flexibility, we help you achieve your goals safely.',
    image: {
      src: 'https://picsum.photos/600/400?random=57',
      alt: 'A person practicing yoga with a private instructor in their living room in Noida.',
      aiHint: 'yoga pose'
    },
    youtubeVideoId: '412234371',
    faq: [
        { question: 'I have never done yoga before. Is a private instructor at home right for me?', answer: 'Absolutely! Our private instructors in the NCR region specialize in creating tailored programs for beginners, ensuring you learn with proper form, alignment, and at your own pace.' },
        { question: 'What style of yoga do you teach for weight loss?', answer: 'For weight management, our instructors often focus on dynamic styles like Vinyasa and Power Yoga. However, the plan is always customized to your specific needs and current fitness level.' }
    ]
  },
   {
    icon: Salad,
    title: 'Diet and Nutrition',
    slug: 'diet-nutrition-consultation-ncr',
    description: 'Personalized diet plans for weight management, and therapeutic nutrition in Delhi NCR.',
    longDescription: 'Achieve your health and wellness goals with our expert diet and nutrition counseling. Our certified nutritionists provide personalized meal plans for weight management, sports nutrition, and managing health conditions like diabetes and PCOS at your home.',
    image: {
      src: 'https://picsum.photos/600/400?random=58',
      alt: 'A display of healthy food for diet and nutrition consultation.',
      aiHint: 'healthy food'
    },
    faq: [
      { question: 'Do you provide diet plans for weight loss?', answer: 'Yes, we create customized, easy-to-follow diet plans tailored to your lifestyle and food preferences to help you achieve sustainable weight loss. Home consultations are available across Delhi NCR.' },
      { question: 'Can a nutritionist help me manage my diabetes through diet?', answer: 'Absolutely. Our nutritionists specialize in creating therapeutic diets to help manage blood sugar levels, improve insulin sensitivity, and complement your medical treatment for diabetes.' },
      { question: 'What is the difference between a dietitian and a nutritionist?', answer: 'While the terms are often used interchangeably, a dietitian is a registered professional with specific qualifications to provide medical nutrition therapy. Our team consists of certified nutritionists and registered dietitians to provide you with the highest level of expert advice for your specific health needs.' },
      { question: 'I have a busy schedule. Can you create a plan that is easy to follow?', answer: 'Definitely. We specialize in creating practical and realistic diet plans that fit into your busy lifestyle. We consider your work hours, travel, and cooking skills to ensure the plan is sustainable for you. At-home consultations in Delhi NCR make it even more convenient.' },
      { question: 'Do you also provide guidance for sports nutrition?', answer: 'Yes, we offer specialized sports nutrition plans to help athletes and fitness enthusiasts enhance their performance, build muscle, and recover faster. Our experts work with you to align your nutrition with your training regimen.' }
    ]
  },
  {
    icon: Crosshair,
    title: 'TCM Therapies',
    slug: 'tcm-therapies-gurgaon',
    description: 'Acupressure, acupuncture, and cupping for targeted relief at your home in Gurgaon.',
    longDescription: 'We offer Traditional Chinese Medicine (TCM) therapies like acupuncture, acupressure, and cupping at your home in Gurgaon and across NCR. These ancient techniques are effective for chronic pain management, stress reduction, and overall wellness.',
    image: {
      src: 'https://picsum.photos/600/400?random=59',
      alt: 'A client receiving a TCM therapy session at their home in Gurgaon.',
      aiHint: 'tcm treatment'
    },
     faq: [
        { question: 'Is cupping therapy painful?', answer: 'Cupping may leave temporary circular marks but is generally not painful. Our Gurgaon-based practitioners ensure the pressure is comfortable for you, providing deep relief from muscle tension and pain.' },
        { question: 'What conditions can be treated with acupuncture?', answer: 'Acupuncture is recognized for its effectiveness in treating a wide variety of conditions, including migraines, sciatica, joint pain, insomnia, and digestive issues. We provide these services at your home.' }
    ]
  },
  {
    icon: Hand,
    title: 'Natural Massage',
    slug: 'therapeutic-massage-delhi-ncr',
    description: 'Therapeutic and relaxation massage to soothe muscles and calm the mind in Delhi NCR.',
    longDescription: 'Indulge in a rejuvenating natural massage at your Delhi NCR home. Our therapists use a blend of aromatic oils and therapeutic techniques to relieve muscle soreness, improve circulation, reduce stress, and promote a state of deep relaxation.',
    image: {
      src: 'https://picsum.photos/600/400?random=60',
      alt: 'A person enjoying a relaxing back massage in a comfortable home setting in Delhi NCR.',
      aiHint: 'therapeutic massage'
    },
     faq: [
        { question: 'What type of massage is best for stress relief?', answer: 'For stress relief, we recommend a Swedish or Aromatherapy massage. Discuss your needs with our therapist upon their arrival in your Delhi NCR home to choose the best option for you.' },
        { question: 'Do I need my own massage table and oils?', answer: 'No, our massage therapist will bring a professional, portable massage table and all necessary high-quality oils and linens to ensure a complete spa-like experience at your home.' }
    ]
  },
  {
    icon: Laptop,
    title: 'Online Consultation',
    slug: 'online-wellness-consultation-india',
    description: 'Expert wellness advice accessible from anywhere in Delhi, NCR, or across India.',
    longDescription: 'Connect with our top wellness experts from the comfort of your home, no matter where you are. Our online consultations provide you with the same level of expert care and personalized advice as our in-person visits for conditions that can be managed remotely.',
    image: {
      src: 'https://picsum.photos/600/400?random=61',
      alt: 'A doctor providing an online consultation via video call.',
      aiHint: 'online doctor'
    },
     faq: [
        { question: 'How does an online consultation work?', answer: 'Simply book a session on our website, and we will connect you with the right expert (like a nutritionist, counselor, or homeopath) via a secure video call. It\'s a convenient way to get professional advice from anywhere.' },
        { question: 'Can I get a diet plan or treatment plan online?', answer: 'Yes, our practitioners can provide comprehensive diet charts, exercise plans, and recommend herbal or homeopathic remedies based on the detailed online assessment.' }
    ]
  },
];
