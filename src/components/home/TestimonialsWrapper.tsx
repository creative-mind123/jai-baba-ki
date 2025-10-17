
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  ssr: false,
  loading: () => (
    <div className="container py-16 lg:py-24">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto mt-4" />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Skeleton className="h-56 rounded-lg" />
        <Skeleton className="h-56 rounded-lg" />
        <Skeleton className="h-56 rounded-lg" />
      </div>
    </div>
  ),
});

export default function TestimonialsWrapper() {
  return <Testimonials />;
}
