"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="bg-[#F5F7FB] py-20">
      <div className="page-container">
        <div className="grid gap-px bg-[#252F61]/10 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.72, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F5F7FB] p-8 lg:p-10"
            >
              <div className="text-5xl font-extrabold tracking-normal text-[#252F61]">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="mt-5 text-[11px] font-extrabold uppercase leading-5 tracking-[0.18em] text-[#252F61]/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
