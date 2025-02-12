import React from "react";
import { courses } from "../HomePage/demo-data";
import CourseCard from "./CourseDetailsPage/course-card/course-card";

export default function LearningPage() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-medium">Your Ongoing Learning</h2>
      <hr className="mt-4" />
      <div className="flex gap-8 mt-8">
        <div className="lg:w-3/4 w-full grid lg:grid-cols-3 grid-cols-1 gap-5">
          {courses?.map((course, index) => (
            <CourseCard courseData={course} key={index} />
          ))}
        </div>
        <div className="lg:w-1/4 w-full sticky top-0">
          <h2>Self Learning is meant for the smartest people</h2>
          <p className="mt-2 text-sm dark:text-white/60">
            Courses that designs by AI and you, Want to start learning something
            New?
          </p>
          <button className="mt-8 btn bg-lime-400 hover:bg-lime-500 tr text-black/80">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
