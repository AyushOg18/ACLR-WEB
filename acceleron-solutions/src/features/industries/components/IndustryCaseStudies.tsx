"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustryCaseStudies({ industry }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="page-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 max-w-3xl space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#3B4A9E]">Customer success</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
            Proof points from programs that delivered results.
          </h2>
          <p className="text-sm leading-7 text-[#475569]">
            Real customer outcomes and achievement highlights that show how enterprise transformation works in practice.
          </p>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6">
            {industry.caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[32px] border border-[#E4E8F4] bg-[#F8FAFF] p-8 shadow-[0_24px_80px_rgba(37,47,97,0.06)]"
              >
                <div className="flex items-center justify-between gap-4 mb-4 text-sm uppercase tracking-[0.2em] text-[#3B4A9E]">
                  <span>{caseStudy.category}</span>
                  <span>{caseStudy.company}</span>
                </div>
                <h3 className="text-2xl font-semibold text-[#252F61] leading-tight mb-4">{caseStudy.title}</h3>
                <p className="text-sm leading-7 text-[#475569] mb-6">{caseStudy.summary}</p>
                <div className="rounded-2xl bg-white p-4 text-sm leading-6 text-[#252F61]">
                  <span className="block text-xs uppercase tracking-[0.18em] text-[#647084]">Result</span>
                  <p className="mt-2 font-semibold">{caseStudy.result}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-[#D5DBE6] bg-[#0E163D] p-10 text-white shadow-[0_24px_80px_rgba(37,47,97,0.1)]"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-blue-200/80">Achievement highlights</span>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight leading-tight">Outcomes that executives cite first.</h3>
            <div className="mt-8 space-y-5">
              {industry.outcomes.slice(0, 4).map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-white/10 text-white">✓</span>
                  <p className="text-sm leading-7 text-blue-100/90">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
