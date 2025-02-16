import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { moduleList } from "./demo-data";

export default function ModuleList({ className, selectedModule, setModule }) {
  return (
    <div className={`card ${className}`}>
      <h3>Modules</h3>
      <div className="mt-4">
        <Accordion
          type="single"
          defaultValue={1}
          collapsible
          className="w-full"
        >
          {moduleList?.map((module, index) => (
            <AccordionItem value={module?.module} key={index}>
              <AccordionTrigger>
                {index + 1}. {module.title}
              </AccordionTrigger>
              {module?.children?.map((item, jndex) => (
                <AccordionContent
                  key={jndex}
                  className={`flex gap-4  tr cursor-pointer ${
                    selectedModule?.title === item?.title
                      ? "text-lime-400"
                      : "dark:text-white/60 text-black/60 dark:hover:text-white/80 hover:text-black/80"
                  }`}
                  onClick={() => setModule(item)}
                >
                  <div className="mt-0.5 border dark:border-white/20 border-black/30 h-[18px] w-[18px] rounded-full center">
                    {item.isCompleted && (
                      <span className="bg-lime-400 h-2.5 w-2.5 rounded-full"></span>
                    )}
                  </div>
                  <span className="flex-1">{item?.title}</span>
                </AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
