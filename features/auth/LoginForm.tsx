"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  Input,
  Link,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <Form className="flex flex-col gap-2">
          <Input
            label="Email"
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
            }}
          />
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
            }}
            endContent={
              <div
                className="absolute right-4 top-4 w-auto h-auto cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Icon
                  icon="heroicons:eye-20-solid"
                  className="w-5 h-5 text-[#a0a0a0] hover:text-[#777777]"
                />
              </div>
            }
          />
          <Button color="primary" className="mt-3 w-full">
            Continue
          </Button>
        </Form>
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

export default LoginForm;
