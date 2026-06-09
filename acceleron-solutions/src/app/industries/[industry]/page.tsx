import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailPage from "@/features/industries/pages/IndustryDetailPage";
import { getIndustryBySlug, getIndustries } from "@/features/industries/services/industryService";

type Props = {
  params: Promise<{
    industry: string;
  }>;
};

export async function generateStaticParams() {
  return getIndustries().map((industry) => ({ industry: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const industryData = getIndustryBySlug(industry);

  if (!industryData) {
    return {
      title: "Industry | Acceleron Solutions",
      description: "Explore Acceleron industry solutions for enterprise transformation.",
    };
  }

  return {
    title: `${industryData.title} | Acceleron Solutions`,
    description: industryData.menuDesc,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry } = await params;
  const industryData = getIndustryBySlug(industry);

  if (!industryData) {
    notFound();
  }

  return <IndustryDetailPage industry={industryData} />;
}
