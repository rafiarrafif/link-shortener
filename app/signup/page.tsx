import SignupForm from "@/features/auth/ui/SignupForm";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="-mt-[20vh]">
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default page;
