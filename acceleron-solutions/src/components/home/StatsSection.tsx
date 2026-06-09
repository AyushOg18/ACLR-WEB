"use client";

import { motion } from "framer-motion";
import AnimatedStat from "@/components/ui/AnimatedStat";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="bg-[#F5F7FB] py-20">
      <div className="page-container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
