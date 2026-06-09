"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export default function IndustriesSection() {
  return (
    <section className="section-y bg-[#F5F7FB]" id="industries">
      <div className="page-container">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-5">Who we serve</span>
          <h2 className="heading-md text-balance">
            Deep domain delivery for industrial and asset-intensive enterprises.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <motion.article
              key={industry.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.78, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative min-h-[520px] overflow-hidden bg-[#252F61] ${index === 0 ? "lg:mt-14" : index === 2 ? "lg:mt-28" : ""}`}
            >
              <div className="absolute inset-0 image-cover transition-transform duration-700 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${industry.image}')` }} />
              <div className="absolute inset-0 bg-[#252F61]/78" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#252F61] via-[#252F61]/45 to-transparent" />
              <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-8 text-white">
                <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/62">
                  <span>0{index + 1}</span>
                  <span>{industry.stats?.[0]?.label ?? industry.menuDesc}</span>
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold leading-tight">{industry.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/70">{industry.menuDesc}</p>
                  <Link href={industry.href} className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
                    Sector brief <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
