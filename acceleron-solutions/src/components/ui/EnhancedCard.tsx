"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "premium" | "dark";
  index?: number;
};

export default function EnhancedCard({ children, className = "", variant = "default", index = 0 }: Props) {
  const variantStyles = {
    default: "border-[#D5DBE6] bg-white hover:border-[#3B4A9E]",
    premium: "border-[#4D9FFF]/30 bg-gradient-to-br from-[#14245E]/50 to-[#0D1B4D]/50 backdrop-blur-xl hover:border-[#4D9FFF]/60",
    dark: "border-[#333] bg-[#1a1a1a] hover:border-[#666]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index || 0) * 0.1 }}
      className={`relative rounded-lg border shadow-lg transition-all duration-300 overflow-hidden ${variantStyles[variant]} ${className}`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
