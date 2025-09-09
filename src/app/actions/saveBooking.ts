
'use server';

import { appendToSheet } from "@/lib/google-sheet";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  city: z.string(),
  service: z.string(),
  package: z.string(),
  preferredDate: z.date(),
  preferredTime: z.string(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export async function saveBooking(data: BookingFormData) {
  try {
    const newRow = [
      new Date().toISOString(),
      data.name,
      data.phone,
      data.email,
      data.address,
      data.city,
      data.service,
      data.package,
      data.preferredDate.toLocaleDateString('en-GB'), // Format as DD/MM/YYYY
      data.preferredTime
    ];
    
    await appendToSheet(newRow);

    return { success: true, message: 'Booking saved successfully.' };
  } catch (error) {
    console.error("Error saving booking to Google Sheet:", error);
    return { success: false, message: 'Failed to save booking.' };
  }
}
