import React from "react";
import Link from "next/link";
import CourseCard from "@/templates/learning/course-card/course-card";
import { ArrowUpRight } from "lucide-react";
import { courses } from "../demo-data";

export default function OngoingCourses({ className }) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-medium">Continue Learning</h2>
        <Link
          href="/learning"
          className="flex items-center gap-2 text-sm dark:text-lime-400 text-slate-600 dark:hover:text-lime-500 hover:text-slate-700 group border py-3 pr-3 pl-4 rounded-full dark:border-white/10 border-black/30 dark:hover:bg-lime-500/5  tr"
        >
          See Courses
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {courses?.map((course, index) => (
          <CourseCard courseData={course} key={index} />
        ))}
      </div>
    </div>
  );
}
