"use client";

import { useMemo } from "react";
import { getIndustryBySlug, getIndustries } from "@/features/industries/services/industryService";
import type { Industry } from "@/features/industries/data/industries";

export function useIndustries(): Industry[] {
  return useMemo(() => getIndustries(), []);
}

export function useIndustryBySlug(slug: string): Industry | null {
  return useMemo(() => getIndustryBySlug(slug), [slug]);
}
