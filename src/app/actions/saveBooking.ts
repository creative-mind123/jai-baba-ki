
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
    // Log the detailed error to the server console (Vercel logs)
    if (error instanceof Error) {
        console.error("DETAILED BOOKING ERROR:", error.message);
        console.error("Stack Trace:", error.stack);
        // Return the specific error message to the client for better debugging
        return { success: false, message: `Server Error: ${error.message}` };
    }
    // Fallback for non-Error objects
    console.error("An unknown error occurred:", error);
    return { success: false, message: 'An unknown error occurred. Please check server logs.' };
  }
}
