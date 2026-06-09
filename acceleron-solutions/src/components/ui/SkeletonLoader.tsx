"use client";

import { motion } from "framer-motion";

export default function SkeletonLoader({ count = 1, variant = "card" }: { count?: number; variant?: "card" | "text" | "avatar" }) {
  const skeletons = Array.from({ length: count });

  if (variant === "text") {
    return (
      <div className="space-y-2">
        {skeletons.map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-4 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] rounded"
          />
        ))}
      </div>
    );
  }

  if (variant === "avatar") {
    return (
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-12 w-12 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] rounded-full"
      />
    );
  }

  return (
    <div className="grid gap-6">
      {skeletons.map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="rounded-lg border border-[#e0e0e0] bg-gradient-to-r from-[#f8f8f8] via-[#f0f0f0] to-[#f8f8f8] p-6 space-y-3"
        >
          <div className="h-6 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] rounded w-3/4" />
          <div className="h-4 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] rounded w-full" />
          <div className="h-4 bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0] rounded w-5/6" />
        </motion.div>
      ))}
    </div>
  );
}
