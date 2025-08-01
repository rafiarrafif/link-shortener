import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email format"),
  password: z.string().min(8, "Password at least 8 "),
});
