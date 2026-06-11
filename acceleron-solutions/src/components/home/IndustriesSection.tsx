"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/data";

export default function IndustriesSection() {
  // Only display the first 3 industries for the home page who-we-serve grid
  const homeIndustries = INDUSTRIES.slice(0, 3);

  return (
    <section className="section-y bg-[#F8FAFF]" id="industries">
      <div className="page-container">
        <div className="mb-16 max-w-3xl">
          <span className="eyebrow mb-5">Who we serve</span>
          <h2 className="heading-md text-balance text-[#252F61]">
            Deep domain delivery for industrial and asset-intensive enterprises.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {homeIndustries.map((industry, index) => (
            <motion.article
              key={industry.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.78, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#D5DBE6]/60 bg-white shadow-[0_2px_12px_rgba(37,47,97,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#252F61]/25 hover:shadow-[0_24px_50px_rgba(37,47,97,0.08)]"
            >
              {/* Image Container with Fixed Ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#252F61]/10">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 rounded-md bg-[#252F61]/90 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-white backdrop-blur-sm">
                  0{index + 1}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-8">
                {/* Stat Highlight Badge */}
                {industry.stats?.[0] && (
                  <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-[#252F61]/5 px-3 py-1.5 text-[#252F61]">
                    <span className="text-base font-black">{industry.stats[0].value}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#252F61]/70">
                      {industry.stats[0].label}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-extrabold leading-snug text-[#252F61] transition-colors group-hover:text-[#252F61]/90">
                  {industry.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-[#647084]">
                  {industry.menuDesc}
                </p>

                {/* Action Link pushed to bottom */}
                <div className="mt-auto pt-6">
                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#252F61] group/link"
                  >
                    <span>Sector brief</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
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
