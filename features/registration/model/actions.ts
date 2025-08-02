"use server";

import { createUser } from "@/entities/user/model/repository";
import { signupSchema } from "./validators";
import { PreviewData } from "next";
import { treeifyError } from "zod";
import { ZodTreeifyError } from "@/shared/types/zod/TreeifyError.types";
import bcrypt from "bcrypt";

export const registerUser = async (
  prevData: PreviewData,
  formData: FormData
) => {
  const payload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = signupSchema.safeParse(payload);

  if (!validationResult.success) {
    const parsedErros: ZodTreeifyError = treeifyError(validationResult.error);
    let formattedErrors: { [fieldName: string]: string[] } = {};

    for (const fieldName in parsedErros.properties) {
      const fieldErrors = parsedErros.properties[fieldName].errors;
      if (fieldErrors.length > 0) {
        formattedErrors[fieldName] = fieldErrors;
      }
    }

    return {
      error: true,
      ...formattedErrors,
    };
  }

  const hashedPassword = await bcrypt.hash(
    validationResult.data?.password!,
    10
  );

  const storeUserData = await createUser({
    name: validationResult.data?.name!,
    email: validationResult.data?.email!,
    password: hashedPassword,
  });

  if (storeUserData.success) {
    return {
      success: true,
      message: "User created successfully",
    };
  } else {
    return {
      error: true,
      email: ["Email already registered"],
    };
  }
};
