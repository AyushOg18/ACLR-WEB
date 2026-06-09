import type { Metadata } from "next";
import IndustriesOverviewPage from "@/features/industries/pages/IndustriesOverviewPage";

export const metadata: Metadata = {
  title: "Industries | Acceleron Solutions",
  description: "Acceleron Solutions serves Mining, Manufacturing, Capital Goods, Logistics, Utilities, and Engineering & Construction with deep domain expertise.",
};

export default function IndustriesPage() {
  return <IndustriesOverviewPage />;
}
