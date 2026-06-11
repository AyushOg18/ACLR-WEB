"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import type { InsightCategory, InsightIndustry } from "@/lib/data";

type Props = {
  query: string;
  category: string;
  industry: string;
  type: string;
  sort: string;
  categories: InsightCategory[];
  industries: InsightIndustry[];
  types: string[];
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onIndustryChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onSortChange: (value: string) => void;
};

export default function InsightsFilters({
  query,
  category,
  industry,
  type,
  sort,
  categories,
  industries,
  types,
  onQueryChange,
  onCategoryChange,
  onIndustryChange,
  onTypeChange,
  onSortChange,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="page-container py-16"
    >
      <div className="rounded-[32px] border border-[#D9E0F7] bg-[#F8FBFF] p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr] xl:grid-cols-[1fr_2fr]">
          <div className="rounded-3xl border border-white/60 bg-white px-4 py-4 shadow-sm flex items-center justify-center">
            <div className="flex items-center gap-3 text-[#3B4A9E] w-full">
              <Search size={18} />
              <input
                type="search"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search insights, trends, industries..."
                className="w-full bg-transparent text-sm text-[#152143] outline-none placeholder:text-[#647084]"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#647084]">Category</span>
              <select
                value={category}
                onChange={(event) => onCategoryChange(event.target.value)}
                className="mt-2 h-12 w-full rounded-2xl border border-[#D9E0F7] bg-white px-4 text-xs text-[#152143] outline-none"
              >
                <option value="All">All categories</option>
                {categories.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#647084]">Industry</span>
              <select
                value={industry}
                onChange={(event) => onIndustryChange(event.target.value)}
                className="mt-2 h-12 w-full rounded-2xl border border-[#D9E0F7] bg-white px-4 text-xs text-[#152143] outline-none"
              >
                <option value="All">All industries</option>
                {industries.map((item) => (
                  <option key={item.id} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#647084]">Content Type</span>
              <select
                value={type}
                onChange={(event) => onTypeChange(event.target.value)}
                className="mt-2 h-12 w-full rounded-2xl border border-[#D9E0F7] bg-white px-4 text-xs text-[#152143] outline-none"
              >
                {types.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All types" : `${item}s`}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-[#647084]">
            <SlidersHorizontal size={18} />
            <span>Sort by</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { value: "newest", label: "Newest" },
              { value: "popular", label: "Popular" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => onSortChange(option.value)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  sort === option.value
                    ? "border-[#3B4A9E] bg-[#3B4A9E] text-white"
                    : "border-[#D9E0F7] bg-white text-[#344269] hover:border-[#3B4A9E]/60"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
