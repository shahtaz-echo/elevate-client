import React from "react";
import WelcomeCard from "./welcome-card/welcome-card";
import Calendar from "./calendar/calendar";
import RecentNotes from "./recent-notes/recent-notes";
import OngoingCourses from "./ongoing-courses/ongoing-courses";

import LearningProgress from "@/templates/learning/learning-progress/learning-progress";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex md:flex-row flex-col gap-6">
        <WelcomeCard className="flex-1" />
        <Calendar className="w-fit" />
      </div>
      <OngoingCourses className="mt-6" />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <LearningProgress className="lg:col-span-2 col-span-3" />
        <RecentNotes className="lg:col-span-1 col-span-3" />
      </div>
    </div>
  );
}
