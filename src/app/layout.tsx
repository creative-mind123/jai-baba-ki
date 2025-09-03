import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import PhoneButton from "@/components/common/PhoneButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ICBR | Integrated Wellness Home Services",
  description:
    "Your trusted partner for integrated wellness services in Delhi NCR. We offer Ayurveda, Naturopathy, Physiotherapy, Yoga, and more, right at your doorstep. Book our 21-day wellness package today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        {children}
        <WhatsAppButton />
        <PhoneButton />
        <Toaster />
      </body>
    </html>
  );
}
