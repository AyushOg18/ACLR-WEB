"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Industry } from "@/features/industries/data/industries";
import IndustryIcon from "@/features/industries/components/IndustryIcon";
import { fadeIn, fadeInUp } from "@/features/industries/animations/variants";

export default function IndustryOverviewHero({ industries }: { industries: Industry[] }) {
  return (
    <section className="relative overflow-hidden bg-[#0E1535] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#08132A] via-[#0B1B43] to-[#121E4B] opacity-90" />
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#3B4A9E]/20 blur-3xl" />
      <div className="page-container relative py-24">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 mb-4 inline-block">
            Enterprise industries
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Industry-specific programs for asset-intensive businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-blue-100/85">
            Acceleron combines operational depth with modern SaaS delivery to empower mining, manufacturing, logistics, utilities, construction and capital goods companies.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.18em] text-[#0E1535] transition duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a sector briefing
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {industries.slice(0, 6).map((industry) => (
            <Link
              key={industry.slug}
              href={industry.href}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#3B4A9E] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B4A9E]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08132A]"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <IndustryIcon slug={industry.slug} className="bg-white/10 text-white" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-blue-200">{industry.title}</span>
              </div>
              <p className="text-sm leading-7 text-blue-100/85 mb-6">{industry.menuDesc}</p>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.24em] text-blue-200">Explore</span>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
