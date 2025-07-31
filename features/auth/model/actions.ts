"use server";

import { createUser } from "@/entities/user/model/repository";
import { signupSchema } from "./validators";
import bcrypt from "bcrypt";
import { PreviewData } from "next";
import { treeifyError } from "zod";

export const registerUser = async (
  prevData: PreviewData,
  formData: FormData
) => {
  const payload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validate = signupSchema.safeParse(payload);
  if (!validate.success) {
    return treeifyError(validate.error);
  }

  const hashedPassword = await bcrypt.hash(validate.data?.password!, 10);
  await createUser({
    name: validate.data?.name!,
    email: validate.data?.email!,
    password: hashedPassword,
  });

  return {
    success: true,
    message: "User created successfully",
  };
};
