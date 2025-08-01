import LoginForm from "@/features/auth/ui/LoginForm";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="-mt-[20vh]">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default page;
