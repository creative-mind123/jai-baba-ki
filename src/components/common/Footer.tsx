
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';
import IcbrLogo from './IcbrLogo';
import { healthIssues } from '@/lib/health';

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        {...props}
    >
        <path d="M12 1.19c-6.23 0-10.81 4.58-10.81 10.81 0 4.58 3.16 8.54 7.42 9.94.06.33.12.66.18 1 .06.33.18.94.24 1.25.06.27.06.27.12.06.18-.5.71-2.07 1.06-3.32.24-.94.48-1.88.48-1.88s-.24-.48-.24-1.18c0-1.06.6-1.88 1.3-1.88.6 0 .94.48.94 1.06 0 .66-.42 1.63-.66 2.57-.24.94.48 1.75 1.43 1.75 1.7 0 2.98-2.23 2.98-5.41 0-2.83-2.01-4.88-5.02-4.88-3.4 0-5.41 2.51-5.41 5.12 0 .94.36 1.94.83 2.45.06.06.12.06.18 0 .24-.18.3-1 .36-1.18.06-.24.06-.48 0-.71-.12-.36-.18-.66-.18-1 0-.78.36-1.49 1.06-1.49.83 0 1.49.89 1.49 1.94 0 1.12-.71 2.77-1.06 3.75-.3.89-.18 1.75.18 2.51.54.83 2.01 1 2.89 1 .71 0 1.3-.36 1.88-1.06 1.55-1.94 1.12-4.22 1.12-4.22s.36-1.55.42-1.88c.12-.54.6-2.23.6-2.92 0-2.23-1.18-4.1-3.4-4.1-2.34 0-4.16 1.7-4.16 4.04 0 .78.24 1.55.54 1.94H9.5a.13.13 0 01-.13-.13v-.06c0-.07 0-.13.06-.25 0 0-.47-2.07-.47-2.62 0-2.23 1.6-4.16 4.77-4.16 2.57 0 4.65 1.88 4.65 4.65 0 2.57-1.6 4.53-3.81 4.53-.78 0-1.55-.42-1.82-.94 0 0-.36 1.43-.48 1.7-.18.71-.66 1.63-1 2.23C13.2 22.51 12.6 22.81 12 22.81c-1.3 0-2.48-1.06-2.29-2.51l.12-1.06.6-2.31s-.6-.24-.71-.89c-.12-.66 0-1.25.18-1.88.24-.71.6-1.43.6-2.13 0-1.88-1.12-3.46-3.28-3.46-2.45 0-4.34 1.88-4.34 4.47 0 .78.18 1.3.36 1.69h.12s.12.36.12.48c0 .12-.06.3-.12.42-.12.18-.18.3-.3.42a4.93 4.93 0 01-1.5-3.32C1.19 6.77 5.77 2.19 12 2.19c.6 0 1.18.06 1.75.18a9.6 9.6 0 00-1.5-1.18z"/>
    </svg>
);


export default function Footer() {
  const mainHealthIssues = healthIssues.filter(issue => 
    !issue.slug.includes('back-') || issue.slug === 'back-pain-relief-delhi-ncr'
  ).slice(0, 5); // Limiting to 5 for a cleaner footer

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
                    <Link href="https://www.facebook.com/bioremedies.icbr/" aria-label="Facebook" rel="noopener" target="_blank">
                    <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://www.instagram.com/bio_remedies/" aria-label="Instagram" rel="noopener" target="_blank">
                    <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                     <Link href="https://www.linkedin.com/company/international-centre-for-bio-remedies/?viewAsMember=true" aria-label="LinkedIn" rel="noopener" target="_blank">
                        <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://www.youtube.com/@ICBRBIO-REDIES" aria-label="YouTube" rel="noopener" target="_blank">
                    <Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                    <Link href="https://in.pinterest.com/icbrwellness/?actingBusinessId=1019995153013908463" aria-label="Pinterest" rel="noopener" target="_blank">
                    <PinterestIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
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
