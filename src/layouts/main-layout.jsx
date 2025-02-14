import React from "react";
import { ThemeProvider } from "next-themes";
import TopNavbar from "@/components/navbar/top-navbar";
import Footer from "@/components/footer/footer";

export default function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="bg-gray-100 dark:bg-[#121212] py-4 px-6 min-h-screen flex flex-col">
        <TopNavbar />
        <main className="mt-6 wrapper flex-1 w-full">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
