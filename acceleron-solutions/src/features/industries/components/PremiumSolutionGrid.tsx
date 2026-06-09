"use client";

import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";

type Props = {
  industry: Industry;
};

export default function PremiumSolutionGrid({ industry }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06113A] via-[#0A1640] to-[#0D1B4D] opacity-60" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(77, 159, 255, 0.05) 25%, rgba(77, 159, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(77, 159, 255, 0.05) 75%, rgba(77, 159, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(77, 159, 255, 0.05) 25%, rgba(77, 159, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(77, 159, 255, 0.05) 75%, rgba(77, 159, 255, 0.05) 76%, transparent 77%, transparent)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="page-container relative z-10 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-[#4D9FFF] to-[#7AB8FF]" />
            <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#4D9FFF]">
              Enterprise Capabilities
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight max-w-3xl">
            Transformational solutions designed for {industry.title.toLowerCase()}.
          </h2>
          <p className="text-base leading-7 text-[#B0C4FF]/80 max-w-2xl">
            These solution pillars are built to support complex operating models, secure compliance, and improve predictability across every stage of the value chain.
          </p>
        </motion.div>

        {/* Capabilities badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {industry.capabilities.map((capability) => (
            <motion.div
              key={capability}
              variants={itemVariants}
              className="rounded-lg border border-[#4D9FFF]/40 bg-[#4D9FFF]/10 backdrop-blur-sm px-4 py-2"
            >
              <p className="text-xs font-semibold text-[#4D9FFF]">{capability}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solutions grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {industry.solutions.map((solution, index) => (
            <motion.div
              key={solution}
              variants={itemVariants}
              whileHover={{
                scale: 1.04,
                y: -12,
                boxShadow: "0 24px 64px rgba(77, 159, 255, 0.15)",
              }}
              className="group relative rounded-xl border border-[#4D9FFF]/20 bg-gradient-to-br from-[#14245E]/40 via-[#0D1B4D]/40 to-[#06113A]/40 backdrop-blur-xl p-6 shadow-lg shadow-[#4D9FFF]/5 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#4D9FFF]/20 to-transparent" />

              {/* Accent corner */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-[#4D9FFF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                {/* Number badge */}
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#4D9FFF]/30 to-[#357FFF]/30 border border-[#4D9FFF]/30">
                  <span className="text-sm font-bold text-[#4D9FFF]">{String(index + 1).padStart(2, "0")}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white leading-snug">{solution}</h3>
                <p className="text-sm leading-6 text-[#B0C4FF]/80">
                  We deliver this capability with enterprise-grade governance, integration, and performance monitoring across all project phases.
                </p>

                {/* Learn more link */}
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#4D9FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore capability <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
