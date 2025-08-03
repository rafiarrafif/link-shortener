"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { authLogin } from "../model/actions";
import { useRouter } from "next/navigation";
import {
  addToast,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  Input,
  Link,
} from "@heroui/react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordIcon = showPassword
    ? "heroicons:eye-slash-20-solid"
    : "heroicons:eye-20-solid";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormState: ValidationError = {};
  const [callbackState, formAction] = useActionState(
    authLogin,
    initialFormState
  );

  const router = useRouter();

  useEffect(() => {
    if (callbackState.success) {
      addToast({
        title: callbackState.message.title,
        description: callbackState.message.description,
        color: "success",
        timeout: 5000,
      });
      router.push(`/dashboard`);
    } else if (callbackState.success === false) {
      addToast({
        title: callbackState.message.title,
        description: callbackState.message.description,
        color: "danger",
        timeout: 7000,
      });
      setIsSubmitting(false);
    }
  }, [callbackState]);

  return (
    <Card
      className="w-[380px]"
      shadow="none"
      classNames={{ base: "outline-1 outline-neutral-400" }}
    >
      <CardHeader className="mt-3 justify-center">
        <h1 className="text-2xl font-medium text-center">Welcome Back</h1>
      </CardHeader>
      <CardBody className="px-4">
        <Form
          className="flex flex-col gap-2"
          validationErrors={callbackState}
          action={formAction}
          onSubmit={() => setIsSubmitting(true)}
        >
          <Input
            label="Email"
            name="email"
            type="email"
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
                  icon={showPasswordIcon}
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
          Don't have an account?&nbsp;
          <Link
            className="text-sm cursor-pointer font-medium"
            href={`/dashboard/signup`}
          >
            Sign up
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
