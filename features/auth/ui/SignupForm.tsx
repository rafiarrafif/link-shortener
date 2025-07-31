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
import React, { useActionState, useRef, useState } from "react";
import { registerUser } from "../model/actions";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormState: any = {};
  const [formState, formAction] = useActionState(
    registerUser,
    initialFormState
  );

  return (
    <Card
      className="w-[380px]"
      shadow="none"
      classNames={{ base: "outline-1 outline-neutral-400" }}
    >
      <CardHeader className="mt-3 justify-center">
        <h1 className="text-2xl font-medium text-center">Create an account</h1>
      </CardHeader>
      <CardBody className="px-4">
        <Form className="flex flex-col gap-2" action={formAction}>
          <Input
            required
            minLength={4}
            isInvalid={!!formState.properties?.name}
            errorMessage={
              formState.properties && formState.properties.name.errors[0]
            }
            label="Full Name"
            name="name"
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
              errorMessage: "-mb-1.5",
            }}
          />
          <Input
            required
            isInvalid={!!formState.properties?.email}
            errorMessage={
              formState.properties && formState.properties.email.errors[0]
            }
            label="Email"
            name="email"
            type="email"
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
              errorMessage: "-mb-1.5",
            }}
          />
          <Input
            required
            isInvalid={!!formState.properties?.password}
            errorMessage={
              formState.properties && formState.properties.password.errors[0]
            }
            minLength={8}
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            variant="bordered"
            classNames={{
              input: "focus:outline-none text-md",
              label: "mb-1",
              errorMessage: "-mb-1.5",
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
          <Button
            type="submit"
            color="primary"
            className="mt-3 w-full"
            isLoading={isSubmitting}
          >
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
