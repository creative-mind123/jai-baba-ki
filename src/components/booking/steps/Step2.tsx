'use client';

import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { servicesList } from '@/lib/services';
import { packages } from '@/lib/packages';

export const Step2 = () => {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Which service are you interested in?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {servicesList.map(service => (
                  <SelectItem key={service.slug} value={service.slug}>
                    {service.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="package"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Choose a Package</FormLabel>
             <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a package" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {packages.map(pkg => (
                  <SelectItem key={pkg.title} value={pkg.title}>
                    {pkg.title} - ₹{pkg.price.toLocaleString('en-IN')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
