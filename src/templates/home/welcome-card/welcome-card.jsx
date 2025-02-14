import React from "react";
import Image from "next/image";

import avatar from "@/assets/images/bg.png";
import { ArrowUpRight } from "lucide-react";
export default function WelcomeCard({ className }) {
  return (
    <div
      className={`card flex items-center justify-between ${className}`}
      style={{ paddingInline: "64px" }}
    >
      <div className="">
        <h1>Welcome to Elevate</h1>
        <p className="text-lg mt-2 text-white/60">
          Your personalized AI powered{" "}
          <span className="text-lime-400 font-medium">Learning Assistance</span>
        </p>
        <div className="mt-16 flx gap-2">
          <button className="btn bg-lime-400 hover:bg-lime-500 tr text-black/80">
            Start Learning
          </button>
          <button className="btn text-base gap-2">
            Refer a Friend <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Image
        src={avatar}
        className="h-[260px] w-fit object-contain"
        alt="sudent reading books"
      />
    </div>
  );
}
