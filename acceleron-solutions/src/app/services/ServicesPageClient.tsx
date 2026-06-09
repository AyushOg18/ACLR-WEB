"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";
import Link from "next/link";

export default function ServicesPageClient() {
  return (
    <section className="py-28 bg-[#F5F7FB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="group block bg-[#FFFFFF] border border-gray-200/60 p-8 hover:border-[#252F61]/15 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(37,47,97,0.02)] h-full flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#3B4A9E] block mb-3">
                    {service.tagline}
                  </span>
                  <h2 className="text-lg font-bold text-[#252F61] mb-3 group-hover:text-[#3B4A9E] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="border-t border-gray-100 pt-5 mb-8">
                    <span className="text-[8px] uppercase font-bold tracking-widest text-gray-400 block mb-3">
                      Core Competencies
                    </span>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="text-[11px] text-gray-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#3B4A9E] rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#252F61] uppercase tracking-widest group-hover:text-[#3B4A9E] transition-colors pt-4 border-t border-gray-100/50">
                  Read Practice Profile
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
