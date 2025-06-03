"use server";

import { z } from "zod";

// Define the schema for contact form validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional().or(z.literal("")).refine(val => !val || val.length === 0 || /^\+?[0-9\s-()]{10,}$/.test(val), {
    message: "Invalid phone number format."
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
    _form?: string[];
  };
};

export async function submitContactForm(prevState: FormState | undefined, formData: FormData): Promise<FormState> {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || undefined, // Ensure optional fields are handled
      message: formData.get("message") as string,
    };

    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Validation failed. Please check your input.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Process the validated data (e.g., send an email, save to database)
    console.log("Contact form submitted:", validatedFields.data);

    // Simulate a delay for API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Thank you! Your message has been sent successfully." };

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "An unexpected error occurred on the server. Please try again later.",
      errors: { _form: ["Server error."] }
    };
  }
}
