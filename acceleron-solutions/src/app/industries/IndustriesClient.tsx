"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/data";
import Link from "next/link";

export default function IndustriesClient() {
  return (
    <>
      {/* Industries Grid */}
      <section className="py-28 bg-[#F5F7FB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-3">
            Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252F61] tracking-tight leading-tight mb-16">
            Six core sectors. Proven transformation outcomes.
          </h2>

          <div className="space-y-0">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={industry.href}
                  className="group grid grid-cols-12 gap-6 border-t border-gray-200 py-7 hover:bg-white/60 transition-colors px-1"
                >
                  <div className="col-span-1">
                    <span className="text-xs font-bold text-[#3B4A9E] tracking-wider">0{i + 1}</span>
                  </div>
                  <div className="col-span-12 sm:col-span-4">
                    <h2 className="text-sm font-bold text-[#252F61] group-hover:text-[#3B4A9E] transition-colors">
                      {industry.title}
                    </h2>
                  </div>
                  <div className="col-span-10 sm:col-span-5">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {industry.menuDesc}
                    </p>
                  </div>
                  <div className="col-span-2 sm:col-span-2 text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#252F61] group-hover:text-[#3B4A9E] transition-colors">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </section>

      {/* Domain Brief — Contact CTA */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0E1535] p-12 md:p-16 text-center">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
              Sector Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Need a sector-specific solution brief?
            </h2>
            <p className="text-xs text-blue-200/50 mb-8 max-w-md mx-auto leading-relaxed">
              Our domain experts can prepare a tailored technology roadmap specific to your industry&apos;s operational requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#252F61] px-8 py-3.5 text-xs uppercase font-extrabold tracking-widest hover:bg-blue-50 transition-colors border border-white"
            >
              Request a Domain Brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
