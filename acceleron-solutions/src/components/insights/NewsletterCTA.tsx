"use client";

import { motion } from "framer-motion";
import EnhancedButton from "@/components/ui/EnhancedButton";

export default function NewsletterCTA() {
  return (
    <section className="page-container py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[40px] border border-[#D9E0F7] bg-[#0E1535] p-10 text-white shadow-2xl shadow-[#07112b]/20"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow mb-3 text-blue-200 block">Subscribe</span>
            <h2 className="text-3xl font-black tracking-tight leading-tight text-white">Stay informed with executive insights.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/80">
              Receive research summaries, industry perspectives and transformation guidance for enterprise leaders.
            </p>
          </div>

          <div className="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-blue-100/80">
              Email address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-blue-100/50"
            />
            <EnhancedButton href="/contact" variant="primary" size="lg" className="w-full justify-center">
              Subscribe
            </EnhancedButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
