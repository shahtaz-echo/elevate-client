import TopNavbar from "@/components/navbar/top-navbar";
import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 py-4 px-6 min-h-screen">
      <TopNavbar />
      <main className="mt-6 wrapper">{children}</main>
    </div>
  );
}
