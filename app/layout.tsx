import "./globals.css";
import GeistFontProvider from "@/providers/fonts/GeistFontProvider";
import HeroUIWrapper from "@/providers/HeroUIWrapper";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="dark">
      <body>
        <GeistFontProvider>
          <HeroUIWrapper>{children}</HeroUIWrapper>
        </GeistFontProvider>
      </body>
    </html>
  );
};

export default RootLayout;
