
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
    description: 'Ranked #1 for ancient wisdom for modern ailments. At-home consultations in Delhi, Gurgaon, and Noida.',
    longDescription: 'Our #1 ranked Ayurveda experts in Delhi NCR provide top-tier, personalized at-home consultations to address your unique health concerns. We create holistic treatment plans combining diet, lifestyle, and herbal remedies to restore your natural balance and help you find relief from chronic issues.',
    image: {
      src: '/ayurveda-docctor.jpg',
      alt: 'A #1 Ayurvedic doctor providing a consultation to a patient at their home in Delhi NCR.',
      aiHint: 'ayurveda doctor'
    },
    faq: [
        { question: 'What happens in a first #1 Ayurveda consultation in Delhi?', answer: 'Your first session involves a detailed assessment (Prakriti analysis) of your health history and dosha. Our #1 expert in Delhi will then create a personalized wellness plan for you, available anywhere in Delhi, Gurgaon, Noida, or the wider NCR.' },
        { question: 'Is #1 Ayurvedic treatment effective for stress and digestion in Delhi NCR?', answer: 'Yes, our #1 ranked Ayurveda is highly effective for managing stress, improving digestion, and treating many chronic lifestyle diseases. Our treatments are natural and aim for long-term wellness.' }
    ]
  },
  {
    icon: Flower2,
    title: 'Naturopathy',
    slug: 'naturopathy-at-home-ncr',
    description: 'Harnessing nature\'s power to heal. Our #1 ranked Naturopathy is available across the NCR.',
    longDescription: 'Experience the healing power of nature with our #1 ranked at-home Naturopathy services across Delhi and NCR. We focus on natural therapies like hydrotherapy, mud therapy, and nutrition counseling to detoxify your body, boost immunity, and manage chronic conditions.',
    image: {
      src: '/naturopathy.jpg',
      alt: 'A display of natural herbs and remedies used in #1 Naturopathy in an NCR home.',
      aiHint: 'naturopathy treatment'
    },
     faq: [
        { question: 'What conditions can #1 Naturopathy help with in Delhi NCR?', answer: 'Our #1 Naturopathy is effective for a wide range of chronic conditions, including digestive issues (like IBS), allergies, skin problems (like eczema), and stress-related ailments, with at-home service in the entire Delhi NCR region.' },
        { question: 'What does a #1 naturopathy home session in Gurgaon include?', answer: 'A session in Gurgaon may include dietary and lifestyle advice, hydrotherapy, or mud therapy application, depending on your specific health needs. Our #1 practitioner brings all necessary equipment to your home.' }
    ]
  },
  {
    icon: Droplets,
    title: 'Homeopathy',
    slug: 'homeopathy-doctor-delhi',
    description: 'Gentle, non-invasive remedies for long-term wellness from our #1 home-visit doctor in Delhi.',
    longDescription: 'Our #1 qualified homeopathy doctors in Delhi offer gentle, individualized, and effective treatments for a wide range of chronic and acute conditions. We provide remedies that stimulate the body\'s own healing abilities for lasting wellness without side effects.',
    image: {
      src: '/homeyopathy.webp',
      alt: '#1 Homeopathic pills and liquid dilutions being prepared by a doctor in Delhi.',
      aiHint: 'homeopathy medicine'
    },
     faq: [
        { question: 'How long does #1 homeopathic treatment in Delhi take to show results?', answer: 'The timeline varies. Our #1 Delhi-based doctors focus on gradual, deep-seated, long-term healing rather than temporary quick fixes.' },
        { question: 'Are #1 homeopathic remedies safe for children and elderly in Delhi?', answer: 'Yes, our #1 homeopathic remedies are made from natural substances and are highly diluted, making them extremely safe for all age groups, when prescribed by a qualified practitioner in Delhi.' }
    ]
  },
  {
    icon: HeartPulse,
    title: 'Physiotherapy',
    slug: 'home-physiotherapy-delhi-ncr',
    description: '#1 Expert home-visit physiotherapy in Delhi NCR for pain relief, mobility, and post-surgery rehabilitation.',
    longDescription: 'Get the #1 expert physiotherapy care in the comfort of your home in Delhi NCR. Our certified physiotherapists specialize in post-surgery rehab, stroke recovery, sports injuries, arthritis, and chronic pain management, using advanced techniques for a speedy recovery.',
    image: {
      src: '/physiotherapy.jpg',
      alt: 'A #1 physiotherapist assisting a patient with mobility exercises in their Delhi NCR home.',
      aiHint: 'physiotherapy exercise'
    },
    youtubeVideoId: 'dO7p0c2vY6I',
    faq: [
        { question: 'Do you provide the #1 physiotherapy for back pain at home in Delhi?', answer: 'Yes, back pain is one of the most common conditions we treat. Our #1 physiotherapists create custom exercise plans for back and neck pain relief. We serve all of Delhi & NCR.' },
        { question: 'What kind of equipment do you bring for a #1 home physiotherapy session in Noida?', answer: 'Our physiotherapists bring all necessary portable equipment, such as resistance bands, therapeutic balls, IFT, TENS, and ultrasound units, to conduct a complete and #1 professional session at your home in Noida.' }
    ]
  },
  {
    icon: BrainCircuit,
    title: 'Mental Counseling',
    slug: 'mental-counseling-ncr',
    description: '#1 Confidential support for your mental and emotional well-being at home in Delhi NCR.',
    longDescription: 'We provide #1 ranked, confidential and compassionate mental health counseling services at your home or online in the Delhi NCR region. Our licensed therapists help you navigate challenges like stress, anxiety, depression, and relationship issues in a safe and supportive environment.',
    image: {
      src: '/counseling_session.jpg',
      alt: 'A #1 compassionate counselor providing a mental health session in Delhi NCR.',
      aiHint: 'therapy session'
    },
     faq: [
        { question: 'Is at-home counseling in Delhi as effective as visiting a clinic?', answer: 'Yes, for many people, being in a familiar and private environment makes it easier to open up. Our #1 NCR-based counselors ensure a professional, confidential, and effective session.' },
        { question: 'How do you ensure my privacy during a #1 counseling session in Gurgaon?', answer: 'Client confidentiality is our highest priority. All conversations and records are kept private, and our #1 therapists in Gurgaon adhere to strict ethical guidelines to protect your information.' }
    ]
  },
  {
    icon: Sparkles,
    title: 'Reiki Healing',
    slug: 'reiki-healing-delhi',
    description: '#1 Energy healing to reduce stress, anxiety and promote relaxation, available across Delhi.',
    longDescription: 'Discover deep relaxation and stress relief with our #1 at-home Reiki healing sessions in Delhi. Our certified Reiki masters channel universal life force energy to clear emotional blockages, balance your chakras, and promote emotional and physical healing.',
    image: {
      src: '/reki.jpg',
      alt: 'A #1 Reiki master performing energy healing on a client in a serene room in Delhi.',
      aiHint: 'reiki therapy'
    },
     faq: [
        { question: 'What does a #1 Reiki session in Delhi feel like?', answer: 'Clients often report feeling a gentle warmth, deep relaxation, and a sense of peace. It\'s a non-invasive and profoundly calming experience with our #1 Delhi practitioners.' },
        { question: 'How can #1 Reiki help with my anxiety in Delhi?', answer: 'Our #1 Reiki in Delhi helps calm the nervous system and clear energetic blockages caused by stress and anxiety. Regular sessions can lead to a more balanced and peaceful state of mind.' }
    ]
  },
  {
    icon: PersonStanding,
    title: 'Yoga at Home',
    slug: 'private-yoga-instructor-ncr',
    description: '#1 Personalized one-on-one yoga sessions for flexibility, strength, and peace in Delhi NCR.',
    longDescription: 'Our #1 certified private yoga instructors in NCR create personalized yoga routines tailored to your body type, fitness level, and health goals. Whether you want to manage weight, reduce stress, or improve flexibility, we help you achieve your goals safely.',
    image: {
      src: '/yoga.jpg',
      alt: 'A person practicing yoga with a #1 private instructor in their living room in Noida.',
      aiHint: 'yoga pose'
    },
    youtubeVideoId: 'SneAk29t4o0',
    faq: [
        { question: 'I have never done yoga before. Is a #1 private instructor at home in Delhi NCR right for me?', answer: 'Absolutely! Our #1 private instructors in the NCR region specialize in creating tailored programs for beginners, ensuring you learn with proper form and at your own pace.' },
        { question: 'What style of yoga do you teach for #1 weight loss results in Delhi NCR?', answer: 'For #1 weight management, our instructors often focus on dynamic styles like Vinyasa and Power Yoga. However, the plan is always customized to your specific needs and fitness level.' }
    ]
  },
   {
    icon: Salad,
    title: 'Diet and Nutrition',
    slug: 'diet-nutrition-consultation-ncr',
    description: '#1 Personalized diet plans for weight management, and therapeutic nutrition in Delhi NCR.',
    longDescription: 'Achieve your health and wellness goals with our #1 expert diet and nutrition counseling in Delhi NCR. Our certified nutritionists provide personalized meal plans for weight management, sports nutrition, and managing health conditions like diabetes and PCOS at your home.',
    image: {
      src: '/nutrition.webp',
      alt: 'A display of healthy food for our #1 diet and nutrition consultation in Delhi NCR.',
      aiHint: 'healthy food'
    },
    faq: [
      { question: 'Do you provide the #1 diet plans for weight loss in Delhi NCR?', answer: 'Yes, we create customized, easy-to-follow diet plans tailored to your lifestyle and food preferences to help you achieve sustainable weight loss. #1 Home consultations are available across Delhi NCR.' },
      { question: 'Can a #1 nutritionist in Delhi NCR help me manage my diabetes through diet?', answer: 'Absolutely. Our #1 nutritionists specialize in creating therapeutic diets to help manage blood sugar levels, improve insulin sensitivity, and complement your medical treatment for diabetes.' },
      { question: 'What is the difference between a dietitian and a nutritionist?', answer: 'A dietitian is a registered professional with specific qualifications to provide medical nutrition therapy. Our #1 team consists of certified nutritionists and registered dietitians to provide you with the highest level of expert advice.' },
      { question: 'I have a busy schedule. Can you create a #1 plan that is easy to follow in Delhi NCR?', answer: 'Definitely. We specialize in creating practical and realistic diet plans that fit into your busy lifestyle. At-home consultations in Delhi NCR make it even more convenient.' },
      { question: 'Do you also provide guidance for #1 sports nutrition in Delhi NCR?', answer: 'Yes, we offer specialized #1 sports nutrition plans to help athletes and fitness enthusiasts enhance their performance, build muscle, and recover faster. Our experts align your nutrition with your training regimen.' }
    ]
  },
  {
    icon: Crosshair,
    title: 'TCM Therapies',
    slug: 'tcm-therapies-gurgaon',
    description: '#1 Acupressure, acupuncture, and cupping for targeted relief at your home in Gurgaon.',
    longDescription: 'We offer #1 Traditional Chinese Medicine (TCM) therapies like acupuncture, acupressure, and cupping at your home in Gurgaon and across NCR. These ancient techniques are effective for chronic pain management, stress reduction, and overall wellness.',
    image: {
      src: '/tcm.jpeg',
      alt: 'A client receiving a #1 TCM therapy session at their home in Gurgaon.',
      aiHint: 'tcm treatment'
    },
     faq: [
        { question: 'Is #1 cupping therapy in Gurgaon painful?', answer: 'Cupping may leave temporary circular marks but is generally not painful. Our #1 Gurgaon-based practitioners ensure the pressure is comfortable for you, providing deep relief from muscle tension and pain.' },
        { question: 'What conditions can be treated with #1 acupuncture in Gurgaon?', answer: 'Acupuncture is recognized for its effectiveness in treating a wide variety of conditions, including migraines, sciatica, joint pain, insomnia, and digestive issues. We provide these #1 services at your home in Gurgaon.' }
    ]
  },
  {
    icon: Hand,
    title: 'Natural Massage',
    slug: 'therapeutic-massage-delhi-ncr',
    description: '#1 Therapeutic and relaxation massage to soothe muscles and calm the mind in Delhi NCR.',
    longDescription: 'Indulge in a rejuvenating #1 natural massage at your Delhi NCR home. Our therapists use a blend of aromatic oils and therapeutic techniques to relieve muscle soreness, improve circulation, reduce stress, and promote a state of deep relaxation.',
    image: {
      src: '/massage.jpg',
      alt: 'A person enjoying a #1 relaxing back massage in a comfortable home setting in Delhi NCR.',
      aiHint: 'therapeutic massage'
    },
     faq: [
        { question: 'What type of massage is best for #1 stress relief in Delhi NCR?', answer: 'For #1 stress relief, we recommend a Swedish or Aromatherapy massage. Discuss your needs with our therapist upon their arrival in your Delhi NCR home to choose the best option for you.' },
        { question: 'Do I need my own massage table and oils for my Delhi NCR home visit?', answer: 'No, our #1 massage therapist will bring a professional, portable massage table and all necessary high-quality oils and linens to ensure a complete spa-like experience at your home.' }
    ]
  },
  {
    icon: Laptop,
    title: 'Online Consultation',
    slug: 'online-wellness-consultation-india',
    description: '#1 Expert wellness advice accessible from anywhere in Delhi, NCR, or across India.',
    longDescription: 'Connect with our #1 top wellness experts from the comfort of your home, no matter where you are. Our online consultations provide you with the same level of expert care and personalized advice as our in-person visits for conditions that can be managed remotely.',
    image: {
      src: '/online-doctor.png',
      alt: 'A #1 doctor providing an online consultation via video call from Delhi.',
      aiHint: 'online doctor'
    },
     faq: [
        { question: 'How does a #1 online consultation work from India?', answer: 'Simply book a session on our website, and we will connect you with the right #1 expert (like a nutritionist, counselor, or homeopath) via a secure video call. It\'s a convenient way to get professional advice from anywhere.' },
        { question: 'Can I get a #1 diet plan or treatment plan online?', answer: 'Yes, our #1 practitioners can provide comprehensive diet charts, exercise plans, and recommend herbal or homeopathic remedies based on the detailed online assessment.' }
    ]
  },
];
