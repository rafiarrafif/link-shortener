"use client";

import { Card, CardBody, CardFooter, CardHeader, Link } from "@heroui/react";
import React from "react";
import SignupForm from "./SignupForm";

const SignupCard = () => {
  return (
    <Card
      className="min-w-[24vw]"
      shadow="none"
      classNames={{ base: "outline-1 outline-neutral-400" }}
    >
      <CardHeader className="mt-3 justify-center">
        <h1 className="text-2xl font-medium text-center">Create an account</h1>
      </CardHeader>
      <CardBody className="px-4">
        <SignupForm />
      </CardBody>
      <CardFooter className="flex justify-center -mt-1 mb-3">
        <span className="text-sm">
          Already have an account?&nbsp;
          <Link className="text-sm cursor-pointer font-medium" href="/login">
            Log in
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
