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

type SignupFormProps = {
  action: (formData: FormData) => void;
};

const SignupForm = ({ action }: SignupFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

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
        <Form className="flex flex-col gap-2" action={action}>
          <Input
            label="Full Name"
            name="name"
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
            }}
          />
          <Input
            label="Email"
            name="email"
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
            }}
          />
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
            }}
            endContent={
              <Button
                variant="light"
                className="absolute right-2 top-2 px-2 py-2 h-auto min-w-0 cursor-pointer group/wrapper"
                onPress={() => setShowPassword(!showPassword)}
              >
                <Icon
                  icon={
                    showPassword
                      ? "heroicons:eye-slash-20-solid"
                      : "heroicons:eye-20-solid"
                  }
                  className="w-5 h-5 text-[#a0a0a0] group-hover/wrapper:text-[#777777]"
                />
              </Button>
            }
          />
          <Button type="submit" color="primary" className="mt-3 w-full">
            Continue
          </Button>
        </Form>
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

export default SignupForm;
