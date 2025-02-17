import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, User } from "lucide-react";
import React from "react";

export default function CourseInfo({ info, className }) {
  const progress = (info.modules.completed / info.modules.total) * 100;
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
      <h2 className="text-xl font-normal mt-4">{info?.title}</h2>
      <p className="mt-4 dark:text-white/75 text-black/60 text-sm">
        {info?.description}
      </p>

      <div className="mt-10">
        <div className="flex justify-between items-center">
          <span className="text-sm dark:text-white/50 text-black/50">
            Progress
          </span>
          <span className="text-sm text-green-500">
            {info?.modules.completed}/{info?.modules.total} Modules
          </span>
        </div>
        <Progress value={progress} className="mt-4 h-2 w-full" />
        <div className="mt-8 flex items-center space-x-2 text-sm dark:text-white/50 text-gray-600">
          <User size={16} />
          <span>{info?.instructor}</span>
        </div>
        <div className="mt-4 flex items-center space-x-2 text-sm dark:text-white/50 text-gray-600">
          <Clock size={16} />
          <span>{info?.duration} hours</span>
        </div>
      </div>
      <div className="mt-10 border border-white/10 p-5 rounded-xl">
        <h4>Share Your Course</h4>
      </div>
    </div>
  );
}
