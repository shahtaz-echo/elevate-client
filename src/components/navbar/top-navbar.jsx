"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, USER } from "./data";
import { Search } from "lucide-react";

export default function TopNavbar() {
  const pathname = usePathname();
  return (
    <nav className="flbx">
      <div className="bg-white dark:bg-white/5 py-3 pl-5 pr-6 rounded-full">
        <Link href={"/"} className="text-xl font-medium">
          #Elevate
        </Link>
      </div>
      <div className="bg-white dark:bg-white/5 p-2 rounded-full mr-8">
        <div className="flex text-sm">
          {NAV_ITEMS?.map(({ title, link }, index) => (
            <Link
              key={index}
              href={link}
              className={`py-2.5 px-5 flex justify-center rounded-full ${
                pathname === link
                  ? "bg-black dark:bg-white text-white dark:text-black font-medium"
                  : "text-black dark:text-white"
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flx gap-3">
        <button className="h-10 w-10 center rounded-full bg-white">
          <Search className="h-4 w-4" />
        </button>
        <div>
          <img src={USER.image} className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </nav>
  );
}
