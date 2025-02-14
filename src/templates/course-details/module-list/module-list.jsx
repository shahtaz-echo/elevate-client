import React from "react";
import { moduleList } from "./demo-data";

export default function ModuleList({ className }) {
  return (
    <div className={`card ${className}`}>
      <h3>Modules</h3>
      <div className="mt-4">
        {moduleList?.map((module, index) => (
          <div key={index}>{module.title}</div>
        ))}
      </div>
    </div>
  );
}
