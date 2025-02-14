import { Badge } from "@/components/ui/badge";
import React from "react";

export default function CourseInfo({ info, className }) {
  return (
    <div className={`${className}`}>
      <Badge
        variant={
          info.type === "Basic"
            ? "default"
            : info.type === "Intermediate"
            ? "secondary"
            : "destructive"
        }
      >
        {info.type}
      </Badge>
      <h2 className="text-2xl font-normal mt-4">{info?.title}</h2>
    </div>
  );
}
