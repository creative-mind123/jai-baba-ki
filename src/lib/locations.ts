
import { FAQItem } from "./faq";

export type SubLocation = {
  name: string;
  slug: string;
}

export type Location = {
  name: string;
  slug: string;
  description: string;
  image: {
    src: string;
    alt: string;
    aiHint: string;
  },
  faq: FAQItem[];
  subLocations?: SubLocation[];
};

export const locations: Location[] = [
  {
    name: "Delhi",
    slug: "delhi",
    description: "Comprehensive home wellness services across all of Delhi. From North to South Delhi, our experts are ready to bring physiotherapy, yoga, and holistic health to your doorstep.",
    image: {
      src: '/doctor at home.png',
      alt: 'Doctor providing at-home wellness services in Delhi.',
      aiHint: 'doctor home'
    },
    faq: [
      { question: "What is the waiting time for a home physiotherapy visit in Delhi?", answer: "We can typically schedule a visit within 24-48 hours anywhere in Delhi, including areas like Vasant Kunj, Saket, and Dwarka, depending on practitioner availability." },
      { question: "Do your services cover all of Delhi, including remote areas?", answer: "Yes, our network of practitioners extends across the entire Delhi NCT, ensuring you receive timely and professional care no matter your location." }
    ],
    subLocations: [
        { name: 'Adarsh Nagar', slug: 'adarsh-nagar' },
        { name: 'Anand Vihar', slug: 'anand-vihar' },
        { name: 'Ashok Nagar', slug: 'ashok-nagar' },
        { name: 'Ashok Vihar', slug: 'ashok-vihar' },
        { name: 'Azadpur', slug: 'azadpur' },
        { name: 'Badarpur', slug: 'badarpur' },
        { name: 'Bali Nagar', slug: 'bali-nagar' },
        { name: 'Barakhamba Road', slug: 'barakhamba-road' },
        { name: 'Begum Pur', slug: 'begum-pur' },
        { name: 'Central Delhi', slug: 'central-delhi' },
        { name: 'Chanakyapuri', slug: 'chanakyapuri' },
        { name: 'Chandni Chowk', slug: 'chandni-chowk' },
        { name: 'Chittaranjan Park', slug: 'chittaranjan-park' },
        { name: 'Civil Lines', slug: 'civil-lines' },
        { name: 'Connaught Place', slug: 'connaught-place' },
        { name: 'Dabri', slug: 'dabri' },
        { name: 'Daryaganj', slug: 'daryaganj' },
        { name: 'Delhi Cantonment', slug: 'delhi-cantonment' },
        { name: 'Derawal Nagar', slug: 'derawal-nagar' },
        { name: 'Dhaula Kuan', slug: 'dhaula-kuan' },
        { name: 'Dilshad Garden', slug: 'dilshad-garden' },
        { name: 'Dwarka', slug: 'dwarka' },
        { name: 'East Delhi', slug: 'east-delhi' },
        { name: 'East Vinod Nagar', slug: 'east-vinod-nagar' },
        { name: 'Fateh Nagar', slug: 'fateh-nagar' },
        { name: 'Gole Market', slug: 'gole-market' },
        { name: 'Govindpuri', slug: 'govindpuri' },
        { name: 'Greater Kailash', slug: 'greater-kailash' },
        { name: 'Green Park', slug: 'green-park' }
    ]
  },
  {
    name: "Gurgaon (Gurugram)",
    slug: "gurgaon",
    description: "Serving the corporate hub of Gurgaon with at-home wellness solutions designed for a busy lifestyle. De-stress and rejuvenate with our expert yoga and massage therapists after a long day.",
    image: {
      src: '/docotors knowking door.png',
      alt: 'Doctor knocking on a door for a home visit in Gurgaon.',
      aiHint: 'doctor visit'
    },
    faq: [
      { question: "Are your services available on weekends in Gurgaon?", answer: "Yes, we understand the busy schedules in Gurgaon and offer appointments on Saturdays and Sundays for your convenience, especially for services like physiotherapy and personal yoga." },
      { question: "Can you provide corporate wellness sessions in Gurgaon offices?", answer: "Absolutely. We offer on-site group yoga, meditation, and stress-management workshops for corporate clients in Gurgaon and Manesar." }
    ],
    subLocations: [
      { name: 'DLF Phases I-V', slug: 'dlf-phases' },
      { name: 'Sector 42', slug: 'sector-42' },
      { name: 'Sushant Lok Phase 1', slug: 'sushant-lok-phase-1' },
      { name: 'MG Road', slug: 'mg-road' },
      { name: 'Golf Course Road', slug: 'golf-course-road' },
      { name: 'Sector 50 / Nirvana Country', slug: 'sector-50-nirvana-country' },
      { name: 'Palam Vihar', slug: 'palam-vihar' },
      { name: 'Sector 31', slug: 'sector-31' },
      { name: 'Sohna Road', slug: 'sohna-road' },
      { name: 'Ambience Island', slug: 'ambience-island' }
    ]
  },
  {
    name: "Noida",
    slug: "noida",
    description: "Bringing our full range of wellness services to the planned city of Noida. Experience personalized physiotherapy and naturopathy in the comfort of your home.",
    image: {
      src: '/doctor at home.png',
      alt: 'Doctor providing at-home wellness services in Noida.',
      aiHint: 'doctor home'
    },
    faq: [
      { question: "Do you serve residential societies in Noida and Greater Noida?", answer: "Yes, our practitioners are experienced in providing services within the high-rise societies and communities of Noida, Greater Noida, and along the Noida Expressway." },
      { question: "Is there an extra charge for home visits in Noida for physiotherapy?", answer: "No, our pricing is transparent and inclusive of travel charges for all locations within our standard service area, including all sectors of Noida." }
    ],
    subLocations: [
      { name: 'Sector 15', slug: 'sector-15' },
      { name: 'Sector 18', slug: 'sector-18' },
      { name: 'Sector 22', slug: 'sector-22' },
      { name: 'Sector 37', slug: 'sector-37' },
      { name: 'Sector 41', slug: 'sector-41' },
      { name: 'Sector 50', slug: 'sector-50' },
      { name: 'Sector 51', slug: 'sector-51' },
      { name: 'Sector 62', slug: 'sector-62' },
      { name: 'Sector 75', slug: 'sector-75' },
      { name: 'Sector 76', slug: 'sector-76' },
      { name: 'Sector 100', slug: 'sector-100' },
      { name: 'Sector 121', slug: 'sector-121' },
      { name: 'Sector 137', slug: 'sector-137' },
      { name: 'Noida Extension', slug: 'noida-extension' },
      { name: 'Greater Noida West', slug: 'greater-noida-west' },
      { name: 'Greater Noida (Alpha, Beta, Gamma)', slug: 'greater-noida' }
    ]
  },
  {
    name: "Faridabad",
    slug: "faridabad",
    description: "Extending our expert at-home wellness care to the residents of Faridabad. Get access to the best alternative therapies without leaving your home.",
    image: {
      src: '/docotors knowking door.png',
      alt: 'Doctor knocking on a door for a home visit in Faridabad.',
      aiHint: 'doctor visit'
    },
    faq: [
      { question: "How experienced are the practitioners serving Faridabad?", answer: "We ensure that all practitioners, including those serving Faridabad, are certified, experienced, and uphold our high standards of care for services like physiotherapy and Ayurveda." },
      { question: "What is the booking process for Faridabad residents?", answer: "The process is the same for all locations. Simply fill out the booking form on our website, and our team will coordinate a visit to your Faridabad home at a time convenient for you." }
    ]
  },
  {
    name: "Ghaziabad",
    slug: "ghaziabad",
    description: "Our dedicated team is available in Ghaziabad to provide top-quality wellness services. From yoga to physiotherapy, we cover all your health needs at home.",
    image: {
      src: '/doctor at home.png',
      alt: 'Doctor providing at-home wellness services in Ghaziabad.',
      aiHint: 'doctor home'
    },
    faq: [
      { question: "Are all your services like naturopathy available in Ghaziabad?", answer: "Yes, our complete range of wellness services, from physiotherapy and yoga to Ayurveda and naturopathy, is available to residents across Ghaziabad, including Indirapuram and Vaishali." },
      { question: "Can I book the 21-day package in Ghaziabad?", answer: "Absolutely. Our flagship 21-day wellness package is available for all residents in Ghaziabad seeking a comprehensive and transformative health journey at home." }
    ]
  }
];
