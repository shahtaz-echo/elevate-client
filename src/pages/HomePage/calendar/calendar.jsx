"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarCard({ className }) {
  const [date, setDate] = useState(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={`card ${className}`}
    />
  );
}
