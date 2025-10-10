"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string(),
});

type FormState = {
  success: boolean;
  message?: string;
};

export async function submitContactForm(
  data: z.infer<typeof formSchema>
): Promise<FormState> {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }

  // Here you would typically send an email, e.g., using a service like Resend or Nodemailer,
  // and send it to info@inventivecode.com
  console.log("New contact form submission:");
  console.log(parsedData.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real app, you would check if the email was sent successfully.
  // We'll assume it's always successful for this example.
  return {
    success: true,
  };
}
