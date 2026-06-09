"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useLoadingOptimizations";

type Props = {
  value: number;
  label: string;
  suffix?: string;
  index?: number;
};

export default function AnimatedStat({ value, label, suffix = "+", index = 0 }: Props) {
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setDisplayValue(Math.floor(value * progress));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isVisible, value]);

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group rounded-lg border border-[#D5DBE6] bg-white p-6 text-center transition-all hover:shadow-lg hover:border-[#3B4A9E] cursor-pointer"
    >
      <motion.div className="text-4xl sm:text-5xl font-black text-[#3B4A9E] mb-2">
        {displayValue}
        <span className="text-2xl">{suffix}</span>
      </motion.div>
      <p className="text-sm font-semibold text-[#475569] group-hover:text-[#3B4A9E] transition">{label}</p>
    </motion.div>
  );
}
