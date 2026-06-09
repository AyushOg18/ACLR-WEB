"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
};

export default function InfiniteMarquee({ items, speed = 20, direction = "left" }: Props) {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-[#F8FAFF] py-8">
      <motion.div
        initial={{ x: direction === "left" ? 0 : 100 }}
        animate={{ x: isPaused ? undefined : direction === "left" ? -100 : 100 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop" as const,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-8 whitespace-nowrap"
        style={{
          width: "fit-content",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-6 py-3 rounded-lg border border-[#D5DBE6] bg-white text-sm font-semibold text-[#252F61] hover:border-[#3B4A9E] transition shrink-0"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
