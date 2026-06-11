"use client";

import { motion } from "framer-motion";
import type { InsightArticle } from "@/lib/data";
import InsightCard from "@/components/insights/InsightCard";

type Props = {
  insights: InsightArticle[];
};

export default function TrendingInsights({ insights }: Props) {
  return (
    <section className="page-container py-16 bg-[#F8FBFF] rounded-[40px] border border-[#D9E0F7]">
      <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <span className="eyebrow mb-3 text-[#3B4A9E] block">Trending insights</span>
          <h2 className="heading-lg text-[#152143]">High-impact perspectives that enterprise leaders are reading now.</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[#647084]">
          Filter insights by relevant topics and explore the ideas that are shaping transformation across industries.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {insights.map((insight) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <InsightCard article={insight} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
