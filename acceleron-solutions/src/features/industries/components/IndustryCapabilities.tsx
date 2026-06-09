"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustryCapabilities({ industry }: Props) {
  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_0.95fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#3B4A9E]">Enterprise capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
              Modern capabilities designed for {industry.title} leaders.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-[#475569]">
              These capability areas help teams reduce complexity, improve execution reliability and build operational resilience.
            </p>
            <div className="flex flex-wrap gap-2">
              {industry.focusPoints.map((point) => (
                <span key={point} className="rounded-full border border-[#D5DBE6] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#475569]">
                  {point}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industry.capabilities.slice(0, 4).map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] border border-[#E4E8F4] bg-white p-8 transition duration-300 ease-out hover:border-[#3B4A9E] hover:shadow-[0_24px_48px_rgba(59,74,158,0.08)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B4A9E] mb-4">Capability</p>
                <h3 className="text-xl font-semibold text-[#252F61] leading-tight">{capability}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
