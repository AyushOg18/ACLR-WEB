"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Industry } from "@/features/industries/data/industries";
import { fadeInUp } from "@/features/industries/animations/variants";

type Props = {
  industry: Industry;
};

export default function IndustryCTA({ industry }: Props) {
  return (
    <section className="bg-[#0E163D] py-24 text-white">
      <div className="page-container grid gap-10 lg:grid-cols-[0.85fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <span className="text-[10px] uppercase tracking-[0.25em] text-blue-200/80">Related services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
            Services aligned to your industry capabilities.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-blue-100/80">
            These service areas extend the industry solution portfolio into operational execution, managed delivery and business transformation.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {industry.services.map((service) => (
              <div key={service} className="rounded-[24px] border border-white/10 bg-[#0A122C]/80 p-5 transition duration-300 hover:border-[#7AB8FF]">
                <p className="text-sm font-semibold text-white">{service}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#14244C] to-[#0B1B43] p-12 shadow-[0_24px_120px_rgba(0,0,0,0.25)]">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-blue-200/80">Final CTA</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white">
              Start a premium engagement for your industry program.
            </h2>
            <p className="text-sm leading-7 text-blue-100/80">
              Engage Acceleron with a tailored briefing that connects strategy, technology and delivery for your most complex operations.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#0E163D] transition duration-300 hover:bg-slate-100">
              Contact team
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white hover:bg-white/10">
              Request consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
