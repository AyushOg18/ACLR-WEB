"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-[#252F61] px-8 py-20 text-white sm:px-12 lg:px-16 lg:py-24"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1),transparent_38%,rgba(255,255,255,0.08))]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <span className="mb-5 block text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/62">
                Next step
              </span>
              <h2 className="heading-lg text-balance" style={{ color: "#FFFFFF" }}>
                Build the roadmap for your next transformation program.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/66">
                Speak with Acceleron&apos;s consulting team about SAP modernization, customer platforms, infrastructure, cyber security or custom software.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link href="/contact" className="bg-white px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color: "#252F61" }}>
                Consult an expert
              </Link>
              <Link href="/services" className="border border-white/30 px-7 py-4 text-center text-xs font-extrabold uppercase tracking-[0.18em] text-white">
                Explore services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
