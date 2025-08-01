"use server";

import { prisma } from "@/shared/db/prisma";

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    await prisma.user.create({ data });
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export const findUserByEmail = async (email: string) => {
  try {
    const userData = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userData) {
      return {
        success: false,
        error_type: "user",
      };
    } else {
      return {
        success: true,
        data: userData,
      };
    }
  } catch (error) {
    return {
      success: false,
      error_type: "user",
    };
  }
};
