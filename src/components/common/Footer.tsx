
import { Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';
import IcbrLogo from './IcbrLogo';
import { healthIssues } from '@/lib/health';

export default function Footer() {
  const mainHealthIssues = healthIssues.filter(issue => !issue.slug.includes('back-') || issue.slug === 'back-pain-relief-delhi-ncr');

  return (
    <footer className="bg-secondary">
      <div className="container py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1 flex flex-col gap-4">
                 <Link href="/" className="flex items-center gap-2">
                    <IcbrLogo className="h-10" />
                 </Link>
                 <p className="text-muted-foreground text-sm">Your trusted partner for integrated wellness services right at your doorstep.</p>
                 <div className="flex gap-4">
                    <Link href="https://www.facebook.com/bioremedies.icbr/" aria-label="Facebook" rel="noopener noreferrer nofollow" target="_blank">
                    <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://www.instagram.com/bio_remedies/" aria-label="Instagram" rel="noopener noreferrer nofollow" target="_blank">
                    <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://www.youtube.com/@ICBRBIO-REDIES" aria-label="YouTube" rel="noopener noreferrer nofollow" target="_blank">
                    <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                </div>
            </div>
             <div className="md:col-span-1">
                 <h3 className="font-bold mb-4">Quick Links</h3>
                 <nav className="flex flex-col gap-2 text-muted-foreground">
                    <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                    <Link href="/#packages" className="hover:text-primary transition-colors">Packages</Link>
                    <Link href="/book-now" className="hover:text-primary transition-colors">Book Now</Link>
                     <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                 </nav>
            </div>
             <div className="md:col-span-1">
                 <h3 className="font-bold mb-4">Service Areas</h3>
                 <nav className="flex flex-col gap-2 text-muted-foreground">
                    <Link href="/locations/delhi" className="hover:text-primary transition-colors">At-Home Physiotherapy in Delhi</Link>
                    <Link href="/locations/gurgaon" className="hover:text-primary transition-colors">Doctor Home Visit in Gurgaon</Link>
                    <Link href="/locations/noida" className="hover:text-primary transition-colors">At-Home Physiotherapy in Noida</Link>
                    <Link href="/locations/faridabad" className="hover:text-primary transition-colors">At-Home Physiotherapy in Faridabad</Link>
                 </nav>
            </div>
            <div className="md:col-span-1">
                 <h3 className="font-bold mb-4">Health Concerns</h3>
                 <nav className="flex flex-col gap-2 text-muted-foreground">
                    {mainHealthIssues.map((issue) => (
                         <Link key={issue.slug} href={`/health/${issue.slug}`} className="hover:text-primary transition-colors">{issue.title}</Link>
                    ))}
                 </nav>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} ICBR. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
