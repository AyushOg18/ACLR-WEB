"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { InsightArticle } from "@/lib/data";

type Props = {
  featured: InsightArticle;
};

export default function InsightsHero({ featured }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#06113A] via-[#0D1B4D] to-[#0A1640] text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(77,159,255,0.45),_transparent_45%)]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#4D9FFF]/15 blur-[120px]" />
      <div className="page-container relative py-20 lg:py-24">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50 mb-10">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-white/80">Insights</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
        >
          <div className="max-w-2xl">
            <span className="eyebrow mb-5 text-white/70">Thought Leadership</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white max-w-3xl">
              Insights shaping enterprise transformation.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/85">
              Showcase industry expertise, technology trends, implementation experiences, and business transformation perspectives.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-[#041129]/30 backdrop-blur-xl"
          >
            <div className="mb-6 rounded-3xl overflow-hidden bg-slate-950/10">
              <div
                className="aspect-[16/9] bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(to top, rgba(6,17,58,0.72), rgba(6,17,58,0.16)), url('${featured.image}')` }}
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-blue-200/80">
                <span>{featured.category}</span>
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold leading-tight text-white">{featured.title}</h2>
              <p className="text-sm leading-7 text-blue-100/80">{featured.excerpt}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="rounded-full border border-blue-200/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-blue-100">
                  {featured.industry}
                </span>
                <span className="rounded-full border border-blue-200/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-blue-100">
                  {featured.author}
                </span>
              </div>
              <Link href={featured.href} className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0E1535] shadow-lg shadow-[#0E1535]/10 transition hover:bg-[#F5F7FB]">
                Read featured insight
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
