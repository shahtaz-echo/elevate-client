import Link from "next/link";
import React from "react";
import { courses } from "../demo-data";

export default function OngoingCoursesList({ className }) {
  return (
    <div className={`card ${className}`}>
      <div className="flbx">
        <h2>Continue Learning</h2>
        <Link href="/learning">See Courses</Link>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        {courses?.map((course, index) => (
          <div key={index} className="p-4 bg-slate-100 rounded-xl">
            <h4>{course.name}</h4>
            <p className="">{course.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
