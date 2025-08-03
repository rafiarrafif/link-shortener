"use client";

import { Link, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import React from "react";
import Logo from "@/public/text-logo.svg";
import Image from "next/image";
import NavbarAvatarDropdown from "./components/NavbarAvatarDropdown";

const DashboardNavbar = () => {
  return (
    <Navbar maxWidth="2xl">
      <NavbarBrand>
        <Link href="/dashboard">
          <Image src={Logo} alt="Logo" className="w-auto h-10" priority />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarAvatarDropdown />
      </NavbarContent>
    </Navbar>
  );
};

export default DashboardNavbar;
