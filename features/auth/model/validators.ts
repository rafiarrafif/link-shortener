import z from "zod";

export const signupSchema = z.object({
  name: z.string().min(4),
  email: z.email(),
  password: z.string().min(8),
});
