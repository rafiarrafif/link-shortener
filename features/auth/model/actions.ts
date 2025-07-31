import { createUser } from "@/entities/user/model/repository";
import { signupSchema } from "./validators";
import bcrypt from "bcrypt";

export const registerUser = async (formData: FormData) => {
  const payload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validate = signupSchema.safeParse(payload);
  if (!validate) {
    throw new Error("Invalid input");
  }

  const hashedPassword = await bcrypt.hash(validate.data?.password!, 10);
  return createUser({
    name: validate.data?.name!,
    email: validate.data?.email!,
    password: hashedPassword,
  });
};
