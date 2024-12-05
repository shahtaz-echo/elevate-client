import TopNavbar from "@/components/navbar/top-navbar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <TopNavbar />
      <main className="">{children}</main>
    </div>
  );
}
