"use client";

import React, { useEffect, useState } from "react";
import ModuleList from "./module-list/module-list";
import CourseInfo from "./course-info/course-info";
import ModuleDetails from "./module-details/module-details";
import { courses } from "../home/demo-data";
import { usePathname } from "next/navigation";
import { moduleList } from "./module-list/demo-data";

export default function CourseDetailsPage() {
  const pathname = usePathname();
  const [selectedModule, setSelectedModule] = useState();

  useEffect(() => {
    setSelectedModule(moduleList[0].children[0]);
  }, []);

  const courseDetails = courses.find(
    (item) =>
      item.title.split(" ").join("-").toLowerCase() === pathname.split("/")[2]
  );

  return (
    <div className="flex gap-6">
      <ModuleList
        className="lg:max-w-[25%] max-w-full w-full"
        selectedModule={selectedModule}
        setModule={setSelectedModule}
      />
      <ModuleDetails
        className="lg:max-w-[50%] max-w-full w-full"
        selectedModule={selectedModule}
      />
      <CourseInfo
        info={courseDetails}
        className="lg:max-w-[25%] max-w-full w-full sticky top-8 h-fit"
      />
    </div>
  );
}
