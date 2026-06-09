"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustrySolutionGrid({ industry }: Props) {
  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-[#D5DBE6] bg-white p-8 shadow-[0_24px_80px_rgba(37,47,97,0.06)]">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] mb-3 inline-block">
              Enterprise capability
            </span>
            <h2 className="text-3xl font-extrabold text-[#252F61] tracking-tight leading-tight">
              Transformational solutions designed for {industry.title.toLowerCase()}.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#475569]">
              These solution pillars are built to support complex operating models, secure compliance, and improve predictability across every stage of the value chain.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {industry.capabilities.map((capability) => (
              <motion.div
                key={capability}
                variants={fadeInUp}
                className="rounded-[24px] border border-[#D5DBE6] bg-[#F8FAFF] p-6"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[#3B4A9E] mb-3">Capability</p>
                <p className="text-sm font-semibold text-[#252F61] leading-7">{capability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {industry.solutions.map((solution, index) => (
          <motion.article
            key={solution}
            variants={fadeInUp}
            className="group rounded-[28px] border border-[#D5DBE6] bg-white p-8 shadow-[0_20px_60px_rgba(37,47,97,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:border-[#3B4A9E]"
          >
            <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] mb-4">Solution {index + 1}</div>
            <h3 className="text-xl font-semibold text-[#252F61] leading-snug mb-4">{solution}</h3>
            <p className="text-sm leading-7 text-[#475569]">
              We deliver this capability with enterprise-grade governance, integration, and performance monitoring.
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
