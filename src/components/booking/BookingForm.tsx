'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Loader2, CheckCircle } from 'lucide-react';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { Step4 } from './steps/Step4';
import { useToast } from '@/hooks/use-toast';
import { saveBooking } from '@/app/actions/saveBooking';
import { useSearchParams } from 'next/navigation';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number.'),
  email: z.string().email('Invalid email address.'),
  address: z.string().min(10, 'Please enter a full address.'),
  city: z.string().min(1, "Please select a city"),
  service: z.string().min(1, 'Please select a service.'),
  package: z.string().min(1, 'Please select a package.'),
  preferredDate: z.date({ required_error: "A date is required." }),
  preferredTime: z.string().min(1, 'Please select a time slot.'),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

const steps = [
  { id: 'Step 1', name: 'Your Info', component: Step1 },
  { id: 'Step 2', name: 'Service Details', component: Step2 },
  { id: 'Step 3', name: 'Scheduling', component: Step3 },
  { id: 'Step 4', name: 'Confirmation', component: Step4 },
];

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  const methods = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
        name: '',
        phone: '',
        email: '',
        address: '',
        city: "Delhi",
        service: serviceParam || '',
        package: '',
        preferredTime: "morning"
    }
  });

  useEffect(() => {
    if (serviceParam) {
      methods.setValue('service', serviceParam);
    }
  }, [serviceParam, methods]);

  const { trigger, getValues } = methods;

  const handleNext = async () => {
    let fields: (keyof BookingFormData)[] = [];
    if (currentStep === 0) fields = ['name', 'phone', 'email', 'address', 'city'];
    if (currentStep === 1) fields = ['service', 'package'];
    if (currentStep === 2) fields = ['preferredDate', 'preferredTime'];

    const isValid = await trigger(fields);
    if (isValid) {
      if (currentStep === steps.length - 2) {
         // This is the last step before confirmation, so we move to the summary view
         setCurrentStep((prev) => prev + 1);
      } else {
         setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };
  
  const onSubmit: SubmitHandler<BookingFormData> = async (data) => {
    setIsSubmitting(true);
    
    const result = await saveBooking(data);
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      toast({
        title: "Submission Failed",
        description: result.message || "An unknown server error occurred. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle as="h2">{isSubmitted ? "Booking Request Sent!" : `Step ${currentStep + 1}: ${steps[currentStep].name}`}</CardTitle>
        <CardDescription>
          {isSubmitted 
            ? "Thank you! Our team will call you shortly to confirm your appointment."
            : "Complete the steps below to book your session."
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                 {isSubmitted ? (
                    <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-green-800">Thank You!</h3>
                        <p className="text-green-700 mt-2">Your booking request has been received. Our team will contact you soon to confirm the details.</p>
                    </div>
                ) : (
                    <CurrentStepComponent />
                )}
              </motion.div>
            </AnimatePresence>

            {!isSubmitted && (
              <div className="flex justify-between items-center pt-4">
                <Button type="button" variant="outline" onClick={handlePrev} disabled={currentStep === 0 || isSubmitting}>
                  <ArrowLeft className="mr-2" /> Previous
                </Button>
                {currentStep < steps.length - 2 ? (
                  <Button type="button" onClick={handleNext}>
                    Next <ArrowRight className="ml-2" />
                  </Button>
                ) : currentStep === steps.length - 2 ? (
                  <Button type="button" onClick={handleNext}>
                    Review Booking <ArrowRight className="ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" /> Submitting...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                )}
              </div>
            )}
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
