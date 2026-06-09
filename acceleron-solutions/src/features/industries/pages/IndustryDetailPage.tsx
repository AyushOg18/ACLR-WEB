import type { Industry } from "@/features/industries/data/industries";
import IndustryHero from "@/features/industries/components/IndustryHero";
import IndustryCapabilities from "@/features/industries/components/IndustryCapabilities";
import IndustryChallenges from "@/features/industries/components/IndustryChallenges";
import IndustrySolutions from "@/features/industries/components/IndustrySolutions";
import IndustryOutcomes from "@/features/industries/components/IndustryOutcomes";
import IndustryCaseStudies from "@/features/industries/components/IndustryCaseStudies";
import IndustryWorkflow from "@/features/industries/components/IndustryWorkflow";
import IndustryCTA from "@/features/industries/components/IndustryCTA";

type Props = {
  industry: Industry;
};

export default function IndustryDetailPage({ industry }: Props) {
  return (
    <>
      <IndustryHero industry={industry} />
      <IndustryCapabilities industry={industry} />
      <IndustryChallenges industry={industry} />
      <IndustrySolutions industry={industry} />
      <IndustryOutcomes industry={industry} />
      <IndustryCaseStudies industry={industry} />
      <IndustryWorkflow industry={industry} />
      <IndustryCTA industry={industry} />
    </>
  );
}
