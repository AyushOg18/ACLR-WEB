"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { InsightArticle } from "@/lib/data";

type Props = {
  article: InsightArticle;
  compact?: boolean;
};

export default function InsightCard({ article, compact = false }: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group h-full"
    >
      <Link
        href={article.href}
        className="block h-full rounded-[28px] border border-[#D9E0F7] bg-white/90 p-6 shadow-sm transition hover:border-[#3B4A9E]/20 hover:shadow-[0_24px_60px_rgba(37,47,97,0.06)]"
      >
        <div className="flex flex-col h-full gap-4">
          <div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.22em]">
            <span className="text-[#3B4A9E]">{article.category}</span>
            <span className="text-[#647084]">{article.readTime}</span>
          </div>

          {!compact && (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-900/5">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${article.image}')` }}
              />
              <div className="absolute top-3 left-3 rounded-full bg-[#252F61]/90 backdrop-blur-md px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-sm">
                {article.type}
              </div>
            </div>
          )}

          <div className="flex-1">
            <h3 className="text-lg font-bold tracking-tight text-[#152143] group-hover:text-[#3B4A9E] transition leading-snug">
              {article.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-[#5F698D] line-clamp-3">{article.excerpt}</p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#D9E0F7]/40 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-[#3B4A9E]">
            <span>Read insight</span>
            <span className="transition-transform group-hover:translate-x-1 select-none">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
