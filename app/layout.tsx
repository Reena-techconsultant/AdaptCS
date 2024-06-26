// app/page.tsx
"use client";

import "./globals.css";
import { useEffect } from "react";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "bootstrap-icons/font/bootstrap-icons.css";
import { clarity } from "react-microsoft-clarity";

const inter = Work_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    clarity.init("l449ae28be");
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body className="body-bg">{children}</body>
      </ThemeProvider>
    </html>
  );
}
