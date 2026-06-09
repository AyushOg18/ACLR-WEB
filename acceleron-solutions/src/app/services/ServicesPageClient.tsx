"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import servicesData from "@/lib/services.json";

interface ServiceData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  original_url: string;
}

const allServices = Object.values(servicesData) as ServiceData[];

// Group by category, preserving order
const CATEGORY_ORDER = [
  "SAP",
  "Salesforce",
  "Zoho Suite",
  "Software Development",
  "IT Infrastructure",
  "Cyber Security",
  "CXO Advisory",
  "Analytics",
];

const grouped = CATEGORY_ORDER.map((cat) => ({
  category: cat,
  services: allServices.filter((s) => s.category === cat),
})).filter((g) => g.services.length > 0);

export default function ServicesPageClient() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#F5F7FB]" style={{ paddingBlock: "96px 120px" }}>
      <div className="page-container">
        {/* Page intro */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="eyebrow mb-5">Capability Practices</span>
          <h1 className="text-[clamp(2rem,3.5vw,3rem)] font-extrabold text-[#252F61] tracking-tight leading-[1.08] max-w-[640px]">
            Eight practices. One integrated enterprise partner.
          </h1>
          <p className="mt-6 text-[#647084] text-base leading-relaxed max-w-2xl">
            Explore our full portfolio of consulting, implementation, and managed engineering capabilities across enterprise platforms, custom software, infrastructure, and security.
          </p>
        </motion.div>

        {/* Category groups */}
        <div className="space-y-16">
          {grouped.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {/* Category heading */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-xl font-extrabold text-[#252F61] tracking-tight">
                  {group.category}
                </h2>
                <div className="flex-1 h-px bg-[#252F61]/10" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#252F61]/40">
                  {group.services.length} {group.services.length === 1 ? "service" : "services"}
                </span>
              </div>

              {/* Service cards grid */}
              <div className="grid gap-px bg-[#252F61]/7 border border-[#252F61]/7 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service, i) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: gi * 0.06 + i * 0.03, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex flex-col h-full bg-white p-8 hover:bg-[#F5F7FB] transition-colors"
                    >
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#252F61]/40 mb-3">
                        {service.category}
                      </span>
                      <h3 className="text-[1.05rem] font-extrabold text-[#252F61] leading-snug mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[13px] text-[#647084] leading-[1.75] line-clamp-3 mb-6 flex-1">
                        {service.tagline}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#252F61]/8 mt-auto">
                        <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#252F61]">
                          View details
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="text-[#252F61] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
