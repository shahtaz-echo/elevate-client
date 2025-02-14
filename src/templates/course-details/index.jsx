"use client";

import React from "react";
import ModuleList from "./module-list/module-list";
import CourseInfo from "./course-info/course-info";
import ModuleDetails from "./module-details/module-details";
import { courses } from "../home/demo-data";
import { usePathname } from "next/navigation";

export default function CourseDetailsPage() {
  const pathname = usePathname();

  const courseDetails = courses.find(
    (item) =>
      item.title.split(" ").join("-").toLowerCase() === pathname.split("/")[2]
  );
  console.log(courseDetails);
  return (
    <div className="flex gap-6">
      <ModuleList className="lg:max-w-[25%] max-w-full w-full" />
      <ModuleDetails className="lg:max-w-[50%] max-w-full w-full" />
      <CourseInfo
        info={courseDetails}
        className="lg:max-w-[25%] max-w-full w-full"
      />
    </div>
  );
}
