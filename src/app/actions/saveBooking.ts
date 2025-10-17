
'use server';

import { z } from "zod";
import { format } from "date-fns";

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
  console.log("New Booking Data Received:", data);

  try {
    // The Google Sheet integration has been temporarily removed to resolve a security issue.
    // This function can be updated later to save data to a database or another service.
    console.log("Successfully processed booking data.");
    
    return { success: true, message: 'Your booking request has been received!' };

  } catch (error) {
    console.error("Error saving booking:", error);
    if (error instanceof Error) {
        return { success: false, message: `Server Error: ${error.message}` };
    }
    return { success: false, message: 'An unknown server error occurred. Please check the function logs.' };
  }
}
