"use client";

import { motion } from "framer-motion";
import type { JourneyStep } from "@/features/industries/data/industries";
import { staggerContainer, fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  journey: JourneyStep[];
};

export default function IndustryJourneyTimeline({ journey }: Props) {
  return (
    <section className="overflow-hidden rounded-[32px] border border-[#D5DBE6] bg-white p-8 shadow-[0_24px_80px_rgba(37,47,97,0.06)]">
      <div className="mb-10">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E]">Implementation journey</span>
        <h2 className="mt-4 text-3xl font-extrabold text-[#252F61] tracking-tight leading-tight">
          A horizontal journey built for enterprise adoption.
        </h2>
      </div>
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-6 xl:space-y-0 xl:flex xl:items-start xl:gap-6">
        {journey.map((step, index) => (
          <motion.div key={step.phase} variants={fadeInUp} className="rounded-[28px] border border-[#E4E8F4] bg-[#F8FAFF] p-6 xl:min-w-[280px]">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B4A9E] text-sm font-bold uppercase text-white">
                {index + 1}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#647084]">{step.phase}</p>
                <h3 className="text-lg font-semibold text-[#252F61] leading-tight">{step.title}</h3>
              </div>
            </div>
            <p className="text-sm leading-7 text-[#475569]">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
