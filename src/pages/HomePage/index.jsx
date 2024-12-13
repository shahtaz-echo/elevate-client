import React from "react";
import WelcomeCard from "./welcome-card/welcome-card";
import Calendar from "./calendar/calendar";
import TakeAQuiz from "./take-a-quiz/take-a-quiz";
import RecentNotes from "./recent-notes/recent-notes";
import ProgressCard from "./progress-card/progress-card.jsx";
import OngoingCoursesList from "./ongoing-courses-list/ongoing-courses-list";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex md:flex-row flex-col gap-6">
        <WelcomeCard className="flex-1" />
        <Calendar className="w-fit" />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <OngoingCoursesList />
        <ProgressCard />
      </div>
      <div className="grid grid-cols-3 gap-6">
        <RecentNotes className="lg:col-span-2 col-span-3" />
        <TakeAQuiz className="lg:col-span-1 col-span-3" />
      </div>
    </div>
  );
}
