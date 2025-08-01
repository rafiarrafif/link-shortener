import z from "zod";

export const signupSchema = z.object({
  name: z.string().min(4, "Full Name required min 4 characters"),
  email: z.email("Invalid email format"),
  password: z.string().min(8, "Password at least 8 "),
});
