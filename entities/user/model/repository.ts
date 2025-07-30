"use server";

import { prisma } from "@/shared/db/prisma";

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await prisma.user.create({ data });
};
