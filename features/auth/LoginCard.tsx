"use client";

import { Card, CardBody, CardFooter, CardHeader, Link } from "@heroui/react";
import React from "react";
import LoginForm from "./LoginForm";

const LoginCard = () => {
  return (
    <Card
      className="min-w-[24vw]"
      shadow="none"
      classNames={{ base: "outline-1 outline-neutral-400" }}
    >
      <CardHeader className="mt-2 justify-center">
        <h1 className="text-2xl font-medium text-center">Welcome Back</h1>
      </CardHeader>
      <CardBody className="px-4">
        <LoginForm />
      </CardBody>
      <CardFooter className="flex justify-center -mt-1 mb-3">
        <span className="text-sm">
          Don't have an account?&nbsp;
          <Link className="text-sm cursor-pointer font-medium">Sign up</Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
