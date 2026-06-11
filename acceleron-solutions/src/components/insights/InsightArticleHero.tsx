"use client";

import Link from "next/link";
import { Share2, CalendarDays, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import type { InsightArticle } from "@/lib/data";

type Props = {
  article: InsightArticle;
};

export default function InsightArticleHero({ article }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#06113A] via-[#0D1B4D] to-[#0A1640] text-white">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(77,159,255,0.38),_transparent_35%)]" />
      <div className="page-container relative py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-blue-100/85">
              {article.category}
            </div>
            <h1 className="text-5xl font-black tracking-tight leading-tight text-white sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/85">{article.excerpt}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 text-sm text-blue-100/90">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100/90">
                <CalendarDays size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100/90">
                <Clock size={18} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-[#041129]/20">
            <div className="mb-6 rounded-[28px] overflow-hidden bg-slate-950/10">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url('${article.image}')` }}
              />
            </div>
            <div className="space-y-5">
              <div className="text-sm text-blue-100/70">
                Executive summary
              </div>
              <p className="text-sm leading-7 text-blue-50">{article.executiveSummary}</p>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-blue-100/85">
                <span className="flex items-center gap-2 font-semibold uppercase tracking-[0.22em] text-blue-100/85">
                  <Share2 size={16} />
                  Share this insight
                </span>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "LinkedIn", href: "#" },
                    { label: "Twitter", href: "#" },
                    { label: "Copy link", href: "#" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-blue-100 transition hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
