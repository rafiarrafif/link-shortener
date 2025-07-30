import LoginCard from "@/features/auth/LoginCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="-mt-[20vh]">
          <LoginCard />
        </div>
      </div>
    </>
  );
};

export default page;
