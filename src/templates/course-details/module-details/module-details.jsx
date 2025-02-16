import React from "react";

export default function ModuleDetails({ className, selectedModule }) {
  return (
    <div className={`card ${className}`}>
      <h3>{selectedModule?.title}</h3>
      <hr className="my-3 border-t-none border-b border-b-white/10" />
      <p className="text-sm dark:text-white/60 text-black/60">{selectedModule?.description}</p>
    </div>
  );
}
