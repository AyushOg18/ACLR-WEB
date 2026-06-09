"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  value: string;
  label: string;
  index?: number;
};

export default function PremiumCountUpStat({ value, label, index = 0 }: Props) {
  const isPercent = value.endsWith("%");
  const isMultiple = value.endsWith("x") || value.endsWith("X");
  const numeric = parseFloat(value.replace(/[%xX]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (Number.isNaN(numeric)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = numeric * progress;
      setDisplayValue(`${Math.round(current * 10) / 10}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value, numeric, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="group rounded-xl border border-[#4D9FFF]/30 bg-gradient-to-br from-[#14245E]/50 via-[#0D1B4D]/50 to-[#06113A]/50 backdrop-blur-xl p-8 shadow-lg shadow-[#4D9FFF]/10 hover:shadow-[#4D9FFF]/30 transition-all cursor-pointer overflow-hidden relative"
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#4D9FFF]/0 via-[#4D9FFF]/10 to-transparent" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#4D9FFF] to-[#7AB8FF] group-hover:w-full transition-all duration-500" />

      <div className="relative z-10">
        <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-[#4D9FFF] to-[#7AB8FF] bg-clip-text text-transparent mb-3">
          {displayValue}
        </div>
        <p className="text-xs uppercase font-bold tracking-[0.2em] text-[#7AB8FF]/80 group-hover:text-[#4D9FFF] transition-colors">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
