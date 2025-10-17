
export type Package = {
  title: string;
  popular?: boolean;
  description: string;
  price: number;
  pricePerSession?: number;
  features: string[];
  cta: string;
};

export const packages: Package[] = [
  {
    title: 'Single Home Visit',
    description: 'A single, comprehensive session with one of our expert practitioners at your home.',
    price: 1500,
    features: [
      '1 At-Home Session',
      'Choose any service',
      'Personalized one-on-one care',
      'Available across Delhi NCR'
    ],
    cta: 'Book a Single Visit',
  },
  {
    title: 'Booster Package',
    description: 'Ideal for focused, short-term treatment plans with significant savings.',
    price: 12000,
    pricePerSession: 1200,
    features: [
      '10 Home Visit Sessions',
      'Save ₹3,000 (₹1200/session)',
      'Personalized treatment plan',
      'Progress tracking included'
    ],
    cta: 'Get a Booster',
  },
    {
    title: 'Mental Reset',
    popular: true,
    description: 'A complete online package for mental health and well-being.',
    price: 16999,
    features: [
      '30 Online Yoga Sessions',
      '15 Online Meditation Sessions',
      '12 Online Counseling Sessions',
      '3 Online Doctor Consultations',
      '60-Day Personalized Diet Plan',
      'Fully remote & confidential'
    ],
    cta: 'Start Your Reset',
  },
  {
    title: '21-Day Wellness',
    description: 'Our signature program for a complete, transformative health journey.',
    price: 23100,
    pricePerSession: 1100,
    features: [
      '21 Home Visit Sessions',
      'Save ₹8,400 (₹1100/session)',
      'Comprehensive integrated plan',
      'Best long-term value'
    ],
    cta: 'Choose 21-Day Plan',
  },
];
