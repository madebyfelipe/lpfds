import type { Metadata } from "next";
import { ColdCallPanel } from "@/components/painel/cold-call/ColdCallPanel";
import "./cold-call.css";
export const metadata: Metadata = {
  title: "Cold call — Central SDR | Made by Felipe",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
export default function ColdCallPage() {
  return <ColdCallPanel />;
}
