"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import Link from "next/link";

export default function ProductsClient() {
  return (
    <>
      {/* Products Grid */}
      <section className="py-28 bg-[#F5F7FB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={product.href}
                  className="group block bg-[#FFFFFF] border border-gray-200/60 p-8 hover:border-[#252F61]/15 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(37,47,97,0.02)] h-full flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#3B4A9E] block mb-3">
                      {product.subtitle}
                    </span>
                    <h2 className="text-lg font-bold text-[#252F61] mb-3 group-hover:text-[#3B4A9E] transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed mb-6">
                      {product.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#252F61] uppercase tracking-widest group-hover:text-[#3B4A9E] transition-colors pt-4 border-t border-gray-100/50">
                    Read Product Profile
                    <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke advisory CTA */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0E1535] p-12 md:p-16 text-center">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-300 block mb-4">
              Bespoke Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Need a custom application?
            </h2>
            <p className="text-xs text-blue-200/50 mb-8 max-w-md mx-auto leading-relaxed">
              We design and engineer tailored enterprise software solutions aligned exactly to your operational workflows and integration points.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#252F61] px-8 py-3.5 text-xs uppercase font-extrabold tracking-widest hover:bg-blue-50 transition-colors border border-white"
            >
              Consult Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
