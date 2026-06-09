"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function IndustryCtaSection() {
  return (
    <section className="bg-[#F8FAFF] py-20">
      <div className="page-container rounded-[32px] border border-[#D5DBE6] bg-white p-10 shadow-[0_24px_80px_rgba(37,47,97,0.06)]">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#3B4A9E]">
              Ready for enterprise impact?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight">
              Move from program vision to measurable operational outcomes.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[#475569]">
              Talk to our sector team about the industry-specific capabilities that can reduce risk, improve uptime, and modernize your operating model.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-between rounded-[24px] border border-[#3B4A9E] bg-[#3B4A9E] px-6 py-5 text-sm font-semibold text-white transition duration-300 hover:bg-[#2D3B86] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B4A9E]/60"
            >
              <span>Start a tailored briefing</span>
              <span className="text-lg">→</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-between rounded-[24px] border border-[#D5DBE6] bg-white px-6 py-5 text-sm font-semibold text-[#252F61] transition duration-300 hover:border-[#3B4A9E] hover:bg-[#F5F7FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B4A9E]/40"
            >
              <span>Review our industry services</span>
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
