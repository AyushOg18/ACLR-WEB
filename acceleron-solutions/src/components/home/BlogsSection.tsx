"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BLOGS } from "@/lib/data";

export default function BlogsSection() {
  return (
    <section className="section-y bg-[#F5F7FB]" id="blogs">
      <div className="page-container">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow mb-5">Insights</span>
            <h2 className="heading-md text-balance">Latest thinking from the world of Acceleron.</h2>
          </div>
          <Link href="/blogs" className="premium-link">
            All articles <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {BLOGS.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.72, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white"
            >
              <Link href={blog.href} className="group block h-full border border-[#252F61]/10">
                <div className="h-64 image-cover" style={{ backgroundImage: `url('${blog.image}')` }} />
                <div className="p-8">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#252F61]/56">
                    {blog.category} / {blog.readTime}
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold leading-tight text-[#252F61]">
                    {blog.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#647084]">{blog.excerpt}</p>
                  <div className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#252F61]">
                    Read insight <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
