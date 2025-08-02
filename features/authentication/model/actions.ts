"use server";

import { PreviewData } from "next";
import { loginSchema } from "./validatiors";
import { ZodTreeifyError } from "@/shared/types/zod/TreeifyError.types";
import { treeifyError } from "zod";
import { findUserByEmail } from "@/entities/user/model/repository";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const authLogin = async (prevData: PreviewData, formData: FormData) => {
  const inputPayload = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = loginSchema.safeParse(inputPayload);

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
      success: false,
      message: {
        title: "Hold on!",
        description:
          "Something’s off with your input. Please check and try again. ✏️",
      },
      ...formattedErrors,
    };
  }

  const storedUserData = await findUserByEmail(validationResult.data.email);
  if (!storedUserData.success && storedUserData.error_type === "user") {
    return {
      success: false,
      message: {
        title: "Email not found",
        description: "Double-check your email or try a different one.",
      },
      email: ["Email not found!"],
    };
  } else if (
    !storedUserData.success &&
    storedUserData.error_type === "server"
  ) {
    return {
      success: false,
      message: {
        title: "Something went wrong",
        description:
          "We’re having trouble connecting. Please try again later. 🔌",
      },
    };
  }

  const storedPassword = storedUserData.data?.password;
  const matchingResult = await bcrypt.compare(
    validationResult.data.password,
    storedPassword!
  );
  if (matchingResult) {
    const token = jwt.sign(storedUserData, process.env.JWT_KEY!);
    (await cookies()).set("auth_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 Days
    });

    return {
      success: true,
      message: {
        title: "Welcome back!",
        description: "You’re now logged in and ready to go 🚀",
      },
    };
  } else {
    return {
      success: false,
      message: {
        title: "Incorrect password",
        description: "Please try again. 🔐",
      },
      password: ["Incorrect password"],
    };
  }
};
