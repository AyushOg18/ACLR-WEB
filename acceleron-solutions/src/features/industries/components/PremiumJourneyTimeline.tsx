"use client";

import { motion } from "framer-motion";
import type { JourneyStep } from "@/features/industries/data/industries";

type Props = {
  journey: JourneyStep[];
};

export default function PremiumJourneyTimeline({ journey }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B4D] via-[#06113A] to-[#0A1640]" />

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
              Implementation Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            A horizontal journey built for enterprise adoption.
          </h2>
          <p className="text-base leading-7 text-[#B0C4FF]/80 max-w-2xl">
            We orchestrate each phase of your transformation with clear governance, measurable outcomes, and cross-functional alignment.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 lg:space-y-0 lg:flex lg:items-stretch lg:gap-6"
        >
          {journey.map((step, index) => (
            <motion.div
              key={step.phase}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative flex-1 rounded-xl border border-[#4D9FFF]/30 bg-gradient-to-br from-[#14245E]/50 to-[#0D1B4D]/40 backdrop-blur-xl p-6 shadow-lg shadow-[#4D9FFF]/5 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#4D9FFF]/15 to-transparent" />

              {/* Accent top border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4D9FFF] via-[#7AB8FF] to-transparent" />

              {/* Connecting line (hidden on mobile) */}
              {index < journey.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 translate-x-full w-6 h-0.5 bg-gradient-to-r from-[#4D9FFF] to-transparent" />
              )}

              <div className="relative z-10 space-y-4">
                {/* Step number and phase */}
                <div className="flex items-center gap-3">
                  <motion.div
                    whileInView={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#4D9FFF] to-[#357FFF] font-bold text-white text-lg shadow-lg shadow-[#4D9FFF]/40"
                  >
                    {index + 1}
                  </motion.div>
                  <div>
                    <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#7AB8FF]">
                      {step.phase}
                    </p>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-6 text-[#B0C4FF]/80 pl-15">{step.description}</p>

                {/* Icon indicator */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#4D9FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-15">
                  Learn more <span className="text-lg">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
