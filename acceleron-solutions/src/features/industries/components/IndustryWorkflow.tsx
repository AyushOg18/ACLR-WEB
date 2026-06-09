"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustryWorkflow({ industry }: Props) {
  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="page-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 max-w-3xl space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#3B4A9E]">Industry process flow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
            A connected process flow built for enterprise adoption.
          </h2>
          <p className="text-sm leading-7 text-[#475569]">
            Milestones, stages and governance points are represented in a clear, horizontal workflow that supports complex operating models.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#E4E8F4] bg-white p-8 shadow-[0_24px_80px_rgba(37,47,97,0.06)]">
          <div className="absolute inset-x-10 top-20 hidden h-1 bg-gradient-to-r from-[#3B4A9E] via-[#7AB8FF] to-[#3B4A9E] lg:block" />
          <div className="space-y-10 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-6">
            {industry.journey.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative rounded-[28px] border border-[#E4E8F4] bg-[#F8FAFF] p-8 text-center lg:min-w-[220px]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3B4A9E]/10 text-[#3B4A9E] font-bold">
                  {index + 1}
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-[#647084]">{step.phase}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#252F61] leading-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#475569]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
