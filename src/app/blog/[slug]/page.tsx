
import { posts, Post } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | ICBR Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container max-w-4xl mx-auto">
        <article>
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
            <div className="flex justify-center items-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
                </div>
            </div>
          </header>
          
          <Card className="overflow-hidden mb-8">
            <div className="relative aspect-video">
                <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    data-ai-hint={post.image.aiHint}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
          </Card>
          
          <div 
            className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>

        <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/blog">Back to Blog</Link>
            </Button>
        </div>
      </div>
    </main>
  );
};

export default BlogPostPage;
