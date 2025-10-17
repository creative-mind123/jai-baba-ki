
'use client';

import Link from 'next/link';
import {
  Menu,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';
import { servicesList } from '@/lib/services';
import { locations } from '@/lib/locations';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import IcbrLogo from './IcbrLogo';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/#packages', label: 'Packages' },
  { href: '/why-choose-us', label: 'Why Choose Us?' },
  { href: '/webinar', label: 'Webinar' },
  { href: '/corporate-wellness', label: 'Corporate Wellness' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const closeSheet = () => setSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <IcbrLogo className="h-10" />
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Services <ChevronDown className="w-4 h-4 ml-1" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {servicesList.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Locations <ChevronDown className="w-4 h-4 ml-1" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {locations.map((location) => (
                <DropdownMenuItem key={location.slug} asChild>
                  <Link href={`/locations/${location.slug}`}>{location.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
            <Button asChild>
                <Link href="/book-now">Book Now</Link>
            </Button>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="p-4">
              <Link href="/" className="flex items-center gap-2 mb-4" onClick={closeSheet}>
                 <IcbrLogo className="h-10" />
              </Link>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger className="text-lg">Services</AccordionTrigger>
                  <AccordionContent>
                    <nav className="grid gap-2 pt-2">
                    {servicesList.map((service) => (
                      <Link key={service.slug} href={`/services/${service.slug}`} onClick={closeSheet} className="transition-colors hover:text-primary pl-4 py-2 text-base">{service.title}</Link>
                    ))}
                    </nav>
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="locations">
                  <AccordionTrigger className="text-lg">Locations</AccordionTrigger>
                  <AccordionContent>
                    <nav className="grid gap-2 pt-2">
                    {locations.map((location) => (
                       <Link key={location.slug} href={`/locations/${location.slug}`} onClick={closeSheet} className="transition-colors hover:text-primary pl-4 py-2 text-base">{location.name}</Link>
                    ))}
                    </nav>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <nav className="grid gap-6 text-lg font-medium mt-6 border-t pt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeSheet}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
                 <Link href="/faq" onClick={closeSheet} className="transition-colors hover:text-primary">FAQ</Link>
                <Button asChild size="lg" onClick={closeSheet}>
                  <Link href="/book-now">Book Now</Link>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
