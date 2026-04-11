"use client";

import type { ReactNode } from "react";

const CAL_URL = "https://cal.com/madebyfelipe/15min";

type Props = {
  className?: string;
  children: ReactNode;
};

export function ScheduleLink({ className, children }: Props) {
  function handleClick() {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "Schedule");
    }
  }

  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
