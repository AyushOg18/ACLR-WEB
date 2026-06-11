import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights | Acceleron Solutions",
  description: "Executive insights on enterprise technology, transformation, analytics, and industry modernization.",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
