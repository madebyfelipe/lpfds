import type { Metadata } from "next";
import { Identidade } from "./identidade";
import "./identidade.css";

export const metadata: Metadata = { title: "Identidade da equipe — Made by Felipe" };
export default function Page() { return <Identidade />; }
