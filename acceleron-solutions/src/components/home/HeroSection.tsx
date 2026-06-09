"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_STATS } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#252F61] pb-12 pt-32 text-white lg:pb-16">
      <div
        className="absolute inset-0 image-cover"
        style={{
          backgroundImage:
            "url('https://acceleronsolutions.io/wp-content/uploads/2024/09/66e83673c8aecb3687fcc680_Hero-Digital-Literacy-A-Non-Ne.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#252F61]/82" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(37,47,97,0.98)_0%,rgba(37,47,97,0.78)_47%,rgba(37,47,97,0.36)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#252F61] to-transparent" />

      <div className="page-container relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-[1.04fr_0.62fr]">
          <div className="max-w-5xl">
            <motion.span
              className="mb-7 block text-[11px] font-extrabold uppercase tracking-[0.32em] text-white/72"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Enterprise IT consulting | Gainwell Group
            </motion.span>
            <motion.h1
              className="heading-xl max-w-5xl text-balance"
              style={{ color: "#FFFFFF" }}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              Accelerating core business transformation with technology that holds.
            </motion.h1>
            <motion.p
              className="mt-8 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Acceleron Solutions helps enterprises modernize SAP, Salesforce, cloud, cyber security and custom software ecosystems with domain-led consulting and disciplined engineering.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-[0.18em] transition-colors hover:bg-[#F5F7FB]"
                style={{ color: "#252F61" }}
              >
                Explore capabilities <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/35 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/8"
              >
                Talk to our experts
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 border border-white/14 bg-white/[0.045] backdrop-blur-xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="min-h-36 border-b border-r border-white/12 p-6 last:border-r-0 odd:border-r">
                <div className="text-3xl font-extrabold tracking-normal text-white sm:text-4xl">{stat.value}</div>
                <p className="mt-4 text-[11px] font-bold uppercase leading-5 tracking-[0.16em] text-white/58">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
