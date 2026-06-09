"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";

type Props = {
  industry: Industry;
};

export default function PremiumValueSection({ industry }: Props) {
  const focusPoints = industry.focusPoints;
  const outcomes = industry.outcomes;

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06113A] via-[#0D1B4D] to-[#0A1640]" />

      <div className="page-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: Strategy section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-1 w-12 bg-gradient-to-r from-[#4D9FFF] to-[#7AB8FF]" />
                <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#4D9FFF]">
                  Strategic Focus
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Why {industry.title} needs a tailored enterprise approach.
              </h2>
              <p className="text-base leading-7 text-[#B0C4FF]/80">
                {industry.overview}
              </p>
            </div>

            {/* Two column content */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Core decisions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="rounded-xl border border-[#4D9FFF]/20 bg-gradient-to-br from-[#14245E]/50 to-[#0D1B4D]/40 backdrop-blur-xl p-6 shadow-lg shadow-[#4D9FFF]/5"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#4D9FFF] mb-6 flex items-center gap-2">
                  <span className="text-lg">▪</span> Core Decisions
                </h3>
                <ul className="space-y-3">
                  {focusPoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-[#B0C4FF]/90"
                    >
                      <span className="text-[#4D9FFF] font-bold mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Executive outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="rounded-xl border border-[#4D9FFF]/20 bg-gradient-to-br from-[#14245E]/50 to-[#0D1B4D]/40 backdrop-blur-xl p-6 shadow-lg shadow-[#4D9FFF]/5"
              >
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#4D9FFF] mb-6 flex items-center gap-2">
                  <span className="text-lg">▪</span> Executive Outcomes
                </h3>
                <ul className="space-y-3">
                  {outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-3 text-sm leading-6 text-[#B0C4FF]/90"
                    >
                      <span className="text-[#4D9FFF] font-bold mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Action sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:sticky lg:top-24"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#4D9FFF]/30 bg-gradient-to-br from-[#4D9FFF]/20 to-[#357FFF]/10 backdrop-blur-xl p-8 shadow-lg shadow-[#4D9FFF]/15 overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#4D9FFF]/10 to-transparent" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-lg font-bold text-white">Ready to transform your projects?</h3>
                <p className="text-sm leading-6 text-[#B0C4FF]/90">
                  Let's discuss how our enterprise solutions can accelerate your delivery timelines and improve outcomes.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-r from-[#4D9FFF] to-[#357FFF] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition shadow-lg shadow-[#4D9FFF]/40 hover:shadow-[#4D9FFF]/60 hover:scale-105"
                >
                  Schedule consultation
                </Link>
              </div>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-[#4D9FFF]/20 bg-gradient-to-br from-[#14245E]/50 to-[#0D1B4D]/40 backdrop-blur-xl p-6 shadow-lg shadow-[#4D9FFF]/5"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#4D9FFF] mb-4">
                Explore our services
              </h3>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4D9FFF] hover:text-[#7AB8FF] transition"
              >
                View all services <span className="text-lg">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
