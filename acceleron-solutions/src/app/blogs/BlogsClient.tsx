"use client";

import { motion } from "framer-motion";
import { BLOGS } from "@/lib/data";
import Link from "next/link";

export default function BlogsClient() {
  const [featured, ...rest] = BLOGS;

  return (
    <section className="py-28 bg-[#F5F7FB] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-6">
            Featured Perspective
          </span>
          <Link href={featured.href} className="group block">
            <div className="grid lg:grid-cols-12 gap-0 bg-white border border-gray-100 hover:border-[#252F61]/15 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(37,47,97,0.04)]">
              {/* Dark visual block */}
              <div className="lg:col-span-5 bg-[#0E1535] min-h-[260px] lg:min-h-[360px] flex items-end p-8">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-blue-300 block mb-2">
                    {featured.category} &middot; {featured.readTime}
                  </span>
                  <span className="text-xs text-blue-200/40">{featured.date}</span>
                </div>
              </div>
              {/* Content block */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#252F61] tracking-tight leading-snug mb-4 group-hover:text-[#3B4A9E] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-xs text-gray-400 leading-relaxed mb-8 max-w-lg">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#252F61] group-hover:text-[#3B4A9E] transition-colors">
                  Read Full Perspective
                  <span className="inline-block transition-transform group-hover:translate-x-0.5 ml-1">→</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* All Articles */}
        <div>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#3B4A9E] block mb-6">
            All Insights
          </span>
          <div className="space-y-0">
            {rest.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={blog.href} className="group grid grid-cols-12 gap-6 border-t border-gray-200 py-7 hover:bg-white/50 transition-colors px-1">
                  <div className="col-span-12 sm:col-span-2">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#3B4A9E]">
                      {blog.category}
                    </span>
                  </div>
                  <div className="col-span-12 sm:col-span-7">
                    <h3 className="text-sm font-bold text-[#252F61] group-hover:text-[#3B4A9E] transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                  <div className="col-span-8 sm:col-span-2">
                    <span className="text-xs text-gray-400">{blog.readTime}</span>
                  </div>
                  <div className="col-span-4 sm:col-span-1 text-right">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#252F61] group-hover:text-[#3B4A9E] transition-colors">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-gray-200" />
          </div>
        </div>

      </div>
    </section>
  );
}
