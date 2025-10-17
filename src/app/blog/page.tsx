
import { posts } from '@/lib/blog';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | #1 Wellness Insights from Delhi NCR Experts | ICBR',
  description: 'Explore the latest articles on wellness, physiotherapy, Ayurveda, and holistic health from the #1 ranked experts at ICBR in Delhi, Gurgaon & Noida.',
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="bg-secondary py-20 md:py-24 text-center">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary">
            ICBR Wellness Blog
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-foreground">
            Insights and advice from Delhi NCR's #1 ranked team of wellness experts.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-video">
                        <Image 
                            src={post.image.src}
                            alt={post.image.alt}
                            data-ai-hint={post.image.aiHint}
                            fill
                            className="object-cover"
                        />
                    </div>
                </Link>
                <CardHeader>
                  <CardTitle as="h2" className="text-xl">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <time dateTime={post.date}>{format(new Date(post.date), 'MMM d, yyyy')}</time>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button asChild variant="outline" className="self-start">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
