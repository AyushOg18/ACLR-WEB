import IndustryCaseCarousel from "@/features/industries/components/IndustryCaseCarousel";
import IndustryCard from "@/features/industries/components/IndustryCard";
import IndustryCtaSection from "@/features/industries/components/IndustryCtaSection";
import IndustryJourneyTimeline from "@/features/industries/components/IndustryJourneyTimeline";
import IndustryOverviewHero from "@/features/industries/components/IndustryOverviewHero";
import { getIndustries } from "@/features/industries/services/industryService";

export default function IndustriesOverviewPage() {
  const industries = getIndustries();

  return (
    <>
      <IndustryOverviewHero industries={industries} />

      <section className="py-24 bg-[#F8FAFF]">
        <div className="page-container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] mb-3 inline-block">
                Industry sectors
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
                Premium industry expertise across six enterprise domains.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#475569]">
              Each sector page is designed to show how Acceleron brings domain-driven strategy, technology and execution discipline to complex operating environments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.slug} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      <IndustryCtaSection />

      <section className="py-24 bg-white border-t border-[#D5DBE6]">
        <div className="page-container">
          <IndustryJourneyTimeline journey={industries[0].journey} />
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFF]">
        <div className="page-container">
          <IndustryCaseCarousel caseStudies={industries[0].caseStudies} />
        </div>
      </section>
    </>
  );
}
