"use client";

import { createLinkAction } from "@/features/links/model/actions";
import {
  addToast,
  Button,
  Card,
  CardBody,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { ValidationError } from "next/dist/compiled/amphtml-validator";
import { useRouter } from "next/navigation";
import React, { useActionState, useEffect, useState } from "react";

type Props = {
  links?: {
    id: string;
    shortUrl: string;
    longUrl: string;
  }[];
};

const DashboardControlLinks = ({ links }: Props) => {
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const initialFormCreateState: ValidationError = {};
  const [callbackCreateState, formCreateAction] = useActionState(
    createLinkAction,
    initialFormCreateState
  );

  const router = useRouter();
  useEffect(() => {
    if (callbackCreateState.success) {
      addToast({
        title: "Link created successfully",
        description: "You can access your link now",
        color: "success",
        timeout: 5000,
      });
      router.push(`/dashboard`);
    }
  }, [callbackCreateState]);

  return (
    <div className="mt-12 px-20">
      <div className="flex justify-between ">
        <div className="flex items-center gap-2">
          <div className="bg-neutral-500 flex justify-center items-center w-10 h-10 rounded-lg">
            <Icon
              icon="heroicons:link-16-solid"
              className="w-auto h-6 text-white"
            />
          </div>
          <span className="text-xl">{links?.length || 0} Short Link</span>
        </div>
        <div>
          <Button
            variant="solid"
            color="primary"
            name="Create"
            onPress={() => setIsModalCreateOpen(true)}
            startContent={<Icon icon="heroicons:plus-16-solid" />}
          >
            Create
          </Button>
          <Modal
            isOpen={isModalCreateOpen}
            onOpenChange={setIsModalCreateOpen}
            placement="auto"
            className="font-[Geist]"
          >
            <ModalContent>
              {(onClose) => (
                <Form
                  action={formCreateAction}
                  validationErrors={callbackCreateState}
                >
                  <ModalHeader className="w-full flex flex-col gap-1 ">
                    Create New Shortlink
                  </ModalHeader>
                  <ModalBody className="w-full">
                    <Input
                      label="Short Link"
                      name="shortlink"
                      variant="bordered"
                    />
                    <Input
                      label="Long Link"
                      type="url"
                      name="longlink"
                      variant="bordered"
                    />
                  </ModalBody>
                  <ModalFooter className="w-full">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button type="submit" color="primary">
                      Create
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links?.map((item, index) => (
          <Card key={index} shadow="none" className="border border-neutral-300">
            <CardBody>
              <div className="flex justify-between">
                <div>
                  <p>{item.shortUrl}</p>
                  <p className="text-sm text-neutral-500">{item.longUrl}</p>
                </div>
                <div>
                  <Button isIconOnly color="danger">
                    <Icon
                      icon="heroicons:trash-20-solid"
                      className="w-auto h-5"
                    />
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardControlLinks;
