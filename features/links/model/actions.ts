"use server";

import { createLink } from "@/entities/link/model/repository";
import { PreviewData } from "next";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const createLinkAction = async (
  prevData: PreviewData,
  formData: FormData
) => {
  const inputPayload = {
    shortUrl: formData.get("shortlink") as string,
    longUrl: formData.get("longlink") as string,
  };

  const cookiesPayload = (await cookies()).get("auth_token")?.value!;
  const jwtPayload: any = jwt.verify(cookiesPayload, process.env.JWT_KEY!);

  const userId = jwtPayload.data.id;

  const addNewLink: any = await createLink({
    shortlink: inputPayload.shortUrl,
    longlink: inputPayload.longUrl,
    userId,
  });
  if (addNewLink.success) {
    return {
      success: true,
      message: "Shortlink create successfully",
    };
  } else {
    return {
      error: true,
      shortlink: ["This name has been taken, try different one!"],
    };
  }
};
