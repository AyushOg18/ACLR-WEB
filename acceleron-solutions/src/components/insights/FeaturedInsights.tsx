"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { InsightArticle } from "@/lib/data";
import { INSIGHT_CATEGORIES } from "@/lib/data";

type Props = {
  feature: InsightArticle;
  secondary: InsightArticle[];
};

export default function FeaturedInsights({ feature, secondary }: Props) {
  return (
    <section className="page-container py-16">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow mb-3 text-[#3B4A9E] block">Featured insights</span>
          <h2 className="heading-lg text-[#152143]">Editorial insights for leaders shaping transformation.</h2>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.6fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] border border-[#D9E0F7] bg-white p-8 shadow-sm"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#D9E0F7] bg-[#F6F9FF] px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#3B4A9E]">
                {feature.category}
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-[#152143]">{feature.title}</h3>
              <p className="max-w-2xl text-sm leading-7 text-[#5F698D]">{feature.excerpt}</p>
              <div className="flex flex-wrap gap-3 text-sm text-[#647084]">
                <span>{feature.date}</span>
                <span>{feature.readTime}</span>
                <span>{feature.industry}</span>
              </div>
            </div>
            <div className="rounded-[28px] overflow-hidden bg-slate-950/5">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${feature.image}')` }}
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {feature.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#D9E0F7] bg-[#F8FBFF] px-4 py-2 text-sm text-[#3B4A9E]">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href={feature.href}
              className="inline-flex items-center gap-3 rounded-full bg-[#3B4A9E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3B4A9E]/20 transition hover:bg-[#252F61]"
            >
              Read full insight
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {secondary.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="rounded-[28px] border border-[#D9E0F7] bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em]">
                  <Link 
                    href={`/insights/${INSIGHT_CATEGORIES.find(c => c.label === article.category)?.id}`} 
                    className="text-[#3B4A9E] hover:underline font-bold transition-all"
                  >
                    {article.category}
                  </Link>
                  <span className="text-[#647084]">{article.readTime}</span>
                </div>
                <h4 className="text-xl font-semibold tracking-tight text-[#152143]">{article.title}</h4>
                <p className="text-sm leading-7 text-[#5F698D]">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between gap-4 text-sm text-[#647084]">
                  <span>{article.date}</span>
                  <Link href={article.href} className="font-semibold text-[#3B4A9E] transition hover:text-[#252F61]">
                    Read
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
