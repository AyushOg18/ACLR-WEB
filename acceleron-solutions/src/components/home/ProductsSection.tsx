"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";

export default function ProductsSection() {
  return (
    <section className="section-y bg-white" id="products">
      <div className="page-container">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
          <div>
            <span className="eyebrow mb-5">Products & solutions</span>
            <h2 className="heading-md text-balance">In-house products designed around real operating challenges.</h2>
            <p className="body-lead mt-7">
              Acceleron has built software products that can be deployed across group companies and external customers in industrial environments.
            </p>
            <Link href="/products" className="premium-link mt-10">
              View portfolio <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="space-y-6">
            {PRODUCTS.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.76, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={product.href}
                  className="group grid overflow-hidden border border-[#252F61]/10 bg-white transition-colors hover:bg-[#F5F7FB] md:grid-cols-[250px_1fr]"
                >
                  <div className="min-h-64 image-cover md:min-h-full" style={{ backgroundImage: `url('${product.image}')` }} />
                  <div className="p-8 lg:p-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#252F61]/58">
                      {product.subtitle}
                    </span>
                    <h3 className="mt-4 text-3xl font-extrabold text-[#252F61]">{product.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#647084]">{product.desc}</p>
                    <div className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#252F61]">
                      Explore product <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
