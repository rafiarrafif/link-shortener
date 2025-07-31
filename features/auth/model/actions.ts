"use server";

import { createUser } from "@/entities/user/model/repository";
import { signupSchema } from "./validators";
import bcrypt from "bcrypt";
import { PreviewData } from "next";
import { treeifyError } from "zod";
import { ZodTreeifyError } from "@/shared/types/zod/TreeifyError.types";

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

    return formattedErrors;
  }

  const hashedPassword = await bcrypt.hash(
    validationResult.data?.password!,
    10
  );

  try {
    await createUser({
      name: validationResult.data?.name!,
      email: validationResult.data?.email!,
      password: hashedPassword,
    });

    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    return error;
  }
};
