import { INDUSTRIES, type Industry } from "@/features/industries/data/industries";

export function getIndustries(): Industry[] {
  return INDUSTRIES;
}

export function getIndustryBySlug(slug: string): Industry | null {
  return INDUSTRIES.find((industry) => industry.slug === slug) ?? null;
}
