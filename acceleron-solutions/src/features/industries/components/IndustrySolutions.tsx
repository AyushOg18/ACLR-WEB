"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustrySolutions({ industry }: Props) {
  return (
    <section className="bg-[#0E163D] py-24 text-white">
      <div className="page-container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-blue-200/80">Solutions portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Reusable solution modules that support complex industry workflows.
          </h2>
          <p className="text-sm leading-7 text-blue-100/80">
            These solution areas reflect the enterprise functions that matter most for program delivery, operations and customer outcomes.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {industry.solutions.map((solution, index) => (
            <motion.div
              key={solution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group rounded-[28px] border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-[#3B4A9E] hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[#3B4A9E]/10 text-[#7AB8FF] text-lg font-bold">{index + 1}</span>
                <span className="text-xs uppercase tracking-[0.24em] text-blue-200/80">Solution</span>
              </div>
              <p className="mt-6 text-base leading-7 text-white/90">{solution}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7AB8FF] transition-transform duration-300 group-hover:translate-x-1">
                <span>Explore</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
