"use client";

import { useMemo, useState } from "react";
import { INSIGHTS, INSIGHT_CATEGORIES, INSIGHT_INDUSTRIES, RESEARCH_REPORTS } from "@/lib/data";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsFilters from "@/components/insights/InsightsFilters";
import FeaturedInsights from "@/components/insights/FeaturedInsights";
import InsightsCategories from "@/components/insights/InsightsCategories";
import TrendingInsights from "@/components/insights/TrendingInsights";
import IndustryPerspectives from "@/components/insights/IndustryPerspectives";
import ResearchReports from "@/components/insights/ResearchReports";
import NewsletterCTA from "@/components/insights/NewsletterCTA";
import InsightCard from "@/components/insights/InsightCard";
import { motion, AnimatePresence } from "framer-motion";

export default function InsightsClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("newest");

  const filteredInsights = useMemo(() => {
    return INSIGHTS.filter((insight) => {
      const matchesQuery =
        query.length === 0 ||
        [insight.title, insight.excerpt, insight.category, insight.industry, insight.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesCategory = category === "All" || insight.category === category;
      const matchesIndustry = industry === "All" || insight.industry === industry;
      const matchesType = type === "All" || insight.type === type;

      return matchesQuery && matchesCategory && matchesIndustry && matchesType;
    }).sort((a, b) => {
      if (sort === "popular") {
        return b.popularity - a.popularity;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [query, category, industry, type, sort]);

  const featured = INSIGHTS.find((item) => item.featured) ?? INSIGHTS[0];
  const trending = INSIGHTS.filter((item) => item.trending).slice(0, 4);
  const secondaryInsights = INSIGHTS.filter((item) => item.id !== featured.id).slice(0, 2);

  const contentTypes = ["All", "Article", "Whitepaper", "Case Study", "Research Report"];

  return (
    <div className="bg-[#F5F7FB] text-[#152143] min-h-screen pt-20">
      <InsightsHero featured={featured} />
      
      {/* Search & Filter Controls */}
      <InsightsFilters
        query={query}
        category={category}
        industry={industry}
        type={type}
        sort={sort}
        categories={INSIGHT_CATEGORIES}
        industries={INSIGHT_INDUSTRIES}
        types={contentTypes}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onIndustryChange={setIndustry}
        onTypeChange={setType}
        onSortChange={setSort}
      />

      {/* Filtered Grid Section */}
      {(query || category !== "All" || industry !== "All" || type !== "All") ? (
        <section className="page-container py-12">
          <div className="mb-8 flex items-center justify-between border-b border-[#D9E0F7] pb-4">
            <h2 className="text-xl font-bold text-[#152143]">
              Filtered Results ({filteredInsights.length})
            </h2>
            {(query || category !== "All" || industry !== "All" || type !== "All") && (
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                  setIndustry("All");
                  setType("All");
                }}
                className="text-sm font-semibold text-[#3B4A9E] hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredInsights.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence>
                {filteredInsights.map((insight) => (
                  <motion.div
                    key={insight.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <InsightCard article={insight} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-[32px] border border-[#D9E0F7]">
              <p className="text-[#647084] text-lg">No insights match your filter criteria.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                  setIndustry("All");
                  setType("All");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3B4A9E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#252F61]"
              >
                Reset Search
              </button>
            </div>
          )}
        </section>
      ) : (
        <>
          {/* Main Dashboard Layout when no filters are active */}
          <FeaturedInsights feature={featured} secondary={secondaryInsights} />
          <InsightsCategories categories={INSIGHT_CATEGORIES} />
          <TrendingInsights insights={trending} />
          <IndustryPerspectives industries={INSIGHT_INDUSTRIES} insights={INSIGHTS} />
          <ResearchReports reports={RESEARCH_REPORTS} />
        </>
      )}
      
      <NewsletterCTA />
    </div>
  );
}
