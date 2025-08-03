import { PanelAdmin } from "@/widgets/dashboard/panelAdmin";
import React from "react";

const page = () => {
  return (
    <main className="flex justify-center">
      <div className="w-full bg-red-400">
        <PanelAdmin />
      </div>
    </main>
  );
};

export default page;
