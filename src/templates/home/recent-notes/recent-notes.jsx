import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function RecentNotes({ className }) {
  const notes = [
    {
      id: 1,
      title: "Python Advanced Recursion",
      body: "The way python recurring thing happened here, is something very possesive",
    },
    {
      id: 2,
      title: "Python Advanced Recursion",
      body: "The way python recurring thing happened here, is something very possesive",
    },
    {
      id: 3,
      title: "Python Advanced Recursion",
      body: "The way python recurring thing happened here, is something very possesive",
    },
  ];
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle>Your Notes</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 overflow-auto">
          {notes?.map((note, index) => (
            <div
              key={index}
              className={`dark:bg-white/5 bg-slate-100 p-4 rounded-xl ${
                index === 1 ? "border border-lime-400" : ""
              }`}
            >
              <h2 className="text-base font-medium">{note.title}</h2>
              <p className="text-sm mt-2 dark:text-white/50">{note.body}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
