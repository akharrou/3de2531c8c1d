
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

    const { name, email, phone, message } = validatedFields.data;

    // Notion API Integration
    const notionApiKey = process.env.NOTION_INTEGRATION_SECRET;
    const notionDatabaseId = process.env.NOTION_DATABASE_ID;

    if (!notionApiKey || !notionDatabaseId) {
      console.error("Notion API Key or Database ID is not configured in environment variables.");
      return {
        success: false,
        message: "Server configuration error. Could not connect to Notion.",
        errors: { _form: ["Server configuration error."] }
      };
    }

    const notionPayloadProperties: any = {
      "Name": {
        title: [{ text: { content: name } }]
      },
      "Email": {
        email: email
      },
      "Message": {
        rich_text: [{ text: { content: message } }]
      },
      "Submission Date": {
        date: { start: new Date().toISOString().split('T')[0] } // YYYY-MM-DD format for date-only
      }
    };

    if (phone && phone.trim() !== "") {
      notionPayloadProperties["Phone"] = { phone_number: phone };
    }

    const notionApiUrl = "https://api.notion.com/v1/pages";
    const notionResponse = await fetch(notionApiUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${notionApiKey}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      },
      body: JSON.stringify({
        parent: { database_id: notionDatabaseId },
        properties: notionPayloadProperties
      })
    });

    if (!notionResponse.ok) {
      const errorData = await notionResponse.json();
      console.error("Notion API Error:", errorData);
      let errorMessage = "Failed to submit to Notion.";
      if (errorData && errorData.message) {
        errorMessage += ` Details: ${errorData.message}`;
      }
       if (notionResponse.status === 401) {
        errorMessage = "Notion API authentication failed. Please check your integration secret.";
      } else if (notionResponse.status === 400 && errorData.code === "validation_error") {
        errorMessage = "Notion API validation error. Please check your database property names and types match the form setup.";
      } else if (notionResponse.status === 404) {
        errorMessage = "Notion database not found or integration does not have access. Please check Database ID and integration permissions.";
      }
      return {
        success: false,
        message: errorMessage,
        errors: { _form: [errorMessage] }
      };
    }

    console.log("Contact form successfully submitted to Notion.");
    return { success: true, message: "Thank you! Your message has been sent successfully and saved to Notion." };

  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    let userMessage = "An unexpected error occurred. Please try again later.";
    if (error.message) {
      userMessage = `An error occurred: ${error.message}. Please try again.`;
    }
    return {
      success: false,
      message: userMessage,
      errors: { _form: [userMessage] }
    };
  }
}
