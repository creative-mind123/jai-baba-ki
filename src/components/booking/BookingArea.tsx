
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

const BookingForm = dynamic(() => import('@/components/booking/BookingForm'), {
  ssr: false,
  loading: () => (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-8 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <div className="pt-6 space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </CardContent>
    </Card>
  ),
});

export default function BookingArea() {
    return (
        <BookingForm />
    )
}
