
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileQuestion } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-16 lg:py-24 bg-background">
      <div className="container text-center">
        <Card className="max-w-lg mx-auto shadow-lg">
          <CardHeader>
            <div className="mx-auto bg-secondary p-4 rounded-full w-max mb-4">
              <FileQuestion className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">404 - Page Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-8">
              It looks like the page you are trying to access does not exist or has been moved.
            </p>
            <Button asChild size="lg">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
