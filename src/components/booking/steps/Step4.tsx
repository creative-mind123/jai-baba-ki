'use client';

import { useFormContext } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { packages } from '@/lib/packages';
import { servicesList } from '@/lib/services';

const SummaryItem = ({ label, value }: { label: string; value: string | undefined }) => (
    <div className="flex justify-between items-start">
      <p className="text-muted-foreground">{label}</p>
      <p className="font-medium text-right max-w-[70%]">{value}</p>
    </div>
  );

export const Step4 = () => {
  const { getValues } = useFormContext();
  const values = getValues();
  
  const selectedPackage = packages.find(p => p.title === values.package);
  const selectedService = servicesList.find(s => s.slug === values.service);

  return (
    <div className="space-y-6">
        <Card className="bg-secondary/50">
            <CardHeader>
                <CardTitle as="h3" className="text-xl">Review Your Booking</CardTitle>
                <CardDescription>Please confirm your details. Our team will call you to confirm the appointment time.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <SummaryItem label="Name" value={values.name} />
                <SummaryItem label="Phone" value={values.phone} />
                <SummaryItem label="Service" value={selectedService?.title} />
                <SummaryItem label="Package" value={values.package} />
                <SummaryItem label="Address" value={`${values.address}, ${values.city}`} />
                <SummaryItem 
                    label="Appointment" 
                    value={values.preferredDate ? `${format(values.preferredDate, "PPP")} (${values.preferredTime})` : 'Not set'} 
                />
                <Separator />
                <div className="flex justify-between items-center text-lg">
                    <p className="text-muted-foreground">Total Amount</p>
                    <p className="font-bold">₹{selectedPackage?.price.toLocaleString('en-IN') ?? '0'}</p>
                </div>
                 <p className="text-xs text-muted-foreground pt-2">
                    Note: This is a booking request. Payment will be coordinated by our team after we confirm your appointment time.
                </p>
            </CardContent>
        </Card>
    </div>
  );
};
