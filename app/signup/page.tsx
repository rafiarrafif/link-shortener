import SignupFormWrapper from "@/features/auth/ui/SignupFormWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="-mt-[20vh]">
          <SignupFormWrapper />
        </div>
      </div>
    </>
  );
};

export default page;
