"use client";

import { usePathname } from "next/navigation";
import { ScheduleLink } from "@/components/ScheduleLink";
import { UI, localeDoPath } from "@/lib/i18n";

export function InstMobileCta() {
  const pathname = usePathname();
  if (!["/metodologia", "/projetos", "/en/method"].includes(pathname)) return null;

  return (
    <div className="inst-mobile-cta">
      <ScheduleLink className="inst-submit">
        {UI[localeDoPath(pathname)].conversar15}
      </ScheduleLink>
    </div>
  );
}
