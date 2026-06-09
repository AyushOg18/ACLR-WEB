"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Industry } from "@/features/industries/data/industries";
import IndustryIcon from "@/features/industries/components/IndustryIcon";
import SkeletonLoader from "@/components/ui/SkeletonLoader";
import styles from "@/features/industries/styles/industryStyles.module.css";

type Props = {
  industry?: Industry;
  index: number;
  loading?: boolean;
};

export default function IndustryCard({ industry, index, loading = false }: Props) {
  if (loading || !industry) {
    return <SkeletonLoader count={1} variant="card" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-[28px] border border-[#D5DBE6] bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#3B4A9E] hover:shadow-[0_24px_48px_rgba(59,74,158,0.12)] focus-within:-translate-y-1"
    >
      <Link
        href={industry.href}
        className="block h-full p-7 lg:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B4A9E]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <IndustryIcon slug={industry.slug} className="bg-[#EAF0FF] text-[#3B4A9E]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E]">
              {industry.title}
            </span>
          </div>
          <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#252F61] transition-colors duration-300 ${styles.industryAccentLink}`}>
            <span>View</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>

        <p className="text-sm leading-7 text-[#475569] mb-6">{industry.menuDesc}</p>

        <div className="flex flex-wrap gap-2">
          {industry.focusPoints.slice(0, 3).map((point) => (
            <span
              key={point}
              className="rounded-full border border-[#D5DBE6] bg-[#F8FAFF] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#475569]"
            >
              {point}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
