
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import PhoneButton from "@/components/common/PhoneButton";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import ClientOnly from "@/components/common/ClientOnly";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = 'https://www.icbr.in';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '#1 At-Home Wellness & Physiotherapy in Delhi NCR | ICBR',
    template: '%s | ICBR - #1 Wellness in Delhi NCR',
  },
  description:
    "Ranked #1 for at-home wellness services in Delhi NCR. We offer top-ranked Ayurveda, Naturopathy, Physiotherapy, and Yoga at your doorstep. Book our 21-day wellness package for the best results.",
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: {
      default: '#1 At-Home Wellness & Physiotherapy in Delhi NCR | ICBR',
      template: '%s | ICBR - #1 Wellness in Delhi NCR',
    },
    description: "Ranked #1 for at-home wellness services in Delhi NCR. We offer top-ranked Ayurveda, Naturopathy, Physiotherapy, and Yoga at your doorstep. Book our 21-day wellness package for the best results.",
    url: siteUrl,
    siteName: 'ICBR',
    images: [
      {
        url: `${siteUrl}/logo-og.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'ICBR - #1 At-Home Wellness in Delhi NCR',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
   twitter: {
    card: 'summary_large_image',
    title: {
      default: '#1 At-Home Wellness & Physiotherapy in Delhi NCR | ICBR',
      template: '%s | ICBR - #1 Wellness in Delhi NCR',
    },
    description: "Ranked #1 for at-home wellness services in Delhi NCR. We offer top-ranked Ayurveda, Naturopathy, Physiotherapy, and Yoga at your doorstep.",
    images: [`${siteUrl}/logo-og.png`], // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "ICBR (International Center For Bio-Remedies)",
  "description": "Ranked #1 for at-home wellness services in Delhi NCR. We offer top-ranked Ayurveda, Naturopathy, Physiotherapy, and Yoga at your doorstep.",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "telephone": "+917042788829",
  "priceRange": "$$",
  "image": `${siteUrl}/logo-og.png`,
  "areaServed": [
    {
      "@type": "City",
      "name": "Delhi"
    },
    {
      "@type": "City",
      "name": "Gurgaon"
    },
    {
      "@type": "City",
      "name": "Noida"
    },
    {
      "@type": "City",
      "name": "Faridabad"
    },
    {
      "@type": "City",
      "name": "Ghaziabad"
    }
  ],
   "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+917042788829",
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": "en"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ClientOnly>
          <GoogleAnalytics />
          <WhatsAppButton />
          <PhoneButton />
        </ClientOnly>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
