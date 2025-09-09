
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import PhoneButton from "@/components/common/PhoneButton";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: '#1 At-Home Wellness & Physiotherapy in Delhi NCR | ICBR',
    template: '%s | ICBR - #1 Wellness in Delhi NCR',
  },
  description:
    "Ranked #1 for at-home wellness services in Delhi NCR. We offer top-ranked Ayurveda, Naturopathy, Physiotherapy, and Yoga at your doorstep. Book our 21-day wellness package for the best results.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <GoogleAnalytics />
        {children}
        <WhatsAppButton />
        <PhoneButton />
        <Toaster />
      </body>
    </html>
  );
}
