import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, {
    message: "Full Name is required",
  }),
  email: z.string().min(1, {
    message: "Email Address is required",
  }),
  phone: z.string().min(1, {
    message: "Phone Number is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});
