"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="section-y bg-white" id="services">
      <div className="page-container">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <span className="eyebrow mb-5">What we do</span>
            <h2 className="heading-md text-balance">Services built for enterprise operating systems.</h2>
          </div>
          <p className="body-lead max-w-2xl lg:justify-self-end">
            A portfolio of consulting, implementation and managed engineering capabilities for organizations modernizing core systems without losing operational control.
          </p>
        </div>

        <div className="grid border-l border-t border-[#252F61]/10 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.76, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={service.href}
                className="group flex min-h-[360px] flex-col justify-between border-b border-r border-[#252F61]/10 p-8 transition-colors duration-300 hover:bg-[#F5F7FB]"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#252F61]/58">
                    0{index + 1} / {service.tagline}
                  </span>
                  <h3 className="mt-8 text-2xl font-extrabold leading-tight text-[#252F61]">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#647084]">{service.desc}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="border border-[#252F61]/12 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#252F61]/70">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-[#252F61]/10 pt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#252F61]">
                  Practice profile
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
