"use client";

import { motion } from "framer-motion";
import { WHY_ACCELERON } from "@/lib/data";

export default function WhyAcceleronSection() {
  return (
    <section className="section-y bg-[#252F61] text-white" id="why-acceleron">
      <div className="page-container">
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="mb-5 block text-[10px] font-extrabold uppercase tracking-[0.24em] text-white/62">
              Why Acceleron
            </span>
            <h2 className="heading-md text-balance" style={{ color: "#FFFFFF" }}>
              Reliable transformation requires more than implementation skill.
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-white/66">
              We bring governance, industry context, technical breadth and the discipline required to modernize systems that businesses rely on every day.
            </p>
          </div>

          <div className="divide-y divide-white/14 border-t border-white/14">
            {WHY_ACCELERON.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.72, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-6 py-10 sm:grid-cols-[120px_1fr]"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/42">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold leading-tight">{item.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
