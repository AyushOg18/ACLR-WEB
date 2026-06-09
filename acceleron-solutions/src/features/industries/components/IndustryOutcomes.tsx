"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import PremiumCountUpStat from "@/features/industries/components/PremiumCountUpStat";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustryOutcomes({ industry }: Props) {
  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="page-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 max-w-3xl space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#3B4A9E]">Business outcomes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
            Measurable outcomes that matter to enterprise stakeholders.
          </h2>
          <p className="text-sm leading-7 text-[#475569]">
            The outcomes below show how focused digital transformation improves uptime, quality, delivery and operational predictability.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_0.75fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {industry.stats.map((stat, index) => (
              <PremiumCountUpStat key={stat.label} value={stat.value} label={stat.label} index={index} />
            ))}
          </div>

          <div className="rounded-[32px] border border-[#D5DBE6] bg-white p-10 shadow-[0_24px_80px_rgba(37,47,97,0.06)]">
            <h3 className="text-xl font-semibold text-[#252F61] mb-6">Executive outcome themes</h3>
            <div className="space-y-4">
              {industry.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-4">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#3B4A9E]/10 text-[#3B4A9E]">✓</span>
                  <p className="text-sm leading-7 text-[#475569]">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
