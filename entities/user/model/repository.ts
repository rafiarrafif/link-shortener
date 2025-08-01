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
