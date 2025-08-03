"use server";
import { prisma } from "@/shared/db/prisma";

export const getLinkByShortlink = async (shortUrl: string) => {
  const linkData = await prisma.link.findUnique({
    where: {
      shortUrl,
    },
    select: {
      longUrl: true,
    },
  });

  if (!linkData) {
    return {
      success: false,
      message: "Link not found",
    };
  }

  return {
    success: true,
    ...linkData,
  };
};

type InputPayload = {
  shortlink: string;
  longlink: string;
  userId: string;
};
export const createLink = async (payload: InputPayload) => {
  try {
    const createdLink = await prisma.link.create({
      data: {
        shortUrl: payload.shortlink,
        longUrl: payload.longlink,
        ownerId: payload.userId,
      },
    });
    return {
      success: true,
      data: createdLink,
    };
  } catch (error) {
    return {
      success: false,
      message: "Shortlink has been taken",
    };
  }
};

export const deleteLink = async (id: string) => {
  try {
    const deletedLink = await prisma.link.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
    return {
      success: true,
      data: deletedLink,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete",
    };
  }
};
