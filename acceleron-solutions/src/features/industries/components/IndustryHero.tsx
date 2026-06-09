"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Industry } from "@/features/industries/data/industries";
import IndustryIcon from "@/features/industries/components/IndustryIcon";
import LazyImage from "@/components/ui/LazyImage";
import { fadeIn, fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustryHero({ industry }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0E163D] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#081028] via-[#0B1B44] to-[#10223F] opacity-95" />
      <div className="page-container relative py-24">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid gap-12 lg:grid-cols-[0.95fr_0.95fr] xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-100 shadow-sm shadow-white/10">
              <IndustryIcon slug={industry.slug} className="h-10 w-10 bg-white/10 text-[#7AB8FF]" />
              <span className="font-semibold uppercase tracking-[0.22em] text-blue-100/85">{industry.title}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                {industry.heroTitle}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-blue-100/80">
                {industry.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-[#0E163D] transition duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Talk to our sector team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B1B47]/80 shadow-[0_40px_120px_rgba(0,0,0,0.14)]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="relative h-80 sm:h-[28rem]">
                <LazyImage src={industry.image} alt={`${industry.title} illustration`} fill className="object-cover" />
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {industry.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-blue-100/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
