"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { InsightArticle } from "@/lib/data";

type Props = {
  items: InsightArticle[];
};

export default function RelatedInsights({ items }: Props) {
  return (
    <section className="page-container py-16">
      <div className="mb-10">
        <span className="eyebrow mb-3 text-[#3B4A9E] block">Related insights</span>
        <h2 className="heading-lg text-[#152143]">Explore related perspectives.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.06 }}
            className="rounded-[28px] border border-[#D9E0F7] bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-[#3B4A9E]">
              <span>{item.category}</span>
              <span>{item.readTime}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-snug text-[#152143]">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#647084]">{item.excerpt}</p>
            <Link
              href={item.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3B4A9E] transition hover:text-[#252F61]"
            >
              Read insight
              <span aria-hidden="true">→</span>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
