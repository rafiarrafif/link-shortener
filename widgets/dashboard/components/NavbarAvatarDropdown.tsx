"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";
import { Icon } from "@iconify/react";

const NavbarAvatarDropdown = () => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          radius="md"
          src=""
          fallback={
            <Icon
              icon="heroicons:user-16-solid"
              className="h-auto w-6 text-neutral-400"
            />
          }
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat">
        <DropdownItem
          key="profile"
          className="font-[Geist] text-neutral-700"
          startContent={
            <Icon icon="heroicons:user-circle" className="h-auto w-5" />
          }
        >
          Profile
        </DropdownItem>
        <DropdownItem
          key="settings"
          className="font-[Geist] text-neutral-700"
          startContent={
            <Icon icon="heroicons:cog-8-tooth" className="h-auto w-5" />
          }
        >
          Settings
        </DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger font-[Geist]"
          color="danger"
          href="/dashboard/logout"
          startContent={
            <Icon
              icon="heroicons:arrow-right-start-on-rectangle-20-solid"
              className="h-auto w-5"
            />
          }
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarAvatarDropdown;
