import { verifyJwt } from "@/features/authentication/model/verifyJwt";
import { PanelAdmin } from "@/widgets/dashboard/panelAdmin";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const userCookie = (await cookies()).get("auth_token")?.value;
  const jwtPayload = verifyJwt(userCookie!);

  return (
    <main className="flex justify-center">
      <div className="w-full ">
        <PanelAdmin jwtPayload={jwtPayload} />
      </div>
    </main>
  );
};

export default page;
