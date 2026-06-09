"use client";

import { motion } from "framer-motion";
import { TECH_PARTNERS } from "@/lib/data";

export default function TechStackSection() {
  return (
    <section className="bg-[#F5F7FB] py-20" id="tech-stack">
      <div className="page-container">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow mb-5">Technology ecosystem</span>
            <h2 className="heading-md text-balance">Certified breadth across enterprise platforms.</h2>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#252F61]/10 sm:grid-cols-3 lg:grid-cols-4">
            {TECH_PARTNERS.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.62, delay: index * 0.025, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#F5F7FB] p-6"
              >
                <div className="text-lg font-extrabold text-[#252F61]">{name}</div>
                <div className="mt-4 h-px w-8 bg-[#252F61]/28" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
