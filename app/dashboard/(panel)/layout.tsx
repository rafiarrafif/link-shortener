import DashboardNavbar from "@/widgets/dashboard/navbar";
import React from "react";

const dashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <DashboardNavbar />
      <main className="w-full max-w-[1500px] mx-auto px-4">{children}</main>
    </div>
  );
};

export default dashboardLayout;
