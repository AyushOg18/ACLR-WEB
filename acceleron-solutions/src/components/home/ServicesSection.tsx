"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnhancedCard from "@/components/ui/EnhancedCard";
import { SERVICES } from "@/lib/data";

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  return (
    <section className="section-y bg-white" id="services">
      <div className="page-container">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow mb-5">What we do</span>
            <h2 className="heading-md text-balance">Services built for enterprise operating systems.</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lead max-w-2xl lg:justify-self-end"
          >
            A portfolio of consulting, implementation and managed engineering capabilities for organizations modernizing core systems without losing operational control.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {SERVICES.map((service, index) => (
            <EnhancedCard key={service.id} index={index} className="p-8 flex flex-col justify-between">
              <Link href={service.href} className="group flex flex-col justify-between h-full">
                <div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3B4A9E]"
                  >
                    0{index + 1} / {service.tagline}
                  </motion.span>
                  <h3 className="mt-8 text-2xl font-extrabold leading-tight text-[#252F61] group-hover:text-[#3B4A9E] transition">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[#647084]">{service.desc}</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex flex-wrap gap-2"
                  >
                    {service.features.map((feature) => (
                      <motion.span
                        key={feature}
                        whileHover={{ scale: 1.05 }}
                        className="border border-[#252F61]/12 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#252F61]/70 hover:border-[#3B4A9E] hover:bg-[#F5F7FB] transition"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-[#252F61]/10 pt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#252F61] group-hover:text-[#3B4A9E] transition">
                  Practice profile
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </motion.div>
                </div>
              </Link>
            </EnhancedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

