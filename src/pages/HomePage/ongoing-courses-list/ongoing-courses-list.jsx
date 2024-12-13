import Link from "next/link";
import React from "react";
import { courses } from "../demo-data";
import { dtBefore } from "@/lib/date-time-manupulate";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export default function OngoingCoursesList({ className }) {
  return (
    <div className={`p-6 bg-white rounded-2xl shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Continue Learning</h2>
        <Link
          href="/learning"
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group"
        >
          See Courses
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        {courses?.map((course, index) => (
          <Link
            key={index}
            href={`/learning/${course.name.toLowerCase().split(" ").join("-")}`}
            className="group relative flex gap-5 p-5 bg-slate-50 border rounded-xl hover:bg-blue-50 transition-all duration-300"
          >
            {/* Progress indicator */}
            <div className="relative">
              <div className="h-20 w-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`w-full bottom-0 absolute rounded-full tr ${
                    (course.completedModule / course.totalModule) * 100 > 40
                      ? "bg-blue-500 group-hover:bg-blue-600"
                      : "bg-red-500 group-hover:bg-red-600"
                  }`}
                  style={{
                    height: `${
                      (course.completedModule / course.totalModule) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {course.name}
                </h4>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 mb-0.5" />
                    <span>
                      {course?.completedModule < 9 && "0"}
                      {course?.completedModule}/{course.totalModule} Modules
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mb-0.5" />
                    <span>Started {dtBefore(course.startedDate)}</span>
                  </div>
                </div>

                <span
                  className={`
                  px-4 py-1.5 text-xs font-medium rounded-full 
                  ${
                    course.type.toLowerCase() === "basic"
                      ? "bg-green-100 text-green-700"
                      : course.type.toLowerCase() === "medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }
                  transition-colors duration-300
                  group-hover:bg-opacity-70
                `}
                >
                  {course.type.charAt(0).toUpperCase() + course.type.slice(1)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
