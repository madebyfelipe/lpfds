"use client";

import { usePathname } from "next/navigation";
import { ScheduleLink } from "@/components/ScheduleLink";

export function InstMobileCta() {
  const pathname = usePathname();
  if (!["/", "/metodologia", "/projetos"].includes(pathname)) return null;

  return (
    <div className="inst-mobile-cta">
      <ScheduleLink className="inst-submit">
        Conversar por 15 minutos
      </ScheduleLink>
    </div>
  );
}
