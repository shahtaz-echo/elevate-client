import React from "react";

import { avatar_svg } from "@/assets/icons/svg-people";
import { ArrowUpRight } from "lucide-react";
export default function WelcomeCard({ className }) {
  return (
    <div className={`card flex relative ${className}`}>
      <div className="lg:mt-6 lg:ml-10">
        <h1>Welcome to Elevate</h1>
        <p className="text-xl mt-2">Your personalized Learning Assistance</p>
        <div className="mt-16 flx gap-2">
          <button className="btn btn-primary">Start Learning</button>
          <button className="btn text-lg gap-2">
            Refer a Friend <ArrowUpRight />
          </button>
        </div>
      </div>
      <div className="absolute right-10 bottom-0 h-[320px] scale-x-[-1] hidden lg:block">
        {avatar_svg}
      </div>
    </div>
  );
}
