import SideNavbar from "@/components/side-navbar/side-navbar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <SideNavbar className="max-w-[280px] w-full h-screen bg-white/5 fixed p-6" />
      <main className="ml-[280px]">{children}</main>
    </div>
  );
}
