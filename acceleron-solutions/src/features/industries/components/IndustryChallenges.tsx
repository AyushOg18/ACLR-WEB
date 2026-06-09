"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import LazyImage from "@/components/ui/LazyImage";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustryChallenges({ industry }: Props) {
  const challengeItems = industry.challenges.map((challenge, index) => ({
    challenge,
    solution: industry.solutions[index] ?? "",
  }));

  return (
    <section className="bg-white py-24">
      <div className="page-container space-y-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#3B4A9E]">Industry challenges</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
            Problem-to-solution storylines for your enterprise operations.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[#475569]">
            We lay out the main industry pressures and how connected systems remove bottlenecks across people, assets and service delivery.
          </p>
        </motion.div>

        <div className="space-y-10">
          {challengeItems.map((item, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={item.challenge}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={
                  reversed
                    ? "grid gap-8 lg:items-center lg:grid-cols-[0.9fr_0.95fr]"
                    : "grid gap-8 lg:items-center lg:grid-cols-[0.95fr_0.9fr]"
                }
              >
                {!reversed ? (
                  <div className="space-y-6 rounded-[32px] border border-[#E4E8F4] bg-[#F8FAFF] p-10">
                    <div className="rounded-3xl bg-white/80 p-6">
                      <span className="text-xs uppercase tracking-[0.24em] text-[#647084]">Problem</span>
                      <p className="mt-4 text-xl font-semibold text-[#252F61] leading-tight">{item.challenge}</p>
                    </div>
                    <div className="rounded-3xl bg-[#0E163D] p-6 text-white">
                      <span className="text-xs uppercase tracking-[0.24em] text-[#94B5FF]">Solution</span>
                      <p className="mt-4 text-xl font-semibold leading-tight">{item.solution}</p>
                    </div>
                  </div>
                ) : null}

                <div className="relative overflow-hidden rounded-[32px] border border-[#E4E8F4] bg-[#F8FAFF] shadow-[0_20px_60px_rgba(37,47,97,0.06)]">
                  <div className="relative h-96 sm:h-[28rem]">
                    <LazyImage src={industry.image} alt={`${industry.title} challenge visual`} fill className="object-cover opacity-90" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E163D]/80 via-transparent to-transparent" />
                  <div className="absolute left-6 bottom-6 rounded-3xl border border-white/15 bg-slate-950/80 p-5 text-white shadow-lg shadow-slate-950/20">
                    <p className="text-sm uppercase tracking-[0.22em] text-blue-200/80">Challenge {index + 1}</p>
                    <p className="mt-3 text-base leading-7">{item.challenge}</p>
                  </div>
                </div>

                {reversed ? (
                  <div className="space-y-6 rounded-[32px] border border-[#E4E8F4] bg-[#F8FAFF] p-10">
                    <div className="rounded-3xl bg-white/80 p-6">
                      <span className="text-xs uppercase tracking-[0.24em] text-[#647084]">Problem</span>
                      <p className="mt-4 text-xl font-semibold text-[#252F61] leading-tight">{item.challenge}</p>
                    </div>
                    <div className="rounded-3xl bg-[#0E163D] p-6 text-white">
                      <span className="text-xs uppercase tracking-[0.24em] text-[#94B5FF]">Solution</span>
                      <p className="mt-4 text-xl font-semibold leading-tight">{item.solution}</p>
                    </div>
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
