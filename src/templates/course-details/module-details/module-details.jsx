import {
  AlignLeft,
  Check,
  Dot,
  ExternalLink,
  Folder,
  Newspaper,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ModuleDetails({ className, selectedModule }) {
  return (
    <div className={`card ${className}`}>
      <h3>{selectedModule?.title}</h3>
      <hr className="my-3 border-t-none border-b border-b-white/10" />
      <p className="text-sm dark:text-white/60 text-black/60">
        {selectedModule?.description}
      </p>
      <h4 className="mt-8">Pinpoint Concept</h4>
      <ul className="flex flex-col gap-2 mt-4">
        {selectedModule?.content?.map((item, index) => (
          <li
            className="text-sm dark:text-white/75 text-black/60 flx gap-2"
            key={index}
          >
            <Check className="h-4 w-4" />
            {item}
          </li>
        ))}
      </ul>
      <h4 className="mt-8">Articles</h4>
      <ul className="flex flex-col gap-3 mt-4">
        {selectedModule?.articles?.map((item, index) => (
          <Link
            href={item?.url}
            target="_blank"
            className="text-sm dark:text-white/75 text-black/60 flx gap-3 dark:hover:text-lime-400 hover:text-black tr w-fit"
            key={index}
          >
            <AlignLeft className="h-4 w-4" />
            {item.title}
            <ExternalLink className="h-4 w-4" />
          </Link>
        ))}
      </ul>
      <div className="mt-8 flbx">
        <h4 className="">Tutorials</h4>
        <div className="flx gap-4 text-xs">
          <button>+Add</button>
          <button>Edit</button>
        </div>
      </div>
      <ul className="flex flex-col gap-3 mt-4">
        {selectedModule?.tutorials?.map((item, index) => (
          <Link
            href={item?.url}
            target="_blank"
            className="text-sm dark:text-white/75 text-black/60 flx gap-3 dark:hover:text-lime-400 hover:text-black tr w-fit"
            key={index}
          >
            <Youtube className="h-4 w-4" />
            {item.title}
            <ExternalLink className="h-4 w-4" />
          </Link>
        ))}
      </ul>
      <h4 className="mt-8">Notes & Documents</h4>
      <ul className="flex flex-col gap-3 mt-4">
        {selectedModule?.notes?.map((item, index) => (
          <Link
            href={item?.url}
            target="_blank"
            className="text-sm dark:text-white/75 text-black/60 flx gap-3 dark:hover:text-lime-400 hover:text-black tr w-fit"
            key={index}
          >
            <Folder className="h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </ul>

      <hr className="mt-12 mb-6 border-t-none border-b border-b-white/10" />
      <div className="flx gap-2 justify-end">
        <button className="btn border dark:border-white/20 border-black/10 text-sm w-40">
          Take Quiz
        </button>
        <button className="btn border border-white/20 text-sm bg-lime-400 text-green-900">
          Complete Module
        </button>
      </div>
    </div>
  );
}
