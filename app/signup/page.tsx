import SignupCard from "@/features/auth/ui/SignupCard";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="-mt-[20vh]">
          <SignupCard />
        </div>
      </div>
    </>
  );
};

export default page;
