"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseStudy } from "@/features/industries/data/industries";

type Props = {
  caseStudies: CaseStudy[];
};

export default function PremiumCaseCarousel({ caseStudies }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = caseStudies[activeIndex];

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < caseStudies.length - 1;

  const indicators = useMemo(
    () => caseStudies.map((study, index) => ({ ...study, index })),
    [caseStudies],
  );

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B4D] via-[#06113A] to-[#0A1640]" />

      <div className="page-container relative z-10 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-1 w-12 bg-gradient-to-r from-[#4D9FFF] to-[#7AB8FF]" />
              <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#4D9FFF]">
                Case Studies
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Evidence-backed outcomes for industry leaders.
            </h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
              disabled={!canPrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#4D9FFF]/40 bg-[#4D9FFF]/10 text-[#4D9FFF] transition hover:border-[#4D9FFF]/80 hover:bg-[#4D9FFF]/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:border-[#4D9FFF]/20"
              aria-label="Previous case study"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex((index) => Math.min(index + 1, caseStudies.length - 1))}
              disabled={!canNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-[#4D9FFF]/40 bg-[#4D9FFF]/10 text-[#4D9FFF] transition hover:border-[#4D9FFF]/80 hover:bg-[#4D9FFF]/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:border-[#4D9FFF]/20"
              aria-label="Next case study"
            >
              →
            </motion.button>
          </div>
        </motion.div>

        {/* Case carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEntry.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-[#4D9FFF]/30 bg-gradient-to-br from-[#14245E]/40 to-[#0D1B4D]/40 backdrop-blur-xl overflow-hidden shadow-xl shadow-[#4D9FFF]/10"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-[#4D9FFF]/5 to-transparent pointer-events-none" />

            <div className="relative z-10 p-8 lg:p-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              {/* Left: Case details */}
              <div className="space-y-6">
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase font-bold tracking-[0.3em] text-[#4D9FFF] mb-3"
                  >
                    {activeEntry.category}
                  </motion.div>
                  <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                    {activeEntry.title}
                  </h3>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-base leading-8 text-[#B0C4FF]/90"
                >
                  {activeEntry.summary}
                </motion.p>

                {/* Key takeaway */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-lg border border-[#4D9FFF]/30 bg-[#4D9FFF]/10 p-6 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#4D9FFF] mb-2">
                    Key Result
                  </p>
                  <p className="text-lg font-bold text-white">{activeEntry.result}</p>
                </motion.div>
              </div>

              {/* Right: Client card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="rounded-lg border border-[#4D9FFF]/20 bg-gradient-to-br from-[#0D1B4D]/60 to-[#06113A]/40 backdrop-blur-sm p-8 flex flex-col justify-center"
              >
                <div className="space-y-8">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-[0.3em] text-[#7AB8FF] mb-3">
                      Client
                    </p>
                    <p className="text-2xl font-bold text-white">{activeEntry.company}</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-[#4D9FFF]/30 to-transparent" />

                  <div>
                    <p className="text-xs uppercase font-bold tracking-[0.3em] text-[#7AB8FF] mb-3">
                      Industry Impact
                    </p>
                    <p className="text-base leading-7 text-[#B0C4FF]/90">
                      {activeEntry.result}
                    </p>
                  </div>

                  <button className="w-full rounded-lg border border-[#4D9FFF]/40 bg-[#4D9FFF]/10 py-3 text-sm font-bold uppercase tracking-wider text-[#4D9FFF] transition hover:bg-[#4D9FFF]/20 hover:border-[#4D9FFF]/60">
                    View case study
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {indicators.map((indicator) => (
            <motion.button
              key={indicator.index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex(indicator.index)}
              className={`rounded-lg px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${
                indicator.index === activeIndex
                  ? "bg-gradient-to-r from-[#4D9FFF] to-[#357FFF] text-white shadow-lg shadow-[#4D9FFF]/40"
                  : "border border-[#4D9FFF]/30 bg-[#4D9FFF]/10 text-[#4D9FFF] hover:bg-[#4D9FFF]/20"
              }`}
              aria-label={`Select case study ${indicator.index + 1}`}
            >
              {indicator.company}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
