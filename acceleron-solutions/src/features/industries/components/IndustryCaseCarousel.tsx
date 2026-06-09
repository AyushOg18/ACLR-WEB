"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseStudy } from "@/features/industries/data/industries";
import { fadeIn } from "@/features/industries/animations/variants";

type Props = {
  caseStudies: CaseStudy[];
};

export default function IndustryCaseCarousel({ caseStudies }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = caseStudies[activeIndex];

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < caseStudies.length - 1;

  const indicators = useMemo(
    () => caseStudies.map((study, index) => ({ ...study, index })),
    [caseStudies],
  );

  return (
    <section className="rounded-[32px] border border-[#D5DBE6] bg-white p-8 shadow-[0_24px_80px_rgba(37,47,97,0.06)]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E]">Case studies</span>
          <h2 className="mt-4 text-3xl font-extrabold text-[#252F61] tracking-tight leading-tight">
            Evidence-backed outcomes for industry leaders.
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
            disabled={!canPrev}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D5DBE6] text-[#252F61] transition hover:border-[#3B4A9E] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous case study"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex((index) => Math.min(index + 1, caseStudies.length - 1))}
            disabled={!canNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D5DBE6] text-[#252F61] transition hover:border-[#3B4A9E] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next case study"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEntry.title}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-6"
          >
            <div className="rounded-[28px] bg-[#F8FAFF] p-8">
              <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-[#3B4A9E]">{activeEntry.category}</p>
                  <h3 className="mt-4 text-2xl font-extrabold text-[#252F61] leading-tight">
                    {activeEntry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#475569]">{activeEntry.summary}</p>
                </div>
                <div className="space-y-4 rounded-[24px] bg-white p-6 border border-[#D5DBE6]">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#647084]">Client</p>
                  <p className="text-sm font-semibold text-[#252F61]">{activeEntry.company}</p>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#647084]">Result</p>
                  <p className="text-sm font-semibold text-[#3B4A9E]">{activeEntry.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {indicators.map((indicator) => (
          <button
            key={indicator.index}
            type="button"
            onClick={() => setActiveIndex(indicator.index)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              indicator.index === activeIndex
                ? "bg-[#3B4A9E] text-white"
                : "bg-[#F4F6FB] text-[#475569] hover:bg-[#E1E8FE]"
            }`}
            aria-label={`Select case study ${indicator.index + 1}`}
          >
            {indicator.company}
          </button>
        ))}
      </div>
    </section>
  );
}
