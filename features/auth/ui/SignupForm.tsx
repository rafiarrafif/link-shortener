"use client";

import { Button, Form, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form className="flex flex-col gap-2">
      <Input
        label="Full Name"
        variant="bordered"
        classNames={{
          input: "focus:outline-none text-md",
          label: "mb-1",
        }}
      />
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
      <Button color="primary" className="mt-3 w-full">
        Continue
      </Button>
    </Form>
  );
};

export default SignupForm;
