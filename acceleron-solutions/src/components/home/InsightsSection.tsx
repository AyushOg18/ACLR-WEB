"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import EnhancedCard from "@/components/ui/EnhancedCard";
import { INSIGHTS } from "@/lib/data";

export default function InsightsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section className="section-y bg-[#F5F7FB]" id="insights">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">Insights</span>
            <h2 className="heading-md text-balance">Executive research and industry perspective for enterprise leaders.</h2>
          </div>
          <Link href="/insights" className="premium-link group flex items-center gap-2">
            Explore insights
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              aria-hidden="true"
            >
              &rarr;
            </motion.span>
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 lg:grid-cols-3"
        >
          {INSIGHTS.slice(0, 3).map((insight, index) => (
            <EnhancedCard key={insight.id} index={index} className="overflow-hidden">
              <Link href={insight.href} className="group block h-full flex flex-col">
                {/* Image container with hover effect */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 overflow-hidden bg-[#F5F7FB]"
                >
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${insight.image}')` }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#252F61]/40 to-transparent"
                  />
                  {/* Content Type Badge */}
                  <div className="absolute top-4 left-4 rounded-full bg-[#252F61] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    {insight.type}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3B4A9E]"
                    >
                      {insight.category} / {insight.readTime}
                    </motion.span>
                    <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#252F61] group-hover:text-[#3B4A9E] transition">
                      {insight.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#647084]">{insight.excerpt}</p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#252F61] group-hover:text-[#3B4A9E] transition">
                    Read insight
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                    >
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </EnhancedCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
