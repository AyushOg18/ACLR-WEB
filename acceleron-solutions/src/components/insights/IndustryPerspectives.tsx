import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { InsightArticle, InsightIndustry } from "@/lib/data";

type Props = {
  industries: InsightIndustry[];
  insights: InsightArticle[];
};

export default function IndustryPerspectives({ industries, insights }: Props) {
  return (
    <section className="page-container py-16">
      <div className="mb-10">
        <span className="eyebrow mb-3 text-[#3B4A9E] block">Industry perspectives</span>
        <h2 className="heading-lg text-[#152143]">Insights organized by the industries we serve.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const article = insights.find((item) => item.industry === industry.label) ?? insights[index];
          if (!article) return null;

          return (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="group rounded-[32px] border border-[#D9E0F7] bg-white p-8 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.22em]">
                  <Link href={`/insights/${industry.id}`} className="text-[#3B4A9E] hover:underline font-extrabold transition">
                    {industry.label}
                  </Link>
                  <span className="rounded-full border border-[#D9E0F7] bg-[#F8FBFF] px-3 py-1 text-[#647084] font-normal">{article.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#152143] leading-snug tracking-tight group-hover:text-[#3B4A9E] transition duration-200">
                  <Link href={article.href}>
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 text-xs leading-relaxed text-[#647084] line-clamp-3">{article.excerpt}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#D9E0F7]/40 flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-wider">
                <span className="text-[#647084]">{article.readTime}</span>
                <Link href={`/insights/${industry.id}`} className="text-[#3B4A9E] hover:underline flex items-center gap-1 transition font-extrabold">
                  Perspectives <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
