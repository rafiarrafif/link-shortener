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
