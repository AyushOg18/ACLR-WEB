"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";

type Props = {
  industry: Industry;
};

export default function EngineeringConstructionPageHeader({ industry }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#06113A] via-[#0D1B4D] to-[#0A1640] text-white">
      {/* Animated glow background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#4D9FFF] blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#4D9FFF] blur-[100px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(77, 159, 255, 0.05) 25%, rgba(77, 159, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(77, 159, 255, 0.05) 75%, rgba(77, 159, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(77, 159, 255, 0.05) 25%, rgba(77, 159, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(77, 159, 255, 0.05) 75%, rgba(77, 159, 255, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="page-container relative py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Left: Hero text */}
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[11px] uppercase font-bold tracking-[0.3em] bg-gradient-to-r from-[#4D9FFF] to-[#7AB8FF] bg-clip-text text-transparent mb-6 inline-block"
            >
              Enterprise Project Delivery
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8"
            >
              {industry.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base leading-8 text-[#B0C4FF]/90 mb-10 max-w-2xl"
            >
              {industry.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4D9FFF] to-[#357FFF] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition shadow-lg shadow-[#4D9FFF]/40 hover:shadow-[#4D9FFF]/60 hover:scale-105"
              >
                Schedule consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-[#4D9FFF]/40 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#4D9FFF] transition hover:border-[#4D9FFF]/80 hover:bg-[#4D9FFF]/10"
              >
                View our services
              </Link>
            </motion.div>
          </div>

          {/* Right: Dashboard preview with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glassmorphism card */}
            <div className="rounded-2xl border border-[#4D9FFF]/20 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-[#4D9FFF]/10 overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-[#4D9FFF]/20 to-transparent" />

              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="space-y-2 border-b border-[#4D9FFF]/20 pb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#4D9FFF]" />
                    <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#7AB8FF]">
                      Project Dashboard
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-[#B0C4FF]">{industry.overview}</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {industry.stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg bg-gradient-to-br from-[#14245E]/60 to-[#0D1B4D]/40 border border-[#4D9FFF]/20 p-4 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-[#4D9FFF] mb-1">{stat.value}</div>
                      <div className="text-xs uppercase tracking-[0.15em] text-[#7AB8FF]/80">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-[#4D9FFF]/20">
                  <button className="w-full rounded-lg bg-[#4D9FFF]/20 border border-[#4D9FFF]/40 py-3 text-xs font-bold uppercase tracking-wider text-[#4D9FFF] transition hover:bg-[#4D9FFF]/30 hover:border-[#4D9FFF]/60">
                    Explore metrics
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
