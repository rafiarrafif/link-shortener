import { getLinkByShortlink } from "@/entities/link/model/repository";
import { notFound, redirect } from "next/navigation";

const page = async ({ params }: { params: { slug: string[] } }) => {
  const result: any = await getLinkByShortlink(params.slug[0]);
  if (!result.success) {
    return notFound();
  }
  redirect(result.longUrl);
};

export default page;
