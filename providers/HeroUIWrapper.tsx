"use client";

import React, { useEffect, useState } from "react";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

const HeroUIWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ToastProvider />
      {mounted ? (
        <NextThemesProvider attribute={"class"} defaultTheme="light">
          <main>{children}</main>
        </NextThemesProvider>
      ) : (
        <main className="light text-foreground bg-background">{children}</main>
      )}
    </HeroUIProvider>
  );
};

export default HeroUIWrapper;
