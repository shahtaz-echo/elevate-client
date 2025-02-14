import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Clock, User } from "lucide-react";
import Link from "next/link";

export default function CourseCard({ courseData }) {
  const { title, modules, type, instructor, duration } = courseData;
  const progress = (modules.completed / modules.total) * 100;

  return (
    <Card className="w-full flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
          <Badge
            variant={
              type === "Basic"
                ? "default"
                : type === "Intermediate"
                ? "secondary"
                : "destructive"
            }
          >
            {type}
          </Badge>
        </div>
      </CardHeader>
      <div>
        <CardContent className="pb-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm dark:text-white/50 text-black/50">
                Progress
              </span>
              <span className="text-sm text-green-500">
                {modules.completed}/{modules.total} Modules
              </span>
            </div>
            <Progress value={progress} className="h-2 w-full" />
            <div className="flex items-center space-x-2 text-sm dark:text-white/50 text-gray-600">
              <User size={16} />
              <span>{instructor}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm dark:text-white/50 text-gray-600">
              <Clock size={16} />
              <span>{duration} hours</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="dark:bg-white/10 bg-gray-800 px-6 py-3.5">
          <div className="flex items-center justify-between w-full">
            <Link
              href={`/learning/${title?.split(" ").join("-").toLowerCase()}`}
              className="flex items-center space-x-2 group text-white hover:text-lime-400 tr"
            >
              <span className="text-sm font-medium ">Continue Learning</span>
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 tr"
              />
            </Link>
            <span className="text-xs text-white/80">
              {modules.completed === modules.total
                ? "Completed"
                : `${Math.round(progress)}% Complete`}
            </span>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
