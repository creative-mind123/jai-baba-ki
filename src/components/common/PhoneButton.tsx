'use client';

import { Phone } from 'lucide-react';

export default function PhoneButton() {
  const phoneNumber = "+917042788829";

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="group fixed bottom-24 right-6 z-50 flex items-center justify-center gap-3 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 ease-in-out hover:rounded-xl"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
      <span className="hidden group-hover:block pr-2 text-sm font-medium whitespace-nowrap">
        Call Now
      </span>
    </a>
  );
}
