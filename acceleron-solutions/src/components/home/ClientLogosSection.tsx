"use client";

import { motion } from "framer-motion";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { CLIENTS } from "@/lib/data";

export default function ClientLogosSection() {
  return (
    <section className="py-16 bg-white border-y border-[#D5DBE6]">
      <div className="page-container mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow mb-4">Trusted by industry leaders</span>
          <h2 className="heading-sm text-[#252F61]">Enterprise clients across sectors</h2>
        </motion.div>
      </div>
      <InfiniteMarquee items={CLIENTS} speed={25} direction="left" />
    </section>
  );
}
